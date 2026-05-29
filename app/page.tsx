import Image from 'next/image';
import Link from 'next/link';
import clientPromise from '@/lib/mongodb';

// 获取前3条路线用于首页展示（服务端组件）
async function getTopRoutes() {
  try {
    const client = await clientPromise;
    const db = client.db('tourbus');
    const routes = await db.collection('routes').find({}).limit(3).toArray();
    return routes.map(route => ({
      slug: route.slug,
      title: route.title,
      desc: route.desc,
      days: route.days,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const routes = await getTopRoutes();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/30" /> {/* 可选叠加层 */}
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Andrew's Tour Bus
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional driver, comfortable vehicle, and authentic Yunnan experiences.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            Book Your Trip Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Me?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl mb-3">🚐</div>
              <h3 className="text-xl font-semibold mb-2">Clean & Comfortable</h3>
              <p className="text-gray-600">Well-maintained minivan with AC, Wi-Fi, and plenty of space.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl mb-3">🗺️</div>
              <h3 className="text-xl font-semibold mb-2">Off-the-Beaten-Path</h3>
              <p className="text-gray-600">Discover hidden gems and local culture beyond tourist crowds.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="text-xl font-semibold mb-2">Punctual & Reliable</h3>
              <p className="text-gray-600">Safety first, always on time, flexible with your schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Routes */}
      {routes.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Tours</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {routes.map((route) => (
                <div key={route.slug} className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                  {/* 这里可以放图片占位，暂时用纯色背景 */}
                  <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                    <div key={route.slug} className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
  /*
  <div className="relative h-48 w-full">
    <Image
      src="/images/bill1.png"   // 图片路径
      alt={route.title}
      fill
      className="object-contain"
    />
  </div>
  图片不能完全展示在框里 暂时注释尝试另外一种
  */  
  <div className="w-full">
  <img
    src="/images/bill1.png"
    alt={route.title}
    className="w-full h-auto block"
  />
</div>

  <div className="p-5">
    {/* 其余内容不变 */}
  </div>
</div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{route.title}</h3>
                    <p className="text-gray-600 mb-2">{route.desc}</p>
                    <p className="text-sm text-gray-500 mb-3">{route.days} days</p>
                    <Link href={`/routes/${route.slug}`} className="text-blue-600 hover:underline">
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/routes" className="text-blue-600 hover:underline font-semibold">
                See All Routes →
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
