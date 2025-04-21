// app/api/register/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { nickname, email } = await request.json();
    // 簡單校驗
    if (!nickname || !email) {
      return NextResponse.json({ error: 'Missing nickname or email' }, { status: 400 });
    }
    // 只允許 Gmail
    if (!/^[a-z0-9._%+-]+@gmail\.com$/.test(email)) {
      return NextResponse.json({ error: 'Email must be a Gmail address' }, { status: 400 });
    }
    // 生成唯一 token
    const token = crypto.randomUUID();
    // 寫入數據庫
    await prisma.registration.create({
      data: { nickname, email, token },
    });
    // 返回給前端
    return NextResponse.json({ token });
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
