# Code Review — 2026-04-28

**Files reviewed**: 11 files, ~1,100 lines  
**Overall assessment**: REQUEST_CHANGES  
**Issues found**: P0: 1 / P1: 3 / P2: 5 / P3: 6

---

## Findings

### P0 — Critical

**1. [layout.tsx:11-16] Noto Serif TC 缺少中文字集 — 全站中文字體無法載入**

- `Noto_Serif_TC` 設定了 `subsets: ['latin']`，但中文字符需要 `chinese-traditional` subset。目前所有中文 body text 都 fallback 到系統字型，完全破壞排版設計系統。
- 修正：
  ```ts
  const notoSerifTC = Noto_Serif_TC({
    subsets: ['latin', 'chinese-traditional'],
    weight: ['400', '700'],
    variable: '--font-body',
    display: 'swap',
  })
  ```

---

### P1 — High

**2. [actions.ts:6-14] Server Action 無輸入驗證，且將原始 DB 錯誤回傳前端**

- `submitContact` 直接將 client 傳入的 `data` 物件插入 Supabase，沒有長度限制、格式驗證或 rate limiting。
- `return { success: false, error: error.message }` 將 Supabase 原始錯誤（可能含 schema 資訊）暴露給 browser。
- 修正方向：加入 zod schema 驗證，錯誤統一回傳 `'發生系統錯誤，請稍後再試。'`。

**3. [supabase.ts:3-4] 環境變數非空斷言無 guard**

- `process.env.NEXT_PUBLIC_SUPABASE_URL!` 若未設定，會以 `createClient(undefined, undefined)` 靜默創建，直到第一次 DB 呼叫才拋出難以追蹤的錯誤。
- 修正：
  ```ts
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!supabaseUrl || !supabaseAnonKey) throw new Error('Missing Supabase env vars')
  ```

**4. [layout.tsx:17-18] Import 順序異常**

- `import Navbar` / `import Footer` 被放在 `export const metadata` 之後。JS hoisting 讓這能運作，但違反慣例，會觸發 linter 警告。所有 import 應移至檔案頂部。

---

### P2 — Medium

**5. [portfolio/page.tsx:72-98] 篩選按鈕純裝飾，無實際功能**

- 所有 filter 按鈕點擊後沒有任何狀態更新或篩選邏輯，造成鍵盤與輔助技術使用者的誤導。
- 短期修正：加 `disabled` 或改成純視覺標籤；長期應實作實際篩選狀態（`useState` + 陣列 filter）。

**6. [about/page.tsx:60-75] 虛構團隊成員 + 不穩定 AI 生成圖片 URL**

- Julian Thorne、Elena Vance、Marcus Reed、Sarah Chen 為佔位名稱，與品牌不符。
- 圖片來自 `lh3.googleusercontent.com/aida-public/`，是 AI 生成的臨時 URL，未來可能 404。
- 需換成真實成員介紹，或暫時移除該區塊。

**7. [page.tsx:191-195] 虛構客戶見證**

- "Elizabeth & Mark Vance"、"切爾西頂層公寓" 為英文虛構名字，與台灣桃園品牌完全不符，損害可信度。
- 需換成真實客戶文字或暫時移除。

**8. [contact/page.tsx:65-75] 地圖圖片與地址資訊不一致**

- 圖片 `alt` 標籤仍寫「台北信義區地圖」，但地址已更新為桃園市，需同步修正。
- 圖片同樣來自 `lh3.googleusercontent.com/aida-public/`（不穩定）。

**9. [Footer.tsx:38-44] 社群連結指向 `#`**

- Instagram 與 LINE 的 `href="#"` 是死連結。Facebook 連結在 footer 中也顯示為 `#`（真實 URL 未寫入目前檔案）。

---

### P3 — Low

**10. [ContactForm.tsx:111] `block` 與 `flex` class 衝突**

- 預算選項 `<span>` 同時有 `flex items-center` 和 `block`，兩者衝突。`block` 是無效雜訊，應移除。

**11. [layout.tsx:26] `metadataBase` URL 硬編碼**

- `new URL('https://tonteih-design.vercel.app')` 若網域更換，OG image 等 metadata 會失效。
- 建議：`new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tonteih-design.vercel.app')`

**12. [layout.tsx:35 + globals.css:64] `scroll-smooth` 重複套用**

- `globals.css` 的 `html { scroll-behavior: smooth; }` 與 `<html className="scroll-smooth">` 重複，移除其中一個即可。

**13. [globals.css:4] 舊品牌名殘留在 comment**

- `/* Design tokens from Atelier Design system */` 應更新為新品牌名。

**14. [ContactForm.tsx:66] 電話欄位缺少 `pattern` 驗證**

- `type="tel"` 不做格式驗證，建議加 `pattern="[0-9\-\+\s]{7,15}"`。

**15. [page.tsx:6] 首頁 metadata description 未反映品牌定位**

- 仍使用通用描述，未包含「30年」等品牌關鍵字。

---

## Removal / Iteration Plan

| 項目 | 建議 |
|------|------|
| 虛構團隊成員區塊 (`about/page.tsx`) | 替換或移除：向業主索取真實成員資料 |
| 虛構見證 (`page.tsx`) | 移除或替換：使用真實案例客戶文字 |
| AI 生成佔位圖片 (`aida-public` URL) | 計劃替換：換成 `/public` 下的本地圖片或穩定 CDN |
| `footer.tsx` 死連結 | 立即補上或移除 |
| 篩選按鈕 | 短期停用，長期實作 `useState` 篩選邏輯 |
