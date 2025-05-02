import Header from '@/components/lo_pay_ming/header';
import Sidebar from '@/components/lo_pay_ming/sidebar';
import Footer from '@/components/lo_pay_ming/footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation'

export const metadata = {
  title: '羅培民下鄉服務隊',
  description: '這是有關羅培民醫生自己經營的網頁。',
};


async function getPostById(id: string) {
 
  const posts = [
    {
      id: '1',
      title: '羅培民下鄉服務隊 - 出任務啦！',
      date: '2022年2月10日 星期四',
      description: `！兒童健康不可少！\n羅培民下鄉服務隊於 2022 年 1 月 10 日到南投鄉下社區，為所有兒童施打疫苗，以及舉辦小遊戲，用遊戲帶領小孩理解健康的重要`,
      images: [
        '/arg/low_pay.png', 
      ],
    },
  ];
  
  return posts.find(post => post.id === id);
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostById(id);
  
  if (!post) {
    notFound();
  }
  
  return (

    <div className="relative min-h-screen bg-retroYellow">
        <div
            className=" fixed inset-0 bg-[url('/arg/nice_pic_bg.jpeg')] bg-cover bg-center filter blur-lg "
            aria-hidden="true"
        ></div>

        <div className='relative z-10 mx-[50px] pt-20 md:mx-[100px] lg:mx-[200px] transition-all duration-300'>
        <Header />
        
        <div className="flex flex-col md:flex-row bg-white">
          
          <main className="w-full md:w-2/3 p-4">
            <article className="p-4 border border-gray-200 rounded-lg">
              <div className="mt-6 mb-3">
                <h2 className="text-2xl font-bold mb-2 text-black">{post.title}</h2>
                <div className="text-sm text-gray-500 ">{post.date}</div>
              </div>
              
              <div className="mb-6">
                {post.images.map((image, index) => (
                  <div key={index} className="text-center">
                    <Image 
                      src={image} 
                      alt={`圖片 ${index + 1}`} 
                      width={600} 
                      height={500} 
                      className="rounded"
                    />
                  </div>
                ))}
              </div>
              <div className="mb-6 whitespace-pre-line text-black">{post.description}</div>
              <h1 className='text-2xl font-bold mt-6 mb-3 text-black' >
                群聚愛心的旅程：羅培民下鄉服務隊
              </h1>
              <p className='text-black'>
              今天是個特別的日子，因為「羅培民下鄉服務隊」要出發了！這支由羅培民醫生和他的高中好友——藍平倫、吳心綺、陳詩詩——組成的團隊，肩負著一個溫暖的使命：到鄉下探訪某部落的孩子們，為他們施打疫苗，並與他們共享歡樂時光。
              </p>

              <h1 className='text-2xl font-bold mt-6 mb-3 text-black'>
                出發前的期待
              </h1>
              <p className='text-black'>
                清晨，陽光灑在車窗上，四人臉上洋溢著期待與興奮。他們聊著高中時的趣事，也討論著今天的行程。羅培民說：「除了疫苗，我們也要讓孩子們知道健康的重要性，希望能透過遊戲讓他們更容易接受這些知識。」藍平倫笑著回應：「沒問題！我們一定能做到！」這群人不僅是醫療工作者，更是彼此生命中最重要的夥伴。
              </p>
              <h1 className='text-2xl font-bold mt-6 mb-3 text-black'>
                部落中的溫暖時光
              </h1>
              <p className='text-black'>
              抵達部落後，迎接他們的是孩子們純真的笑容和家長們的感激目光。服務隊迅速開始工作，羅培民親手替每位小朋友施打疫苗，細心地安撫孩子的不安。「不要怕哦，打完疫苗就像超人一樣不容易生病了！」他溫柔地對一位小男孩說。

              藍平倫和吳心綺則忙著準備遊戲活動。他們設計了一場「健康知識尋寶遊戲」，讓孩子們在玩樂中學習如何保持身體健康。陳詩詩負責帶領音樂律動活動，小朋友跟著她唱歌跳舞，笑聲瀰漫整個場地。
              </p>
              <h1 className='text-2xl font-bold mt-6 mb-3 text-black'>
                遊戲中的學習
              </h1>
              <p className='text-black'>
              在遊戲中，孩子們分成小組，透過尋寶的方式學習健康知識。每當他們找到一個寶藏，就會獲得一個健康小貼士。羅培民和隊友們在旁邊鼓勵著，看到孩子們專注的眼神，他們心中充滿了成就感。
              一位小女孩在尋寶過程中，突然停下來，指著一個標語說：「這是什麼意思？」羅培民微笑著解釋：「這是提醒我們要多喝水，保持身體健康哦！」小女孩點點頭，似懂非懂地說：「我知道了！」
              </p>
              <h1 className='text-2xl font-bold mt-6 mb-3 text-black'>
                感動瞬間
              </h1>
              <p className='text-black'>
                活動中，一位小女孩怯生生地走到羅培民身旁，細聲說：「謝謝叔叔，我以前很怕打針，但今天不怕了。」這句話讓羅培民眼眶微微濕潤。他知道，他和隊友的努力正在改變孩子們的生活。

                而在遊戲中，有個小男孩興奮地喊道：「我知道了！多洗手、多喝水才會健康！」這些簡單卻重要的健康觀念，透過遊戲深深植入孩子們的心中。
              </p>

              <h1 className='text-2xl font-bold mt-6 mb-3 text-black'>
              結束後的回顧
              </h1>
              <p className='text-black'>
              一天的服務結束後，四人坐在車上回程，雖然疲憊，但心中充滿了成就感。吳心綺感慨地說：「今天真的很棒，看著孩子們笑得那麼開心，我覺得再累都值得。」羅培民點頭同意：「是啊，這就是我們的使命。希望未來能有更多這樣的機會，讓我們能夠把健康的種子播撒到更多地方。」
              </p>
              <h1 className='text-2xl font-bold mt-6 mb-3 text-black'>  
              尾聲
              </h1>
              <p className='mb-6 text-black'>
              「羅培民下鄉服務隊」用行動詮釋了什麼是愛與關懷。他們不僅提供了醫療服務，更用遊戲和陪伴拉近了與孩子們的距離。在這片土地上，他們留下的不只是疫苗，更是一份真摯的情感、一段美好的記憶。

              期待下一次，他們再度出發，把更多溫暖帶到需要的地方！
                </p>

              
              <div className="text-sm text-gray-500 border-t pt-3">
                <div className="flex justify-between items-center text-black">
                  <span>張貼者：羅培民下鄉服務隊</span>
                  <span>於 {post.date.split(' ')[1]}</span>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link href="/zh-tw/low_pay_ming" className="text-primary hover:underline">
                    返回
                  </Link>
                  <Link href={`/zh-tw/low_pay_ming/nono`} className="text-primary hover:underline">
                    發表留言
                  </Link>
                  <Link href={`/zh-tw/low_pay_ming/nono`} className="text-primary hover:underline">
                    分享至 Facebook
                  </Link>
                </div>
              </div>
            </article>
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
