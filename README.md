# 多语言游戏网站 / Multilingual Gaming Website

## 🌍 支持的语言 / Supported Languages

- 🇺🇸 **English** (默认/Default)
- 🇨🇳 **简体中文** (Simplified Chinese)
- 🇹🇼 **繁體中文** (Traditional Chinese)
- 🇯🇵 **日本語** (Japanese)
- 🇰🇷 **한국어** (Korean)
- 🇪🇸 **Español** (Spanish)
- 🇫🇷 **Français** (French)
- 🇩🇪 **Deutsch** (German)
- 🇷🇺 **Русский** (Russian)

## 📁 文件结构 / File Structure

```
├── index.html          # 主页面 (包含所有国际化标记)
├── styles.css          # 样式文件 (包含语言选择器样式)
├── script.js           # 主要交互逻辑
├── translations.js     # 多语言翻译数据
└── README.md          # 说明文档
```

## 🔧 实现特性 / Implementation Features

### 1. 自动语言检测
- 默认显示英文
- 自动保存用户选择的语言到本地存储
- 页面刷新后保持语言设置

### 2. 语言切换器
- 位于页面右上角的语言选择器
- 支持国旗图标显示
- 下拉菜单形式，用户体验友好
- 移动端适配优化

### 3. 国际化标记系统
- 使用 `data-i18n` 属性标记需要翻译的元素
- 支持页面标题、导航、游戏名称、描述等全面翻译
- 动态更新页面语言属性

### 4. 游戏分类翻译
- **赛车游戏** / Racing Games / レーシングゲーム
- **动作游戏** / Action Games / アクションゲーム  
- **益智游戏** / Puzzle Games / パズルゲーム
- **街机游戏** / Arcade Games / アーケードゲーム
- **女生游戏** / Girls Games / 女の子向けゲーム
- **模拟经营** / Simulation / シミュレーション

## 🎮 游戏翻译示例 / Game Translation Examples

### 末日卡车 / Apocalypse Truck
- **EN**: Drive an armored truck to survive in the zombie apocalypse
- **中文**: 在僵尸末日中驾驶装甲卡车生存
- **日本語**: ゾンビアポカリプスで装甲トラックを運転して生き残る

### 漂移之王 / Drift King  
- **EN**: Realistic 3D drift simulation with 10 sports cars
- **中文**: 真实3D漂移模拟，10辆跑车可选
- **日本語**: 10台のスポーツカーでリアルな3Dドリフトシミュレーション

## 🔄 如何使用 / How to Use

1. **启动网站**: 打开 `index.html` 文件
2. **切换语言**: 点击右上角的语言选择器
3. **选择语言**: 从下拉菜单中选择想要的语言
4. **自动保存**: 语言设置会自动保存到浏览器

## 🛠️ 开发说明 / Development Notes

### 添加新语言
1. 在 `translations.js` 中添加新的语言对象
2. 在 `languageNames` 中添加语言显示名称
3. 在 HTML 中的语言下拉菜单添加新选项

### 添加新的可翻译内容
1. 在 HTML 元素上添加 `data-i18n="key"` 属性
2. 在 `translations.js` 中为所有语言添加对应的翻译键值

### 样式自定义
- 语言选择器样式在 `styles.css` 中的 `.language-selector` 部分
- 支持响应式设计，移动端自动适配

## 🌟 主要功能 / Key Features

✅ **默认英文显示** - Default English display  
✅ **9种语言支持** - 9 languages supported  
✅ **响应式设计** - Responsive design  
✅ **本地存储记忆** - Local storage memory  
✅ **动态语言切换** - Dynamic language switching  
✅ **完整游戏翻译** - Complete game translations  
✅ **移动端优化** - Mobile optimization  

## 📱 移动端适配 / Mobile Adaptation

- 语言选择器在移动端自动缩小
- 下拉菜单位置自动调整
- 触控友好的交互体验
- 小屏幕下的优化显示

---

**注意**: 这是一个完全响应式的多语言游戏网站，支持PC和移动设备，默认使用英文，用户可以随时切换到其他8种语言。 