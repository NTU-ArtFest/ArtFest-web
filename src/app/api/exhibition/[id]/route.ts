import { NextResponse } from 'next/server';
import { exhibitions } from '@/data/exhib_data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const exhibition = exhibitions.find(e => e.id === String(id));
  if (!exhibition) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(exhibition);
}
