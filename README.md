# GX_cts Corporate Website (GX_cts 企業形象網站)

這是一個為 **GX_cts (Creative Technology Studio)** 打造的高科技風格企業形象網站。專案強調「美學與邏輯的結合」，採用 Cyberpunk/Sci-Fi 的視覺風格，並針對手機端進行了極致的 APP 級體驗優化。

## 🌟 專案特色

*   **沉浸式視覺體驗**：
    *   開場 Preloader 打字機動畫與 Logo 飛行定位。
    *   3D CSS 視差滾動背景與玻璃擬態 (Glassmorphism) 介面。
    *   滑鼠互動光圈 (僅限電腦版)。
*   **極致手機版體驗 (Mobile-First)**：
    *   **APP 級操作感**：移除垂直吸附 (Scroll Snap)，提供原生般的流暢下滑體驗。
    *   **智慧導航**：服務卡片支援橫向滑動 (Swipe)，並具備自動偵測的左右箭頭提示。
    *   **版面優化**：自動隱藏不適合手機的 3D 動畫與裝飾線，確保閱讀舒適度。
    *   **容器防爆**：嚴格的 CSS 容器管理，確保所有輸入框與內容在各種螢幕尺寸下皆不跑版。
*   **安全性與功能**：
    *   **無伺服器表單**：整合 Netlify Forms，無需後端即可接收信件。
    *   **多重防護**：內建 Honeypot (防機器人)、Rate Limiting (防灌水) 與 DOM XSS 防護。
    *   **多語系支援**：即時切換繁體中文/英文。

## 📂 檔案結構

```text
GX_cts/
├── index.html          # 主頁面 (包含電腦版與手機版響應式邏輯)
├── style.css           # 核心樣式表 (包含 RWD 媒體查詢)
├── script.js           # 核心邏輯 (動畫、表單處理、多語系、安全防護)
├── assets/             # 圖片資源目錄
└── README.md           # 專案說明文件
```

> **注意**：開發過程中的 `mobile_dev.html` 與 `mobile_style.css` 已經完成階段性任務並整合回主檔案中，目前僅需維護 `index.html` 與 `style.css`。

## 🚀 部署指南 (Netlify)

本專案經過優化，最適合使用 **Netlify** 進行靜態部署。

### 方法一：Netlify Drop (最簡單)
1.  登入 [Netlify](https://app.netlify.com/)。
2.  點擊 "Sites" -> "Add new site" -> "Deploy manually"。
3.  將整個 `GX_cts` 資料夾 **直接拖曳** 到網頁上的虛線框中。
4.  等待數秒，網站即刻上線。

### 方法二：Git 自動化部署 (推薦)
1.  將專案推送到 GitHub/GitLab。
2.  在 Netlify 選擇 "Import from Git"。
3.  連結您的儲存庫，Build Settings 全部留空即可 (因為是純靜態網站)。

## 📝 表單功能設定

### 1. 啟用通知
部署後，請至 Netlify 後台：
*   **Site Configuration** -> **Forms** -> **Form notifications**。
*   設定 Email 通知，當有新諮詢時會寄信給您。

### 2. 防垃圾機制
*   **Honeypot**：表單內含隱藏欄位 `bot-field`，機器人填寫即被攔截。
*   **Rate Limiting**：`script.js` 限制同一瀏覽器 1 分鐘內只能提交一次 (可於程式碼中調整 `COOLDOWN_TIME`)。
*   **XSS 防護**：所有使用者輸入的內容在顯示前回饋訊息前，皆經過 `escapeHtml()` 轉義，防止腳本注入攻擊。

## 📱 手機版與響應式設計策略

本專案採用 **「CSS 媒體查詢 (Media Query)」** 結合 **「嚴格容器管理」** 的策略：
*   **斷點**：`max-width: 768px` 為手機版分界。
*   **優化細節**：
    *   `html { scroll-snap-type: none; }`：解決手機垂直滑動卡頓問題。
    *   `.about-visual { display: none; }`：隱藏手機上顯得擁擠的圖片區塊。
    *   **Strict Overflow Control**：強制所有 input 元素 `width: 100%` 且 `box-sizing: border-box`，杜絕任何水平卷軸 (Horizontal Scroll) 的產生。

## 🛠️ 開發者注意事項

*   **修改表單欄位**：若新增 `input`，請務必加上 `name` 屬性，Netlify 才能正確抓取。
*   **重置體驗**：每次重新整理網頁，程式會自動強制捲動回頂端並清除 URL Hash (`#`)，以確保沉浸式開場動畫完整呈現。

---
**GX_cts Project** - Created by Antigravity
