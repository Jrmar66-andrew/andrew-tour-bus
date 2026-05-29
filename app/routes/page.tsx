
const routes = [
  { slug: '8-day-yunnan', title: '8-Day Yunnan Classic Loop', desc: 'Kunming – Fuxian Lake – Xundian – Huize', days: 8 },
  { slug: 'fuxian-lake', title: '2-Day Fuxian Lake Retreat', desc: 'Beach, kayaking, copper pot fish', days: 2 },
  { slug: 'fenghuangshan', title: '1-Day Fenghuangshan Hiking', desc: 'Alpine meadow, wind turbines, sheep herds', days: 1 },
];

export default function RoutesPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Tour Routes</h1>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))' }}>
        {routes.map(route => (
          <div key={route.slug} style={{ border: '1px solid #ddd', padding: '1.2rem', borderRadius: '12px', background: '#fff' }}>
            <h2 className="text-xl font-semibold mb-2">{route.title}</h2>
            <p className="mb-1">{route.desc}</p>
            <p className="text-sm text-gray-500 mb-3">{route.days} days</p>
            <a href={`/routes/${route.slug}`} style={{ color: '#0070f3' }}>View details →</a>
          </div>
        ))}
      </div>
    </div>
  );
}