import Header from '@/components/lo_pay_ming/header';
import Sidebar from '@/components/lo_pay_ming/sidebar';
import Footer from '@/components/lo_pay_ming/footer';
import Image from 'next/image';
import Link from 'next/link';


export const metadata = {
    title: '羅培民下鄉服務隊',
    description: '這是有關羅培民醫生自己經營的網頁，。',
  };


const posts = [
  {
    id: '/zh-tw/low_pay_ming/1',
    title: '羅培民下鄉服務隊 - 出任務啦！',
    date: '2022年2月10日 星期四',
    content: '！兒童健康不可少！\n羅培民下鄉服務隊於 2022 年 1 月 10 日到南投鄉下社區，為所有兒童施打疫苗，以及舉辦小遊戲，用遊戲帶領小孩理解健康的重要',
    images: ['/save.webp'],
  },
  {
    id: '/nono',
    title: '羅培民語錄 - 社會與健康談',
    date: '2020年9月26日 星期六',
    content: '時間：109年8月15日(星期六) 17:00 ~ 22:00\n地點：台北市信義區松高路66號1樓共享講堂\n活動內容：羅培民醫師親自分享，講述社會與健康的關係，並附有茶水供大家飲用。',
    images: ['/holding_hand.jpg'],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-retroYellow">
        <div
            className=" fixed inset-0 bg-[url('/arg/nice_pic_bg.jpeg')] bg-cover bg-center filter blur-lg "
            aria-hidden="true"
        ></div>

        <div className='relative z-10 mx-[200px] pt-20'>
        <Header /> 
        <div className="flex flex-col md:flex-row bg-white">
            <main className="w-full md:w-2/3 p-4">
            {posts.map((post) => (
                <article key={post.id} className="mb-8 p-4 border border-gray-200 rounded-lg">
                <div className="mb-2">
                    <h2 className="text-xl font-bold mb-1">
                    <Link href={`${post.id}`} className="text-primary hover:text-hover">
                        {post.title}
                    </Link>
                    </h2>
                    <div className="text-sm text-gray-500">{post.date}</div>
                </div>
                
                <div className="mb-4 whitespace-pre-line">{post.content}</div>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                    {post.images.map((image, index) => (
                    <div key={index} className="text-center">
                        <Image 
                        src={image} 
                        alt={`圖片 ${index + 1}`} 
                        width={320} 
                        height={240} 
                        className="rounded"
                        />
                    </div>
                    ))}
                </div>
                
                <div className="text-sm text-gray-500 border-t pt-2">
                    <span>張貼者：羅培民下鄉服務隊</span>
                    <div className="mt-1">
                    <Link href={`/zh-tw/comment`} className="text-primary hover:underline">
                        沒有留言
                    </Link>
                    </div>
                </div>
                </article>
            ))}
            
            <div className="flex justify-between my-4">
                <Link href="/nono" className="text-primary hover:underline">
                較舊的文章
                </Link>
                <Link href="/nono" className="text-primary hover:underline">
                首頁
                </Link>
            </div>
            </main>
            
            <div className="w-full md:w-1/3">
            <Sidebar />
            </div>
        </div>
        
        <Footer />
        </div>
    </div>
  );
}
