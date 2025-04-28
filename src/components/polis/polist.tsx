'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { X, HelpCircle, Home, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PolisList() {
  const router = useRouter();
  // token 暫時設為 null

  // 教學 Modal 狀態
  const [showTutorial, setShowTutorial] = useState(false);
  const [step, setStep] = useState(0);

  // Gmail 登記 Modal 狀態
  const [showGmailModal, setShowGmailModal] = useState(false);
  // 暱稱與 Gmail 輸入狀態
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  // 議題卡片列表
  const topics = [
    {
      id: '9nd5m9a2yy',
      title: '循環零廢棄：共創永續未來的行動指南',
      img: '/all/eco.png',
      desc: `協作團隊：臺大學生會學術部永續執行組 <br /> 臺大學生會永續組的工作主要分於政策推行及專案活動，透過對臺大校方倡議、對學生推廣及環境教育。近期關心的核心議題有：循環餐盒推動、臺大地球日系列活動、永續生活指南、climate fresk工作坊、永續職涯訪問。`
    },
    {
      id: '6hnmhdc6ea',
      title: '性慾·癒：Epilogue — A Space for Desire',
      img: '/all/sex.png',
      desc: `協作團隊：臺大學生會性別平等工作坊 <br /> 性工坊致力於校園內的積極倡議行動，企盼能與臺大師生共同創造正向、友善、包容的校園環境。透過公開倡議活動、監督性平政策，一步一步實現友善校園的願景。`
    }
  ];

  // 教學圖片
  const tutorialImages = [
    { src: '/all/Instruction1.png', alt: 'Instruction 1' },
    { src: '/all/Instruction2.png', alt: 'Instruction 2' },
    { src: '/all/Instruction3.png', alt: 'Instruction 3' },
    { src: '/all/Instruction4.png', alt: 'Instruction 4' },
    { src: '/all/Instruction5.png', alt: 'Instruction 5' },
    { src: '/all/Instruction6.png', alt: 'Instruction 6' },
  ];

  // 教學文字
  const tutorialTexts = [
    ``,
    `Step 1 閱讀參考資料，具備先備知識！`,
    `Step 2 提出觀點、回覆觀點`,
    `Step 3 查看意見分群
系統會根據大家的回饋自動分群，並可視覺化呈現各意見群組之間的共識與差異。`,
    `Step 4 點選圖中的群組
點選群組，能看見每個立場的主要想法，與跨群之間可能產生的交集！`,
    ``
  ];

  // 控制教學顯示
  useEffect(() => {
    if (!localStorage.getItem('polisTutorialClosed')) setShowTutorial(true);
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
  const nextStep = () => setStep(prev => Math.min(prev + 1, tutorialTexts.length - 1));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));

  return (
    <>
      <div className="relative min-h-screen bg-white bg-[url('/all/background.png')] bg-cover bg-center">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white bg-opacity-50 shadow">
          <h1 className="text-2xl font-bold text-black">Polis 議題列表</h1>
          <div className="flex items-center space-x-2">
            <button onClick={() => router.push('http://www.active.ntu.edu.tw/Activity_ArtsFestival')} aria-label="Home" className="p-2 hover:bg-gray-200 rounded text-black">
              <Home size={24} />
            </button>
            <button onClick={() => setShowGmailModal(true)} aria-label="Register" className="p-2 hover:bg-gray-200 rounded text-black">
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
              <Link key={topic.id} href={`/polis/${topic.id}?token=null`} className="group block rounded overflow-hidden bg-white shadow-lg transition-transform duration-200 hover:shadow-xl hover:scale-105">
                <img className="w-full h-84 object-cover" src={topic.img} alt={topic.title} />
                <div className="px-4 py-2">
                  <h2 className="font-semibold text-xl text-black mb-1 transition-colors duration-200 group-hover:text-blue-600">
                    {topic.title}
                  </h2>
                  <p className="text-black text-sm" dangerouslySetInnerHTML={{ __html: topic.desc }} />
                </div>
              </Link>
            ))}
          </div>
        </main>

        {/* 教學懸浮層 */}
        {showTutorial && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
            <motion.div initial={{ y: '-100vh', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="relative bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
              <button onClick={closeTutorial} aria-label="Close" className="absolute top-4 right-4 p-1 text-black hover:bg-gray-200 rounded-full z-10">
                <X size={20} />
              </button>

              <div className="w-full flex-shrink-0 mb-4 h-40 sm:h-[50vh] flex items-center justify-center">
                {tutorialImages[step].src && <img src={tutorialImages[step].src} alt={tutorialImages[step].alt} className="max-h-full w-auto" />}
              </div>

              <div className="flex-1 text-black overflow-auto px-4 pb-4">
                {([1, 2, 3, 4].includes(step)) ? (() => { const lines = tutorialTexts[step].split('\n'); return (<><p className="text-base font-semibold mb-2">{lines[0]}</p><p className="text-base whitespace-pre-line">{lines.slice(1).join('\n')}</p></>); })() : (<p className="text-base whitespace-pre-line">{tutorialTexts[step]}</p>)}
              </div>

              <div className="flex justify-between px-4 pb-4">
                <button onClick={prevStep} disabled={step === 0} className="px-4 py-2 bg-gray-200 text-black rounded disabled:opacity-50">Prev</button>
                {step < tutorialTexts.length - 1 ? (<button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>) : (<button onClick={closeTutorial} className="px-4 py-2 bg-green-600 text-white rounded">Got it!</button>)}
              </div>
            </motion.div>
          </div>
        )}

        {/* Gmail 登記 Modal */}
        {showGmailModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 text-black relative">
              <button onClick={() => setShowGmailModal(false)} className="absolute top-4 right-4 p-1 hover:bg-gray-200 rounded-full text-black">
                <X size={20} />
              </button>
              <h2 className="text-xl font-semibold mb-4">Sign in</h2>
              <form onSubmit={async e => {
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
                }}>
                <div className="mb-4">
                  <label className="block text-left mb-1">暱稱</label>
                  <input type="text" value={nickname} onChange={e => setNickname(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" required />
                </div>
                <div className="mb-4">
                  <label className="block text-left mb-1">Gmail</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@gmail.com" pattern="[a-z0-9._%+-]+@gmail\.com" className="w-full border border-gray-300 rounded px-3 py-2" required />
                </div>
                <p className="text-sm text-gray-600 mb-4">活動結束後，我們會針對各主題寄發活動數據分析和組別回饋，想知道更詳細的結果嗎？填下你的mail吧！</p>
                <div className="flex justify-end">
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">送出</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
