'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function BlogNotFound() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-100 relative"
      style={{
        backgroundImage: `url('/bg.png')`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100% auto',
        transition: "opacity 0.3s ease",
        boxShadow: "inset 0 10px 20px -10px rgba(0,0,0,0.5), inset 0 -10px 20px -10px rgba(0,0,0,0.5)"
      }}
    >
      {/* 水花動畫圖層 */}
      <motion.h2
        className="text-xl md:text-2xl font-semibold text-gray-600 mb-4 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{  duration: 1.2, ease: "easeInOut", delay: 0.2 }}
      >
        迷失在浪潮中嗎，別擔心，我來救你了
      </motion.h2>
      <motion.button
        onClick={handleBack}
        className='p-3 bg-blue-200 text-black rounded-lg hover:bg-blue-200 transition duration-300 z-20'
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
        whileHover={{ scale: 1.1, rotate: -3 }}
        whileTap={{ scale: 0.95, rotate: 3 }}
      >
        回到浪潮起點
      </motion.button>
    </div>
  );
}