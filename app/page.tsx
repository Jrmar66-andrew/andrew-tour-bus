'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Route {
  _id: string;
  slug: string;
  title: string;
  desc: string;
  days: number;
}

export default function Home() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/routes')
      .then(res => res.json())
      .then(data => {
        setRoutes(data.slice(0, 3)); // 只取前3条
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Andrew's Tour Bus</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional driver, comfortable vehicle, and authentic Yunnan experiences.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-lg transition">
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
                <div key={route._id} className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                  <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                    [Route Image]
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