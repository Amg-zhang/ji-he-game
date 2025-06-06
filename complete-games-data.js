// 完整游戏数据库 - 包含所有游戏
// 这个文件现在是唯一的数据源

const GAMES_DATABASE = {
    // 赛车游戏
    racing: [
        {
            id: 'apocalypse-truck',
            title: 'Apocalypse Truck',
            embed: 'https://cloud.onlinegames.io/games/2021/1/apocalypse-truck/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/1015/responsive/apocalypse-truck-xs.jpg',
            tags: '1-player,2d,car,crazy,driving,free,racing,truck,zombie',
            description: 'Drive an armored truck to survive in the zombie apocalypse'
        },
        {
            id: 'mini-cars-racing',
            title: 'Mini Cars Racing',
            embed: 'https://cloud.onlinegames.io/games/2021/unity/mini-cars-racing/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/1010/responsive/Mini-Cars-Racing-xs.jpg',
            tags: '2-player,3d,arcade,car,crazy,driving,free,fun,racing,speed,stunt,unity',
            description: '2-player 3D mini car racing game'
        },
        {
            id: 'drift-king',
            title: 'Drift King',
            embed: 'https://www.onlinegames.io/games/2024/unity/drift-king/index.html',
            image: 'https://www.onlinegames.io/media/posts/729/responsive/Drift-King-xs.jpg',
            tags: '3d,car,crazy,drift,driving,free,multiplayer,simulator,speed,unity',
            description: 'Realistic 3D drift simulation with 10 sports cars'
        },
        {
            id: 'highway-traffic',
            title: 'Highway Traffic',
            embed: 'https://www.onlinegames.io/games/2022/unity/highway-traffic/index.html',
            image: 'https://www.onlinegames.io/media/posts/32/responsive/Highway-Traffic-2-xs.jpg',
            tags: '1-player,3d,car,crash,crazy,driving,endless,free,police,racing,speed,traffic,unity',
            description: 'Dodge vehicles on busy highways'
        },
        {
            id: 'monster-truck-racing',
            title: 'Monster Truck Racing',
            embed: 'https://www.onlinegames.io/games/2021/1/monster-truck-racing/index.html',
            image: 'https://www.onlinegames.io/media/posts/826/responsive/Monster-Truck-Racing-xs.jpg',
            tags: '1-player,2d,car,crazy,free,html5,mobile,racing,truck',
            description: 'Drive giant wheel trucks with jumps and flips'
        },
        {
            id: 'truck-racing',
            title: 'Truck Racing',
            embed: 'https://www.onlinegames.io/games/2022/construct/144/truck-racing/index.html',
            image: 'https://www.onlinegames.io/media/posts/712/responsive/Truck-Racing-xs.jpg',
            tags: '1-player,2d,car,crazy,free,html5,mobile,racing,truck',
            description: 'Safely transport cargo to destination'
        },
        {
            id: 'tank-racing',
            title: 'Tank Racing',
            embed: 'https://www.onlinegames.io/games/2022/construct/151/tank-racing/index.html',
            image: 'https://www.onlinegames.io/media/posts/484/responsive/Tank-Racing-Online-xs.jpg',
            tags: '2d,armor,army,driving,free,mobile,multiplayer,racing,tank',
            description: 'Drive tanks in military racing zones'
        },
        {
            id: 'madalin-stunt-cars-pro',
            title: 'Madalin Stunt Cars Pro',
            embed: 'https://www.onlinegames.io/games/2023/unity/madalin-stunt-cars-pro/index.html',
            image: 'https://www.onlinegames.io/media/posts/401/responsive/Madalin-Stunt-Cars-Pro-Game-xs.jpg',
            tags: '3d,car,crazy,drift,driving,free,multiplayer,speed,stunt,unity',
            description: 'Are you open to experiencing luxury? The 3D driving game Madalin Stunt Cars Pro features excellent graphics for lifelike experiences.'
        },
        {
            id: 'gta-simulator',
            title: 'GTA Simulator',
            embed: 'https://www.onlinegames.io/games/2023/unity2/gta-simulator/index.html',
            image: 'https://www.onlinegames.io/media/posts/416/responsive/GTA-Simulator-xs.jpg',
            tags: '1-player,3d,action,car,driving,free,gta,shooting,simulator,traffic,unity',
            description: 'You know that famous GTA video game series, right? Well, meet its online and free version on OnlineGames.io.'
        },
        {
            id: 'escape-car',
            title: 'Escape Car',
            embed: 'https://cloud.onlinegames.io/games/2025/unity2/escape-car/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/1000/responsive/Escape-Car-xs.jpg',
            tags: '1-player,3d,car,crazy,drift,driving,free,gta,html5,mobile,police,skill,speed,traffic',
            description: 'Do you remember the very first Grand Theft Auto? That old-school, top-down chaos. Think of that and give it a fresh coat of chunky 3D graphics.'
        },
        {
            id: 'drift-hunters-pro',
            title: 'Drift Hunters Pro',
            embed: 'https://www.onlinegames.io/games/2023/unity/drift-hunters-pro/index.html',
            image: 'https://www.onlinegames.io/media/posts/397/responsive/Drift-Hunters-Pro-xs.jpg',
            tags: '3d,car,crash,drift,driving,free,multiplayer,racing,speed,stunt,unity',
            description: 'Can you hear the engine moaning? Drift Hunters Pro is a thrilling 3D game with high-quality graphics for those who are fond of drifting & racing.'
        },
        {
            id: 'pixel-driver',
            title: 'Pixel Driver',
            embed: 'https://cloud.onlinegames.io/games/2021/unity3/pixel-driver/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/990/responsive/Pixel-Driver-xs.jpg',
            tags: '1-player,3d,car,crazy,driving,free,pixel,racing,speed,traffic',
            description: 'Sometimes, you just crave something simple. Nothing fancy. No complicated missions or stressful tasks. Just a pixel car, a colorful city, and the freedom to roam.'
        },
        {
            id: 'burnout-city',
            title: 'Burnout City',
            embed: 'https://cloud.onlinegames.io/games/2024/unity/burnout-city/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/861/responsive/burnoutcity-xs.jpg',
            tags: '1-player,3d,car,drift,driving,free,gta,racing,simulator,speed,stunt,unity',
            description: 'Burnout City is a place where the night never ends. The streets of a hill-climbing city will be your playground.'
        },
        {
            id: 'police-chase-drifter',
            title: 'Police Chase Drifter',
            embed: 'https://www.onlinegames.io/games/2021/3/police-chase-drifter/index.html',
            image: 'https://www.onlinegames.io/media/posts/155/responsive/Police-Chase-Drifter-Online-xs.jpg',
            tags: '1-player,2d,car,crazy,drift,driving,free,gta,html5,mobile,police,skill,speed,traffic',
            description: 'Collect money and ride with speed while escaping the police cars. Police Chase Drifter will give you the chance to become a drifter champion.'
        },
        {
            id: 'monster-truck-race-arena',
            title: 'Monster Truck Race Arena',
            embed: 'https://cloud.onlinegames.io/games/2021/3/monster-truck-race-arena/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/996/responsive/Monster-Truck-Race-Arena-xs.jpg',
            tags: '1-player,2d,car,crazy,free,racing,truck',
            description: 'Love giant wheels? You\'re in for a treat. Rev your engines in Monster Truck Race Arena, a 2D racing game where flipping your truck is the fastest way to lose!'
        },
        {
            id: 'edys-car-simulator',
            title: 'Edys Car Simulator',
            embed: 'https://www.onlinegames.io/games/2022/unity/edys-car-simulator/index.html',
            image: 'https://www.onlinegames.io/media/posts/238/responsive/Edys-Car-Simulator-Online-xs.jpg',
            tags: '1-player,3d,car,crash,driving,free,racing,simulator,speed,stunt',
            description: 'Do you fancy doing some sightseeing? Edy\'s Car Simulator is a game where you can freely wander the streets!'
        },
        {
            id: 'super-car-driving',
            title: 'Super Car Driving',
            embed: 'https://cloud.onlinegames.io/games/2024/unity2/super-car-driving/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/854/responsive/supercardriving-2-xs.jpg',
            tags: '1-player,3d,car,crazy,drift,driving,free,parking,racing,speed,stunt,traffic',
            description: 'Super Car Driving is an online car game where you get to drive super-performing high-end models like Ferrari, Lamborghini, Porsche and more.'
        },
        {
            id: 'mafia-getaway-cars',
            title: 'Mafia Getaway Cars',
            embed: 'https://cloud.onlinegames.io/games/2025/construct/298/mafia-getaway-cars/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/982/responsive/Mafia-Getaway-Cars-xs.jpg',
            tags: '1-player,2d,car,crazy,drift,driving,free,gta,html5,mobile,police,skill,speed,traffic',
            description: 'Tired of those repetitive police chase games? Want to play as the one who\'s breaking the law? Then get ready to join the mafia in this retro-style car game!'
        }
    ],
    // 动作游戏
    action: [
        {
            id: 'kick-the-pirate',
            title: 'Kick the Pirate',
            embed: 'https://cloud.onlinegames.io/games/2022/construct/92/kick-the-pirate/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/1012/responsive/Kick-The-Pirate-xs.jpg',
            tags: '1-player,2d,clicker,crazy,destroy,free,fun,funny,mobile,mouse,pirate,weapon',
            description: 'Use various weapons to teach this arrogant pirate a lesson'
        },
        {
            id: 'masked-special-forces',
            title: 'Masked Special Forces',
            embed: 'https://www.onlinegames.io/games/2022/unity2/masked-special-forces/index.html',
            image: 'https://www.onlinegames.io/media/posts/310/responsive/Masked-Special-Forces-FPS-xs.jpg',
            tags: '3d,action,armor,battle-royale,first-person-shooter,free,gun,io-games,multiplayer,shooting,war,weapon',
            description: 'Masked Special Forces is a multiplayer first-person shooter game with a myriad of customization options.'
        },
        {
            id: 'stickman-parkour',
            title: 'Stickman Parkour',
            embed: 'https://cloud.onlinegames.io/games/2024/construct/219/stickman-parkour/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/871/responsive/stickman-parkour-OG-xs.jpg',
            tags: '1-player,2d,action,adventure,arcade,free,fun,mobile,parkour,physics,running,stickman',
            description: 'Stickman Parkour is an online platformer game that you can play on your browser, embracing the easy-to-learn but hard-to-master mechanics.'
        },
        {
            id: 'five-nights-at-poppy',
            title: 'Five Nights at Poppy',
            embed: 'https://cloud.onlinegames.io/games/2025/unity2/five-nights-at-poppy/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/992/responsive/Five-Nights-at-Poppy-xs.jpg',
            tags: '1-player,2d,crazy,free,horror,mouse,survival',
            description: 'Ever stayed late at school or walked through a dark hallway alone and felt like something was watching you?'
        },
        {
            id: 'stickman-gta-city',
            title: 'Stickman GTA City',
            embed: 'https://cloud.onlinegames.io/games/2024/unity3/stickman-gta-city/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/900/responsive/stickman-gta-city-free-xs.jpg',
            tags: '1-player,3d,action,adventure,battle,car,driving,free,gta,gun,shooting,simulator,traffic,unity,weapon',
            description: 'You\'ve been digging the internet for ages, looking for a free GTA game to play on your browser.'
        },
        {
            id: 'get-on-top',
            title: 'Get On Top',
            embed: 'https://www.onlinegames.io/games/2024/code/6/get-on-top/index.html',
            image: 'https://www.onlinegames.io/media/posts/697/responsive/Get-on-Top-xs.jpg',
            tags: '2-player,2d,action,arcade,battle,combat,crazy,free,fun,html5,physics,stickman',
            description: 'Remember those days when you and your brother used to wrestle for hours until one of you cried and complained to Mom?'
        },
        {
            id: 'stickman-destruction',
            title: 'Stickman Destruction',
            embed: 'https://www.onlinegames.io/games/2021/unity3/stickman-destruction/index.html',
            image: 'https://www.onlinegames.io/media/posts/233/responsive/Stickman-Destruction-xs.jpg',
            tags: '1-player,2d,crash,crazy,destroy,free,fun,funny,mobile,physics,simulator,stickman',
            description: 'How many parts can you divide a virtual character into? Stickman Destruction is an action-oriented stickman ragdoll game.'
        },
        {
            id: 'rooftop-duel',
            title: 'Rooftop Duel',
            embed: 'https://cloud.onlinegames.io/games/2025/construct/213/rooftop-duel/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/1002/responsive/Rooftop-Duel-Online-xs.jpg',
            tags: '2-player,2d,arcade,arena,combat,free,fun,gun,mobile,physics,shooting,weapon',
            description: 'Can you handle a rooftop shoot-out with gravity, ragdoll limbs, and a toybox of overpowered weapons?'
        },
        {
            id: 'kick-the-alien',
            title: 'Kick the Alien',
            embed: 'https://cloud.onlinegames.io/games/2021/4/kick-the-alien/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/997/responsive/Kick-the-Alien-xs.jpg',
            tags: '1-player,2d,clicker,crazy,destroy,free,fun,funny,mobile,mouse,physics',
            description: 'Kick the Alien is a wacky clicker game where an evil alien has just arrived to colonize your planet.'
        }
    ],
    // 益智游戏
    puzzle: [
        {
            id: 'pyramid-solitaire',
            title: 'Pyramid Solitaire',
            embed: 'https://www.onlinegames.io/games/2025/html/solitaire/index-og.html#pyramid',
            image: 'https://www.onlinegames.io/media/posts/1006/responsive/pyramid-Solitaire-xs.jpg',
            tags: '1-player,2d,board,card,free,logic,mobile,mouse,solitaire',
            description: 'Classic card game, pair cards that add up to 13'
        },
        {
            id: 'solitaire',
            title: 'Classic Solitaire',
            embed: 'https://www.onlinegames.io/games/2025/html/solitaire/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/1007/responsive/solitaire-xs.jpg',
            tags: '1-player,2d,board,card,free,logic,mobile,mouse,solitaire',
            description: 'Classic single-player card game'
        },
        {
            id: 'sweet-sugar-match',
            title: 'Sweet Sugar Match',
            embed: 'https://www.onlinegames.io/games/2022/unity/sweet-sugar-match/index.html',
            image: 'https://www.onlinegames.io/media/posts/576/responsive/Sweet-Sugar-Match-xs.jpg',
            tags: '1-player,2d,brain,cozy,free,logic,mouse,puzzle,strategy',
            description: 'Match same colored candies, similar to Candy Crush'
        },
        {
            id: 'draw-the-bird-path',
            title: 'Draw the Bird Path',
            embed: 'https://www.onlinegames.io/games/2022/construct/147/draw-the-bird-path/index.html',
            image: 'https://www.onlinegames.io/media/posts/587/responsive/Draw-the-Bird-Path-xs.jpg',
            tags: '1-player,2d,brain,cozy,free,logic,mouse,puzzle,strategy',
            description: 'Help cute birds find their way home by drawing lines'
        },
        {
            id: 'capybara-clicker-pro',
            title: 'Capybara Clicker Pro',
            embed: 'https://www.onlinegames.io/games/2023/q2/capybara-clicker-pro/index.html',
            image: 'https://www.onlinegames.io/media/posts/554/responsive/Capybara-Clicker-Pro-xs.jpg',
            tags: '1-player,2d,animal,clicker,cute,endless,free,html5,idle,mobile,mouse',
            description: 'Capybara Clicker Pro is an idle clicker game in which you tap on the adorable Capybara to collect Capybara coins.'
        },
        {
            id: 'nova-clicker',
            title: 'Nova Clicker',
            embed: 'https://cloud.onlinegames.io/games/2024/construct/314/nova-clicker/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/981/responsive/Nova-Clicker-xs.jpg',
            tags: '1-player,2d,clicker,crazy,free,funny,html5,idle,mobile,mouse',
            description: 'Nova Clicker is an online idle game which starts you off with a single, smiley Nova, its name is FreezeNova.'
        },
        {
            id: 'cookie-clicker-pro',
            title: 'Cookie Clicker Pro',
            embed: 'https://cloud.onlinegames.io/games/2025/unity/cookie-clicker-pro/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/971/responsive/Cookie-Clicker-Pro-Game-xs.jpg',
            tags: '1-player,2d,clicker,cooking,cute,free,fun,funny,idle,mouse,unity',
            description: 'Love cookies? Want to create the biggest cookie empire the internet has ever seen? Then Cookie Clicker Pro is exactly your game!'
        }
    ],
    // 街机游戏
    arcade: [
        {
            id: 'stack-fire-ball',
            title: 'Stack Fire Ball',
            embed: 'https://www.onlinegames.io/games/2021/unity/stack-fire-ball/index.html',
            image: 'https://www.onlinegames.io/media/posts/184/responsive/Stack-Fire-Ball-Game-xs.jpg',
            tags: '1-player,3d,arcade,avoid,ball,color,crazy,destroy,free,mobile,mouse,skill',
            description: 'Guide the ball through stages, avoid black tiles'
        },
        {
            id: 'egg-helix',
            title: 'Egg Helix',
            embed: 'https://www.onlinegames.io/games/2022/unity2/egg-helix/index.html',
            image: 'https://www.onlinegames.io/media/posts/604/responsive/Egg-Helix-xs.jpg',
            tags: '1-player,3d,arcade,avoid,ball,color,crazy,destroy,free,mobile,mouse,skill',
            description: 'Control a cylinder with tennis rackets to bring the egg to the top'
        },
        {
            id: 'crazy-ball-adventures',
            title: 'Crazy Ball Adventures',
            embed: 'https://www.onlinegames.io/games/2021/unity2/crazy-ball-adventures/index.html',
            image: 'https://www.onlinegames.io/media/posts/760/responsive/Crazy-Ball-Game-xs.jpg',
            tags: '1-player,3d,arcade,avoid,ball,color,crazy,destroy,free,mobile,mouse,skill',
            description: 'Control the ball on sea tracks to reach the finish line'
        },
        {
            id: 'jackpot-casino',
            title: 'Jackpot Casino',
            embed: 'https://www.onlinegames.io/games/2021/4/jackpot-casino/index.html',
            image: 'https://www.onlinegames.io/media/posts/635/responsive/Jackpot-Casino-xs.jpg',
            tags: '1-player,2d,arcade,avoid,ball,color,crazy,destroy,free,mobile,mouse,skill',
            description: 'Slot machine game, line up to win prizes'
        },
        {
            id: 'basket-hoop',
            title: 'Basket Hoop',
            embed: 'https://cloud.onlinegames.io/games/2024/construct/311/basket-hoop/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/843/responsive/Basket-Hoop-xs.jpg',
            tags: '1-player,2d,ball,basketball,endless,free,html5,mobile,mouse,physics,skill,sports',
            description: 'In Basket Hoop, gravity is your only challenge, and tapping is your sole weapon.'
        }
    ],
    // 女生游戏
    girls: [
        {
            id: 'julie-beauty-salon',
            title: 'Julie Beauty Salon',
            embed: 'https://cloud.onlinegames.io/games/2021/1/julie-beauty-salon/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/1011/responsive/Julie-Beauty-Salon-xs.jpg',
            tags: '2d,free,girl,html5,kids,makeup,mobile,mouse',
            description: 'Run a beauty salon, provide makeup and manicure services'
        },
        {
            id: 'love-tester',
            title: 'Love Tester',
            embed: 'https://www.onlinegames.io/games/2021/3/love-tester/index.html',
            image: 'https://www.onlinegames.io/media/posts/152/responsive/love-tester-xs.jpg',
            tags: '1-player,2d,free,fun,funny,girl,html5,kids,love,mobile',
            description: 'Test the love compatibility with your crush'
        },
        {
            id: 'owl-and-rabbit-fashion',
            title: 'Owl and Rabbit Fashion',
            embed: 'https://www.onlinegames.io/games/2021/2/owl-and-rabbit-fashion/index.html',
            image: 'https://www.onlinegames.io/media/posts/475/responsive/Owl-and-Rabbit-Fashion-xs.jpg',
            tags: '1-player,2d,free,fun,funny,girl,html5,kids,love,mobile',
            description: 'Style cute owls and rabbits with fashionable outfits'
        }
    ],
    // 模拟游戏
    simulation: [
        {
            id: 'fast-food-rush',
            title: 'Fast Food Rush',
            embed: 'https://cloud.onlinegames.io/games/2025/unity/fast-food-rush/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/979/responsive/fast-food-rush-xs.jpg',
            tags: '1-player,3d,cooking,free,mouse,restaurant,simulator,strategy,tycoon',
            description: 'Run your own burger restaurant and serve customers'
        },
        {
            id: 'farming-island',
            title: 'Farming Island',
            embed: 'https://cloud.onlinegames.io/games/2025/unity/farming-island/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/988/responsive/farming-island-xs.jpg',
            tags: '1-player,3d,cozy,farming,fishing,free,mouse,simulator',
            description: 'If you\'ve ever zoned out at work, dreaming about quitting everything and running your own farm on a sunny island… yeah, same.'
        },
        {
            id: 'real-flight-simulator',
            title: 'Real Flight Simulator',
            embed: 'https://cloud.onlinegames.io/games/2023/unity2/real-flight-simulator/index.html',
            image: 'https://www.onlinegames.io/media/posts/342/responsive/Real-Flight-Simulator-2-xs.jpg',
            tags: '1-player,3d,airplane,flying,free,simulator,unity',
            description: 'Real Flight Simulator is a realistic game that gives you the ultimate flight experience.'
        }
    ]
};

// 获取所有游戏数据的函数
function getAllGames() {
    const allGames = [];
    Object.keys(GAMES_DATABASE).forEach(category => {
        allGames.push(...GAMES_DATABASE[category].map(game => ({ ...game, category })));
    });
    return allGames;
}

// 按分类获取游戏的函数
function getGamesByCategory(category) {
    return GAMES_DATABASE[category] || [];
}

// 供浏览器使用的全局变量
if (typeof window !== 'undefined') {
    window.GamesData = {
        GAMES_DATABASE,
        getAllGames,
        getGamesByCategory
    };
} 