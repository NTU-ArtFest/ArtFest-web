'use client';

import { useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';

interface PolisConfig {
  puzzleId: string;
  user: {
    userId: string | null;
  };
}

declare global {
  interface Window {
    POLIS_CONFIG: PolisConfig;
  }
}

export default function PolisEmbed() {
  const { puzzle } = useParams();              // 動態路由拿到 puzzle
  const params = useSearchParams();
  const token = params.get('token');           // query 拿到 token

  useEffect(() => {
    console.log('Mount Embed:', { puzzle, token });
    if (!token) return;
    // 1) 全域注入配置
    window.POLIS_CONFIG = {
      puzzleId: Array.isArray(puzzle) ? puzzle[0] : puzzle!,
      user: { userId: token }
    };
    // 2) 載入官方 embed 腳本
    const s = document.createElement('script');
    s.src = 'https://pol.is/embed.js';
    s.async = true;
    document.body.appendChild(s);
  }, [puzzle, token]);

  return (
    <div className="flex justify-center p-4 bg-gray-50 min-h-screen">
      {/*
        這裡使用官方 embed 要求的容器標記：
        <div class="polis" data-page_id="puzzle" data-site_id="YourSiteID"></div>
        請將 YOUR_SITE_ID 換成你帳號的 site_id。
      */}
      <div
        className="polis w-full max-w-4xl"
        data-conversation_id={puzzle}
        data-site_id="polis_site_id_G5IJKiuEILYrbDfDvu"
        data-xid={token!}
      />
    </div>
  );
}