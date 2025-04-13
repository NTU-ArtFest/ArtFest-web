import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white rounded-t-lg p-0">
      <div className="p-6">
        <h1 className="text-3xl font-bold">羅培民下鄉服務隊</h1>
      </div>
      <nav className="bg-light text-dark">
        <ul className="flex p-2">
          <li className="mr-4 hover:text-primary">
            <Link href="/nono">首頁</Link>
          </li>
          <li className="mr-4 hover:text-primary">
            <Link href="/nono">關於我們</Link>
          </li>
          <li className="mr-4 hover:text-primary">
            <Link href="/nono">活動資訊</Link>
          </li>
          <li className="hover:text-primary">
            <Link href="/nono">聯絡我們</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
