import { NextResponse } from 'next/server';
import { exhibitions } from '@/data/exhib_data';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const exhibition = exhibitions.find(e => e.id === Number(params.id));
  if (!exhibition) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(exhibition);
}