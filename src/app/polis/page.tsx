'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, HelpCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PolisList() {
  // 從 localStorage 讀取 token
  const [userToken, setUserToken] = useState<string | null>(null);
  useEffect(() => {
    const token = localStorage.getItem('polisUserToken');
    if (token) setUserToken(token);
  }, []);

  // 教學與註冊 Modal 狀態
  const [showTutorial, setShowTutorial] = useState(false);
  const [showGmailModal, setShowGmailModal] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(0);

  // 議題卡片列表
  const topics = [
    { id: '9nd5m9a2yy', title: '永續議題', img: '/all/sea.jpg', desc: '介紹文字介紹文字介紹文字' },
    { id: '6hnmhdc6ea', title: '性別議題', img: '/all/wave.jpg', desc: '介紹文字介紹文字介紹文字' },
  ];

  // 教學圖與說明文字（可保留或移到 embed 頁）
  const tutorialImages = [
    { src: './all/Instruction1.png', alt: 'Instruction 1' },
    { src: './all/Instruction2.png', alt: 'Instruction 2' },
    { src: './all/Instruction3.png', alt: 'Instruction 3' },
    { src: './all/Instruction4.png', alt: 'Instruction 4' },
  ];
  const tutorialTexts = [
    '這是第一步的詳細文字說明...',
    '這是第二步的詳細文字說明...',
    '這是第三步的詳細文字說明...',
    '這是第四步的詳細文字說明...'
  ];

  // 教學控制
  useEffect(() => {
    const closed = localStorage.getItem('polisTutorialClosed');
    if (!closed) setShowTutorial(true);
  }, []);
  const closeTutorial = () => {
    setShowTutorial(false);
    localStorage.setItem('polisTutorialClosed', 'true');
  };
  const resetTutorial = () => {
    localStorage.removeItem('polisTutorialClosed');
    setStep(0);
    setShowTutorial(true);
  };
  const nextStep = () => setStep(prev => Math.min(prev + 1, tutorialImages.length - 1));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));

  // 註冊表單提交
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nickname, email })
    });
    if (res.ok) {
      const { token } = await res.json();
      localStorage.setItem('polisUserToken', token);
      // 導向動態路由 /polis/[puzzle]
      alert('註冊成功，請在選擇議題時已自動帶入身份');
      setShowGmailModal(false);
    } else {
      const err = await res.json();
      alert('註冊失敗: ' + (err.error ?? '未知錯誤'));
    }
  };

  return (
    <>
      {/* Gmail 登記 Modal */}
      {showGmailModal && (
        <div className="fixed inset-0 bg-black text-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button onClick={() => setShowGmailModal(false)} className="absolute top-4 right-4 p-1 hover:bg-gray-200 rounded-full">
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">活動報告登記</h2>
            <form onSubmit={handleRegister}>
              <label className="block mb-2 text-left">暱稱</label>
              <input value={nickname} onChange={e => setNickname(e.target.value)} className="w-full border px-3 py-2 mb-4" required />
              <label className="block mb-2 text-left">Gmail</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@gmail.com" pattern="[a-z0-9._%+-]+@gmail\\.com" className="w-full border px-3 py-2 mb-4" required />
              <div className="text-right"><button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">送出</button></div>
            </form>
          </div>
        </div>
      )}

      <div className="relative min-h-screen bg-gray-50">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow">
          <h1 className="text-2xl font-bold text-black">Polis 議題清單</h1>
          <div className="flex space-x-4">
            <button onClick={() => setShowGmailModal(true)} aria-label="Register Gmail" className="p-2 hover:bg-gray-200 rounded text-black">
              <Mail size={24} />
            </button>
            <button onClick={resetTutorial} aria-label="Help" className="p-2 hover:bg-gray-200 rounded text-black">
              <HelpCircle size={24} />
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-6">
            {topics.map(topic => (
              <Link key={topic.id} href={`/polis/${topic.id}?token=${userToken}`} className="block rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img className="w-full h-64 object-cover" src={topic.img} alt={topic.title} />
                <div className="px-4 py-2">
                  <h2 className="font-semibold text-xl text-black mb-1">{topic.title}</h2>
                  <p className="text-black text-sm">{topic.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>

        {/* 教學懸浮層 */}
        {showTutorial && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-10 relative">
              <button onClick={closeTutorial} aria-label="Close" className="absolute top-4 right-4 p-1 text-black hover:bg-gray-200 rounded-full">
                <X size={20} />
              </button>
              <div className="text-center">
                <div className="overflow-hidden h-[60vh] flex items-center justify-center">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.img key={step} src={tutorialImages[step].src} alt={tutorialImages[step].alt} className="max-h-full" initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -300, opacity: 0 }} transition={{ duration: 0.6, ease: 'easeInOut' }} />
                  </AnimatePresence>
                </div>
                <div className="mt-6 text-left text-black max-h-52 overflow-auto">{tutorialTexts[step]}</div>
                <div className="flex justify-between mt-8">
                  <button onClick={prevStep} disabled={step === 0} className="px-4 py-2 text-black bg-gray-200 rounded disabled:opacity-50">Prev</button>
                  {step < tutorialImages.length - 1 ? (
                    <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
                  ) : (
                    <button onClick={closeTutorial} className="px-4 py-2 bg-green-600 text-white rounded">Got it!</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
