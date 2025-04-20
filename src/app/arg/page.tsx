import ArgPage from '@/components/arg/argpage';


export const metadata = {
  title: 'Arg - 30th NTU ArtFest',
  description: '第 𝟑𝟎 屆臺大藝術季 𝟑𝟎𝐭𝐡 𝐍𝐓𝐔 𝐀𝐫𝐭𝐅𝐞𝐬𝐭《 潮汐 𝐑𝐢𝐬𝐞 𝐚𝐧𝐝 𝐅𝐚𝐥𝐥 》 - ARG 體驗 - 這天在潮間黨的造勢會上，名氣鼎盛的總裁王凱麗突然消失無蹤，Current Effect 也因此開出了高額獎金，希望能盡快找到總裁的下落⋯⋯',
};


export default function Page() {
<<<<<<< HEAD
  const router = useRouter();
  const [isOverDropZone, setIsOverDropZone] = useState(false);
  const [holePosition, setHolePosition] = useState({ x: 300, y: 200 });
  const [puzzlePosition, setPuzzlePosition] = useState({ x: 50, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);  // 新增：追踪拼圖是否完成
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [backgroundSize, setBackgroundSize] = useState({ width: 0, height: 0 });
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  // const [borderStyle, setBorderStyle] = useState('none'); // 新增狀態來管理邊框樣式
  // const [borderStyle, setBorderStyle] = useState('2px solid white'); // 初始邊框樣式

  // 定義拼圖形狀
  const PUZZLE_SHAPE_PIXELS = `polygon(
    20px 0px, 
    30px 0px, 
    30px 10px, 
    40px 10px,
    50px 10px, 
    60px 10px, 
    70px 0px, 
    80px 0px, 
    100px 0px, 
    100px 20px, 
    90px 30px,
    90px 40px, 
    90px 50px, 
    90px 60px,
    100px 70px, 
    100px 80px, 
    100px 100px, 
    80px 100px, 
    70px 90px, 
    60px 90px, 
    50px 90px, 
    40px 90px, 
    30px 100px, 
    20px 100px, 
    0px 100px, 
    0px 80px, 
    10px 70px, 
    10px 60px, 
    10px 50px, 
    10px 40px, 
    0px 30px, 
    0px 20px
  )`;
 
  // 生成不重疊的位置
  useEffect(() => {
    // const maxX = window.innerWidth - 100;  // 減去拼圖寬度
    // const maxY = window.innerHeight - 100; // 減去拼圖高度
    // const randomX = Math.floor(Math.random() * maxX);
    // const randomY = Math.floor(Math.random() * maxY);
    // setHolePosition({ x: randomX, y: randomY });
    const PUZZLE_SIZE = 100;
    const SAFE_DISTANCE = 150; // 確保兩個位置之間有足夠的距離

    // 將畫面分成左右兩半
    const leftHalf = Math.floor(window.innerWidth / 2) - PUZZLE_SIZE;
    const rightHalf = Math.floor(window.innerWidth / 2);

    // 隨機決定拼圖塊在左邊還是右邊
    const isPuzzleOnLeft = Math.random() > 0.5;

    // 生成拼圖塊的位置
    const puzzleX = isPuzzleOnLeft
      ? Math.floor(Math.random() * (leftHalf - PUZZLE_SIZE))
      : Math.floor(Math.random() * (window.innerWidth - rightHalf - PUZZLE_SIZE)) + rightHalf;
    const puzzleY = Math.floor(Math.random() * (window.innerHeight - PUZZLE_SIZE));
    
    // 生成缺口的位置（在另一半）
    const holeX = !isPuzzleOnLeft
      ? Math.floor(Math.random() * (leftHalf - PUZZLE_SIZE))
      : Math.floor(Math.random() * (window.innerWidth - rightHalf - PUZZLE_SIZE)) + rightHalf;
    const holeY = Math.floor(Math.random() * (window.innerHeight - PUZZLE_SIZE));

    // 確保垂直方向也有足夠距離
    if (Math.abs(puzzleY - holeY) < SAFE_DISTANCE) {
      const offset = SAFE_DISTANCE - Math.abs(puzzleY - holeY);
      if (puzzleY < window.innerHeight / 2) {
        setPuzzlePosition({ x: puzzleX, y: puzzleY });
        setHolePosition({ x: holeX, y: holeY + offset });
        console.log('位置生成 (上半部調整):', {
          puzzle: { x: puzzleX, y: puzzleY },
          hole: { x: holeX, y: holeY + offset },
          isPuzzleOnLeft
        });
      } else {
        setPuzzlePosition({ x: puzzleX, y: puzzleY });
        setHolePosition({ x: holeX, y: Math.max(0, holeY - offset) });
        console.log('位置生成 (下半部調整):', {
          puzzle: { x: puzzleX, y: puzzleY },
          hole: { x: holeX, y: Math.max(0, holeY - offset) },
          isPuzzleOnLeft
        });
      }
    } else {
      setPuzzlePosition({ x: puzzleX, y: puzzleY });
      setHolePosition({ x: holeX, y: holeY });
      console.log('位置生成 (無需調整):', {
        puzzle: { x: puzzleX, y: puzzleY },
        hole: { x: holeX, y: holeY },
        isPuzzleOnLeft
      });
    }
    
  }, []);

  useEffect(() => {
    // 設置初始視窗大小
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // 監聽視窗大小變化
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 計算背景圖片的實際尺寸和位置
  useEffect(() => {
    const img = new window.Image();
    // img.src = puzzleBg.src; // Use the custom loader
    img.src = ImageLoader({ src: 'puzzle-bg.png' }); // Use the custom loader
    // img.src = '/puzzle-bg.png';
    // img.src = 'https://averybigwhale.github.io/entry/public/puzzle-bg.png';
    img.onload = () => {
      const imgRatio = img.width / img.height;
      const windowRatio = windowSize.width / windowSize.height;
      
      let bgWidth, bgHeight, bgX, bgY;
      
      if (windowRatio > imgRatio) {
        // 窗口比圖片寬，圖片會填滿寬度
        bgWidth = windowSize.width;
        bgHeight = windowSize.width / imgRatio;
        bgX = 0;
        bgY = (windowSize.height - bgHeight) / 2;
      } else {
        // 窗口比圖片窄，圖片會填滿高度
        bgHeight = windowSize.height;
        bgWidth = windowSize.height * imgRatio;
        bgX = (windowSize.width - bgWidth) / 2;
        bgY = 0;
      }

      setBackgroundSize({ width: bgWidth, height: bgHeight });
      setBackgroundPosition({ x: bgX, y: bgY });
    };
  }, [windowSize]);


  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', e.currentTarget.id);

    // Create a custom drag image
    const dragImage = document.createElement('div');
    dragImage.style.width = '100px';
    dragImage.style.height = '100px';
    // dragImage.style.backgroundColor  = '#fff'; // Change to desired color
    dragImage.style.backgroundImage = `url(${ImageLoader({ src: 'puzzle-bg.png' })})`;

    dragImage.style.backgroundSize = `${backgroundSize.width}px ${backgroundSize.height}px`;
    dragImage.style.backgroundPosition = `${-holePosition.x + backgroundPosition.x}px ${-holePosition.y + backgroundPosition.y}px`;
            
    dragImage.style.opacity = '1'; // Optional: make it slightly transparent
    dragImage.style.position = 'absolute';
    dragImage.style.pointerEvents = 'none'; // Prevent interaction with the drag image
    dragImage.style.clipPath = PUZZLE_SHAPE_PIXELS;
    // dragImage.style.WebkitClipPath = PUZZLE_SHAPE_PIXELS,
    // Append to body to make it visible
    document.body.appendChild(dragImage);

    // Set the custom drag image
    e.dataTransfer.setDragImage(dragImage, 50, 50); // Offset to center the image

    
    // Remove the custom drag image after a short delay
    setTimeout(() => {
      document.body.removeChild(dragImage);
    }, 0);
    setIsDragging(true);
    // setBorderStyle(BORDER_STYLE); // 拖曳時設置白色邊框
  };


  // 拖曳進入區域時顯示放置提示
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOverDropZone(true);
  };

  // 拖曳離開區域時，隱藏提示
  const handleDragLeave = () => {
    setIsOverDropZone(false);
  };

  // 修改放置處理函數
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOverDropZone(false);
    
    const data = e.dataTransfer.getData('text');
    if (data === 'puzzlePiece') {
        setIsCompleted(true);  // 設置完成狀態
        // 延遲跳轉
        setTimeout(() => {
            router.replace('./arg-home/uncover');  // 使用 replace 來確保不保留當前狀態
        }, 1200);  // 2秒後跳轉
    }
  };

  // 拖曳結束
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div style={{ 
      width: '100vw',
      height: '100vh',
      position: 'relative',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundSize: `${windowSize.width}px ${windowSize.height}px`,
    }}>
      {/* 底層背景 */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#332',
          zIndex: 1,
        }}
      />

      {/* 拼圖背景 */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 2,
        }}
      >
        {/* 完整背景圖片 */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            // backgroundImage: "url('https://averybigwhale.github.io/entry/public/puzzle-bg.png')",
            // backgroundImage: "url('/puzzle-bg.png')",
            backgroundImage: `url(${ImageLoader({ src: 'puzzle-bg.png' })})`,
            backgroundSize: 'cover',
            // backgroundSize: `${windowSize.width}px ${windowSize.height}px`,
            backgroundPosition: 'center',
          }}
        />

        {/* 被切下來的底圖 */}
        <div
          style={{
            position: 'absolute',
            left: `${holePosition.x}px`,
            top: `${holePosition.y}px`,
            width: '100px',
            height: '100px',
            // backgroundImage: "url('/bottom-img.png')",
            backgroundSize: `${windowSize.width}px ${windowSize.height}px`,
            backgroundPosition: `-${holePosition.x}px -${holePosition.y}px`,
            clipPath: PUZZLE_SHAPE_PIXELS,
            WebkitClipPath: PUZZLE_SHAPE_PIXELS,
            backgroundColor: '#332', // 使用與底層背景相同的顏色
            zIndex: 5,
          }}
        />
      </div>

      {/* 漸層遮罩層 */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
          zIndex: 6,
          pointerEvents: 'none', // 確保遮罩不會影響互動
        }}
      />

      {/* 可拖曳的拼圖塊 */}
      
        <div
          // ref={nodeRef}
          id="puzzlePiece"
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{
            position: 'absolute',
            left: `${puzzlePosition.x}px`,
            top: `${puzzlePosition.y}px`,
          //   left: isCompleted ? `${holePosition.x}px` : `${puzzlePosition.x}px`,
          //   top: isCompleted ? `${holePosition.y}px` : `${puzzlePosition.y}px`,
            width: '100px',
            height: '100px',
            backgroundImage: `url(${ImageLoader({ src: 'puzzle-bg.png' })})`,
            // backgroundColor: "#fff",

            // backgroundColor: isDragging ? 'red' : '#fff',
            // backgroundColor: puzzleColor, // 使用顏色狀態
            // backgroundColor: isDragging ? draggingColor : puzzleColor, // 使用拖曳顏色
            backgroundSize: `${backgroundSize.width}px ${backgroundSize.height}px`,
            backgroundPosition: `${-holePosition.x + backgroundPosition.x}px ${-holePosition.y + backgroundPosition.y}px`,
            cursor: 'grab',
            opacity: isDragging ? '0.5' : '1',
            boxShadow: isDragging 
              ? '0 8px 16px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.1)' 
              : '0 4px 8px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1), 0 0 2px rgba(0,0,0,0.1)',
            clipPath: PUZZLE_SHAPE_PIXELS,
            WebkitClipPath: PUZZLE_SHAPE_PIXELS,
          //   zIndex: 3,
            zIndex: isCompleted ? 1 : 3,
            // transition: 'all 0.3s ease-in-out',
            transition: 'border 0.3s ease', // 添加邊框過渡效果
            // border: borderStyle, // 使用邊框樣式狀態
            outline: '4px solid white', // 使用 outline 來顯示邊框
            outlineOffset: '-4px', // 調整邊框位置
            // transition: 'background-color 0.3s ease', 
          }}
        />

      {/* 被切下來的底圖 */}
      <div
        style={{
          position: 'absolute',
          left: `${holePosition.x}px`,
          top: `${holePosition.y}px`,
          width: '100px',
          height: '100px',
          // backgroundImage: "url('https://averybigwhale.github.io/entry/public/puzzle-bg.png')",
          // backgroundImage: "url('/puzzle-bg.png')",
          backgroundImage: `url(${ImageLoader({ src: 'puzzle-bg.png' })})`,
          backgroundSize: `${backgroundSize.width}px ${backgroundSize.height}px`,
          backgroundPosition: `${-holePosition.x + backgroundPosition.x}px ${-holePosition.y + backgroundPosition.y}px`,
          clipPath: PUZZLE_SHAPE_PIXELS,
          WebkitClipPath: PUZZLE_SHAPE_PIXELS,
          backgroundColor: '#332',
          zIndex: 5,
          opacity: isCompleted ? 1 : 0,  // 完成時顯示
          transition: 'opacity 0.3s ease-in-out',
        }}
      />

      {/* 放置區域 */}
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        style={{
          position: 'absolute',
          left: `${holePosition.x}px`,
          top: `${holePosition.y}px`,
          width: '100px',
          height: '100px',
          // backgroundImage: "url('https://averybigwhale.github.io/entry/public/puzzle-bg.png')",
          // backgroundImage: "url('/puzzle-bg.png')",
          backgroundImage: `url(${ImageLoader({ src: 'puzzle-bg.png' })})`,
          backgroundSize: `${backgroundSize.width}px ${backgroundSize.height}px`,
          backgroundPosition: `${-holePosition.x + backgroundPosition.x}px ${-holePosition.y + backgroundPosition.y}px`,
          opacity: isOverDropZone && !isCompleted ? 0.5 : 0,
          clipPath: PUZZLE_SHAPE_PIXELS,
          WebkitClipPath: PUZZLE_SHAPE_PIXELS,
          zIndex: 8,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />

      {/* 完成時的閃光效果 */}
      {isCompleted && (
        <div
          style={{
            position: 'absolute',
            left: `${holePosition.x - 50}px`,
            top: `${holePosition.y - 50}px`,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            animation: 'completion-glow 2s ease-out',
            zIndex: 9,
            pointerEvents: 'none',
          }}
        />
      )}

      <style jsx>{`
        @keyframes completion-glow {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 0;
            transform: scale(2);
          }
        }
      `}</style>
    </div> 
=======
  
  return (
      <ArgPage/>

>>>>>>> aabc1ebfad6a6618a6347b91392557d280cbff0a
  );
}