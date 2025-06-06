// 页面加载完成处理
window.addEventListener('load', function() {
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('hide');
            setTimeout(() => {
                pageLoader.remove();
            }, 500);
        }, 1500); // 显示加载动画1.5秒
    }
});

// DOM 元素
const gameCards = document.querySelectorAll('.game-card');
const gameModal = document.getElementById('gameModal');
const gameFrame = document.getElementById('gameFrame');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.getElementById('closeModal');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');
const languageBtn = document.getElementById('languageBtn');
const languageDropdown = document.getElementById('languageDropdown');
const currentLangElement = document.getElementById('currentLang');
const gameSearchInput = document.getElementById('gameSearch');
const searchClearBtn = document.getElementById('searchClear');
const searchSuggestions = document.getElementById('searchSuggestions');

// 游戏备用源配置
const gameBackupSources = {
    'apocalypse-truck': [
        'https://cloud.onlinegames.io/games/2021/1/apocalypse-truck/index-og.html',
        'https://www.silvergames.com/en/apocalypse-truck',
        'https://www.y8.com/games/apocalypse_truck'
    ],
    'mini-cars': [
        'https://cloud.onlinegames.io/games/2021/unity/mini-cars-racing/index-og.html',
        'https://www.crazygames.com/game/mini-cars-racing'
    ]
    // 可以根据需要添加更多备用源
};

// 完整的游戏数据库
const gamesDatabase = [
    {
        id: 'apocalypse-truck',
        url: 'https://cloud.onlinegames.io/games/2021/1/apocalypse-truck/index-og.html',
        image: 'https://www.onlinegames.io/media/posts/1015/responsive/apocalypse-truck-xs.jpg',
        titleKey: 'game-apocalypse-truck',
        descKey: 'game-apocalypse-truck-desc',
        tags: ['single', 'racing', 'zombie'],
        category: 'racing'
    },
    {
        id: 'mini-cars',
        url: 'https://cloud.onlinegames.io/games/2021/unity/mini-cars-racing/index-og.html',
        image: 'https://www.onlinegames.io/media/posts/1010/responsive/Mini-Cars-Racing-xs.jpg',
        titleKey: 'game-mini-cars',
        descKey: 'game-mini-cars-desc',
        tags: ['multiplayer', '3d', 'racing'],
        category: 'racing'
    },
    {
        id: 'drift-king',
        url: 'https://www.onlinegames.io/games/2024/unity/drift-king/index.html',
        image: 'https://www.onlinegames.io/media/posts/729/responsive/Drift-King-xs.jpg',
        titleKey: 'game-drift-king',
        descKey: 'game-drift-king-desc',
        tags: ['3d', 'drift', 'multiplayer'],
        category: 'racing'
    },
    {
        id: 'highway-traffic',
        url: 'https://www.onlinegames.io/games/2022/unity/highway-traffic/index.html',
        image: 'https://www.onlinegames.io/media/posts/32/responsive/Highway-Traffic-2-xs.jpg',
        titleKey: 'game-highway-traffic',
        descKey: 'game-highway-traffic-desc',
        tags: ['single', '3d', 'racing'],
        category: 'racing'
    },
    {
        id: 'monster-truck',
        url: 'https://www.onlinegames.io/games/2021/1/monster-truck-racing/index.html',
        image: 'https://www.onlinegames.io/media/posts/826/responsive/Monster-Truck-Racing-xs.jpg',
        titleKey: 'game-monster-truck',
        descKey: 'game-monster-truck-desc',
        tags: ['single', 'truck', 'racing'],
        category: 'racing'
    },
    {
        id: 'truck-racing',
        url: 'https://www.onlinegames.io/games/2022/construct/144/truck-racing/index.html',
        image: 'https://www.onlinegames.io/media/posts/712/responsive/Truck-Racing-xs.jpg',
        titleKey: 'game-truck-racing',
        descKey: 'game-truck-racing-desc',
        tags: ['single', 'truck', 'transport'],
        category: 'racing'
    },
    {
        id: 'tank-racing',
        url: 'https://www.onlinegames.io/games/2022/construct/151/tank-racing/index.html',
        image: 'https://www.onlinegames.io/media/posts/484/responsive/Tank-Racing-Online-xs.jpg',
        titleKey: 'game-tank-racing',
        descKey: 'game-tank-racing-desc',
        tags: ['multiplayer', 'tank', 'military'],
        category: 'racing'
    },
    {
        id: 'kick-pirate',
        url: 'https://cloud.onlinegames.io/games/2022/construct/92/kick-the-pirate/index-og.html',
        image: 'https://www.onlinegames.io/media/posts/1012/responsive/Kick-The-Pirate-xs.jpg',
        titleKey: 'game-kick-pirate',
        descKey: 'game-kick-pirate-desc',
        tags: ['single', 'action', 'battle'],
        category: 'action'
    },
    {
        id: 'treasure-hunter',
        url: 'https://www.onlinegames.io/games/2022/construct/164/treasure-hunter/index.html',
        image: 'https://www.onlinegames.io/media/posts/812/responsive/Treasure-Hunter-xs.jpg',
        titleKey: 'game-treasure-hunter',
        descKey: 'game-treasure-hunter-desc',
        tags: ['single', 'adventure', 'action'],
        category: 'action'
    },
    {
        id: 'hook-wars',
        url: 'https://www.onlinegames.io/games/2023/unity3/hook-wars/index.html',
        image: 'https://www.onlinegames.io/media/posts/610/responsive/Hook-Wars-xs.jpg',
        titleKey: 'game-hook-wars',
        descKey: 'game-hook-wars-desc',
        tags: ['multiplayer', '3d', 'battle'],
        category: 'action'
    },
    {
        id: 'space-bullet',
        url: 'https://www.onlinegames.io/games/2021/4/mr-space-bullet/index.html',
        image: 'https://www.onlinegames.io/media/posts/825/responsive/Mr-Space-Bullet-xs.jpg',
        titleKey: 'game-space-bullet',
        descKey: 'game-space-bullet-desc',
        tags: ['single', 'shooting', 'space'],
        category: 'action'
    },
    {
        id: 'pyramid-solitaire',
        url: 'https://www.onlinegames.io/games/2025/html/solitaire/index-og.html#pyramid',
        image: 'https://www.onlinegames.io/media/posts/891/responsive/Pyramid-Solitaire-xs.jpg',
        titleKey: 'game-pyramid-solitaire',
        descKey: 'game-pyramid-solitaire-desc',
        tags: ['single', 'card', 'puzzle'],
        category: 'puzzle'
    },
    {
        id: 'solitaire',
        url: 'https://www.onlinegames.io/games/2025/html/solitaire/index-og.html',
        image: 'https://www.onlinegames.io/media/posts/671/responsive/Classic-Solitaire-xs.jpg',
        titleKey: 'game-solitaire',
        descKey: 'game-solitaire-desc',
        tags: ['single', 'card', 'puzzle'],
        category: 'puzzle'
    },
    {
        id: 'sugar-match',
        url: 'https://www.onlinegames.io/games/2022/unity/sweet-sugar-match/index.html',
        image: 'https://www.onlinegames.io/media/posts/576/responsive/Sweet-Sugar-Match-xs.jpg',
        titleKey: 'game-sugar-match',
        descKey: 'game-sugar-match-desc',
        tags: ['single', 'match', 'puzzle'],
        category: 'puzzle'
    },
    {
        id: 'bird-path',
        url: 'https://www.onlinegames.io/games/2022/construct/147/draw-the-bird-path/index.html',
        image: 'https://www.onlinegames.io/media/posts/587/responsive/Draw-the-Bird-Path-xs.jpg',
        titleKey: 'game-bird-path',
        descKey: 'game-bird-path-desc',
        tags: ['single', 'puzzle', 'logic'],
        category: 'puzzle'
    },
    {
        id: 'stack-fire',
        url: 'https://www.onlinegames.io/games/2021/unity/stack-fire-ball/index.html',
        image: 'https://www.onlinegames.io/media/posts/184/responsive/Stack-Fire-Ball-Game-xs.jpg',
        titleKey: 'game-stack-fire',
        descKey: 'game-stack-fire-desc',
        tags: ['single', '3d', 'skill'],
        category: 'arcade'
    },
    {
        id: 'egg-helix',
        url: 'https://www.onlinegames.io/games/2022/unity2/egg-helix/index.html',
        image: 'https://www.onlinegames.io/media/posts/604/responsive/Egg-Helix-xs.jpg',
        titleKey: 'game-egg-helix',
        descKey: 'game-egg-helix-desc',
        tags: ['single', '3d', 'arcade'],
        category: 'arcade'
    },
    {
        id: 'crazy-ball',
        url: 'https://www.onlinegames.io/games/2021/unity2/crazy-ball-adventures/index.html',
        image: 'https://www.onlinegames.io/media/posts/760/responsive/Crazy-Ball-Game-xs.jpg',
        titleKey: 'game-crazy-ball',
        descKey: 'game-crazy-ball-desc',
        tags: ['single', 'arcade', 'skill'],
        category: 'arcade'
    },
    {
        id: 'jackpot-casino',
        url: 'https://www.onlinegames.io/games/2021/4/jackpot-casino/index.html',
        image: 'https://www.onlinegames.io/media/posts/635/responsive/Jackpot-Casino-xs.jpg',
        titleKey: 'game-jackpot-casino',
        descKey: 'game-jackpot-casino-desc',
        tags: ['single', 'simulation', 'casino'],
        category: 'arcade'
    },
    {
        id: 'julie-beauty',
        url: 'https://cloud.onlinegames.io/games/2021/1/julie-beauty-salon/index-og.html',
        image: 'https://www.onlinegames.io/media/posts/1011/responsive/Julie-Beauty-Salon-xs.jpg',
        titleKey: 'game-julie-beauty',
        descKey: 'game-julie-beauty-desc',
        tags: ['girls', 'makeup', 'simulation'],
        category: 'girls'
    },
    {
        id: 'love-tester',
        url: 'https://www.onlinegames.io/games/2021/3/love-tester/index.html',
        image: 'https://www.onlinegames.io/media/posts/152/responsive/love-tester-xs.jpg',
        titleKey: 'game-love-tester',
        descKey: 'game-love-tester-desc',
        tags: ['single', 'love', 'girls'],
        category: 'girls'
    },
    {
        id: 'owl-rabbit',
        url: 'https://www.onlinegames.io/games/2021/2/owl-and-rabbit-fashion/index.html',
        image: 'https://www.onlinegames.io/media/posts/475/responsive/Owl-and-Rabbit-Fashion-xs.jpg',
        titleKey: 'game-owl-rabbit',
        descKey: 'game-owl-rabbit-desc',
        tags: ['fashion', 'girls', 'simulation'],
        category: 'girls'
    },
    {
        id: 'fast-food',
        url: 'https://cloud.onlinegames.io/games/2025/unity/fast-food-rush/index-og.html',
        image: 'https://www.onlinegames.io/media/posts/979/responsive/fast-food-rush-xs.jpg',
        titleKey: 'game-fast-food',
        descKey: 'game-fast-food-desc',
        tags: ['single', 'cooking', 'simulation'],
        category: 'sports'
    }
];

// 游戏数据映射（保持向后兼容）
const gameData = {};
gamesDatabase.forEach(game => {
    gameData[game.url] = game.titleKey;
});

// 初始化事件监听器
function initializeEventListeners() {
    // 游戏卡片点击事件
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            const embedUrl = this.getAttribute('data-embed');
            const gameName = gameData[embedUrl] || '游戏';
            openGameModal(embedUrl, gameName);
        });
    });

    // 关闭模态框事件
    closeModal.addEventListener('click', closeGameModal);
    
    // 点击模态框背景关闭
    gameModal.addEventListener('click', function(e) {
        if (e.target === gameModal) {
            closeGameModal();
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && gameModal.style.display === 'flex') {
            closeGameModal();
        }
    });

    // 移动端菜单切换
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    // 导航链接平滑滚动
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // 关闭移动端菜单
                if (window.innerWidth <= 768) {
                    closeMobileMenu();
                }
            }
        });
    });

    // 窗口大小改变时关闭移动端菜单
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // 语言选择器事件
    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });

        // 点击外部关闭语言选择器
        document.addEventListener('click', function() {
            languageDropdown.classList.remove('show');
        });

        // 语言选项点击事件
        const languageOptions = document.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const selectedLang = this.getAttribute('data-lang');
                switchLanguage(selectedLang);
                languageDropdown.classList.remove('show');
                updateActiveLanguageOption();
            });
        });
    }
    
    // 搜索功能事件
    if (gameSearchInput && searchClearBtn && searchSuggestions) {
            // 搜索输入事件
    gameSearchInput.addEventListener('input', debounce(handleSearchInput, 200));
        gameSearchInput.addEventListener('focus', handleSearchFocus);
        gameSearchInput.addEventListener('blur', handleSearchBlur);
        
        // 清除搜索按钮
        searchClearBtn.addEventListener('click', clearSearch);
        
        // 点击外部关闭搜索建议
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container')) {
                hideSuggestions();
            }
        });
        
        // 键盘导航支持
        gameSearchInput.addEventListener('keydown', handleSearchKeydown);
    }
}

// 打开游戏模态框
function openGameModal(embedUrl, gameName) {
    // 检测是否是生产环境（非localhost）
    const isProduction = !window.location.hostname.includes('localhost') && 
                         !window.location.hostname.includes('127.0.0.1') && 
                         !window.location.hostname.includes('file://');
    
    if (isProduction) {
        // 生产环境：显示提示并在新窗口打开游戏
        showGameLoadingDialog(embedUrl, gameName);
    } else {
        // 开发环境：正常在模态框中加载
        modalTitle.textContent = gameName;
        gameFrame.src = embedUrl;
        gameModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // 添加打开动画
        setTimeout(() => {
            gameModal.style.opacity = '1';
            gameModal.querySelector('.modal-content').style.transform = 'translate(-50%, -50%) scale(1)';
        }, 10);
    }
}

// 显示游戏加载对话框
function showGameLoadingDialog(embedUrl, gameName) {
    const dialog = document.createElement('div');
    dialog.className = 'game-loading-dialog';
    dialog.innerHTML = `
        <div class="dialog-overlay"></div>
        <div class="dialog-content">
            <button class="dialog-close" onclick="closeGameDialog()">
                <i class="fas fa-times"></i>
            </button>
            <div class="dialog-header">
                <h3>${gameName}</h3>
            </div>
            <div class="dialog-body">
                <div class="game-preview">
                    <i class="fas fa-gamepad"></i>
                </div>
                <p class="dialog-message" data-i18n="game-loading-message">
                    Due to browser security restrictions, the game will open in a new window for the best experience.
                </p>
                <div class="dialog-buttons">
                    <button class="btn-primary" onclick="openGameInNewWindow('${embedUrl}', '${gameName}')">
                        <i class="fas fa-external-link-alt"></i>
                        <span data-i18n="open-game">Open Game</span>
                    </button>
                    <button class="btn-secondary" onclick="tryEmbedGame('${embedUrl}', '${gameName}')">
                        <i class="fas fa-play"></i>
                        <span data-i18n="try-embed">Try Here</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(dialog);
    document.body.style.overflow = 'hidden';
    
    // 应用当前语言翻译
    applyTranslations();
    
    // 添加显示动画
    setTimeout(() => {
        dialog.classList.add('show');
    }, 10);
}

// 在新窗口打开游戏
function openGameInNewWindow(embedUrl, gameName) {
    const gameWindow = window.open(embedUrl, gameName, 'width=1000,height=700,scrollbars=yes,resizable=yes');
    
    if (gameWindow) {
        gameWindow.focus();
        closeGameDialog();
    } else {
        // 如果弹窗被阻止，提示用户
        alert('Please allow popups for this site to open the game.');
    }
}

// 尝试在当前页面嵌入游戏
function tryEmbedGame(embedUrl, gameName) {
    closeGameDialog();
    
    // 显示加载中的模态框
    modalTitle.textContent = gameName;
    gameFrame.src = embedUrl;
    gameModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // 添加错误处理
    gameFrame.onload = function() {
        // 游戏加载成功
        console.log('Game loaded successfully');
    };
    
    gameFrame.onerror = function() {
        // 游戏加载失败，显示错误信息
        showGameError(embedUrl, gameName);
    };
    
    // 5秒后检查iframe是否可访问
    setTimeout(() => {
        try {
            const iframeDoc = gameFrame.contentDocument || gameFrame.contentWindow.document;
            if (!iframeDoc) {
                throw new Error('Cannot access iframe content');
            }
        } catch (e) {
            // 无法访问iframe内容，可能是跨域限制
            showGameError(embedUrl, gameName);
        }
    }, 5000);
    
    // 添加打开动画
    setTimeout(() => {
        gameModal.style.opacity = '1';
        gameModal.querySelector('.modal-content').style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
}

// 显示游戏错误信息
function showGameError(embedUrl, gameName) {
    const errorHtml = `
        <div class="game-error">
            <i class="fas fa-exclamation-triangle"></i>
            <h3 data-i18n="game-load-error">Game Loading Error</h3>
            <p data-i18n="game-load-error-desc">
                This game cannot be loaded due to security restrictions. 
                Click the button below to open it in a new window.
            </p>
            <button class="btn-primary" onclick="openGameInNewWindow('${embedUrl}', '${gameName}')">
                <i class="fas fa-external-link-alt"></i>
                <span data-i18n="open-in-new-window">Open in New Window</span>
            </button>
        </div>
    `;
    
    gameFrame.style.display = 'none';
    const modalBody = gameModal.querySelector('.modal-body');
    modalBody.innerHTML = errorHtml;
    
    // 应用当前语言翻译
    applyTranslations();
}

// 关闭游戏对话框
function closeGameDialog() {
    const dialog = document.querySelector('.game-loading-dialog');
    if (dialog) {
        dialog.classList.add('hide');
        setTimeout(() => {
            document.body.removeChild(dialog);
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// 关闭游戏模态框
function closeGameModal() {
    // 添加关闭动画
    gameModal.style.opacity = '0';
    gameModal.querySelector('.modal-content').style.transform = 'translate(-50%, -50%) scale(0.9)';
    
    setTimeout(() => {
        gameModal.style.display = 'none';
        gameFrame.src = '';
        document.body.style.overflow = 'auto';
    }, 300);
}

// 切换移动端菜单
function toggleMobileMenu() {
    nav.classList.toggle('mobile-nav-open');
}

// 关闭移动端菜单
function closeMobileMenu() {
    nav.classList.remove('mobile-nav-open');
}

// 懒加载图片
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src || img.getAttribute('data-src');
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// 添加加载动画
function addLoadingAnimation() {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// 平滑滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 添加回到顶部按钮
function addBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // 滚动时显示/隐藏按钮
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // 点击回到顶部
    backToTopBtn.addEventListener('click', scrollToTop);
    
    // 悬停效果
    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.transform = 'scale(1.1)';
    });
    
    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.transform = 'scale(1)';
    });
}

// 添加移动端菜单样式
function addMobileMenuStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav {
                position: fixed;
                top: 80px;
                left: 0;
                right: 0;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                transform: translateY(-100%);
                transition: transform 0.3s ease;
                z-index: 999;
            }
            
            .nav.mobile-nav-open {
                transform: translateY(0);
            }
            
            .nav-list {
                flex-direction: column;
                padding: 1rem;
                gap: 0;
            }
            
            .nav-list li {
                border-bottom: 1px solid #eee;
            }
            
            .nav-list li:last-child {
                border-bottom: none;
            }
            
            .nav-link {
                display: block;
                padding: 1rem;
                border-radius: 8px;
                transition: background 0.3s ease;
            }
            
            .nav-link:hover {
                background: rgba(102, 126, 234, 0.1);
            }
        }
        
        .game-modal {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .modal-content {
            transform: translate(-50%, -50%) scale(0.9);
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// 更新活跃语言选项
function updateActiveLanguageOption() {
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === currentLanguage) {
            option.classList.add('active');
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 首先初始化国际化
    initializeI18n();
    
    initializeEventListeners();
    initializeLazyLoading();
    addLoadingAnimation();
    addBackToTopButton();
    addMobileMenuStyles();
    updateActiveLanguageOption();
    
    // 添加页面加载完成的淡入效果
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

let ticking = false;

function updateScrollPosition() {
    // 这里可以添加滚动时的操作
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateScrollPosition);
        ticking = true;
    }
});

// 搜索功能变量
let currentSuggestionIndex = -1;
let currentSearchResults = [];

// 处理搜索输入
function handleSearchInput(e) {
    const query = e.target.value.trim();
    
    // 显示/隐藏清除按钮
    if (query) {
        searchClearBtn.style.display = 'block';
    } else {
        searchClearBtn.style.display = 'none';
        hideSuggestions();
        clearSearchResults();
        return;
    }
    
    // 执行搜索
    if (query.length >= 2) {
        const results = searchGames(query);
        showSuggestions(results);
        highlightSearchResults(query);
    } else {
        hideSuggestions();
        clearSearchResults();
    }
}

// 搜索游戏
function searchGames(query) {
    const normalizedQuery = query.toLowerCase();
    const currentLang = localStorage.getItem('preferred-language') || 'en';
    
    console.log('Searching for:', normalizedQuery, 'in language:', currentLang); // 临时调试
    console.log('Database size:', gamesDatabase.length); // 临时调试
    
    const results = gamesDatabase.filter(game => {
        // 获取翻译后的游戏标题和描述
        const title = getTranslation(game.titleKey, currentLang).toLowerCase();
        const desc = getTranslation(game.descKey, currentLang).toLowerCase();
        
        // 搜索标题、描述和标签
        const titleMatch = title.includes(normalizedQuery);
        const descMatch = desc.includes(normalizedQuery);
        const tagMatch = game.tags.some(tag => {
            const tagTranslation = getTranslation(`tag-${tag}`, currentLang).toLowerCase();
            return tagTranslation.includes(normalizedQuery) || tag.includes(normalizedQuery);
        });
        const categoryMatch = getTranslation(`category-${game.category}`, currentLang).toLowerCase().includes(normalizedQuery);
        
        return titleMatch || descMatch || tagMatch || categoryMatch;
    }).slice(0, 6); // 限制结果数量
    
    console.log('Search results count:', results.length); // 临时调试
    return results;
}

// 获取翻译文本
function getTranslation(key, lang) {
    if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    return key; // 如果没有翻译，返回键名
}

// 显示搜索建议
function showSuggestions(results) {
    console.log('showSuggestions called with', results.length, 'results'); // 临时调试
    currentSearchResults = results;
    currentSuggestionIndex = -1;
    
    if (results.length === 0) {
        console.log('No results, hiding suggestions'); // 临时调试
        hideSuggestions();
        return;
    }
    
    const currentLang = localStorage.getItem('preferred-language') || 'en';
    
    const suggestionsHTML = results.map((game, index) => {
        const title = getTranslation(game.titleKey, currentLang);
        const desc = getTranslation(game.descKey, currentLang);
        const tags = game.tags.map(tag => `<span class="suggestion-tag">${getTranslation(`tag-${tag}`, currentLang)}</span>`).join('');
        
        return `
            <div class="suggestion-item" data-index="${index}" data-game-url="${game.url}" data-game-title="${title}">
                <img src="${game.image}" alt="${title}" class="suggestion-game-image" loading="lazy">
                <div class="suggestion-game-info">
                    <div class="suggestion-game-title">${title}</div>
                    <div class="suggestion-game-desc">${desc}</div>
                    <div class="suggestion-game-tags">${tags}</div>
                </div>
            </div>
        `;
    }).join('');
    
    // 添加查看所有结果的选项
    const viewAllResultsHTML = results.length > 0 ? `
        <div class="view-all-results" onclick="scrollToSearchResults()">
            <i class="fas fa-eye"></i>
            <span>查看页面中的搜索结果 (${results.length}个)</span>
        </div>
    ` : '';
    
    searchSuggestions.innerHTML = suggestionsHTML + viewAllResultsHTML;
    searchSuggestions.classList.add('show');
    
    // 添加点击事件
    searchSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', function() {
            const gameUrl = this.getAttribute('data-game-url');
            const gameTitle = this.getAttribute('data-game-title');
            openGameModal(gameUrl, gameTitle);
            hideSuggestions();
            gameSearchInput.blur();
        });
    });
}

// 隐藏搜索建议
function hideSuggestions() {
    searchSuggestions.classList.remove('show');
    currentSuggestionIndex = -1;
}

// 清除搜索
function clearSearch() {
    gameSearchInput.value = '';
    searchClearBtn.style.display = 'none';
    hideSuggestions();
    clearSearchResults();
    gameSearchInput.focus();
}

// 处理搜索焦点
function handleSearchFocus() {
    const query = gameSearchInput.value.trim();
    if (query.length >= 2) {
        const results = searchGames(query);
        showSuggestions(results);
    }
}

// 处理搜索失焦
function handleSearchBlur() {
    // 延迟隐藏，以便点击建议项
    setTimeout(() => {
        if (!document.activeElement || !document.activeElement.closest('.search-suggestions')) {
            hideSuggestions();
        }
    }, 200);
}

// 键盘导航
function handleSearchKeydown(e) {
    const suggestions = searchSuggestions.querySelectorAll('.suggestion-item');
    
    switch(e.key) {
        case 'ArrowDown':
            e.preventDefault();
            currentSuggestionIndex = Math.min(currentSuggestionIndex + 1, suggestions.length - 1);
            updateSuggestionHighlight(suggestions);
            break;
            
        case 'ArrowUp':
            e.preventDefault();
            currentSuggestionIndex = Math.max(currentSuggestionIndex - 1, -1);
            updateSuggestionHighlight(suggestions);
            break;
            
        case 'Enter':
            e.preventDefault();
            if (currentSuggestionIndex >= 0 && suggestions[currentSuggestionIndex]) {
                suggestions[currentSuggestionIndex].click();
            }
            break;
            
        case 'Escape':
            hideSuggestions();
            gameSearchInput.blur();
            break;
    }
}

// 更新建议高亮
function updateSuggestionHighlight(suggestions) {
    suggestions.forEach((item, index) => {
        if (index === currentSuggestionIndex) {
            item.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))';
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.style.background = '';
        }
    });
}

// 高亮搜索结果
function highlightSearchResults(query) {
    if (!query || query.length < 2) {
        clearSearchResults();
        return;
    }
    
    const results = searchGames(query);
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        const embedUrl = card.getAttribute('data-embed');
        const game = gamesDatabase.find(g => g.url === embedUrl);
        
        if (game && results.some(r => r.id === game.id)) {
            card.style.border = '2px solid #667eea';
            card.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.3)';
            card.style.transform = 'scale(1.02)';
        } else {
            card.style.opacity = '0.6';
            card.style.transform = 'scale(0.98)';
        }
    });
    
    // 注释掉自动滚动，避免在输入搜索时自动跳转
    // if (results.length > 0) {
    //     const firstResultCard = Array.from(gameCards).find(card => {
    //         const embedUrl = card.getAttribute('data-embed');
    //         const game = gamesDatabase.find(g => g.url === embedUrl);
    //         return game && game.id === results[0].id;
    //     });
    //     
    //     if (firstResultCard) {
    //         firstResultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    //     }
    // }
}

// 清除搜索结果高亮
function clearSearchResults() {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.style.border = '';
        card.style.boxShadow = '';
        card.style.opacity = '';
        card.style.transform = '';
    });
}

// 滚动到搜索结果
function scrollToSearchResults() {
    hideSuggestions();
    gameSearchInput.blur();
    
    if (currentSearchResults.length > 0) {
        const gameCards = document.querySelectorAll('.game-card');
        const firstResultCard = Array.from(gameCards).find(card => {
            const embedUrl = card.getAttribute('data-embed');
            const game = gamesDatabase.find(g => g.url === embedUrl);
            return game && currentSearchResults.some(r => r.id === game.id);
        });
        
        if (firstResultCard) {
            firstResultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}