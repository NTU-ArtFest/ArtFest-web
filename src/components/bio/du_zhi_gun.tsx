'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WikiPage() {
  // 字體大小狀態控制
  const [fontSize, setFontSize] = useState('standard'); // 'small', 'standard', 'large'
  
  const [fontcolor, setFontcolor] = useState('standard'); // 'small', 'standard', 'large'
  
  const [isExpanded, setIsExpanded] = useState(false); // 控制子項目顯示

  return (
    <div className='font-Noto_Serif_TC text-lg'>
      <header className="w-screen bg-white flex items-center justify-between px-10 pt-2 pb-2">
        <button className="p-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <div className="flex items-center">
          <div className="pl-2 pr-4 pt-1 relative z-100">
            <Image 
              src="/arg/wikipedia.png" 
              alt="維基百科" 
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className=" font-bold text-lg tracking-wider text-2xl">維基百科</span>
            <span className="text-sm">自由的百科全書</span>
          </div>
        </div>
        
        <div className="flex-1 mx-4">
          <div className="w-2/4 relative flex items-center border border-gray-300 rounded ">

            {/* 輸入框 */}
            <input 
              type="search" 
              placeholder="搜尋維基百科" 
              className="flex-1 px-2 py-1 focus:outline-none"
            />

            {/* 搜尋按鈕 */}
            <button className="px-4 py-2 bg-gray-100 border-l border-gray-300 text-gray-500 hover:bg-gray-200">
              搜尋
            </button>
          </div>
        </div>
        
        <div className="flex space-x-4 text-sm">
          <Link href="#" className="text-blue-600 hover:underline">贊助維基百科</Link>
          <Link href="#" className="text-blue-600 hover:underline">建立帳號</Link>
          <Link href="#" className="text-blue-600 hover:underline">登入</Link>
        </div>
      </header>

      <div className="flex w-screen min-h-screen">
        {/* 左側目錄區塊 */}
        {/* 左側目錄區塊 */}
        <aside className="hidden lg:block w-1/6 bg-white pl-10 pr-4">
            <div className="sticky top-[130px] p-4">
              <h2 className="text-sm font-extrabold mb-3 border-b pb-1">目次</h2>
              <div className="space-y-2 text-sm">
                <Link href="#intro" className="text-blue-600 hover:underline block">序言</Link>
                <div>
                {/* Toggle 按鈕 */}
                <button 
                  onClick={() => setIsExpanded(!isExpanded)} 
                  className="text-blue-600 hover:underline flex items-center"
                >
                  生平
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 ml-1 transform ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* 子項目 */}
                {isExpanded && (
                  <div className="pl-4 space-y-1">
                    <Link href="#early-life" className="text-blue-600 hover:underline block pt-2">學涯</Link>
                    <Link href="#career" className="text-blue-600 hover:underline block pt-2">職業經歷</Link>
                    <Link href="#honor" className="text-blue-600 hover:underline block pt-2">榮譽</Link>
                  </div>
                )}
              </div>
                <Link href="#data" className="text-blue-600 hover:underline block">參考資料</Link>
              </div>
            </div>
        </aside>

        {/* 主內容區塊 */}
        <main className="flex-1 mx-auto p-6 bg-white h-[10000px] w-3/5">
          <div className="flex-1 overflow-y-auto ">
          {/* 標題區域 */}
            <div id = "intro"className="border-b border-gray-300">
              <div className="flex justify-between items-center px-0 py-1">
                <h1 className="text-3xl font-bold font-Noto_Serif_TC">杜知更
                </h1>
                <div className="flex items-center">
                  <button className="text-blue-600 hover:underline flex items-center">
                    <span className="mr-1 text-sm">42 種語言</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* 頁面選項卡 */}
              <div className="flex border-t border-gray-200 text-sm">
                <div className="flex">
                  <Link href="#" className="px-4 py-2 text-black border-b-2 border-black">條目</Link>
                  <Link href="#" className="px-4 py-2 text-blue-600 hover:bg-gray-100">討論</Link>
                  <div className="flex items-center px-4">
                    <button className="text-black hover:bg-gray-100 flex items-center">
                      台灣正體
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="ml-auto flex">
                  <Link href="#" className="px-2 py-2 text-black hover:bg-gray-100">閱讀</Link>
                  <Link href="#" className="px-2 py-2 text-blue-600 hover:bg-gray-100">編輯</Link>
                  <Link href="#" className="px-2 py-2 text-blue-600 hover:bg-gray-100">檢視歷史</Link>
                  <div className="flex items-center px-2">
                    <button className="text-black hover:bg-gray-100 flex items-center">
                      工具
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="float-right ml-4 mb-2 pt-10">
              <Image 
                src="/arg/du_zhi.png" 
                alt="杜知更" 
                width={300} 
                height={400} 
                className="object-cover"
              />
              <p  className="text-center font-bold">杜知更</p>
              <p className="text-center text-sm text-gray-500">杜知更</p>
              <p className="text-center text-xs text-gray-400">攝於2030年</p>
            </div>
            
            <div className={`
              ${fontSize === 'small' ? 'text-sm' : 
                fontSize === 'large' ? 'text-xl' : 
                'text-base'}
            `}>
              <div className="mb-4">
                <span className="text-gray-500 text-sm">維基百科，自由的百科全書</span>
              </div>
              
              <div id="intro">
                <p className="mb-4">
                  <strong>杜知庚</strong>（英語：du zhi gun） （2010年－），是一位著名的生化科技專家，也是全球知名企業 Current Effect 的創辦人之一。他以其在生物技術領域的卓越貢獻和創新精神而聞名，帶領公司從初創階段成長為世界一流的生技企業。
                </p>
                
                <p className="mb-4">
                </p>
              </div>
              <div className="inline-block border-b border-gray-300 mt-6 w-[630px]">
                <h2 id="early-life" className="text-2xl ">
                  生平
                </h2>
              </div>
              <div className="inline-block border-b border-gray-300 pb-1 mb-4 mt-6 w-[630px]">
                <h2 id="early-life" className="text-xl font-bold">
                  學涯
                </h2>
              </div>
              <p className="mb-4">
              杜知更出生於一個富裕且充滿奮鬥精神的家庭，其父母白手起家，創立了一家成功的製藥公司。他從小便對醫藥和生物科學充滿熱情，並展現出過人的學術天賦。
              </p>

              <p className="mb-4">
              在中學時期，他已經能熟練閱讀多種科學期刊，並對基因工程和分子生物學產生濃厚興趣。在高中畢業後，杜知更以優異成績考入台灣大學，主修分子生物學與生物工程。他在大學期間表現卓越，多次獲得校內外的科研獎項，並參與了數個關於基因編輯技術的前沿研究項目
              </p>
              
              <p className="mb-4">
              畢業後，他憑藉出色的學術成果獲得全額獎學金，繼續攻讀台大碩士學位。

在 NTU 的碩士研究期間，杜知更專注於合成生物學與蛋白質工程領域。他的碩士論文《基於合成蛋白質設計的新型抗體開發》被《自然·生物技術》（Nature Biotechnology）期刊刊載，並被視為該領域的重要突破之一。這篇論文不僅為他贏得了國際聲譽，也奠定了他日後進軍生技產業的基礎。

在這段期間，他結識了同樣對生物科技充滿熱情的凱麗。兩人因共同的理想而一拍即合，共同創立 Current Effect 生化科技公司。
              </p>

              <h2 id="career" className="text-xl font-bold border-b border-gray-300 pb-1 mb-4 mt-6 w-screen">職業經歷</h2>

              <p className="mb-4">
              2020年：拜茶（Bi Tê）成立。杜知更創立生化科技公司「拜茶」（Bi Tê），專注於研究保養與延長壽命的技術。公司以生物科技為基礎，致力於開發能改變人類健康與美麗的新產品。
              </p>

              <p className="mb-4">
              2021年：推出首款產品。公司推出第一款養顏美容精品，宣稱使用後可讓皮膚年輕30歲，迅速吸引市場關注，成為保養品行業的一匹黑馬。
              </p>
              
              <p className="mb-4">
              2022年：新聞風波導致銷量下滑，原本銷量穩步上升，但因被媒體揭露產品使用過期酪梨油的醜聞，公司形象受損，營收大幅下跌。


              </p>
              
              <p className="mb-4">
              2023年：面臨破產危機。公司銷量急劇下降，一季僅售出不到1000份產品。杜知更面臨破產危機，開始尋找新的靈感以拯救公司。
              </p>
              
              <p className="mb-4">
              2027年：潮間帶研究的突破。杜知更和團隊在潮間帶的生態研究中逐漸發現蛛絲馬跡，認為這片自然界可能隱藏著改變世界的秘密。
              </p>
              
              <p className="mb-4">
              2029年：潮間帶精華發掘。經過兩年的深入研究，團隊成功提取潮間帶中最精華的部分，這些成分被認為具有改變人類健康與抗衰老的潛力。
              </p>
              
              <p className="mb-4">
              2029~2030年：專注研發與品質。杜知更極力推動研發工作，堅持品質至上，並提醒團隊莫忘初衷，以善良和創新精神作為核心理念。
              </p>
              
              <p className="mb-4">
              2030年：公司改名為 Current Effect。為了展示技術突破並重新定位品牌，公司正式更名為 Current Effect，強調已找到能對抗「年齡小偷」的革命性技術。
              </p>
              
              <p className="mb-4">
              2030~2035年：研發與測試階段。團隊投入大量資源進行研究、實驗、研發和測試，以確保產品安全性和有效性。這段時間成為公司技術積累的重要階段。
              </p>
              
              <p className="mb-4">
              2035年：革命性產品問世
Current Effect 發表最新產品，包括：

Exhibit O-o：一種培育出最強抗體的珍珠，可將人類平均壽命延長至150歲甚至200歲。

Exhibit O-o-A：萃取自珍珠技術的醫美療程「Tidal-A」，能讓外貌美麗定格，成為醫美市場的新標杆。
              </p>

              <p className="mb-4">
              2036年：銷量暴增。隨著新產品的成功上市，公司銷量逐年暴增，一季平均銷量達到100,000份，奠定了市場領導地位。


              </p>

              <p className="mb-4">
              2040年：成立10周年。Current Effect 慶祝成立10周年，公司年度營收突破10億美元。同仁們持續努力開發新產品，保持技術領先地位。
              </p>

              <h2 id="honor" className="text-xl font-bold border-b border-gray-300 pb-1 mb-4 mt-6 w-screen">榮譽</h2>
              <p className="mb-4">
              最佳狗狗獎得主
              </p>
              <p id = "data" className="mb-4">
              最佳美容保養大師
              </p>
              <div className="inline-block border-b border-gray-300 mt-6 w-screen">
                <h2 id="early-life" className="text-2xl">
                  參考資料
                </h2>
              </div>
              <p className="mb-4">
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-blue-600 hover:underline block pt-3">杜知更人生傳記</Link>
              </p>
            </div>
            
          </div>
        </main>

        {/* 右側附加資訊區塊 */}
        <aside className="hidden lg:block w-1/6 bg-white flex justify-end pr-10">
          <div className="sticky top-[100px] p-4 text-sm">
            <div className="mb-6">
              <h3 className="font-medium mb-2 border-b pb-2">外觀</h3>
              <h3 className="font-medium mb-2 border-b pb-2">文字</h3>
              <div className="space-y-1">
                <button 
                  onClick={() => setFontSize('small')}
                  className={`flex items-center w-full p-2 rounded ${fontSize === 'small' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                >
                  <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center mr-2">
                  </div>
                  <span>小</span>
                </button>
                <button 
                  onClick={() => setFontSize('standard')}
                  className={`flex items-center w-full p-2 rounded ${fontSize === 'standard' ? 'bg-gray-100': 'hover:bg-gray-100'}`}
                >
                  <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center mr-2">
                  </div>
                  <span>標準</span>
                </button>
                <button 
                  onClick={() => setFontSize('large')}
                  className={`flex items-center w-full p-2 rounded ${fontSize === 'large' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                >
                  <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center mr-2">
                  </div>
                  <span>大</span>
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2 border-b pb-2">色彩</h3>
              <div className="space-y-1">
                <button 
                  onClick={() => setFontcolor('small')}
                  className={`flex items-center w-full p-2 rounded ${fontcolor === 'small' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                  >
                  <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center mr-2">
                  </div>
                  <span>暗</span>
                </button>
                <button 
                  onClick={() => setFontcolor('standard')}
                  className={`flex items-center w-full p-2 rounded ${fontcolor === 'standard' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                  >
                  <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center mr-2">
                  </div>
                  <span>標準</span>
                </button>
                <button 
                  onClick={() => setFontcolor('large')}
                  className={`flex items-center w-full p-2 rounded ${fontcolor === 'large' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                  >
                  <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center mr-2">
                  </div>
                  <span>亮</span>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
    

  );
}
