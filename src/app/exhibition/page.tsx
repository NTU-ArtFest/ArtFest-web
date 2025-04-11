export default function Exhibition() {
    return (
      <div className="relative w-full min-h-screen">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover absolute inset-0 z-0"
          src="/all/sea.jpg"
          alt="Exhibition Background"
        />
  
        {/* Dark gradient overlay from top to bottom */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 to-black/90"></div>
  
        {/* 文字內容區塊 */}
        <div className="absolute left-1/2 top-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center px-8 text-white text-left">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center w-full">《潮間帶》影像展</h1>
          
          <div className="max-w-3xl text-lg md:text-xl space-y-6 leading-relaxed text-left">
            <p className="text-lg leading-relaxed text-white-700">
              <br />
              臺大是潮間帶，我們比任何人都還要貼近這個時代。這裡是高溫高鹽的環境，環境因子變化好大......<br /><br />
              但同時呀，這裡具有高營養價值，也是輕盈河流奔赴向穩當大海的過渡帶。<br /><br />
              大大的星球拉動著整個世界的海，小小的我們在陸地邊界，努力學習，逐漸地找到我們的特質、我們的生存法則。而你，具備什麼特質呢？
            </p>
          </div>
        </div>
      </div>
    );
  }
  
    