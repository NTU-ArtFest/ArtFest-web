'use client';

import { useState, useEffect } from 'react';
import { X, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Polis() {
  const [showTutorial, setShowTutorial] = useState(false);
  const [step, setStep] = useState(0);

  // 教學圖檔列表
  const tutorialImages = [
    { src: './all/instruction1.png', alt: 'Instruction 1' },
    { src: './all/instruction2.png', alt: 'Instruction 2' },
    { src: './all/instruction3.png', alt: 'Instruction 3' },
    { src: './all/instruction4.png', alt: 'Instruction 4' },
  ];

  const tutorialTexts = [
    '這是第一步的詳細文字說明，解釋第一張圖片的內容和操作方法。可以在這裡放更長段的教學文字，並且自動換行顯示。',
    '這是第二步的詳細文字說明，介紹如何使用投票按鈕、贊成或反對的功能。',
    '這是第三步的詳細文字說明，說明意見群組圖如何閱讀，以及群組之間的位置含義。',
    '這是第四步的詳細文字說明，展示如何點擊切換不同的 Statement，並查看該群體對各個聲明的同意率。',
  ];

   // 初次載入檢查 localStorage，決定是否顯示教學
   useEffect(() => {
    const closed = localStorage.getItem('polisTutorialClosed');
    if (!closed) setShowTutorial(true);
  }, []);

  // 關閉教學並記錄
  const closeTutorial = () => {
    setShowTutorial(false);
    localStorage.setItem('polisTutorialClosed', 'true');
  };
  // 重新開啟教學並重置步驟
  const resetTutorial = () => {
    localStorage.removeItem('polisTutorialClosed');
    setStep(0);
    setShowTutorial(true);
  };

  // 切換步驟
  const nextStep = () => setStep(prev => Math.min(prev + 1, tutorialImages.length - 1));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-black">Polis 公眾議題討論</h1>
        <button onClick={resetTutorial} aria-label="Help" className="p-2 hover:bg-gray-200 rounded">
            <HelpCircle size={24} className="text-black" />
        </button>
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
          <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-10 relative">
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
  );
}