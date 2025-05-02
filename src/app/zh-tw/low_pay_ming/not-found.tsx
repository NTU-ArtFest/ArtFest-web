'use client';
import { useRouter } from 'next/navigation';

export default function BlogNotFound() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-4">兄弟請去點羅培民下鄉服務隊的貼文，愛你</h2>
      <button onClick={handleBack} className='p-3 bg-primary text-white rounded-lg hover:bg-hover transition duration-300'>
        go 杯 go 杯
      </button>
    </div>
  );
}
