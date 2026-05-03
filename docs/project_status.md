# tonteih-design 網站開發狀態

**最後更新：2026-05-03**

---

## 專案概述

為桃園室內設計統包公司「**東鐵工程**（東鐵工程有限公司，統一編號 66450110）」建立的 5 頁行銷網站。

- GitHub Repo：`https://github.com/Archie-design/tonteih-design`
- 本地路徑：`/Users/keke/tonteih-design/`
- 正式網址：`https://tonteih-design.vercel.app`
- 負責人：宋崇華 Harry Sung（`h0973357788@gmail.com`）

---

## 技術規格

| 項目 | 內容 |
|------|------|
| 框架 | Next.js 16（App Router，Server Components） |
| 樣式 | Tailwind CSS v4（`@theme {}` design tokens） |
| 字型 | Playfair Display（`--font-headline`）、Noto Serif TC（`--font-body`）、Liu Jian Mao Cao（`--font-brush`）via `next/font` |
| 圖示 | Material Symbols Outlined（Google CDN via `<link>` in `layout.tsx`） |
| 後端 | Neon Postgres（`@neondatabase/serverless`，lazy init `getSql()`） |
| 部署 | Vercel（Neon 透過 Marketplace 整合，自動佈建 `DATABASE_URL`） |
| React | 19（`useRef`、`useTransition`、`useState`） |

---

## 檔案結構

```
src/
  app/
    layout.tsx          # Root layout — Navbar + Footer + 字型注入
    page.tsx            # 首頁（Hero、Stats、Bento Grid、6大優勢、Process、Brand Promise）
    about/page.tsx      # 關於我們（品牌故事、創辦人信）
    services/page.tsx   # 服務項目（Bento Grid、5 步驟流程、CTA）
    portfolio/page.tsx  # 精選作品（Server Component，6 個實際案例）
    contact/page.tsx    # 聯絡我們（真實電話 / Email / 地址 / LINE）
    admin/
      page.tsx          # 諮詢記錄列表（HMAC cookie 保護，force-dynamic）
      login/            # 登入表單 + Server Action
    globals.css         # @theme tokens + 全站 CJK typography fix
  components/
    Navbar.tsx          # 固定導覽列（mobile focus trap + ESC 關閉）
    Footer.tsx          # 4 欄 footer（Facebook、QR Code、法定資訊）
    ContactForm.tsx     # 'use client' — 諮詢表單（autoComplete、驗證）
    PortfolioGrid.tsx   # 'use client' — 作品集風格篩選器
  lib/
    db.ts               # getSql() lazy init + ContactSubmission type
    actions.ts          # submitContact() Server Action（驗證 + Neon insert）
    auth.ts             # makeToken / verifyToken / checkPassword（HMAC sha256）
```

---

## 各頁功能現況

### 首頁（`page.tsx`）
- Hero：全螢幕背景圖（`next/image` fill + priority）+ 雙 CTA（min-h-[44px] 觸控最佳化）
- Stats：30+ 年 / 500+ 建案
- 服務 Bento Grid：6 項服務以非對稱 12 欄佈局呈現
- 6大優勢：工程保固 / 透明報價 / 一站統包等 + 4 項 trust bar
- Process Timeline：4 步驟（lg: 斷點交錯偏移避免平板重疊）
- Brand Promise：「歡迎來電洽詢」+ 品牌箴言

### 關於我們（`about/page.tsx`）
- 品牌故事：7+5 欄非對稱排版 + 浮動資訊卡
- 創辦人信：深色背景全寬區塊，署名「東鐵工程 創辦人」
- 已移除虛構團隊成員（Julian Thorne 等）

### 服務項目（`services/page.tsx`）
- Services Bento Grid：5 項工程服務（精緻木工、水電、鐵工鋁門窗、泥作油漆、軟裝設計）
- 5 步驟施工流程（交錯重疊卡片，lg: 斷點適用）
- CTA Section：雙按鈕 + 已更新品牌文案

### 精選作品（`portfolio/page.tsx` + `PortfolioGrid.tsx`）
- 6 個真實案例：青埔亞昕喜徠登 / 林口花開富貴 / 林口黃金印像 / 龜山A7大亮時代 / 英堡日朗 / A7大亮時代II
- 風格篩選：`useState` 客戶端篩選（現代風 / 北歐風 / 工業風 / 日式風）
- `next/image` fill + sizes + eager(前3張) / lazy(其餘)

### 聯絡我們（`contact/page.tsx`）
- 真實電話：行動 0973-357-788 / 公司 (03) 354-2272 / 傳真 (03) 354-2270
- Email：`h0973357788@gmail.com`（`mailto:` 連結）
- 地址：桃園市蘆竹區海山中街 106 號之 1
- LINE：品牌綠 icon 區塊 + 「加好友 ID：0973-357-788」

### /admin（`admin/page.tsx`）
- HMAC sha256 cookie 保護（HttpOnly / Secure / SameSite=Strict，7 天有效）
- 列出所有 `contacts` 資料表記錄，電話欄可點擊
- `export const dynamic = 'force-dynamic'`

---

## 設計系統

所有 Token 定義於 `src/app/globals.css` `@theme {}` 區塊：
- 主色：`--color-primary`（深炭灰）、`--color-secondary`（暖棕）
- 字型：`font-headline`（Playfair Display）、`font-body`（Noto Serif TC）、`font-label`（Playfair Display）
- CJK typography：`text-wrap: balance`（標題）、`text-wrap: pretty`（段落）、`line-break: strict`

---

## 已完成事項

- [x] 全站 UI/UX 審查（uiux_review_2026-05-02.md）— 14/16 項修復
- [x] 全站 Code Review（code_review_2026-04-28.md）— 15 項全數修復
- [x] Supabase → Neon Postgres 遷移
- [x] /admin 諮詢記錄頁面（HMAC 密碼保護）
- [x] 作品集功能性篩選器
- [x] 真實聯絡資訊（電話 / Email / 地址 / LINE）
- [x] Mobile menu focus trap + ESC 關閉
- [x] Skip link + 所有 main id 屬性
- [x] next/image 替換（Hero + 12 張作品集）
- [x] CJK 斷行修正（全站 globals.css）
- [x] Facebook / Messenger 真實連結 + QR Code

## 待處理事項

- [ ] **aida-public 佔位圖替換**：Services Bento（木工、鐵工、軟裝）、About 品牌故事、Contact 地圖 — 需業主提供真實照片
- [ ] **地圖改為 Google Maps iframe**：`contact/page.tsx` 靜態圖 → 可互動嵌入
- [ ] **作品集個案詳細頁**：`portfolio/[slug]/page.tsx`
- [ ] **OG Image**：`src/app/opengraph-image.tsx` 動態社群分享圖
- [ ] **404 頁面**：`src/app/not-found.tsx`
- [ ] **Google Analytics**：`@next/third-parties/google` GA4
- [ ] **FAQ Accordion 動畫**：`contact/page.tsx` `<details>` 加過渡效果
