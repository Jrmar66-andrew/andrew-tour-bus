export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const routes = await db.collection('routes').find({}).toArray();
    return NextResponse.json(routes);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch routes' }, { status: 500 });
  }
}