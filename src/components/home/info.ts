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
export const buildings = [
  { 
    name: { zh: '總圖', en: 'NTU Library' },
    real_name: { zh: '總圖', en: 'NTU Library' },
    label: '1', 
    info: { 
      name: { zh: '臺大圖書館', en: 'NTU Library' },
      desc: {
        zh: '拱窗映椰林，藏書如海，午後陽光灑落書桌，靜靜陪伴每段求知時光',
        en: 'Countless books fill the shelves, and the afternoon sun quietly accompanies your moments of learning.'
      },
      activities: [
        {
          name: { zh: '形象片', en: 'Promo Video' },
          intro: {
            zh: '30th NTU ARTFEST 形象片',
            en: '30th NTU ARTFEST Promo Video'
          },
          url: 'https://artfest.ntu.edu.tw:2025/exhibition/campaign-video'
        },
      ]
    },
    offset: [0, 1, 0]
  },
  { 
    name: { zh: '振興草皮', en: 'Jingxing Lawn' },
    real_name: { zh: '振興草皮', en: 'Jingxing Lawn' },
    label: '2', 
    info: { 
      name: { zh: '振興草皮', en: 'Jingxing Lawn' }, 
      desc: {
        zh: '綠地寬廣，陽光下常見青春奔跑，是校園裡最自在的呼吸',
        en: 'A vast green field where youth run freely under the sun—the campus’ most relaxing breath.'
      },
      activities: [
        {
          name: { zh: '開幕式', en: 'Opening Ceremony' },
          intro: {
            zh: '在潮汐漲退間，我們持續漂流，感受自我在不斷變化的世界裡存在',
            en: 'As the tides rise and fall, we sense our own presence in this ever-changing world.'
          },
          url: 'https://artfest.ntu.edu.tw:2025/event/opening-ceremony'
        },
        {
          name: { zh: '觀潮亭', en: 'Tidewatch Pavilion' },
          intro: {
            zh: '《觀潮亭》邀請人們駐足、凝視，重新與自己在時間與生命的流動裡相遇',
            en: 'Tidewatch Pavilion invites you to pause and reconnect with yourself in the flow of time and life.'
          },
          url: 'https://artfest.ntu.edu.tw:2025/exhibition/tidewatch-pavilion'
        },
        {
          name: { zh: '星想事成 x 海浪', en: 'Starlit Whispers × The Wave' },
          intro: {
            zh: '將每一個人的思念，編織成眾人共同記憶的流光',
            en: 'Weaving everyone’s memories into a shared stream of light.'
          },
          url: 'https://artfest.ntu.edu.tw:2025/exhibition/the-wave'
        },
        {
          name: { zh: '閉幕式', en: 'Closing Ceremony' },
          intro: {
            zh: '藝術的浪潮逐漸退去，讓我們用聲音與影像，寫下藝術季最溫柔的句點',
            en: 'As the artistic tide recedes, let us use sound and vision to pen the season’s gentlest finale.'
          },
          url: 'https://artfest.ntu.edu.tw:2025/event/ending-ceremony'
        },
      ]
    },
    offset: [0, 1, 0]
  },
  { 
    name: { zh: '活大', en: 'Student Activity Center I' },
    real_name: { zh: '第一學生活動中心', en: 'Student Activity Center I' },
    label: '3', 
    info: { 
      name: { zh: '第一學生活動中心', en: 'Student Activity Center I' },
      desc: {
        zh: '社團齊聚，樓內總有笑語與音樂飄散，青春在這裡發酵',
        en: 'Clubs gather here, laughter and music drift through the halls—youth ferments in these walls.'
      },
      activities: [
        {
          name: { zh: '引力', en: 'Gravity' },
          intro: {
            zh: '引力是我們的心靈與身體，還是我們的情感思想？',
            en: 'Is gravity our soul and body, or our emotions and thoughts?'
          },
          url: 'https://artfest.ntu.edu.tw:2025/exhibition/gravity'
        },
        {
          name: { zh: '傳遞', en: 'Conveyance' },
          intro: {
            zh: '在彼此的不一致中，找到共鳴的光斑',
            en: 'Finding resonance amidst our differences.'
          },
          url: 'https://artfest.ntu.edu.tw:2025/exhibition/conveyance'
        },
        {
          name: { zh: '我們', en: 'Us' },
          intro: {
            zh: '畫上此刻的你，留下重新定義的模樣',
            en: 'Draw your present self and leave a new definition behind.'
          },
          url: 'https://artfest.ntu.edu.tw:2025/exhibition/us'
        },
        {
          name: { zh: '延續', en: 'Continuum' },
          intro: {
            zh: '延續是在記憶與創造之間，持續生成的動態過程',
            en: 'Continuum is a dynamic process that persists between memory and creation.'
          },
          url: 'https://artfest.ntu.edu.tw:2025/exhibition/continuum'
        },
        {
          name: { zh: '石尚玩家', en: 'Rock On: The Stone Artisans' },
          intro: {
            zh: '我們就像石頭，最初的粗獷，在環境的淬鍊下，最終找到屬於自己的模樣',
            en: 'We are like stones: from rawness, we find our true selves after being shaped by our surroundings.'
          },
          url: 'https://artfest.ntu.edu.tw:2025/event/the-stone-crafters'
        },
      ]
    },
    offset: [0, 1, 0]
  },
  { 
    name: { zh: '外教中心', en: 'Foreign Language Center' },
    real_name: { zh: '外教中心', en: 'Foreign Language Center' },
    label: '4', 
    info: { 
      name: { zh: '外教中心', en: 'Foreign Language Center' },
      desc: {
        zh: '異國語言與故事交錯，走廊裡總有不同語調的夢想',
        en: 'Languages and stories intertwine; in the corridors, diverse dreams sound in different tones.'
      },
      activities: [
        {
          name: { zh: '潮間帶影像展', en: 'Intertidal Photo Exhibition' },
          intro: {
            zh: '小小的我們在陸地邊界，逐漸地找到我們的特質。而你，具備什麼特質呢？',
            en: 'On the edge of land, we discover our unique traits. What about you?'
          },
          url: 'https://artfest.ntu.edu.tw:2025/exhibition/photographic_exhibition'
        },
      ]
    },
    offset: [0, 1, 0]
  },
  {
    name: { zh: '新生', en: 'Freshman Building' },
    real_name: { zh: '新生教學館', en: 'Freshman Building' },
    label: '5',
    info: { 
      name: { zh: '新生教學館', en: 'Freshman Building' },
      desc: {
        zh: '教室明亮，討論聲此起彼落，知識在晨光裡悄悄生長',
        en: 'Bright classrooms, lively discussions; knowledge quietly grows in the morning light.'
      },
      activities: [
        {
          name: { zh: '性慾・癒', en: 'Desire·Healing' },
          intro: {
            zh: '以理解、尊重與包容，正視被社會視為禁忌的性慾，從而找到屬於自己的平衡點',
            en: 'With understanding, respect, and acceptance, we confront sexuality once seen as taboo, finding our own balance.'
          },
          url: 'https://artfest.ntu.edu.tw:2025/exhibition/sexual-healing'
        },
      ]
    },
    offset: [0, 1, 0]
  },
  {
    name: { zh: '舊體', en: 'Old Gymnasium' },
    real_name: { zh: '臺大體育館（舊體）', en: 'NTU Gymnasium (Old)' },
    label: '6',
    info: { 
      name: { zh: '臺大體育館（舊體）', en: 'NTU Gymnasium (Old)' },
      desc: {
        zh: '球場回響著加油聲，汗水與活力在這裡留下足跡，青春的記憶在這裡交織',
        en: 'Cheers echo around the court; sweat and energy leave marks here, intertwining into youthful memories.'
      },
      activities: [
        {
          name: { zh: '無量空處', en: 'Infinite Void' },
          intro: {
            zh: '海水帶著我們飄呀飄，最後，究竟會成為什麼模樣？',
            en: 'Carried by the sea, who will we become in the end?'
          },
          url: 'https://artfest.ntu.edu.tw:2025/event/immeasurable-emptiness'
        },
      ]
    },
    offset: [0, 1, 0]
  },
  {
    name: { zh: '華南', en: 'Hua Nan Bank' },
    real_name: { zh: '華南銀行', en: 'Hua Nan Bank' },
    label: '7',
    info: { 
      name: { zh: '華南銀行', en: 'Hua Nan Bank' },
      desc: {
        zh: '玻璃窗後是忙碌的身影，學生的第一張金融卡從這裡開始',
        en: 'Behind the glass windows, busy figures move—here is where students get their first bank card.'
      },
      activities: [
        {
          name: { zh: '陶土工作坊', en: 'Clay Workshop' },
          intro: {
            zh: '與臺大陶藝社攜手合作，邀請創辦人李仁燿陶藝家親自帶領，帶你動手捏製專屬的陶藝作品！',
            en: 'In cooperation with NTU Pottery Club; workshop led by founder Li Ren-Yao—create your unique pottery piece!'
          },
          url: 'https://www.instagram.com/p/DH_R1KeCsu3/?img_index=1'
        },
        {
          name: { zh: '李仁燿陶藝家展覽', en: 'Li Ren-Yao Pottery Exhibition' },
          intro: {
            zh: '想親眼見到李仁燿陶藝家的作品嗎？快來看展吧',
            en: "Want to see Master Li Ren-Yao's works in person? Come to the exhibition!"
          },
          url: 'https://www.instagram.com/p/DH_R1KeCsu3/?img_index=1'
        },
      ]
    },
    offset: [0, 1, 0]
  },
  {
    name: { zh: '二活', en: 'Student Activity Center II' },
    real_name: { zh: '第二學生活動中心', en: 'Student Activity Center II' },
    label: '9',
    info: { 
      name: { zh: '第二學生活動中心', en: 'Student Activity Center II' },
      desc: {
        zh: '整棟樓乘載了無數青春回憶，笑聲，打鬧，淚水，歡笑，都成為這棟樓的回憶',
        en: 'The whole building carries memories of youth—laughter, play, tears, and joy all become part of its story.'
      },
      activities: [
        {
          name: { zh: '失衡', en: 'Unbalanced' },
          intro: {
            zh: '以潮汐的「流動」為隱喻，​是​一趟人從身體感知到情緒轉化、從環境回應到內在沉澱的探索旅程。我們將透過行動、創作與對談，思考如何感到歸屬並定錨自我',
            en: 'Using the “flow” of tides as a metaphor, this event explores the journey from physical sensation to emotional change and from environmental reaction to inner reflection.'
          },
          url: 'https://artfest.ntu.edu.tw:2025/event/imbalance'
        },
      ]
    },
    offset: [0, 1, 0]
  },
  {
    name: { zh: '水源', en: 'Shuiyuan Market' },
    real_name: { zh: '水源市場', en: 'Shuiyuan Market' },
    label: '12',
    info: { 
      name: { zh: '水源市場', en: 'Shuiyuan Market' },
      desc: {
        zh: '人聲鼎沸，飯香四溢，學生及遊客的日常滋味全在這',
        en: "Noise and delicious scents fill the air here; it's an everyday taste for students and visitors alike."
      },
      activities: [
        {
          name: { zh: '潮之外 - 錯位與形變', en: 'Beyond the Tide - Displacement and Transformation' },
          intro: {
            zh: '外在社會與內在的自我互相牽絆拉扯，伴隨痛苦與自我懷疑，我們逐步摸索出自己最舒適的時區。然而，這真的「正常」嗎？',
            en: 'Society and the self pull each other along, accompanied by pain and self-doubt, as we search for our own comfort zone. But is this really “normal”?'
          },
          url: 'https://artfest.ntu.edu.tw:2025/exhibition/beyond-the-tide'
        },
      ]
    },
    offset: [-5, 1, 3]
  },
];
