import Image from 'next/image';

export default function HealingExhibition() {
  const products = [
    {
      title: "漫畫吊飾：萌漫小夥伴",
      description: [
        "在潮汐小鎮的冒險旅途中，疊疊石兄弟遇到精靈「萌漫小夥伴」。牠們用手繪地圖幫助三兄弟尋找丟失的「潮間的寶藏包」，展現友情的力量。",
        "四款主題：「一樣不一樣」、「石頭一起強大」、「瓶中信外送」、「心情不好的話...」，以溫暖幽默的三格漫畫形式講述冒險故事，帶來療癒與歡笑。每款吊飾都充滿故事感，適合送禮或收藏，提醒你團結、勇敢和樂觀的重要性！",
        "Four little pebble brothers stack up into a tiny tower — guardians of peace in the town of Tideville! Led by the bold and curious Little Pointy, the team sets out to find the legendary \"Tide-Treasure Pack\".",
        "From the goofy older bro to the shy youngest quietly protecting everyone, their journey is full of laughter, courage, and the power of friendship.",
        "More than just adorable, this keychain stands for the spirit of unity — your trusty companion through life’s daily quests!",
        "The Stacking Pebble Brothers are the stars of this season’s adventure, embodying the heart of friendship and the thrill of discovery."
      ]
    },
    {
      title: "主題吊飾：疊疊石兄弟/潮汐",
      description: [
        "四顆石頭兄弟疊成小塔，守護潮汐小鎮的和平！小俗頭帶領冒險尋找「潮間的寶藏包」，搞笑哥哥逗趣，害羞小弟默默守護，傳遞友情與勇氣的力量。",
        "這款吊飾不僅可愛，更象徵著團結的精神，陪伴你面對生活中的挑戰！疊疊石兄弟是這次冒險故事的主角，展現友情與冒險的核心精神。",
        "On their adventure through the town of Tideville, the Stacking Pebble Brothers meet a group of playful spirits — the Adorable Comic Buddies! With hand-drawn maps in hand, these magical friends help the brothers search for the missing Tide-Treasure Pack, showing the true power of friendship.",
        "There are four themed designs, each telling a heartwarming mini-story in 3-panel comic style: \"Same but Different\", \"Stronger Together\", \"Message in a Bottle\", \"If You’re Feeling Down...\" ",
        "Full of warmth and wit, these charms bring joy, healing, and a touch of laughter. Each one carries its own tiny tale — perfect for gifting, collecting, or simply reminding yourself to stay brave, united, and hopeful."
      ]
    },
    {
      title: "透明小包：潮間的寶藏包",
      description: [
        "「潮間的寶藏包」靈感源自潮汐小鎮溪底的小石頭，如同藏在海底的秘密。",
        "精緻小巧的設計，方便收納卡片、零錢與其它小物品，每次打開都彷彿發現一份自然的驚喜。這款透明小包是疊疊石兄弟冒險的目標，帶著探索的趣味，讓生活充滿驚喜與溫暖！",
        "Inspired by the tiny pebbles resting beneath the creek in the town of Tides, this clear pouch is like a hidden secret from the ocean floor.",
        "Delicately designed to hold cards, coins, and other small treasures, it brings a touch of nature’s surprise every time you open it.",
        "As the ultimate goal in the Stacking Pebble Brothers’ adventure, this pouch carries a spirit of curiosity and exploration — adding a little wonder and warmth to your everyday life."
      ]
    },
    {
      title: "貼紙包：潮流貼紙隊的旅程",
      description: [
        "潮流貼紙小隊隨時準備陪伴你征服生活！無論是日常還是旅行，這些貼紙都是你的潮流戰友。",
        "以趣味性收尾，這些貼紙不僅能點綴你的物品，更能讓你感受到冒險中的活力與創意，展現屬於你的潮流精神！",
        "Inspired by the gentle waves of Tideville, this handkerchief captures the rhythm of nature and the flowing beauty of the sea.",
        "Made from soft, comfortable fabric, it's perfect for daily use or as a travel companion — like the tides wrapping gently around you, offering warmth and a quiet sense of freedom.",
        "Carrying the spirit of adventure, this handkerchief is both practical and full of stories — a charming accessory to express your unique personality, wherever the journey takes you."
      ]
    },
    {
      title: "方巾：潮汐之舞",
      description: [
        "「潮汐之舞」方巾以潮汐小鎮的海浪為靈感，展現自然的律動與流動的美感。",
        "柔軟舒適的材質，適合日常使用或旅行搭配，宛如潮汐輕輕環繞，帶給你溫暖與自由的守護。這款方巾延續冒險精神，成為實用又充滿故事感的配件，陪伴你展現屬於自己的個性！",
        "The Trendy Sticker Squad is always ready to back you up in conquering everyday life! Whether you're navigating daily routines or heading off on a grand adventure, these stickers are your ultimate style companions. Playful yet powerful, they don’t just decorate things — they spark joy, creativity, and that adventurous spirit within you. It’s time to show off your own tide-powered style with every sticker you stick!"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white" style={{ fontFamily: "'Helvetica Neue'" }}>
      {/* 黑色底圖層 */}
      <div className="fixed inset-0 z-0 bg-black"></div>

      {/* 主視覺區塊 - 手機和桌面共用背景，調整為 3:2 比例 */}
      <div className="relative w-full z-10 h-[100vh]">
        {/* 背景圖 - 亮度調低 */}
        <div className="absolute inset-0 bg-black z-0"></div>
        <Image
          className="w-full h-full object-cover absolute inset-0 z-0 opacity-60"
          src="/all/merch/1.png"
          alt="Exhibition Background"
          fill
          sizes="100vw"
          priority
          quality={10}
        />

        {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* 左上標題 - 縮小字體 */}
          <div className="self-start mt-8 ml-6">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">周邊商品</h1>
            <p className="text-xs sm:text-base tracking-wide">Merch</p>
          </div>

          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p><span className="font-bold text-[8px]">專案組員 Project Team</span><br />
            <span className="text-[6px]">林鴻、周宥均、周敏歆、饒詠涵、蕭丞賀、蕭宇呈</span></p>
          </div>

        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">周邊商品</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Merch</p>
            </div>
          </div>

          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p><span className="font-bold text-sm md:text-base">專案組員 Project Team</span><br />
            <span className="text-xs md:text-sm">林鴻、周宥均、周敏歆、饒詠涵、蕭丞賀、蕭宇呈</span></p>
          </div>


        </div>
      </div>


      {/* 商品介紹區塊 - 圖文對照 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">介紹</h2>

          <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
            {products.map((product, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                {/* 圖片區塊 */}
                <div>
                  <div className="overflow-hidden rounded-lg" style={{ aspectRatio: '3/2' }}>
                    <img 
                      src={`/all/merch/${index + 1}.png`} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* 文字區塊 */}
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-4 text-white border-b border-white/30 pb-2">
                    {product.title}
                  </h3>
                  <div className="space-y-3 text-sm md:text-base leading-relaxed text-gray-200 font-light">
                    {product.description.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>


      {/* 底部版權聲明 */}
      <footer className="relative z-10 py-5 md:py-6 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-[8pt]">
            © 2025 臺大藝術季團隊 NTU ARTFEST 30TH
          </p>
        </div>
      </footer>
    </div>
  );
}