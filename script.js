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

// 游戏数据映射
const gameData = {
    'https://cloud.onlinegames.io/games/2021/1/apocalypse-truck/index-og.html': 'Apocalypse Truck',
    'https://cloud.onlinegames.io/games/2021/unity/mini-cars-racing/index-og.html': '迷你赛车',
    'https://www.onlinegames.io/games/2024/unity/drift-king/index.html': '漂移之王',
    'https://www.onlinegames.io/games/2022/unity/highway-traffic/index.html': '高速公路交通',
    'https://www.onlinegames.io/games/2021/1/monster-truck-racing/index.html': '怪物卡车竞速',
    'https://www.onlinegames.io/games/2022/construct/144/truck-racing/index.html': '卡车运输',
    'https://www.onlinegames.io/games/2022/construct/151/tank-racing/index.html': '坦克竞速',
    'https://cloud.onlinegames.io/games/2022/construct/92/kick-the-pirate/index-og.html': '踢海盗',
    'https://www.onlinegames.io/games/2022/construct/164/treasure-hunter/index.html': '宝藏猎人',
    'https://www.onlinegames.io/games/2023/unity3/hook-wars/index.html': '钩子大战',
    'https://www.onlinegames.io/games/2021/4/mr-space-bullet/index.html': '太空子弹先生',
    'https://www.onlinegames.io/games/2025/html/solitaire/index-og.html#pyramid': '金字塔纸牌',
    'https://www.onlinegames.io/games/2025/html/solitaire/index-og.html': '经典纸牌',
    'https://www.onlinegames.io/games/2022/unity/sweet-sugar-match/index.html': '甜蜜糖果消消乐',
    'https://www.onlinegames.io/games/2022/construct/147/draw-the-bird-path/index.html': '画鸟儿回家路',
    'https://www.onlinegames.io/games/2021/unity/stack-fire-ball/index.html': '堆叠火球',
    'https://www.onlinegames.io/games/2022/unity2/egg-helix/index.html': '鸡蛋螺旋塔',
    'https://www.onlinegames.io/games/2021/unity2/crazy-ball-adventures/index.html': '疯狂球大冒险',
    'https://www.onlinegames.io/games/2021/4/jackpot-casino/index.html': '大奖赌场',
    'https://cloud.onlinegames.io/games/2021/1/julie-beauty-salon/index-og.html': '朱莉美容院',
    'https://www.onlinegames.io/games/2021/3/love-tester/index.html': '爱情测试仪',
    'https://www.onlinegames.io/games/2021/2/owl-and-rabbit-fashion/index.html': '猫头鹰兔子时装',
    'https://cloud.onlinegames.io/games/2025/unity/fast-food-rush/index-og.html': '快餐店大忙'
};

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
            <div class="dialog-header">
                <h3>${gameName}</h3>
                <button class="dialog-close" onclick="closeGameDialog()">
                    <i class="fas fa-times"></i>
                </button>
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

// 优化滚动性能
let ticking = false;

function updateScrollPosition() {
    // 这里可以添加滚动时的操作
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
    }
}); 