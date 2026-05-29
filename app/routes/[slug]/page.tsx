export default async function RouteDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const routeMap: Record<string, { title: string; fullDesc: string; itinerary?: string }> = {
    '8-day-yunnan': {
      title: '8-Day Yunnan Classic Loop',
      fullDesc: 'Explore Kunming, Fuxian Lake, Xundian Fenghuangshan, Huize Dahaicaoshan and Huilong Valley.',
      itinerary: 'Day 1: Kunming arrival. Day 2: Green Lake & Haigeng Dam. Day 3: Fuxian Lake. Day 4: Xundian Fenglongwan. Day 5: Fenghuangshan hiking. Day 6: Dahaicaoshan. Day 7: Huilong Valley. Day 8: Return to Kunming.',
    },
    'fuxian-lake': {
      title: '2-Day Fuxian Lake Retreat',
      fullDesc: 'Relax at one of China\'s clearest lakes. Enjoy swimming, boating, and local cuisine.',
      itinerary: 'Day 1: Drive to Fuxian Lake, visit Moon Bay Wetland Park, stay lakeside. Day 2: Morning hike or bike ride, lunch with copper pot fish, return to Kunming.',
    },
    'fenghuangshan': {
      title: '1-Day Fenghuangshan Hiking',
      fullDesc: 'Hike to the "little Tianshan" grassland. See wind turbines, free-roaming sheep and cattle, and panoramic views.',
      itinerary: 'Morning pickup from Kunming, 1.5h drive to trailhead, 5-6h loop hike (12km, 600m elevation gain), return in the evening.',
    },
  };
  
  const route = routeMap[slug];
  
  if (!route) {
    return <div className="p-8">Route not found. <a href="/routes">← Back to routes</a></div>;
  }
  
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{route.title}</h1>
      <p className="mb-4">{route.fullDesc}</p>
      {route.itinerary && (
        <>
          <h2 className="text-xl font-semibold mt-4 mb-2">Sample Itinerary</h2>
          <p className="whitespace-pre-line">{route.itinerary}</p>
        </>
      )}
      <a href="/routes" className="inline-block mt-6 text-blue-600">← Back to all routes</a>
    </div>
  );
}