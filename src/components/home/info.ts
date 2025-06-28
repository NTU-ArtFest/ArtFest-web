export interface activity {
    name: string;
    intro: string;
    url: string;
}

export interface BuildingInfo {
    name: string;
    desc: string;
    activities: activity[];
  }
  
export interface Building {
    name: string;
    real_name: string;
    label: string;
    info: BuildingInfo;
    // 可以加入自定義位置偏移
    offset?: [number, number, number];
}

export const buildingNames = [
    'library',
    'grass',
    'first_student',
    'second_library',
    'new_student',
    'stadium',
    'bank',
    'clock',
    'second',
    'gate',
    'MRT',
    'market',
    'lake',
  ]
  // 建築物資料
export const buildings: Building[] = [
    { 
      name: '總圖', 
      real_name: '總圖',
      label: '1', 
      info: { 
        name: '臺大圖書館', 
        desc: '拱窗映椰林，藏書如海，午後陽光灑落書桌，靜靜陪伴每段求知時光',
        activities: [
          {
            name: '形象片',
            intro: '30th NTU ARTFEST 形象片',
            url: 'https://artfest.ntu.edu.tw:2025/exhibition/campaign-video' //?
          },
        ]
      },
      offset: [0, 1, 0]
    },
    { 
      name: '振興草皮', 
      real_name: '振興草皮',
      label: '2', 
      info: { 
        name: '振興草皮', 
        desc: '綠地寬廣，陽光下常見青春奔跑，是校園裡最自在的呼吸',
        activities: [
            {
                name: '開幕式',
                intro: '在潮汐漲退間，我們持續漂流，感受自我在不斷變化的世界裡存在',
                url: 'https://www.instagram.com/p/DJEd5xETNXx/?img_index=1'
            },
            {
                name: '觀潮亭',
                intro: '《觀潮亭》邀請人們駐足、凝視，重新與自己在時間與生命的流動裡相遇',
                url: 'https://artfest.ntu.edu.tw:2025/exhibition/tidewatch-pavilion'
            },
            {
                name: '海浪 x 星想事成',
                intro: '將每一個人的思念，編織成眾人共同記憶的流光',
                url: 'https://artfest.ntu.edu.tw:2025/exhibition/the-wave'
            },
            {
                name: '閉幕式',
                intro: '藝術的浪潮逐漸退去，讓我們用聲音與影像，寫下藝術季最溫柔的句點',
                url: 'https://www.instagram.com/p/DJJaTAGsrGg/?img_index=1'
            },
        ]
      },
      offset: [0, 1, 0]
    },
    { 
      name: '活大', 
      real_name: '第一學生活動中心',
      label: '3', 
      info: { 
        name: '第一學生活動中心', 
        desc: '社團齊聚，樓內總有笑語與音樂飄散，青春在這裡發酵',
        activities: [
            {
                name: '引力',
                intro: '引力是我們的心靈與身體，還是我們的情感思想？',
                url: 'https://artfest.ntu.edu.tw:2025/exhibition/gravity'
            },
            {
                name: '傳遞',
                intro: '在彼此的不一致中，找到共鳴的光斑',
                url: 'https://artfest.ntu.edu.tw:2025/exhibition/conveyance'
            },
            {
                name: '我們',
                intro: '畫上此刻的你，留下重新定義的模樣',
                url: 'https://artfest.ntu.edu.tw:2025/exhibition/us'
            },
            {
                name: '延續',
                intro: '延續是在記憶與創造之間，持續生成的動態過程',
                url: 'https://artfest.ntu.edu.tw:2025/exhibition/continuum'
            },
            {
                name: '石尚玩家 ＃飾品手作工作方',
                intro: '我們就像石頭，最初的粗獷，在環境的淬鍊下，最終找到屬於自己的模樣',
                url: 'https://www.instagram.com/p/DIyRWrxz2ae/?img_index=1'
            },
        ]
      },
      offset: [0, 1, 0]
    },
    { 
      name: '外教中心', 
      real_name: '外教中心',
      label: '4', 
      info: { 
        name: '外教中心', 
        desc: '異國語言與故事交錯，走廊裡總有不同語調的夢想',
        activities: [
            {
                name: '潮間帶影像展',
                intro: '小小的我們在陸地邊界，逐漸地找到我們的特質。而你，具備什麼特質呢？',
                url: 'https://artfest.ntu.edu.tw:2025/exhibition/photographic_exhibition'
            },
        ]
      },
      offset: [0, 1, 0]
    },
    {
      name: '新生',
      real_name: '新生教學館',
      label: '5',
      info: { 
        name: '新生教學館',
        desc: '教室明亮，討論聲此起彼落，知識在晨光裡悄悄生長',
        activities: [
            {
                name: '潮起 - 性慾．癒',
                intro: '以理解、尊重與包容，正視被社會視為禁忌的性慾，從而找到屬於自己的平衡點',
                url: 'https://artfest.ntu.edu.tw:2025/exhibition/sexual-healing'
            },
        ]
      },
      offset: [0, 1, 0]
    },
    {
      name: '舊體',
      real_name: '臺大體育館（舊體）',
      label: '6',
      info: { 
        name: '臺大體育館（舊體）',
        desc: '球場回響著加油聲，汗水與活力在這裡留下足跡，青春的記憶在這裡交織',
        activities: [
            {
                name: '無量空處 ＃互動式人格測驗',
                intro: '海水帶著我們飄呀飄，最後，究竟會成為什麼模樣？',
                url: 'https://www.instagram.com/p/DIyRWrxz2ae/?img_index=1'
            },
        ]
      },
      offset: [0, 1, 0]
    },
    {
      name: '華南',
      real_name: '華南銀行',
      label: '7',
      info: { 
        name: '華南銀行',
        desc: '玻璃窗後是忙碌的身影，學生的第一張金融卡從這裡開始',
        activities: [
            {
                name: '陶土工作坊',
                intro: '與臺大陶藝社攜手合作，邀請創辦人李仁燿陶藝家親自帶領，帶你動手捏製專屬的陶藝作品！',
                url: 'https://www.instagram.com/p/DH_R1KeCsu3/?img_index=1'
            },
            {
                name: '李仁燿陶藝家展覽',
                intro: '想親眼見到李仁燿陶藝家的作品嗎？快來看展吧',
                url: 'https://www.instagram.com/p/DH_R1KeCsu3/?img_index=1'
            },
            
        ]
      },
      offset: [0, 1, 0]
    },

    {
      name: '二活',
      real_name: '第二學生活動中心',
      label: '9',
      info: { 
        name: '第二學生活動中心',
        desc: '整棟樓乘載了無數青春回憶，笑聲，打鬧，淚水，歡笑，都成為這棟樓的回憶',
        activities: [
            {
                name: '潮差 - 失衡',
                intro: '以潮汐的「流動」為隱喻，​是​一趟人從身體感知到情緒轉化、從環境回應到內在沉澱的探索旅程。我們將透過行動、創作與對談，思考如何感到歸屬並定錨自我',
                url: 'https://artfest.ntu.edu.tw:2025/exhibition/imbalance'
            },
        ]
      },
      offset: [0, 1, 0]
    },
    {
      name: '水源',
      real_name: '水源市場',
      label: '12',
      info: { 
        name: '水源市場',
        desc: '人聲鼎沸，飯香四溢，學生及遊客的日常滋味全在這',
        activities: [
            {
                name: '潮之外 - 錯位與形變',
                intro: '外在社會與內在的自我互相牽絆拉扯，伴隨痛苦與自我懷疑，我們逐步摸索出自己最舒適的時區。然而，這真的「正常」嗎？',
                url: 'https://artfest.ntu.edu.tw:2025/exhibition/beyond-the-tide'
            },
        ]
      },
      offset: [-5, 1, 3]
    },
    // {
    //   name: 'lake',
    //   real_name: '醉月湖',
    //   label: '13',
    //   info: { 
    //     name: '醉月湖',
    //     desc: '醉月湖是臺大校園內最著名的景點之一，湖畔環境優美，是學生休閒、約會的理想場所。湖中小島與周圍綠樹相映成趣，四季景色各有特色。',
    //     activities: []
    //   },
    //   offset: [-10, 1, -6]
    // }
        // {
    //   name: 'clock',
    //   real_name: '傅鐘',
    //   label: '8',
    //   info: { 
    //     name: '傅鐘',
    //     desc: '臺大校鐘是校園的地標之一，也是學生約會集合的熱門地點。每到整點報時，悠揚的鐘聲迴盪在校園中，成為臺大特有的聲音記憶。',
    //     activities: []
    //   },
    //   offset: [0, 1, 0]
    // },
        // {
    //   name: 'gate',
    //   real_name: '校門',
    //   label: '10',
    //   info: { 
    //     name: '校門',
    //     desc: '恭賀光臨，歡迎來到臺大！',
    //     activities: []
    //   },
    //   offset: [0, 1, 0]
    // },
    // {
    //   name: 'MRT',
    //   real_name: '捷運公館站',
    //   label: '11',
    //   info: { 
    //     name: '捷運公館站',
    //     desc: '為什麼不能叫捷運臺大站',
    //     activities: []
    //   },
    //   offset: [0, 1, 0]
    // },
  ];