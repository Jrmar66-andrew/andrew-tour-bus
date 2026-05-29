import Image from 'next/image';
import Link from 'next/link';

export default async function About() {
  // ========== 个人资料（请修改为你的真实信息）==========
  const profile = {
    name: 'Andrew Wu',
    role: 'Licensed Tour Driver & Guide',
    bio: `Hi, I'm Andrew  a professional tour bus driver based in Kunming, Yunnan. 
    With over 8 years of driving experience and a deep passion for Yunnan's hidden landscapes, 
    I offer safe, comfortable, and unforgettable private tours.`,
    experience: '8+ years',
    vehicle: 'Toyota HiAce (9 seats, AC, Wi-Fi, insured)',
    languages: 'Chinese (native), English (basic + translation tools)',
    // 头像：请替换为你的图床链接（或暂时留空，留空则不显示头像）
    avatar: '',
    // 封面图：请替换为你的图床链接（或暂时留空，留空则显示纯色标题栏）
    coverImage: '',
  };

  // ========== 图片画廊（使用图床链接）==========
  // 个人照片（My Moments）的图床链接列表 – 暂时留空，稍后填入
  const personalImageUrls: string[] = [
    // 示例：'https://i.ibb.co/XXXXXX/me1.jpg',
  ];

  // 风景画廊（Yunnan Through My Lens）的图床链接列表 – 暂时留空
  const galleryImageUrls: string[] = [
    // 示例：'https://i.ibb.co/XXXXXX/fuxian-lake.jpg',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero 封面区域 */}
      {profile.coverImage ? (
        <div className="relative aspect-video text-white">
          <Image
            src={profile.coverImage}
            alt="Yunnan landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">About Me</h1>
            <p className="text-xl md:text-2xl">Your trusted travel partner in Yunnan</p>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Me</h1>
          <p className="text-xl md:text-2xl">Your trusted travel partner in Yunnan</p>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* 头像 + 简短介绍 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          {profile.avatar && (
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
            <p className="text-xl text-blue-600 mb-4">{profile.role}</p>
            <p className="text-gray-700 whitespace-pre-line">{profile.bio}</p>
          </div>
        </div>

        {/* 关键信息卡片 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-5 rounded-xl shadow text-center">
            <div className="text-3xl mb-2">🚐</div>
            <h3 className="font-semibold text-lg">Vehicle</h3>
            <p className="text-gray-600 text-sm">{profile.vehicle}</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <h3 className="font-semibold text-lg">Experience</h3>
            <p className="text-gray-600 text-sm">{profile.experience}</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow text-center">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="font-semibold text-lg">Languages</h3>
            <p className="text-gray-600 text-sm">{profile.languages}</p>
          </div>
        </div>

        {/* 服务/承诺区块 */}
        <div className="bg-white p-6 rounded-xl shadow mb-12">
          <h3 className="text-2xl font-bold mb-4 text-center">Why Travel With Me?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3"><span className="text-green-600 text-xl">✓</span><span>Safe driving, full insurance, well-maintained vehicle</span></div>
            <div className="flex gap-3"><span className="text-green-600 text-xl">✓</span><span>Flexible itineraries, no fixed shopping stops</span></div>
            <div className="flex gap-3"><span className="text-green-600 text-xl">✓</span><span>Local hidden gems & authentic food recommendations</span></div>
            <div className="flex gap-3"><span className="text-green-600 text-xl">✓</span><span>24/7 customer support during your trip</span></div>
          </div>
        </div>

        {/* ========== 个人照片区域（暂时注释，等图床链接准备好后取消注释）========== */}
        {/*
        {personalImageUrls.length > 0 && (
          <div className="my-16">
            <h3 className="text-2xl font-bold mb-6 text-center">My Moments</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {personalImageUrls.map((url, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden rounded-lg shadow">
                  <img
                    src={url}
                    alt={`Personal moment ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">Some of my favorite moments on the road</p>
          </div>
        )}
        */}

        {/* ========== 风景画廊（暂时注释，等图床链接准备好后取消注释）========== */}
        {/*
        {galleryImageUrls.length > 0 && (
          <div className="my-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Yunnan Through My Lens</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImageUrls.map((url, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden rounded-lg shadow">
                  <img
                    src={url}
                    alt={`Yunnan scenery ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">Each photo is from my real tours – ask me about any destination!</p>
          </div>
        )}
        */}

        {/* 行动按钮 */}
        <div className="text-center">
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Book Your Trip →
          </Link>
        </div>
      </div>
    </div>
  );
}