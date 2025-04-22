/*
 * send-polis-reports.js (Test Mode)
 * --------------------
 * 位置：scripts/send-polis-reports.js
 * 功能：測試階段僅輸出每位使用者的互動紀錄，不寄信
 */

import axios from 'axios';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

async function fetchPolisData(puzzleId) {
  const res = await axios.get(
    `https://api.pol.is/v1/puzzles/${puzzleId}/metadata`,
    { headers: { Authorization: `Bearer ${process.env.POLIS_API_KEY}` } }
  );
  return res.data;
}

async function generateUserSummaries(puzzleId) {
  const polis = await fetchPolisData(puzzleId);
  const events = polis.events || [];

  const byUser = events.reduce((map, evt) => {
    const uid = evt.userId;
    if (!map[uid]) map[uid] = [];
    map[uid].push(evt);
    return map;
  }, {});

  const tokens = Object.keys(byUser);
  const regs = await prisma.registration.findMany({ where: { token: { in: tokens } } });
  const regMap = Object.fromEntries(regs.map(r => [r.token, { email: r.email, nickname: r.nickname }]));

  const summaries = tokens.map(token => {
    const eventsList = byUser[token];
    const reg = regMap[token] || { email: '未註冊', nickname: '匿名' };
    return {
      token,
      email: reg.email,
      nickname: reg.nickname,
      interactionCount: eventsList.length,
      lastEvent: eventsList[eventsList.length - 1],
      allEvents: eventsList,
    };
  });
  return summaries;
}

async function main() {
  try {
    const puzzleId = process.argv[2] || '6hnmhdc6ea';
    console.log(`Testing mode: fetch summaries for puzzleId=${puzzleId}`);
    const summaries = await generateUserSummaries(puzzleId);
    console.log('User interaction summaries:');
    summaries.forEach(summary => {
      console.log('---');
      console.log(`Token: ${summary.token}`);
      console.log(`Nickname: ${summary.nickname}`);
      console.log(`Email: ${summary.email}`);
      console.log(`Total interactions: ${summary.interactionCount}`);
      console.log('Last event:', summary.lastEvent);
    });
  } catch (e) {
    console.error('Error generating summaries:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
