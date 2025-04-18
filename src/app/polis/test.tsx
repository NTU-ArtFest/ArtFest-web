export default function Polis() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Polis 公眾議題討論</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {/* 卡片 1 */}
          <a
            href="https://pol.is/9nd5m9a2yy"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img className="w-full h-64 object-cover" src="/all/sea.jpg" alt="永續議題圖片" />
            <div className="px-4 py-2">
              <h2 className="font-semibold text-xl mb-1">永續議題</h2>
              <p className="text-gray-600 text-sm">介紹文字介紹文字介紹文字</p>
            </div>
          </a>
  
          {/* 卡片 2 */}
          <a
            href="https://pol.is/6hnmhdc6ea"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img className="w-full h-64 object-cover" src="/all/wave.jpg" alt="性別議題圖片" />
            <div className="px-4 py-2">
              <h2 className="font-semibold text-xl mb-1">性別議題</h2>
              <p className="text-gray-600 text-sm">介紹文字介紹文字介紹文字</p>
            </div>
          </a>
        </div>
      </div>
    );
  }