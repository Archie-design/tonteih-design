# tonteih-design 網站雛形開發狀態

**最後更新：2026-04-11**

---

## 專案概述

為室內設計統包公司「雅筑設計 (Atelier Design)」建立的多頁靜態網站雛形。
GitHub repo：`https://github.com/Archie-design/tonteih-design.git`
本地路徑：`/Users/keke/tonteih-design/`

設計稿來源為 `/reference/stitch/` 下的 AI 原型（Stitch），本次將其整合為可實際瀏覽的多頁網站。`reference/` 資料夾保留不動供對照使用。

---

## 檔案結構

```
/Users/keke/tonteih-design/
├── index.html          ← 首頁
├── about.html          ← 關於我們
├── services.html       ← 服務項目
├── portfolio.html      ← 精選作品
├── contact.html        ← 聯絡我們
├── docs/
│   └── project_status.md   ← 本文件
└── reference/
    └── stitch/
        ├── atelier_beam/DESIGN.md   ← 設計系統文件
        ├── home/code.html           ← 首頁原稿
        ├── about_us/code.html       ← 關於原稿
        ├── services/code.html       ← 服務原稿
        ├── portfolio/code.html      ← 作品集原稿
        └── contact/code.html        ← 聯絡原稿
```

---

## 技術規格

| 項目 | 內容 |
|------|------|
| 框架 | 純靜態 HTML（無框架） |
| CSS | Tailwind CSS v3（CDN） |
| 字型 | Manrope（標題）、Noto Serif TC（內文） |
| 圖示 | Material Symbols Outlined（Google Fonts） |
| 圖片 | Google AIDA Public（lh3.googleusercontent.com） |
| 語言 | 繁體中文（zh-TW / zh-Hant-TW） |
| 部署 | 無需 build，直接以 file:// 或靜態伺服器開啟 |

---

## 設計系統（來自 DESIGN.md）

### 色彩 Token
| Token | Hex | 用途 |
|-------|-----|------|
| `primary` | `#1a2025` | 主結構色、深色背景 |
| `secondary` | `#735a3a` | 強調、CTA、金色點綴 |
| `tertiary` | `#271e09` | 深色陰影背景區塊 |
| `surface` | `#f9f9f7` | 頁面基底 |
| `surface-container-lowest` | `#ffffff` | 卡片最亮層 |
| `primary-container` | `#2f353b` | 深色卡片背景 |

### 字型
- **Display / Headline：** Manrope（`font-manrope` / `font-headline`）
- **Body：** Noto Serif TC（`font-body`）
- **Label / Button：** Manrope（`font-label`）

### 設計原則
- 無框線（`border` 禁用），以背景色差做分層
- 環境陰影（32px blur、4% opacity）
- 玻璃擬態導覽（80% opacity + `backdrop-blur-xl`）
- 圓角：`DEFAULT` 0.125rem、`xl` 0.5rem

---

## 各頁功能說明

### index.html（首頁）
- Hero：全螢幕背景圖 + 漸層遮罩，雙 CTA 按鈕
- Stats：15+ 年 / 500+ 建案 非對稱卡片
- Core Services：12 欄 Bento Grid（木作、水電、泥作、鐵件、軟裝）
- Process Timeline：4 步驟重疊式卡片（`z-index` 遞增）
- Testimonial：深色全寬客戶見證

### about.html（關於我們）
- 品牌故事：7+5 欄非對稱排版，含浮動資訊卡（`-bottom-10 -left-10`）
- 團隊：4 人卡片，hover 轉彩色（`grayscale → grayscale-0`）+ 漸層遮罩
- 獎項：5 個認證 icon 排列（`opacity-60`）
- 創辦人信：`primary-container` 背景、左文右圖雙欄

### services.html（服務項目）
- Services Bento Grid：木工（16:9 大圖）+ 水電、鐵工、泥作、軟裝等卡片
- Process Timeline：5 步驟交錯重疊式卡片（設計系統標誌性元件）
- CTA Section：漸層深色背景（`hero-gradient`）

### portfolio.html（精選作品）
- Filter Bar：深色 `primary` 背景，類別 / 規模 / 風格篩選按鈕（UI 僅，無 JS 功能）
- Masonry Grid：CSS Grid 自訂 `masonry-tall`（3 rows）/ `masonry-short`（2 rows）
- Project 1：左右分割 Before/After 對比（`w-1/2` + `border-r border-white/20`）
- 5 個案例，hover 顯示標題資訊（`translate-y-4 opacity-0 → translate-y-0 opacity-100`）

### contact.html（聯絡我們）
- 5+7 欄佈局：左側聯絡資訊 + 右側表單
- 聯絡資訊：電話、Email、地址、LINE QR Code 圖片
- 諮詢表單：姓名/電話、物業類型/需求（select）、預算範圍（radio pills）、專案詳情（textarea）
- FAQ：3 個 `<details>` 原生可展開項目

---

## 共用元件實作

### 導覽列（每頁一致）
```html
<nav class="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl">
  <!-- Logo（連結至 index.html）-->
  <!-- Desktop Links（md:flex） -->
  <!-- 免費諮詢按鈕（連結至 contact.html）-->
  <!-- 漢堡按鈕（md:hidden）-->
  <!-- Mobile Menu（hidden，JS toggle）-->
</nav>
```

**Active 頁面樣式：** `border-b-2 border-stone-700 pb-1`

### Footer（每頁一致）
- 4 欄佈局：品牌說明、導覽連結、社群、聯絡資訊
- 背景：`bg-stone-100`

### 行動版選單 JS
```js
document.getElementById('hamburger').addEventListener('click', function () {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
});
```

---

## 頁面連結對照表

| 按鈕 / 連結 | 指向 |
|------------|------|
| Logo（所有頁） | `index.html` |
| 首頁 nav | `index.html` |
| 服務項目 nav | `services.html` |
| 作品集 nav | `portfolio.html` |
| 關於我們 nav | `about.html` |
| 免費諮詢（所有頁） | `contact.html` |
| 預約免費諮詢 CTA（首頁） | `contact.html` |
| 瀏覽作品集 CTA（首頁） | `portfolio.html` |
| 查看所有服務（首頁） | `services.html` |
| 開始您的專案 CTA（服務頁） | `contact.html` |
| 開啟對話 CTA（作品集頁） | `contact.html` |

---

## 待辦 / 後續優化方向

- [ ] 替換 Google AIDA 佔位圖片為實際作品照片
- [ ] 聯絡表單串接後端（建議：Formspree 或自建 API）
- [ ] Portfolio 篩選功能加入 JS 互動邏輯（目前僅 UI）
- [ ] 補充 SEO meta tags（`og:image`、`description`、`canonical`）
- [ ] 加入 `favicon.ico` / `apple-touch-icon`
- [ ] 加入 Google Analytics 或 Plausible 追蹤碼
- [ ] 考慮遷移至 Astro 或 Next.js 以利日後維護與 CMS 整合
