// 多语言翻译数据
const translations = {
    'en': {
        // 页面基础信息
        'page-title': 'Online Gaming Center - Free Fun Games',
        'site-title': 'Game Center',
        'hero-title': 'Welcome to Free Online Gaming World',
        'hero-subtitle': 'Over 30 exciting games waiting for you to experience, supporting PC and mobile devices',
        'footer-text': 'All games from OnlineGames.io',
        'footer-desc': 'Your ultimate destination for free online gaming',
        'footer-categories': 'Game Categories', 
        'footer-info': 'Information',
        'footer-games-count': '30+ Free Games',
        'footer-devices': 'PC & Mobile Support',
        'footer-languages': '9 Languages',
        'footer-made': 'Made with love for gamers',
        'site-name': 'Online Gaming Center',
        'modal-game-title': 'Game Title',
        
        // 搜索相关
        'search-placeholder': 'Search for your favorite games...',
        'loading-text': 'Loading Amazing Games...',

        // 导航菜单
        'nav-racing': 'Racing Games',
        'nav-action': 'Action Games',
        'nav-puzzle': 'Puzzle Games',
        'nav-arcade': 'Arcade Games',
        'nav-girls': 'Girls Games',
        'nav-simulation': 'Simulation',

        // 分类标题
        'category-racing': 'Racing Games',
        'category-action': 'Action Games',
        'category-puzzle': 'Puzzle Games',
        'category-arcade': 'Arcade Games',
        'category-girls': 'Girls Games',
        'category-simulation': 'Simulation',

        // 游戏标签
        'tag-single': 'Single',
        'tag-multiplayer': 'Multiplayer',
        'tag-3d': '3D',
        'tag-racing': 'Racing',
        'tag-zombie': 'Zombie',
        'tag-drift': 'Drift',
        'tag-truck': 'Truck',
        'tag-transport': 'Transport',
        'tag-tank': 'Tank',
        'tag-military': 'Military',
        'tag-action': 'Action',
        'tag-shooting': 'Shooting',
        'tag-adventure': 'Adventure',
        'tag-battle': 'Battle',
        'tag-puzzle': 'Puzzle',
        'tag-card': 'Card',
        'tag-logic': 'Logic',
        'tag-match': 'Match',
        'tag-arcade': 'Arcade',
        'tag-skill': 'Skill',
        'tag-casino': 'Casino',
        'tag-girls': 'Girls',
        'tag-makeup': 'Makeup',
        'tag-love': 'Love',
        'tag-fashion': 'Fashion',
        'tag-cooking': 'Cooking',
        'tag-simulation': 'Simulation',
        'tag-shooting': 'Shooting',
        'tag-space': 'Space',
        'tag-car': 'Car',
        'tag-drive': 'Drive',
        'tag-stunt': 'Stunt',
        'tag-sport': 'Sport',
        'tag-escape': 'Escape',
        'tag-gta': 'GTA',
        'tag-drift': 'Drift',
        'tag-hunting': 'Hunting',
        'tag-pixel': 'Pixel',
        'tag-city': 'City',
        'tag-burnout': 'Burnout',
        'tag-police': 'Police',
        'tag-chase': 'Chase',
        'tag-monster': 'Monster',
        'tag-arena': 'Arena',
        'tag-real': 'Real',
        'tag-mafia': 'Mafia',
        'tag-fps': 'FPS',
        'tag-parkour': 'Parkour',
        'tag-nights': 'Nights',
        'tag-stickman': 'Stickman',
        'tag-top': 'Top',
        'tag-wrestle': 'Wrestle',
        'tag-destroy': 'Destroy',
        'tag-duel': 'Duel',
        'tag-rooftop': 'Rooftop',
        'tag-kick': 'Kick',
        'tag-alien': 'Alien',
        'tag-clicker': 'Clicker',
        'tag-idle': 'Idle',
        'tag-capybara': 'Capybara',
        'tag-nova': 'Nova',
        'tag-cookie': 'Cookie',
        'tag-basket': 'Basket',
        'tag-hoop': 'Hoop',
        'tag-farming': 'Farming',
        'tag-island': 'Island',
        'tag-flight': 'Flight',
        'tag-funny': 'Funny',
        'tag-girl': 'Girl',
        'tag-html5': 'HTML5',
        'tag-kids': 'Kids',
        'tag-mobile': 'Mobile',

        // 游戏名称和描述
        'game-apocalypse-truck': 'Apocalypse Truck',
        'game-apocalypse-truck-desc': 'Drive an armored truck to survive in the zombie apocalypse',
        
        'game-mini-cars': 'Mini Cars Racing',
        'game-mini-cars-desc': '2-player 3D mini car racing game',
        
        'game-drift-king': 'Drift King',
        'game-drift-king-desc': 'Realistic 3D drift simulation with 10 sports cars',
        
        'game-highway-traffic': 'Highway Traffic',
        'game-highway-traffic-desc': 'Dodge vehicles on busy highways',
        
        'game-monster-truck': 'Monster Truck Racing',
        'game-monster-truck-desc': 'Drive giant wheel trucks with jumps and flips',
        
        'game-truck-racing': 'Truck Racing',
        'game-truck-racing-desc': 'Safely transport cargo to destination',
        
        'game-tank-racing': 'Tank Racing',
        'game-tank-racing-desc': 'Drive tanks in military racing zones',
        
        'game-kick-pirate': 'Kick the Pirate',
        'game-kick-pirate-desc': 'Use various weapons to teach this arrogant pirate a lesson',
        
        'game-treasure-hunter': 'Treasure Hunter',
        'game-treasure-hunter-desc': 'Search for treasures in mysterious tombs and avoid dangers',
        
        'game-hook-wars': 'Hook Wars',
        'game-hook-wars-desc': '3D battle game, defeat opponents with hooks',
        
        'game-space-bullet': 'Mr Space Bullet',
        'game-space-bullet-desc': 'Shoot alien enemies on space stairs',
        
        'game-pyramid-solitaire': 'Pyramid Solitaire',
        'game-pyramid-solitaire-desc': 'Classic card game, pair cards that add up to 13',
        
        'game-solitaire': 'Classic Solitaire',
        'game-solitaire-desc': 'Classic single-player card game',
        
        'game-sugar-match': 'Sweet Sugar Match',
        'game-sugar-match-desc': 'Match same colored candies, similar to Candy Crush',
        
        'game-bird-path': 'Draw the Bird Path',
        'game-bird-path-desc': 'Help cute birds find their way home by drawing lines',
        
        'game-stack-fire': 'Stack Fire Ball',
        'game-stack-fire-desc': 'Guide the ball through stages, avoid black tiles',
        
        'game-egg-helix': 'Egg Helix',
        'game-egg-helix-desc': 'Control a cylinder with tennis rackets to bring the egg to the top',
        
        'game-crazy-ball': 'Crazy Ball Adventures',
        'game-crazy-ball-desc': 'Control the ball on sea tracks to reach the finish line',
        
        'game-jackpot-casino': 'Jackpot Casino',
        'game-jackpot-casino-desc': 'Slot machine game, line up to win prizes',
        
        'game-julie-beauty': 'Julie Beauty Salon',
        'game-julie-beauty-desc': 'Run a beauty salon, provide makeup and manicure services',
        
        'game-love-tester': 'Love Tester',
        'game-love-tester-desc': 'Test the love compatibility with your crush',
        
        'game-owl-rabbit': 'Owl and Rabbit Fashion',
        'game-owl-rabbit-desc': 'Style cute owls and rabbits with fashionable outfits',
        
        'game-fast-food-rush': 'Fast Food Rush',
        'game-fast-food-rush-desc': 'Run your own burger restaurant and serve customers',
        
        // 新增的模拟游戏
        'game-farming-island': 'Farming Island',
        'game-farming-island-desc': 'If you\'ve ever zoned out at work, dreaming about quitting everything and running your own farm on a sunny island… yeah, same.',
        
        'game-real-flight-simulator': 'Real Flight Simulator',
        'game-real-flight-simulator-desc': 'Real Flight Simulator is a realistic game that gives you the ultimate flight experience.',
        
        // 新增的赛车游戏
        'game-madalin-stunt-cars-pro': 'Madalin Stunt Cars Pro',
        'game-madalin-stunt-cars-pro-desc': 'Are you open to experiencing luxury? The 3D driving game Madalin Stunt Cars Pro features excellent graphics for lifelike experiences.',
        
        'game-gta-simulator': 'GTA Simulator',
        'game-gta-simulator-desc': 'You know that famous GTA video game series, right? Well, meet its online and free version on OnlineGames.io.',
        
        'game-escape-car': 'Escape Car',
        'game-escape-car-desc': 'Do you remember the very first Grand Theft Auto? That old-school, top-down chaos. Think of that and give it a fresh coat of chunky 3D graphics.',
        
        'game-drift-hunters-pro': 'Drift Hunters Pro',
        'game-drift-hunters-pro-desc': 'Can you hear the engine moaning? Drift Hunters Pro is a thrilling 3D game with high-quality graphics for those who are fond of drifting & racing.',
        
        'game-pixel-driver': 'Pixel Driver',
        'game-pixel-driver-desc': 'Sometimes, you just crave something simple. Nothing fancy. No complicated missions or stressful tasks. Just a pixel car, a colorful city, and the freedom to roam.',
        
        'game-burnout-city': 'Burnout City',
        'game-burnout-city-desc': 'Burnout City is a place where the night never ends. The streets of a hill-climbing city will be your playground.',
        
        'game-police-chase-drifter': 'Police Chase Drifter',
        'game-police-chase-drifter-desc': 'Collect money and ride with speed while escaping the police cars. Police Chase Drifter will give you the chance to become a drifter champion.',
        
        'game-monster-truck-race-arena': 'Monster Truck Race Arena',
        'game-monster-truck-race-arena-desc': 'Love giant wheels? You\'re in for a treat. Rev your engines in Monster Truck Race Arena, a 2D racing game where flipping your truck is the fastest way to lose!',
        
        'game-edys-car-simulator': 'Edys Car Simulator',
        'game-edys-car-simulator-desc': 'Do you fancy doing some sightseeing? Edy\'s Car Simulator is a game where you can freely wander the streets!',
        
        'game-super-car-driving': 'Super Car Driving',
        'game-super-car-driving-desc': 'Super Car Driving is an online car game where you get to drive super-performing high-end models like Ferrari, Lamborghini, Porsche and more.',
        
        'game-mafia-getaway-cars': 'Mafia Getaway Cars',
        'game-mafia-getaway-cars-desc': 'Tired of those repetitive police chase games? Want to play as the one who\'s breaking the law? Then get ready to join the mafia in this retro-style car game!',
        
        // 新增的动作游戏
        'game-masked-special-forces': 'Masked Special Forces',
        'game-masked-special-forces-desc': 'Masked Special Forces is a multiplayer first-person shooter game with a myriad of customization options.',
        
        'game-stickman-parkour': 'Stickman Parkour',
        'game-stickman-parkour-desc': 'Stickman Parkour is an online platformer game that you can play on your browser, embracing the easy-to-learn but hard-to-master mechanics.',
        
        'game-five-nights-at-poppy': 'Five Nights at Poppy',
        'game-five-nights-at-poppy-desc': 'Ever stayed late at school or walked through a dark hallway alone and felt like something was watching you?',
        
        'game-stickman-gta-city': 'Stickman GTA City',
        'game-stickman-gta-city-desc': 'You\'ve been digging the internet for ages, looking for a free GTA game to play on your browser.',
        
        'game-get-on-top': 'Get On Top',
        'game-get-on-top-desc': 'Remember those days when you and your brother used to wrestle for hours until one of you cried and complained to Mom?',
        
        'game-stickman-destruction': 'Stickman Destruction',
        'game-stickman-destruction-desc': 'How many parts can you divide a virtual character into? Stickman Destruction is an action-oriented stickman ragdoll game.',
        
        'game-rooftop-duel': 'Rooftop Duel',
        'game-rooftop-duel-desc': 'Can you handle a rooftop shoot-out with gravity, ragdoll limbs, and a toybox of overpowered weapons?',
        
        'game-kick-the-alien': 'Kick the Alien',
        'game-kick-the-alien-desc': 'Kick the Alien is a wacky clicker game where an evil alien has just arrived to colonize your planet.',
        
        // 新增的益智游戏
        'game-capybara-clicker-pro': 'Capybara Clicker Pro',
        'game-capybara-clicker-pro-desc': 'Capybara Clicker Pro is an idle clicker game in which you tap on the adorable Capybara to collect Capybara coins.',
        
        'game-nova-clicker': 'Nova Clicker',
        'game-nova-clicker-desc': 'Nova Clicker is an online idle game which starts you off with a single, smiley Nova, its name is FreezeNova.',
        
        'game-cookie-clicker-pro': 'Cookie Clicker Pro',
        'game-cookie-clicker-pro-desc': 'Love cookies? Want to create the biggest cookie empire the internet has ever seen? Then Cookie Clicker Pro is exactly your game!',
        
        // 新增的街机游戏
        'game-basket-hoop': 'Basket Hoop',
        'game-basket-hoop-desc': 'In Basket Hoop, gravity is your only challenge, and tapping is your sole weapon.',
        
        // 搜索相关
        'search-placeholder': 'Search for your favorite games...',
        'search-no-results': 'No games found',
        'search-no-results-desc': 'Try different keywords or browse our game categories',
        
        // 游戏加载相关
        'loading-text': 'Loading Amazing Games...',
        'game-loading-message': 'Due to browser security restrictions, the game will open in a new window for the best experience.',
        'open-game': 'Open Game',
        'try-embed': 'Try Here',
        'game-load-error': 'Game Loading Error',
        'game-load-error-desc': 'This game cannot be loaded due to security restrictions. Click the button below to open it in a new window.',
        'open-in-new-window': 'Open in New Window'
    },

    'zh-cn': {
        // 页面基础信息
        'page-title': '在线游戏中心 - 免费好玩的游戏',
        'site-title': '游戏中心',
        'hero-title': '欢迎来到免费在线游戏世界',
        'hero-subtitle': '超过30款精彩游戏等你来体验，支持PC和移动设备',
        'footer-text': '所有游戏均来自 OnlineGames.io',
        'footer-desc': '您最终的免费在线游戏目的地',
        'footer-categories': '游戏分类',
        'footer-info': '信息',
        'footer-games-count': '30+免费游戏',
        'footer-devices': 'PC和移动设备支持',
        'footer-languages': '9种语言',
        'footer-made': '为游戏玩家用心制作',
        'site-name': '在线游戏中心',
        'modal-game-title': '游戏标题',
        
        // 搜索相关
        'search-placeholder': '搜索您喜爱的游戏...',
        'loading-text': '正在加载精彩游戏...',

        // 导航菜单
        'nav-racing': '赛车游戏',
        'nav-action': '动作游戏',
        'nav-puzzle': '益智游戏',
        'nav-arcade': '街机游戏',
        'nav-girls': '女生游戏',
        'nav-simulation': '模拟经营',

        // 分类标题
        'category-racing': '赛车游戏',
        'category-action': '动作游戏',
        'category-puzzle': '益智游戏',
        'category-arcade': '街机游戏',
        'category-girls': '女生游戏',
        'category-simulation': '模拟经营',

        // 游戏标签
        'tag-single': '单人',
        'tag-multiplayer': '多人',
        'tag-3d': '3D',
        'tag-racing': '赛车',
        'tag-zombie': '僵尸',
        'tag-drift': '漂移',
        'tag-truck': '卡车',
        'tag-transport': '运输',
        'tag-tank': '坦克',
        'tag-military': '军事',
        'tag-action': '动作',
        'tag-shooting': '射击',
        'tag-adventure': '冒险',
        'tag-battle': '战斗',
        'tag-puzzle': '益智',
        'tag-card': '纸牌',
        'tag-logic': '逻辑',
        'tag-match': '消除',
        'tag-arcade': '街机',
        'tag-skill': '技巧',
        'tag-casino': '赌场',
        'tag-girls': '女生',
        'tag-makeup': '化妆',
        'tag-love': '恋爱',
        'tag-fashion': '时装',
        'tag-cooking': '烹饪',
        'tag-simulation': '模拟',
        'tag-shooting': '射击',
        'tag-space': '太空',
        'tag-car': '汽车',
        'tag-drive': '驾驶',
        'tag-stunt': '特技',
        'tag-sport': '运动',
        'tag-escape': '逃脱',
        'tag-gta': 'GTA',
        'tag-drift': '漂移',
        'tag-hunting': '狩猎',
        'tag-pixel': '像素',
        'tag-city': '城市',
        'tag-burnout': '燃烧',
        'tag-police': '警察',
        'tag-chase': '追逐',
        'tag-monster': '怪物',
        'tag-arena': '竞技场',
        'tag-real': '真实',
        'tag-mafia': '黑手党',
        'tag-fps': '第一人称射击',
        'tag-parkour': '跑酷',
        'tag-nights': '夜晚',
        'tag-stickman': '火柴人',
        'tag-top': '顶部',
        'tag-wrestle': '摔跤',
        'tag-destroy': '毁灭',
        'tag-duel': '决斗',
        'tag-rooftop': '屋顶',
        'tag-kick': '踢',
        'tag-alien': '外星人',
        'tag-clicker': '点击器',
        'tag-idle': '闲置',
        'tag-capybara': '水豚',
        'tag-nova': '新星',
        'tag-cookie': '曲奇',
        'tag-basket': '篮球',
        'tag-hoop': '框',
        'tag-farming': '农场',
        'tag-island': '岛屿',
        'tag-flight': '飞行',
        'tag-funny': '有趣',
        'tag-girl': '女生',
        'tag-html5': 'HTML5',
        'tag-kids': '儿童',
        'tag-mobile': '手机',

        // 游戏名称和描述
        'game-apocalypse-truck': '末日卡车',
        'game-apocalypse-truck-desc': '在僵尸末日中驾驶装甲卡车生存',
        
        'game-mini-cars': '迷你赛车',
        'game-mini-cars-desc': '支持双人对战的3D迷你赛车游戏',
        
        'game-drift-king': '漂移之王',
        'game-drift-king-desc': '真实3D漂移模拟，10辆跑车可选',
        
        'game-highway-traffic': '高速公路交通',
        'game-highway-traffic-desc': '在繁忙的高速公路上躲避车辆',
        
        'game-monster-truck': '怪物卡车竞速',
        'game-monster-truck-desc': '驾驶巨轮卡车完成跳跃和翻转',
        
        'game-truck-racing': '卡车运输',
        'game-truck-racing-desc': '安全运输货物到达目的地',
        
        'game-tank-racing': '坦克竞速',
        'game-tank-racing-desc': '驾驶坦克在军事区域竞速',
        
        'game-kick-pirate': '踢海盗',
        'game-kick-pirate-desc': '用各种武器教训这个傲慢的海盗',
        
        'game-treasure-hunter': '宝藏猎人',
        'game-treasure-hunter-desc': '在神秘古墓中寻找宝藏并躲避危险',
        
        'game-hook-wars': '钩子大战',
        'game-hook-wars-desc': '3D战斗游戏，用钩子击败对手',
        
        'game-space-bullet': '太空子弹先生',
        'game-space-bullet-desc': '在太空楼梯上射击外星敌人',
        
        'game-pyramid-solitaire': '金字塔纸牌',
        'game-pyramid-solitaire-desc': '经典的纸牌游戏，配对总和为13的牌',
        
        'game-solitaire': '经典纸牌',
        'game-solitaire-desc': '经典的单人纸牌游戏',
        
        'game-sugar-match': '甜蜜糖果消消乐',
        'game-sugar-match-desc': '匹配相同颜色的糖果，类似糖果传奇',
        
        'game-bird-path': '画鸟儿回家路',
        'game-bird-path-desc': '通过画线帮助可爱的鸟儿找到回家的路',
        
        'game-stack-fire': '堆叠火球',
        'game-stack-fire-desc': '引导球穿过各个阶段，避开黑色瓷砖',
        
        'game-egg-helix': '鸡蛋螺旋塔',
        'game-egg-helix-desc': '操控装有网球拍的圆筒，带鸡蛋到达顶部',
        
        'game-crazy-ball': '疯狂球大冒险',
        'game-crazy-ball-desc': '在海上轨道上操控球到达终点',
        
        'game-jackpot-casino': '大奖赌场',
        'game-jackpot-casino-desc': '老虎机游戏，连成一线赢取奖金',
        
        'game-julie-beauty': '朱莉美容院',
        'game-julie-beauty-desc': '经营美容院，为客人化妆和美甲',
        
        'game-love-tester': '爱情测试仪',
        'game-love-tester-desc': '测试你和心仪对象的爱情指数',
        
        'game-owl-rabbit': '猫头鹰兔子时装',
        'game-owl-rabbit-desc': '为可爱的猫头鹰和兔子搭配时装',
        
        'game-fast-food-rush': '快餐店大忙',
        'game-fast-food-rush-desc': '经营自己的汉堡店，服务顾客',
        
        // 新增的模拟游戏
        'game-farming-island': '农场岛',
        'game-farming-island-desc': '如果你曾经在工作时走神，梦想着放弃一切在阳光明媚的岛屿上经营自己的农场...是的，我们都有过。',
        
        'game-real-flight-simulator': '真实飞行模拟器',
        'game-real-flight-simulator-desc': '真实飞行模拟器是一款让你获得终极飞行体验的逼真游戏。',
        
        // 新增的赛车游戏
        'game-madalin-stunt-cars-pro': 'Madalin特技赛车专业版',
        'game-madalin-stunt-cars-pro-desc': '你愿意体验奢华吗？3D驾驶游戏Madalin特技赛车专业版拥有出色的画面，带来逼真的体验。',
        
        'game-gta-simulator': 'GTA模拟器',
        'game-gta-simulator-desc': '你知道著名的GTA游戏系列，对吧？现在在OnlineGames.io上遇见它的在线免费版本。',
        
        'game-escape-car': '逃脱汽车',
        'game-escape-car-desc': '你还记得最初的侠盗猎车手吗？那种老式的俯视角混乱。想象一下，给它加上新鲜的粗糙3D画面。',
        
        'game-drift-hunters-pro': '漂移猎手专业版',
        'game-drift-hunters-pro-desc': '你能听到引擎的咆哮吗？漂移猎手专业版是一款激动人心的3D游戏，为漂移和赛车爱好者提供高质量的画面。',
        
        'game-pixel-driver': '像素司机',
        'game-pixel-driver-desc': '有时候，你只是渴望简单的东西。没有花哨的任务或紧张的任务。只是一辆像素汽车，一个彩色的城市，和自由漫游的权利。',
        
        'game-burnout-city': '燃烧之城',
        'game-burnout-city-desc': '燃烧之城是一个永不结束的夜晚之地。爬坡城市的街道将成为你的游乐场。',
        
        'game-police-chase-drifter': '警察追逐漂移者',
        'game-police-chase-drifter-desc': '收集金钱，高速驾驶逃脱警车。警察追逐漂移者将给你机会成为漂移冠军。',
        
        'game-monster-truck-race-arena': '怪物卡车竞技场',
        'game-monster-truck-race-arena-desc': '喜欢巨大的轮子吗？你会喜欢的。启动引擎在怪物卡车竞技场，翻车是最快败北的方式！',
        
        'game-edys-car-simulator': 'Edy汽车模拟器',
        'game-edys-car-simulator-desc': '你想观光吗？Edy汽车模拟器是一个可以自由在街道上漫游的游戏！',
        
        'game-super-car-driving': '超级汽车驾驶',
        'game-super-car-driving-desc': '超级汽车驾驶是一款在线汽车游戏，你可以驾驶法拉利、兰博基尼、保时捷等高性能高端车型。',
        
        'game-mafia-getaway-cars': '黑手党逃跑车',
        'game-mafia-getaway-cars-desc': '厌倦了那些重复的警察追逐游戏？想要扮演违法者？那就准备加入黑手党这款复古风格的汽车游戏！',
        
        // 新增的动作游戏
        'game-masked-special-forces': '蒙面特种部队',
        'game-masked-special-forces-desc': '蒙面特种部队是一款拥有大量自定义选项的多人第一人称射击游戏。',
        
        'game-stickman-parkour': '火柴人跑酷',
        'game-stickman-parkour-desc': '火柴人跑酷是一款可以在浏览器上玩的在线平台游戏，拥抱易学难精的机制。',
        
        'game-five-nights-at-poppy': '波比的五夜',
        'game-five-nights-at-poppy-desc': '你有没有在学校待到很晚或独自走过黑暗的走廊时感觉有什么在看着你？',
        
        'game-stickman-gta-city': '火柴人GTA城市',
        'game-stickman-gta-city-desc': '你已经在网上挖掘了很久，寻找一个可以在浏览器上玩的免费GTA游戏。',
        
        'game-get-on-top': '爬到顶部',
        'game-get-on-top-desc': '还记得你和兄弟摔跤数小时直到其中一人哭着向妈妈抱怨的日子吗？',
        
        'game-stickman-destruction': '火柴人毁灭',
        'game-stickman-destruction-desc': '你能把一个虚拟角色分成多少部分？火柴人毁灭是一款以动作为导向的火柴人布娃娃游戏。',
        
        'game-rooftop-duel': '屋顶决斗',
        'game-rooftop-duel-desc': '你能处理带有重力、布娃娃四肢和一堆过强武器的屋顶射击吗？',
        
        'game-kick-the-alien': '踢外星人',
        'game-kick-the-alien-desc': '踢外星人是一款古怪的点击游戏，邪恶的外星人刚刚到达殖民你的星球。',
        
        // 新增的益智游戏
        'game-capybara-clicker-pro': '水豚点击器专业版',
        'game-capybara-clicker-pro-desc': '水豚点击器专业版是一款闲置点击游戏，你点击可爱的水豚收集水豚币。',
        
        'game-nova-clicker': '新星点击器',
        'game-nova-clicker-desc': '新星点击器是一款在线闲置游戏，从一个单独的、笑脸新星开始，它的名字是FreezeNova。',
        
        'game-cookie-clicker-pro': '曲奇点击器专业版',
        'game-cookie-clicker-pro-desc': '喜欢曲奇吗？想要创建互联网上最大的曲奇帝国？那么曲奇点击器专业版正是你的游戏！',
        
        // 新增的街机游戏
        'game-basket-hoop': '篮球框',
        'game-basket-hoop-desc': '在篮球框中，重力是你唯一的挑战，点击是你唯一的武器。',
        
        // 搜索相关
        'search-placeholder': '搜索您喜爱的游戏...',
        'search-no-results': '未找到游戏',
        'search-no-results-desc': '请尝试不同的关键词或浏览我们的游戏分类',
        
        // 游戏加载相关
        'loading-text': '正在加载精彩游戏...',
        'game-loading-message': '由于浏览器安全限制，游戏将在新窗口中打开以获得最佳体验。',
        'open-game': '打开游戏',
        'try-embed': '在此尝试',
        'game-load-error': '游戏加载错误',
        'game-load-error-desc': '由于安全限制，此游戏无法加载。请点击下方按钮在新窗口中打开。',
        'open-in-new-window': '在新窗口打开'
    },

    'zh-tw': {
        // 页面基础信息
        'page-title': '線上遊戲中心 - 免費好玩的遊戲',
        'site-title': '遊戲中心',
        'hero-title': '歡迎來到免費線上遊戲世界',
        'hero-subtitle': '超過30款精彩遊戲等你來體驗，支援PC和行動裝置',
        'footer-text': '所有遊戲均來自 OnlineGames.io',
        'footer-desc': '您最終的免費線上遊戲目的地',
        'footer-categories': '遊戲分類',
        'footer-info': '資訊',
        'footer-games-count': '30+免費遊戲',
        'footer-devices': 'PC和行動裝置支援',
        'footer-languages': '9種語言',
        'footer-made': '為遊戲玩家用心製作',
        'site-name': '線上遊戲中心',
        'modal-game-title': '遊戲標題',

        // 导航菜单
        'nav-racing': '賽車遊戲',
        'nav-action': '動作遊戲',
        'nav-puzzle': '益智遊戲',
        'nav-arcade': '街機遊戲',
        'nav-girls': '女生遊戲',
        'nav-simulation': '模擬經營',

        // 分类标题
        'category-racing': '賽車遊戲',
        'category-action': '動作遊戲',
        'category-puzzle': '益智遊戲',
        'category-arcade': '街機遊戲',
        'category-girls': '女生遊戲',
        'category-simulation': '模擬經營',

        // 游戏标签
        'tag-single': '單人',
        'tag-multiplayer': '多人',
        'tag-3d': '3D',
        'tag-racing': '賽車',
        'tag-zombie': '殭屍',
        'tag-drift': '漂移',
        'tag-truck': '卡車',
        'tag-transport': '運輸',
        'tag-tank': '坦克',
        'tag-military': '軍事',
        'tag-action': '動作',
        'tag-shooting': '射擊',
        'tag-adventure': '冒險',
        'tag-battle': '戰鬥',
        'tag-puzzle': '益智',
        'tag-card': '紙牌',
        'tag-logic': '邏輯',
        'tag-match': '消除',
        'tag-arcade': '街機',
        'tag-skill': '技巧',
        'tag-casino': '賭場',
        'tag-girls': '女生',
        'tag-makeup': '化妝',
        'tag-love': '戀愛',
        'tag-fashion': '時裝',
        'tag-cooking': '烹飪',
        'tag-simulation': '模擬',
        'tag-shooting': '射擊',
        'tag-space': '太空',

        // 游戏名称和描述 (部分示例)
        'game-apocalypse-truck': '末日卡車',
        'game-apocalypse-truck-desc': '在殭屍末日中駕駛裝甲卡車生存',
        'game-mini-cars': '迷你賽車',
        'game-mini-cars-desc': '支援雙人對戰的3D迷你賽車遊戲',
        
        // 搜索相关
        'search-placeholder': '搜尋您喜愛的遊戲...',
        'search-no-results': '未找到遊戲',
        'search-no-results-desc': '請嘗試不同的關鍵詞或瀏覽我們的遊戲分類',
        
        // 游戏加载相关
        'loading-text': '正在載入精彩遊戲...',
        'game-loading-message': '由於瀏覽器安全限制，遊戲將在新視窗中開啟以獲得最佳體驗。',
        'open-game': '開啟遊戲',
        'try-embed': '在此嘗試'
    },

    'ja': {
        // 页面基础信息
        'page-title': 'オンラインゲームセンター - 無料で楽しいゲーム',
        'site-title': 'ゲームセンター',
        'hero-title': '無料オンラインゲームの世界へようこそ',
        'hero-subtitle': 'PC とモバイルデバイスに対応した30以上のエキサイティングなゲーム',
        'footer-text': 'すべてのゲームは OnlineGames.io から',
        'footer-desc': '無料オンラインゲームの究極の目的地',
        'footer-categories': 'ゲームカテゴリ',
        'footer-info': '情報',
        'footer-games-count': '30+無料ゲーム',
        'footer-devices': 'PC・モバイル対応',
        'footer-languages': '9言語対応',
        'footer-made': 'ゲーマーのために愛を込めて制作',
        'site-name': 'オンラインゲームセンター',
        'modal-game-title': 'ゲームタイトル',

        // 导航菜单
        'nav-racing': 'レーシングゲーム',
        'nav-action': 'アクションゲーム',
        'nav-puzzle': 'パズルゲーム',
        'nav-arcade': 'アーケードゲーム',
        'nav-girls': '女の子向けゲーム',
        'nav-simulation': 'シミュレーション',

        // 分类标题
        'category-racing': 'レーシングゲーム',
        'category-action': 'アクションゲーム',
        'category-puzzle': 'パズルゲーム',
        'category-arcade': 'アーケードゲーム',
        'category-girls': '女の子向けゲーム',
        'category-simulation': 'シミュレーション',
        
        // 搜索相关
        'search-placeholder': 'お気に入りのゲームを検索...',
        'search-no-results': 'ゲームが見つかりません',
        'search-no-results-desc': '異なるキーワードを試すか、ゲームカテゴリを閲覧してください',
        
        // 游戏加载相关
        'loading-text': '素晴らしいゲームを読み込み中...',
        'game-loading-message': 'ブラウザのセキュリティ制限により、ゲームは新しいウィンドウで開きます。',
        'open-game': 'ゲームを開く',
        'try-embed': 'ここで試す'
    },

    'ko': {
        // 页面基础信息
        'page-title': '온라인 게임 센터 - 무료 재미있는 게임',
        'site-title': '게임 센터',
        'hero-title': '무료 온라인 게임 세계에 오신 것을 환영합니다',
        'hero-subtitle': 'PC와 모바일 기기를 지원하는 30개 이상의 흥미진진한 게임',
        'footer-text': '모든 게임은 OnlineGames.io 제공',
        'footer-desc': '무료 온라인 게임의 최고 목적지',
        'footer-categories': '게임 카테고리',
        'footer-info': '정보',
        'footer-games-count': '30+ 무료 게임',
        'footer-devices': 'PC 및 모바일 지원',
        'footer-languages': '9개 언어',
        'footer-made': '게이머를 위해 사랑으로 제작',
        'site-name': '온라인 게임 센터',
        'modal-game-title': '게임 제목',

        // 导航菜单
        'nav-racing': '레이싱 게임',
        'nav-action': '액션 게임',
        'nav-puzzle': '퍼즐 게임',
        'nav-arcade': '아케이드 게임',
        'nav-girls': '여성 게임',
        'nav-simulation': '시뮬레이션',

        // 分类标题
        'category-racing': '레이싱 게임',
        'category-action': '액션 게임',
        'category-puzzle': '퍼즐 게임',
        'category-arcade': '아케이드 게임',
        'category-girls': '여성 게임',
        'category-simulation': '시뮬레이션',
        
        // 搜索相关
        'search-placeholder': '좋아하는 게임을 검색하세요...',
        'search-no-results': '게임을 찾을 수 없습니다',
        'search-no-results-desc': '다른 키워드를 시도하거나 게임 카테고리를 둘러보세요',
        
        // 游戏加载相关
        'loading-text': '멋진 게임을 로딩 중...',
        'game-loading-message': '브라우저 보안 제한으로 인해 게임이 새 창에서 열립니다.',
        'open-game': '게임 열기',
        'try-embed': '여기서 시도'
    },

    'es': {
        // 页面基础信息
        'page-title': 'Centro de Juegos Online - Juegos Gratis Divertidos',
        'site-title': 'Centro de Juegos',
        'hero-title': 'Bienvenido al Mundo de Juegos Online Gratis',
        'hero-subtitle': 'Más de 30 juegos emocionantes esperándote, compatible con PC y dispositivos móviles',
        'footer-text': 'Todos los juegos de OnlineGames.io',
        'footer-desc': 'Tu destino definitivo para juegos online gratis',
        'footer-categories': 'Categorías de Juegos',
        'footer-info': 'Información',
        'footer-games-count': '30+ Juegos Gratis',
        'footer-devices': 'Soporte PC y Móvil',
        'footer-languages': '9 Idiomas',
        'footer-made': 'Hecho con amor para gamers',
        'site-name': 'Centro de Juegos Online',
        'modal-game-title': 'Título del Juego',

        // 导航菜单
        'nav-racing': 'Juegos de Carreras',
        'nav-action': 'Juegos de Acción',
        'nav-puzzle': 'Juegos de Puzzle',
        'nav-arcade': 'Juegos Arcade',
        'nav-girls': 'Juegos para Chicas',
        'nav-simulation': 'Simulación',

        // 分类标题
        'category-racing': 'Juegos de Carreras',
        'category-action': 'Juegos de Acción',
        'category-puzzle': 'Juegos de Puzzle',
        'category-arcade': 'Juegos Arcade',
        'category-girls': 'Juegos para Chicas',
        'category-simulation': 'Simulación',
        
        // 游戏加载相关
        'loading-text': 'Cargando Juegos Increíbles...',
        'game-loading-message': 'Debido a restricciones de seguridad del navegador, el juego se abrirá en una nueva ventana.',
        'open-game': 'Abrir Juego',
        'try-embed': 'Probar Aquí'
    },

    'fr': {
        // 页面基础信息
        'page-title': 'Centre de Jeux en Ligne - Jeux Gratuits Amusants',
        'site-title': 'Centre de Jeux',
        'hero-title': 'Bienvenue dans le Monde des Jeux en Ligne Gratuits',
        'hero-subtitle': 'Plus de 30 jeux passionnants vous attendent, compatible PC et mobile',
        'footer-text': 'Tous les jeux de OnlineGames.io',
        'footer-desc': 'Votre destination ultime pour les jeux en ligne gratuits',
        'footer-categories': 'Catégories de Jeux',
        'footer-info': 'Informations',
        'footer-games-count': '30+ Jeux Gratuits',
        'footer-devices': 'Support PC et Mobile',
        'footer-languages': '9 Langues',
        'footer-made': 'Fait avec amour pour les gamers',
        'site-name': 'Centre de Jeux en Ligne',
        'modal-game-title': 'Titre du Jeu',

        // 导航菜单
        'nav-racing': 'Jeux de Course',
        'nav-action': 'Jeux d\'Action',
        'nav-puzzle': 'Jeux de Puzzle',
        'nav-arcade': 'Jeux d\'Arcade',
        'nav-girls': 'Jeux pour Filles',
        'nav-simulation': 'Simulation',

        // 分类标题
        'category-racing': 'Jeux de Course',
        'category-action': 'Jeux d\'Action',
        'category-puzzle': 'Jeux de Puzzle',
        'category-arcade': 'Jeux d\'Arcade',
        'category-girls': 'Jeux pour Filles',
        'category-simulation': 'Simulation'
    },

    'de': {
        // 页面基础信息
        'page-title': 'Online Gaming Center - Kostenlose Lustige Spiele',
        'site-title': 'Spielezentrum',
        'hero-title': 'Willkommen in der Welt der kostenlosen Online-Spiele',
        'hero-subtitle': 'Über 30 aufregende Spiele warten auf Sie, unterstützt PC und mobile Geräte',
        'footer-text': 'Alle Spiele von OnlineGames.io',
        'footer-desc': 'Ihr ultimatives Ziel für kostenlose Online-Spiele',
        'footer-categories': 'Spielkategorien',
        'footer-info': 'Informationen',
        'footer-games-count': '30+ Kostenlose Spiele',
        'footer-devices': 'PC und Mobile Unterstützung',
        'footer-languages': '9 Sprachen',
        'footer-made': 'Mit Liebe für Gamer gemacht',
        'site-name': 'Online Gaming Center',
        'modal-game-title': 'Spieltitel',

        // 导航菜单
        'nav-racing': 'Rennspiele',
        'nav-action': 'Actionspiele',
        'nav-puzzle': 'Puzzlespiele',
        'nav-arcade': 'Arcade-Spiele',
        'nav-girls': 'Mädchenspiele',
        'nav-simulation': 'Simulation',

        // 分类标题
        'category-racing': 'Rennspiele',
        'category-action': 'Actionspiele',
        'category-puzzle': 'Puzzlespiele',
        'category-arcade': 'Arcade-Spiele',
        'category-girls': 'Mädchenspiele',
        'category-simulation': 'Simulation'
    },

    'ru': {
        // 页面基础信息
        'page-title': 'Центр Онлайн Игр - Бесплатные Веселые Игры',
        'site-title': 'Игровой Центр',
        'hero-title': 'Добро пожаловать в мир бесплатных онлайн игр',
        'hero-subtitle': 'Более 30 увлекательных игр ждут вас, поддерживает ПК и мобильные устройства',
        'footer-text': 'Все игры от OnlineGames.io',
        'footer-desc': 'Ваше идеальное место для бесплатных онлайн игр',
        'footer-categories': 'Категории Игр',
        'footer-info': 'Информация',
        'footer-games-count': '30+ Бесплатных Игр',
        'footer-devices': 'Поддержка ПК и Мобильных',
        'footer-languages': '9 Языков',
        'footer-made': 'Сделано с любовью для геймеров',
        'site-name': 'Центр Онлайн Игр',
        'modal-game-title': 'Название Игры',

        // 导航菜单
        'nav-racing': 'Гоночные Игры',
        'nav-action': 'Игры Действий',
        'nav-puzzle': 'Головоломки',
        'nav-arcade': 'Аркадные Игры',
        'nav-girls': 'Игры для Девочек',
        'nav-simulation': 'Симуляция',

        // 分类标题
        'category-racing': 'Гоночные Игры',
        'category-action': 'Игры Действий',
        'category-puzzle': 'Головоломки',
        'category-arcade': 'Аркадные Игры',
        'category-girls': 'Игры для Девочек',
        'category-simulation': 'Симуляция'
    }
};

// 语言显示名称映射
const languageNames = {
    'en': 'EN',
    'zh-cn': '中文',
    'zh-tw': '繁中',
    'ja': '日本語',
    'ko': '한국어',
    'es': 'ES',
    'fr': 'FR',
    'de': 'DE',
    'ru': 'RU'
};

// 当前语言
let currentLanguage = 'en';

// 初始化语言系统
function initializeI18n() {
    // 从本地存储获取保存的语言设置
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // 应用翻译
    applyTranslations();
    updateLanguageButton();
}

// 应用翻译
function applyTranslations() {
    const elementsWithI18n = document.querySelectorAll('[data-i18n]');
    
    elementsWithI18n.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLanguage]?.[key];
        
        if (translation) {
            // 对于title标签，更新document.title
            if (element.tagName.toLowerCase() === 'title') {
                document.title = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // 处理占位符翻译
    const elementsWithPlaceholder = document.querySelectorAll('[data-i18n-placeholder]');
    elementsWithPlaceholder.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = translations[currentLanguage]?.[key];
        
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // 更新HTML语言属性
    document.documentElement.lang = currentLanguage;
}

// 切换语言
function switchLanguage(language) {
    if (translations[language]) {
        currentLanguage = language;
        localStorage.setItem('preferred-language', language);
        applyTranslations();
        updateLanguageButton();
    }
}

// 更新语言按钮显示
function updateLanguageButton() {
    const currentLangElement = document.getElementById('currentLang');
    if (currentLangElement) {
        currentLangElement.textContent = languageNames[currentLanguage] || 'EN';
    }
}

// 确保函数在全局作用域中可用
window.translations = translations;
window.switchLanguage = switchLanguage;
window.initializeI18n = initializeI18n;
window.applyTranslations = applyTranslations;
window.updateLanguageButton = updateLanguageButton;

// 导出给其他脚本使用（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, switchLanguage, initializeI18n, applyTranslations, updateLanguageButton };
} 