export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  try {
    const { db } = await connectToDatabase();
    const route = await db.collection('routes').findOne({ slug });
    if (!route) {
      return NextResponse.json({ error: 'Route not found' }, { status: 404 });
    }
    return NextResponse.json(route);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch route' }, { status: 500 });
  }
}