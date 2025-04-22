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
      name: 'library', 
      real_name: '台大圖書館',
      label: '1', 
      info: { 
        name: '台大圖書館', 
        desc: '台大圖書館是校內最大的圖書館，收藏豐富的學術資源與珍貴文獻。建築設計莊嚴典雅，為學生提供安靜的閱讀與研究環境。',
        activities: []
      },
      offset: [0, 1, -6]
    },
    { 
      name: 'grass', 
      real_name: '振興草皮',
      label: '2', 
      info: { 
        name: '振興草皮', 
        desc: '這諾大的草皮肯定就是要用來躺的啊',
        activities: [
            {
                name: '開幕式',
                intro: '開幕式很棒',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
            {
                name: '浪潮 30 動態地景藝術',
                intro: '地景藝術讚',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
            {
                name: '閉幕式',
                intro: '閉幕式更棒',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
        ]
      },
      offset: [0, 1, 0]
    },
    { 
      name: 'first_student', 
      real_name: '第一學生活動中心',
      label: '3', 
      info: { 
        name: '第一學生活動中心', 
        desc: '第一學生宿舍是台大歷史最悠久的學生宿舍之一，提供舒適的住宿環境。宿舍內設有完善的生活設施，為學生提供良好的住宿體驗。',
        activities: [
            {
                name: '公園散步地圖',
                intro: '來散散步吧',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
            {
                name: '子題展覽',
                intro: '展覽讚',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
            {
                name: '石尚玩家 ＃飾品手作工作方',
                intro: '玩石頭囉',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
        ]
      },
      offset: [0, 1, 0]
    },
    { 
      name: 'second_library', 
      real_name: '外教中心',
      label: '4', 
      info: { 
        name: '外教中心', 
        desc: '享受置身於浪潮的寧靜之旅',
        activities: [
            {
                name: '潮間帶影像展',
                intro: '沈浸於浪潮的薰陶',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
        ]
      },
      offset: [0, 1, 0]
    },
    {
      name: 'new_student',
      real_name: '新生教學館',
      label: '5',
      info: { 
        name: '新生教學館',
        desc: '新生專為大一新生設計，提供現代化的住宿環境與完善的生活設施。宿舍管理嚴謹，並有導師駐點輔導，幫助新生適應大學生活。',
        activities: [
            {
                name: '潮起 - 性慾．癒',
                intro: '敞開心胸，正視性慾',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
        ]
      },
      offset: [0, 1, 0]
    },
    {
      name: 'stadium',
      real_name: '台大體育館（舊體）',
      label: '6',
      info: { 
        name: '台大體育館（舊體）',
        desc: '台大體育館是校內最大的室內運動場所，設有多功能運動場地及專業設備。定期舉辦校內外體育賽事，也是學生體育課程的主要場地。',
        activities: [
            {
                name: '無量空處 ＃互動式人格測驗',
                intro: '來感受一下人格魅力',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
        ]
      },
      offset: [0, 1, 0]
    },
    {
      name: 'bank',
      real_name: '華南銀行',
      label: '7',
      info: { 
        name: '校內銀行',
        desc: '校內銀行提供師生便捷的金融服務，包括存款、提款、轉帳及各類繳費業務。校內設有多台ATM機，方便師生日常金融需求。',
        activities: [
            {
                name: '陶土工作坊',
                intro: '歡迎來捏陶',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
            {
                name: '李仁燿陶藝家展覽',
                intro: '展覽讚',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
            {
                name: '浪潮 30 : 潮映',
                intro: '潮映',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
        ]
      },
      offset: [0, 1, 0]
    },
    {
      name: 'clock',
      real_name: '傅鐘',
      label: '8',
      info: { 
        name: '校鐘',
        desc: '台大校鐘是校園的地標之一，也是學生約會集合的熱門地點。每到整點報時，悠揚的鐘聲迴盪在校園中，成為台大特有的聲音記憶。',
        activities: []
      },
      offset: [0, 1, 0]
    },
    {
      name: 'second',
      real_name: '第二學生活動中心',
      label: '9',
      info: { 
        name: '第二學生活動中心',
        desc: '第二學生活動中心',
        activities: [
            {
                name: '潮差 - 失衡',
                intro: '人總是有不如意之事',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
        ]
      },
      offset: [0, 1, 0]
    },
    {
      name: 'gate',
      real_name: '校門',
      label: '10',
      info: { 
        name: '校門',
        desc: '恭賀光臨，歡迎來到台大！',
        activities: []
      },
      offset: [0, 1, 0]
    },
    {
      name: 'MRT',
      real_name: '捷運公館站',
      label: '11',
      info: { 
        name: '捷運公館站',
        desc: '為什麼不能叫捷運台大站',
        activities: []
      },
      offset: [0, 1, 0]
    },
    {
      name: 'market',
      real_name: '校內市集',
      label: '12',
      info: { 
        name: '校內市集',
        desc: '校內市集匯集多家餐廳、小吃及便利商店，提供多元的飲食選擇。是學生用餐、購物及社交的熱門場所，尤其在午餐時間特別熱鬧。',
        activities: [
            {
                name: '潮之外 - 錯位與形變',
                intro: '潮之外, 城之內',
                url: 'https://artfest.ntu.edu.tw:2025/'
            },
        ]
      },
      offset: [-5, 1, 3]
    },
    {
      name: 'lake',
      real_name: '醉月湖',
      label: '13',
      info: { 
        name: '醉月湖',
        desc: '醉月湖是台大校園內最著名的景點之一，湖畔環境優美，是學生休閒、約會的理想場所。湖中小島與周圍綠樹相映成趣，四季景色各有特色。',
        activities: []
      },
      offset: [-10, 1, -6]
    }
  ];