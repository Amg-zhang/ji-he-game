// =================================================================================
// 游戏集合站 - 主脚本
// 负责：
// 1. 页面加载动画
// 2. 从数据文件动态渲染游戏
// 3. 初始化所有事件监听器 (游戏点击, 菜单, 语言切换, 搜索等)
// 4. 处理游戏模态框、多语言翻译和UI交互
// =================================================================================

// ---------------------------------------------------------------------------------
// 1. 初始化和DOM加载
// ---------------------------------------------------------------------------------

// 全局变量
let gamesDatabase = [];

// 页面加载动画
window.addEventListener('load', function() {
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('hide');
            setTimeout(() => pageLoader.remove(), 500);
        }, 1000); // 缩短加载时间
    }
});

// DOM加载完成后执行主逻辑
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，开始初始化...');
    initializeGamesData();
    renderGames();
    initializeEventListeners();
    initializeLazyLoading();
    addBackToTopButton();
    
    // 初始化语言系统
    if (typeof initializeI18n === 'function') {
        initializeI18n();
    }
    console.log('初始化完成。');
});


// ---------------------------------------------------------------------------------
// 2. 游戏数据处理和渲染
// ---------------------------------------------------------------------------------

/**
 * 从 window.GamesData 加载游戏数据到全局变量 gamesDatabase
 */
function initializeGamesData() {
    if (window.GamesData && typeof window.GamesData.getAllGames === 'function') {
        gamesDatabase = window.GamesData.getAllGames();
        console.log(`成功加载 ${gamesDatabase.length} 个游戏。`);
    } else {
        console.error('错误：游戏数据文件 (complete-games-data.js) 未加载或格式不正确。');
    }
}

/**
 * 动态在页面上创建和渲染所有游戏卡片
 */
function renderGames() {
    if (!window.GamesData || !window.GamesData.GAMES_DATABASE) {
        console.error('无法渲染游戏：游戏数据不可用。');
        return;
    }

    const gamesData = window.GamesData.GAMES_DATABASE;

    for (const category in gamesData) {
        const section = document.getElementById(category);
        if (section) {
            const grid = section.querySelector('.games-grid');
            if (grid) {
                grid.innerHTML = ''; // 清空占位符
                gamesData[category].forEach(game => {
                    const gameCard = createGameCardElement(game);
                    grid.appendChild(gameCard);
                });
            }
        }
    }
    
    // 渲染后需要重新应用翻译和懒加载
    if (typeof applyTranslations === 'function') {
        applyTranslations();
    }
    initializeLazyLoading();
}

/**
 * 创建单个游戏卡片的HTML元素
 * @param {object} game - 游戏数据对象
 * @returns {HTMLElement} - 创建好的div元素
 */
function createGameCardElement(game) {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.dataset.embed = game.embed;
    gameCard.dataset.title = game.title; // 将标题也存入dataset

    const titleKey = `game-${game.id}`;
    const descKey = `game-${game.id}-desc`;
    const tagsHtml = game.tags.split(',').map(tag => `<span class="tag" data-i18n="tag-${tag.trim()}">${tag.trim()}</span>`).join('');

    gameCard.innerHTML = `
        <img class="lazy" data-src="${game.image}" alt="${game.title}">
        <div class="game-info">
            <h3 data-i18n="${titleKey}">${game.title}</h3>
            <p data-i18n="${descKey}">${game.description}</p>
            <div class="game-tags">${tagsHtml}</div>
        </div>
    `;
    return gameCard;
}


// ---------------------------------------------------------------------------------
// 3. 事件监听器
// ---------------------------------------------------------------------------------

/**
 * 初始化所有交互元素的事件监听器
 */
function initializeEventListeners() {
    // 为动态生成的游戏卡片绑定点击事件
    // 使用事件委托以提高性能，并确保新添加的元素也能响应
    const mainContent = document.querySelector('main');
    if(mainContent) {
        mainContent.addEventListener('click', function(e) {
            const card = e.target.closest('.game-card');
            if (card) {
                const embedUrl = card.dataset.embed;
                const gameName = card.dataset.title;
                openGameModal(embedUrl, gameName);
            }
        });
    }

    // 静态元素
    const closeModalBtn = document.getElementById('closeModal');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const gameSearchInput = document.getElementById('gameSearch');
    const searchClearBtn = document.getElementById('searchClear');

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeGameModal);
    if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);
    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // 语言选择器
    if (languageBtn) {
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });
    }
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            if (typeof switchLanguage === 'function') {
                switchLanguage(this.dataset.lang);
            }
            languageDropdown.classList.remove('show');
        });
    });
    window.addEventListener('click', () => languageDropdown.classList.remove('show'));

    // 搜索框
    if (gameSearchInput) {
        gameSearchInput.addEventListener('input', debounce(handleSearchInput, 300));
        gameSearchInput.addEventListener('focus', handleSearchFocus);
        gameSearchInput.addEventListener('blur', handleSearchBlur);
        gameSearchInput.addEventListener('keydown', handleSearchKeydown);
    }
    if (searchClearBtn) searchClearBtn.addEventListener('click', clearSearch);
}


// ---------------------------------------------------------------------------------
// 4. 核心功能 (游戏模态框, 搜索, 翻译, UI)
// ---------------------------------------------------------------------------------

// --- 游戏模态框 ---

function openGameModal(embedUrl, gameName) {
    const gameModal = document.getElementById('gameModal');
    const modalTitle = document.getElementById('modalTitle');
    const gameFrame = document.getElementById('gameFrame');

    if (gameModal && modalTitle && gameFrame) {
        modalTitle.textContent = gameName;
        gameFrame.src = embedUrl;
        gameModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        setTimeout(() => gameModal.classList.add('show'), 10);
    }
}

function closeGameModal() {
    const gameModal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');
    if (gameModal && gameFrame) {
        gameModal.classList.remove('show');
        setTimeout(() => {
            gameModal.style.display = 'none';
            gameFrame.src = ''; // 停止游戏
            document.body.style.overflow = 'auto';
            // 退出全屏状态
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
        }, 300);
    }
}

function toggleFullscreen() {
    const gameModal = document.getElementById('gameModal');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const fullscreenIcon = fullscreenBtn.querySelector('i');
    
    if (!document.fullscreenElement) {
        // 进入全屏
        gameModal.requestFullscreen().then(() => {
            fullscreenIcon.className = 'fas fa-compress';
            fullscreenBtn.title = '退出全屏';
            gameModal.classList.add('fullscreen-mode');
        }).catch(err => {
            console.log('无法进入全屏模式:', err);
        });
    } else {
        // 退出全屏
        document.exitFullscreen().then(() => {
            fullscreenIcon.className = 'fas fa-expand';
            fullscreenBtn.title = '全屏';
            gameModal.classList.remove('fullscreen-mode');
        });
    }
}

// 监听全屏状态变化
document.addEventListener('fullscreenchange', () => {
    const gameModal = document.getElementById('gameModal');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const fullscreenIcon = fullscreenBtn?.querySelector('i');
    
    if (!document.fullscreenElement) {
        // 退出全屏状态
        if (fullscreenIcon) {
            fullscreenIcon.className = 'fas fa-expand';
            fullscreenBtn.title = '全屏';
        }
        if (gameModal) {
            gameModal.classList.remove('fullscreen-mode');
        }
    }
});

// --- 搜索 ---

function handleSearchInput(e) {
    const query = e.target.value.trim();
    const searchClearBtn = document.getElementById('searchClear');

    searchClearBtn.style.display = query ? 'block' : 'none';

    if (query.length > 1) {
        const results = searchGames(query);
        showSuggestions(results);
    } else {
        hideSuggestions();
    }
}

function searchGames(query) {
    const searchTerm = query.toLowerCase();
    return gamesDatabase.filter(game => 
        game.title.toLowerCase().includes(searchTerm) || 
        game.tags.toLowerCase().includes(searchTerm)
    ).slice(0, 10); // 限制结果数量
}

function showSuggestions(results) {
    const suggestionsBox = document.getElementById('searchSuggestions');
    if (!suggestionsBox) return;
    
    suggestionsBox.innerHTML = '';
    if (results.length > 0) {
        results.forEach(game => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${game.image}" alt=""><span>${game.title}</span>`;
            li.addEventListener('mousedown', () => { // 使用mousedown防止blur事件先触发
                openGameModal(game.embed, game.title);
                hideSuggestions();
            });
            suggestionsBox.appendChild(li);
        });
        suggestionsBox.classList.add('show');
    } else {
        const noResult = document.createElement('li');
        noResult.textContent = 'No games found';
        noResult.classList.add('no-results');
        suggestionsBox.appendChild(noResult);
        suggestionsBox.classList.add('show');
    }
}

function hideSuggestions() {
    const suggestionsBox = document.getElementById('searchSuggestions');
    if (suggestionsBox) suggestionsBox.classList.remove('show');
}

function clearSearch() {
    const gameSearchInput = document.getElementById('gameSearch');
    gameSearchInput.value = '';
    gameSearchInput.focus();
    document.getElementById('searchClear').style.display = 'none';
    hideSuggestions();
}

function handleSearchFocus() {
    if (document.getElementById('gameSearch').value.length > 1) {
        handleSearchInput({ target: document.getElementById('gameSearch') });
    }
}

function handleSearchBlur() {
    // 延迟隐藏，以便点击建议项
    setTimeout(hideSuggestions, 150);
}

function handleSearchKeydown(e) {
    const suggestionsBox = document.getElementById('searchSuggestions');
    if (!suggestionsBox.classList.contains('show')) return;

    const items = suggestionsBox.querySelectorAll('li');
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex = (activeIndex + 1) % items.length;
        updateSuggestionHighlight(items, activeIndex);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex = (activeIndex - 1 + items.length) % items.length;
        updateSuggestionHighlight(items, activeIndex);
    } else if (e.key === 'Enter') {
        if (activeIndex > -1) {
            items[activeIndex].dispatchEvent(new MouseEvent('mousedown'));
        }
    }
}

function updateSuggestionHighlight(items, index) {
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
}


// --- UI 辅助函数 ---

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy');
    if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        lazyImages.forEach(lazyImage => lazyImageObserver.observe(lazyImage));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

function addBackToTopButton() {
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'backToTop';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}