import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient> | null = null;

if (!uri) {
  // 如果没有 URI，我们在构建时不会立即 reject，
  // 而是导出 null，并在 API 中处理。但为了兼容现有代码，
  // 我们创建一个永远不会 resolve 的 Promise，这样构建时不会出错，
  // 实际调用时会超时。不过更好的是，直接抛出一个有意义的错误（但不会在构建时触发）
  // 因为我们会在 API 中 try-catch。
  // 这里不创建 clientPromise，让它保持 null
  clientPromise = null;
} else {
  if (process.env.NODE_ENV === 'development') {
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };
    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

// 导出一个 async 函数，用于获取数据库连接
// 这样可以在真正需要时才尝试连接，避免构建时执行
export async function getDb() {
  if (!clientPromise) {
    throw new Error('MONGODB_URI is not defined in environment variables');
  }
  const client = await clientPromise;
  return client.db('tourbus');
}

// 保持旧的导出，但修改为 async 函数
export default clientPromise;