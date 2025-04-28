import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  const archives = [
    { year: '2013', months: ['3月', '2月', '1月'] },
    { year: '2012', months: ['12月', '11月', '10月', '9月', '8月'] },
  ];

  return (
    <aside className="p-4 bg-white rounded-lg mr-4">
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-600 uppercase mb-4">關於我自己</h2>
        <div className="flex items-center mb-4">
          <Image
            src="/dog.jpg"
            alt="羅培民"
            width={80}
            height={60}
            className="mr-4"
          />
          <div>
            <h3 className="font-bold">羅培民</h3>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          我們是一群滿腔熱血，犧牲奉獻，熱衷社會公益，不求回報的服務團隊。如果你也具備上述人格特質，歡迎加入我們！
        </p>
        <Link href="/nono" className="text-primary text-sm hover:underline">
          檢視我的完整簡介
        </Link>
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-600 uppercase mb-4">網誌存檔</h2>
        <ul>
          {archives.map((archive) => (
            <li key={archive.year} className="mb-2">
              <details>
                <summary className="cursor-pointer hover:text-primary">
                  {archive.year} ({archive.months.length})
                </summary>
                <ul className="pl-4 mt-1">
                  {archive.months.map((month) => (
                    <li key={month} className="text-sm hover:text-primary">
                      <Link href={`/nono`}>{month}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
