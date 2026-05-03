# 網站優化待辦清單

**最後更新：2026-05-03**
**適用專案：** tonteih-design（Next.js 16）

---

## 一、需要抽換的靜態內容

> 以下皆為佔位符（placeholder），上線前必須替換為真實資料。

### 1. 聯絡資訊（`src/app/contact/page.tsx`）

| 欄位 | 目前佔位內容 | 需替換為 |
|------|------------|---------|
| 諮詢專線 | `+886 (02) 2345-6789` | 真實電話號碼 |
| 電子郵件 | `hello@atelierdesign.com` | 真實 Email |
| 工作室地址 | `台北市信義區設計路482號 設計藝術園區` | 真實地址 |
| LINE QR Code | AI 生成假圖（無法掃描） | 真實 LINE 官方帳號 QR Code |
| 地圖圖片 | 靜態圖（無法互動） | Google Maps `<iframe>` embed |

---

### 2. 作品集案例（`src/app/portfolio/page.tsx`）

| 欄位 | 目前佔位內容 | 需替換為 |
|------|------------|---------|
| 作品圖片（全部） | Google AIDA 生成圖 | 實際完工作品照片 |
| 作品名稱 | 丸之閣樓、斯德哥爾摩寓所 等英文化名稱 | 真實案名或自訂命名 |
| 地點 | 台北/台中/新竹/高雄（通用） | 實際案件地點 |
| 風格標籤 | 日系和風、北歐風、現代風 | 依照實際風格調整 |
| Before/After 對比圖 | 丸之閣樓的改造前後皆為AI圖 | 真實施工前後照片 |

---

### 3. 關於我們（`src/app/about/page.tsx`）

| 欄位 | 目前佔位內容 | 需替換為 |
|------|------------|---------|
| 團隊成員姓名 | Julian Thorne、Elena Vance、Marcus Reed、Sarah Chen | 真實員工姓名（或移除此區塊） |
| 團隊成員職稱 | 首席建築師、資深設計師 等 | 真實職稱 |
| 團隊成員照片 | Google AIDA 生成人像 | 真實員工照 |
| 團隊成員介紹 | 英文化背景描述 | 真實個人介紹 |
| 創辦人姓名 | `Arthur P. Sterling` | 真實創辦人姓名 |
| 創辦人照片（右欄） | AI 生成照 | 真實照片 |
| 獎項認證（5 項） | 建築文摘、綠色設計大獎 等 | 真實獲獎資歷，或若無則移除此區塊 |
| 成立年份 | `2012 年` | 確認正確年份 |

---

### 4. 首頁（`src/app/page.tsx`）

| 欄位 | 目前佔位內容 | 需替換為 |
|------|------------|---------|
| Hero 背景圖 | Google AIDA 生成圖 | 自家代表作照片 |
| 客戶見證引言 | 英文名字 Elizabeth & Mark Vance | 真實客戶（需取得同意）或移除 |
| 完工建案數量 | `500+` | 確認實際數字 |
| 執業年數 | `15+` | 確認實際年數 |

---

### 5. 服務頁（`src/app/services/page.tsx`）

| 欄位 | 目前佔位內容 | 需替換為 |
|------|------------|---------|
| 精緻木工圖 | AI 生成圖 | 自家木工案例照片 |
| 鐵工鋁門窗圖 | AI 生成圖 | 自家鐵工案例照片 |
| 軟裝設計圖 | AI 生成圖 | 自家軟裝案例照片 |

---

### 6. 環境變數（`.env.local`）✅

聯絡表單已串接 Neon Postgres（`@neondatabase/serverless`），Supabase 已完全移除。

```bash
DATABASE_URL=postgres://...        # Vercel Marketplace Neon 自動佈建
ADMIN_PASSWORD=...                 # /admin 頁面密碼保護
NEXT_PUBLIC_SITE_URL=              # 選填，metadataBase 使用
```

Vercel 請至 **Project Settings → Environment Variables** 加入。

---

## 二、功能優化建議

### 🔴 高優先（影響真實可用性）

#### 1. 聯絡表單 + Neon 資料庫 ✅
- 已使用 `@neondatabase/serverless` 串接 Neon Postgres
- Server Action `submitContact()` 含輸入驗證（長度、電話格式）
- `/admin` 頁面（HMAC 密碼保護）可查看所有諮詢記錄

#### 2. LINE 聯繫方式 ✅
- 已改為文字說明：「加好友 ID：0973-357-788」+ LINE 品牌綠 icon 區塊

#### 3. 連絡地圖改為可互動
- **位置：** `src/app/contact/page.tsx`
- **做法：** 替換靜態 `<img>` 為 Google Maps embed `<iframe>`

---

### 🟡 中優先（體驗提升）

#### 4. 作品集篩選器實裝 ✅
- `PortfolioGrid.tsx`（`'use client'`）已實作 `useState` 風格篩選
- 6 個真實案例，附實際作品照片

#### 5. 作品集個案頁
- **問題：** 每張作品卡片無法點擊，沒有詳細頁
- **做法：** 建立 `src/app/portfolio/[slug]/page.tsx`，以靜態資料或 Neon 為資料來源

#### 6. FAQ Accordion 加入動畫
- **位置：** `src/app/contact/page.tsx` L90-113
- **問題：** 使用原生 `<details>` 沒有展開過渡動畫
- **做法：** 改用 CSS `max-height` transition 或引入 Radix UI `Accordion` 元件

---

### 🟢 低優先（品牌完整度）

#### 7. 多則客戶見證輪播
- **位置：** `src/app/page.tsx` L152-163
- **問題：** 目前只有一則，顯得單薄
- **做法：** 建立 testimonials 陣列，加入自動輪播或手動切換

#### 8. OG Image 與社群分享 Meta
- **位置：** `src/app/layout.tsx`
- **做法：** 加入 `openGraph` metadata，建立 `src/app/opengraph-image.tsx` 動態生成分享圖

#### 9. Google Analytics 追蹤
- **做法：** 使用 `@next/third-parties/google` 加入 GA4 追蹤碼

#### 10. 404 頁面
- **做法：** 建立 `src/app/not-found.tsx`，維持品牌調性避免顯示醜陋的預設 404

---

## 三、技術規格現況

| 項目 | 內容 |
|------|------|
| 框架 | Next.js 16（App Router） |
| 樣式 | Tailwind CSS v4 |
| 字型 | Playfair Display（標題）、Noto Serif TC（內文） via `next/font` |
| 圖示 | Material Symbols Outlined（Google CDN） |
| 後端 | Neon Postgres（`@neondatabase/serverless`） |
| 部署 | Vercel |
| Repo | `https://github.com/Archie-design/tonteih-design` |
