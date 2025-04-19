'use client';

import { useState, useEffect } from 'react';
import { X, HelpCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Polis() {
  // 教學懸浮層狀態
  const [showTutorial, setShowTutorial] = useState(false);
  // Gmail 登記 Modal 狀態
  const [showGmailModal, setShowGmailModal] = useState(false);
  // 暱稱與 Gmail 輸入狀態
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  // 教學步驟索引
  const [step, setStep] = useState(0);


  // 教學圖檔列表
  const tutorialImages = [
    { src: './all/Instruction1.png', alt: 'Instruction 1' },
    { src: './all/Instruction2.png', alt: 'Instruction 2' },
    { src: './all/Instruction3.png', alt: 'Instruction 3' },
    { src: './all/Instruction4.png', alt: 'Instruction 4' },
  ];

  const tutorialTexts = [
    '這是第一步的詳細文字說明，解釋第一張圖片的內容和操作方法。可以在這裡放更長段的教學文字，並且自動換行顯示。',
    '這是第二步的詳細文字說明，介紹如何使用投票按鈕、贊成或反對的功能。',
    '這是第三步的詳細文字說明，說明意見群組圖如何閱讀，以及群組之間的位置含義。',
    '這是第四步的詳細文字說明，展示如何點擊切換不同的 Statement，並查看該群體對各個聲明的同意率。',
  ];

   // 初次載入檢查
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

  return (
    <>
    {/* Gmail 登記 Modal */}
    {showGmailModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 text-black relative">
          <button
            onClick={() => setShowGmailModal(false)}
            className="absolute top-4 right-4 p-1 hover:bg-gray-200 rounded-full text-black"
          >
            <X size={20} />
          </button>
          <h2 className="text-xl font-semibold mb-4">活動報告登記</h2>
          <form
            onSubmit={async e => {
              e.preventDefault();
              const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nickname, email })
              });
              if (res.ok) {
                alert('註冊成功，活動結束後將寄送報告');
                setShowGmailModal(false);
              } else {
                alert('註冊失敗，請稍後再試');
              }
            }}
          >
            <div className="mb-4">
              <label className="block text-left mb-1">暱稱</label>
              <input
                type="text"
                value={nickname}
                onChange={e => setNickname(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-1">Gmail</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="example@gmail.com"
                pattern="[a-z0-9._%+-]+@gmail\.com"
                required
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">送出</button>
            </div>
          </form>
        </div>
      </div>
    )}

    <div className="relative min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-black">Polis 公眾議題討論</h1>
        <div className="flex space-x-4">
          {/* Gmail icon */}
          <button
            onClick={() => setShowGmailModal(true)}
            aria-label="Register Gmail"
            className="p-2 hover:bg-gray-200 rounded text-black"
          >
            <Mail size={24} className="text-black" />
          </button>
          {/* Help icon */}
          <button
            onClick={resetTutorial}
            aria-label="Help"
            className="p-2 hover:bg-gray-200 rounded text-black"
          >
            <HelpCircle size={24} className="text-black" />
          </button>
        </div>
      </header>

      {/* 主要內容：外部 Polis 連結卡片 */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-6">
          {/* 卡片 1：永續議題 */}
          <a
            href="https://pol.is/9nd5m9a2yy"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-full h-64 object-cover"
              src="/all/sea.jpg"
              alt="永續議題圖片"
            />
            <div className="px-4 py-2">
              <h2 className="font-semibold text-xl text-black mb-1">永續議題</h2>
              <p className="text-black text-sm">介紹文字介紹文字介紹文字</p>
            </div>
          </a>

          {/* 卡片 2：性別議題 */}
          <a
            href="https://pol.is/6hnmhdc6ea"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-full h-64 object-cover"
              src="/all/wave.jpg"
              alt="性別議題圖片"
            />
            <div className="px-4 py-2">
              <h2 className="font-semibold text-xl text-black mb-1">性別議題</h2>
              <p className="text-black text-sm">介紹文字介紹文字介紹文字</p>
            </div>
          </a>
        </div>
      </main>

      {/* 教學懸浮層：含圖片滑動與文字說明 */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-10 relative">
            <button
              onClick={closeTutorial}
              aria-label="Close"
              className="absolute top-4 right-4 p-1 hover:bg-gray-200 rounded-full"
            >
              <X size={20} className="text-black" />
            </button>
            <div className="text-center">
              <div className="overflow-hidden h-150 flex items-center justify-center">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={step}
                    src={tutorialImages[step].src}
                    alt={tutorialImages[step].alt}
                    className="max-h-full"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -300, opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
              </div>
              <div className="mt-6 text-left text-black max-h-52 overflow-auto">
                {tutorialTexts[step]}
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  disabled={step === 0}
                  className="px-4 py-2 bg-gray-200 rounded text-black disabled:opacity-50"
                >
                  Prev
                </button>
                {step < tutorialImages.length - 1 ? (
                  <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded">
                    Next
                  </button>
                ) : (
                  <button onClick={closeTutorial} className="px-4 py-2 bg-green-600 text-white rounded">
                    Got it!
                  </button>
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