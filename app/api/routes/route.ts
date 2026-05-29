export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';

export async function GET() {
  try {
    const db = await getDb();
    const routes = await db.collection('routes').find({}).toArray();
    return NextResponse.json(routes);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch routes' }, { status: 500 });
  }
}