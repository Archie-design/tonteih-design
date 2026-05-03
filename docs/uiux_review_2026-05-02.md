# UI/UX 審查 — 2026-05-02

**框架**：UI/UX Pro Max skill (`.agents/skills/ui-ux-pro-max`) — P1–P9 優先級體系  
**審查範圍**：8 個頁面 / 5 個元件 / globals.css  
**整體評估**：基礎良好（先前 code review 已修 15 項），主要待處理在 **效能** 與 **服務頁佔位內容**。

| 嚴重 | 高 | 中 | 低 | 合計 |
|---|---|---|---|---|
| 2 | 6 | 5 | 3 | **16** |

---

## 修復狀態（更新於 2026-05-02）

| 完成 | 待處理 | 略過 |
|---|---|---|
| **14** | 1（#8 換圖待業主決定） | 1（#15 低優先） |

| # | 項目 | 狀態 | 備註 |
|---|---|---|---|
| 1 | Skip link | ✅ | layout + 6 個 main |
| 2 | Hero alt="" | ✅ | 加 `aria-hidden="true"` |
| 3 | 標題層級 | ✅ | services bento 加 `<h2 className="sr-only">` |
| 4 | Mobile menu ESC + focus trap | ✅ | useRef + Tab 循環 + 關閉時還原焦點 |
| 5 | Hero CTA min-h-[44px] | ✅ | 兩顆 CTA 加 `inline-flex items-center justify-center` |
| 6 | Portfolio + Hero next/image | ✅ | 12 張 + Hero；前 3 張 eager、其餘 lazy；Hero `priority` |
| 7 | Services duration-700 → 300 | ✅ | 3 處 |
| 8 | aida-public 圖片替換 | ⏳ | 待業主提供真實圖；Services 那 3 張 `<img>` 等換圖時一併改 next/image |
| 9 | Atelier → 美東歐美 | ✅ | services CTA 文案 |
| 10 | Services text-stone-* → token | ✅ | 3 處改 `text-[var(--color-on-primary-container)]` |
| 11 | Process timeline md: → lg: | ✅ | home + services；平板用 2 欄 grid |
| 12 | Bento h-[700px] → min-h | ✅ | `md:min-h-[700px]` |
| 13 | body 字型 fallback chain | ✅ | globals.css 加 PingFang TC、Heiti TC、Noto Serif CJK TC |
| 14 | ContactForm autoComplete | ✅ | name + tel |
| 15 | 錯誤訊息位置 | ⊘ | 低優先；目前對單頁表單可接受 |
| 16 | 行動選單 ESC | ✅ | 與 #4 合併處理 |

**Build 驗證**：`npm run build` 通過、9 路由全部產出、TypeScript 無錯。

---

## P1 Accessibility (CRITICAL)

### 🔴 1. 缺少 Skip Link ✅
全站沒有「跳至主要內容」連結，鍵盤使用者每次都得 Tab 過 navbar 才能到內容。

- **位置**：[src/app/layout.tsx](src/app/layout.tsx)
- **修法**：在 `<body>` 開頭加 `<a href="#main" className="sr-only focus:not-sr-only fixed top-4 left-4 z-[100] bg-[var(--color-primary)] text-white px-4 py-2 rounded">跳至主要內容</a>`，並讓每個頁面 `<main>` 加 `id="main"`。

### 🟠 2. Hero 背景圖 alt 應為空 ✅
- **位置**：[src/app/page.tsx:17](src/app/page.tsx#L17)
- 圖片被覆蓋灰階 + 主視覺，純裝飾，但 `alt="奢華極簡客廳..."` 會被螢幕閱讀器朗讀
- **修法**：`alt=""`

### 🟡 3. 標題層級跳躍 ✅
- [src/app/services/page.tsx:30](src/app/services/page.tsx#L30) `<h3>` 直接接在 `<h1>` 後（跳過 `<h2>`）
- 同檔多處 bento card 直接用 `<h3>` 而沒有外層 `<h2>` 容器
- **修法**：bento 區塊外加 `<h2 className="sr-only">服務項目</h2>`

---

## P2 Touch & Interaction (CRITICAL)

### 🟠 4. 行動選單缺少焦點陷阱與 ESC 關閉 ✅
- **位置**：[src/components/Navbar.tsx](src/components/Navbar.tsx)
- 開啟行動選單後，Tab 鍵會跑出選單；按 ESC 不會關閉
- **修法**：useEffect 加 `keydown` 事件監聽 ESC；首次開啟時 focus 第一個連結；加 focus trap（或最起碼處理 ESC + 點外部關閉）

### 🟡 5. Hero CTA 按鈕沒明確 min-height ✅
- **位置**：[src/app/page.tsx:32-43](src/app/page.tsx#L32-L43)
- 用 `px-8 py-4`，視覺夠大但無 `min-h-[44px]` 保險（字級設定變動時可能縮水）

---

## P3 Performance (HIGH) — 最大改進空間

### 🟠 6. 整站 `<img>` 都未用 `next/image` ✅（部分）

> Hero、Portfolio masonry 已改為 `next/image`。Services bento 與 About/Contact 的 `<img>` 仍未改 — 待 #8 換成真實圖時一併處理。
影響：無 WebP/AVIF 自動轉檔、無響應式 srcset、無懶載、CLS 風險高（所有 `<img>` 沒 width/height）。

| 位置 | 數量 |
|---|---|
| [src/app/page.tsx](src/app/page.tsx) Hero / Bento | ~3 張 |
| [src/app/services/page.tsx](src/app/services/page.tsx) Bento | ~3 張 |
| [src/components/PortfolioGrid.tsx](src/components/PortfolioGrid.tsx) Masonry | **12 張** |
| [src/app/about/page.tsx](src/app/about/page.tsx) 品牌故事 | 1 張 |
| [src/app/contact/page.tsx](src/app/contact/page.tsx) 地圖 | 1 張 |

**修法**：
1. Portfolio 一律改 `next/image`，加 `sizes="(max-width: 768px) 100vw, 33vw"`
2. Hero 加 `priority` + `fetchPriority="high"`
3. 其餘 below-the-fold 圖片預設 `loading="lazy"`

### 🟠 7. 服務頁 hover 動畫 700ms 過長 ✅
- **位置**：[src/app/services/page.tsx:26, 42, 56](src/app/services/page.tsx#L26)
- `duration-700` 違反 P7 規範（150–300ms）— `about` 頁先前已修，`services` 漏改
- **修法**：`duration-700` → `duration-300`

### 🟡 8. AI 生成圖（`aida-public` URL）未替換 ⏳（待業主提供來源）
- [src/app/page.tsx:18](src/app/page.tsx#L18) Hero
- [src/app/page.tsx:88, 99](src/app/page.tsx#L88) Bento grid
- [src/app/services/page.tsx](src/app/services/page.tsx) × 3
- [src/app/about/page.tsx](src/app/about/page.tsx) 品牌故事
- [src/app/contact/page.tsx](src/app/contact/page.tsx) 地圖

這些 URL 不保證長期可用，且不在你的 CDN 控制下。需要：（a）業主提供真實圖片，或（b）使用真實實景照（已有 portfolio 資料夾可挑用）。

---

## P4 Style Selection (HIGH)

### 🟠 9. Services 頁殘留舊品牌名 ✅
- **位置**：[src/app/services/page.tsx:119](src/app/services/page.tsx#L119)
- 「已有超過 500 位屋主選擇信任 **Atelier** 專業流程」— Atelier 是初版佔位品牌
- **修法**：`Atelier` → `東鐵工程`

### 🟡 10. Services 頁有硬編碼 Tailwind 顏色 ✅
- [services/page.tsx:31](src/app/services/page.tsx#L31)：`text-stone-200`
- [services/page.tsx:52, 98](src/app/services/page.tsx#L52)：`text-stone-300`
- [services/page.tsx:119](src/app/services/page.tsx#L119)：`text-stone-400`
- 破壞 design token 一致性
- **修法**：改 `text-[var(--color-on-primary-container)]` 或對應 token

---

## P5 Layout & Responsive (HIGH)

### 🟠 11. Process Timeline 負邊距在中斷點重疊 ✅
- [src/app/page.tsx:171-179](src/app/page.tsx#L171-L179) Home — `md:mt-12 / md:mt-24 / md:mt-36 md:-ml-4`
- [src/app/services/page.tsx:88-91](src/app/services/page.tsx#L88-L91) Services — `md:-mt-12` 階梯
- 平板 (768–1023px) 是 md 斷點臨界，可能 z-index 重疊但內容打結
- **修法**：把偏移改 `lg:` 套用，平板顯示一般 grid

### 🟡 12. Bento 固定 `h-[700px]` ✅
- [src/app/page.tsx:78](src/app/page.tsx#L78)
- 文字翻譯／字型 fallback 可能讓內容溢出
- **修法**：`h-[700px]` → `min-h-[700px]`

---

## P6 Typography & Color (MEDIUM)

### 🟡 13. 字體 fallback 風險 ✅
- [src/app/layout.tsx](src/app/layout.tsx) `Noto_Serif_TC` 用 `preload: false`（CJK 必要），FOIT 期間中文 fallback 到 `serif` 可能跳動
- **修法**：在 `globals.css` 為 body 設定明確 system fallback：
  ```css
  body {
    font-family: var(--font-body), "PingFang TC", "Heiti TC", "Noto Serif CJK TC", serif;
  }
  ```

---

## P7 Animation (MEDIUM)

### 🟢 已於 P3 #7 涵蓋
其餘動畫均符合 150–300ms 規範。

---

## P8 Forms & Feedback (MEDIUM)

### 🟡 14. ContactForm 缺 `autoComplete` ✅
- **位置**：[src/components/ContactForm.tsx](src/components/ContactForm.tsx)
- 各 input 沒 `autoComplete="name"` / `"tel"` 等屬性，行動裝置無法自動填入
- **修法**：
  - name → `autoComplete="name"`
  - phone → `autoComplete="tel"`
  - detail → `autoComplete="off"`

### 🟢 15. 錯誤訊息位置（低優先）⊘ 略過
- 表單錯誤統一顯示在送出按鈕上方，理想上應緊鄰問題欄位
- 對目前單頁簡短表單可接受

---

## P9 Navigation (HIGH)

### 🟡 16. 行動選單無 ESC 關閉 ✅
（已於 P2 #4 處理）

---

## 修復優先序

### 第一波（高 ROI、~30 分鐘）
1. Skip link
2. Hero alt=""
3. Services 頁 `Atelier` → `東鐵工程`
4. Services `duration-700` → `duration-300`
5. ContactForm 加 autoComplete

### 第二波（影響大、~1–2 小時）
6. Mobile menu ESC + focus trap
7. Portfolio 12 張圖改 `next/image`
8. Hero 圖加 `priority` + `fetchPriority`
9. 換掉 aida-public AI 圖（需業主決定來源）

### 第三波（清理工作）
10. Services 頁 `text-stone-*` → token
11. 標題層級加 `<h2 className="sr-only">`
12. Bento `h-[700px]` → `min-h-[700px]`
13. Process timeline `md:` → `lg:` 偏移
14. body 字型 fallback

---

## 後續處理方式

執行時可指定批次（「執行第一波」「執行 P1 全部」「修第 6 項」），或逐條編號處理。每完成一項刪除或標 ✓。
