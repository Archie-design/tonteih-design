import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '關於我們',
  description: '深植於品質與信任的建築工作室。自 2012 年起，以匠心精神打造每一個空間。',
}

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] text-xs font-bold uppercase tracking-widest mb-8">
              傳承與遠見
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-[var(--color-primary)] leading-[1.1] mb-8 tracking-tight">
              深植於品質與信任的基石。
            </h1>
            <div className="space-y-6">
              <p className="font-body text-xl text-[var(--color-on-surface-variant)] leading-relaxed">
                美東歐美室內設計的創立並非僅為了建築，而是將其視為一間工藝工作室。我們深信，家是人生中最私密的藝廊。我們的哲學拒絕任何捷徑，致力於將傳統工藝的持久完整性與當代建築的精準度完美融合。
              </p>
              <blockquote className="font-body italic text-2xl border-l-4 border-[var(--color-secondary)] pl-8 py-4 text-[var(--color-secondary)] my-12">
                「真正的工藝是職人之手與材料靈魂之間的靜默對話。我們不只是在建造牆垣，我們在策劃避風港。」
              </blockquote>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow">
              <img
                alt="高級建築工作室內部"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnzgee8dxZOZhLNQAUHTlp-UteqvQNmaDlyjrhfhskapeZxyw0ZBh9VCJbOXIfYyWjnEVaIopSD7FDScRoPq0ZZCcLK72NK1Tr6dGEhZ-y2VNayoIh_9--2u01K5LjgawmYr5rCejb87vHq62VQfu8GVh7WEvBPiXzq7IowkmUG7diBlJP6kt5JtNtEf9nWuoPUrfn5udlkt2qZA-22epCY2T9qZgNE-YvgDw2wNCqNWvGxWhB-9_eEvcKgQn4LCPYkbK0cmdtkUY"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[var(--color-surface-container-lowest)] p-8 rounded-xl editorial-shadow max-w-[280px] hidden md:block">
              <div className="flex items-center gap-4 mb-4 text-[var(--color-secondary)]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="font-headline font-bold text-sm tracking-wide">創立於 2012 年</span>
              </div>
              <p className="font-label text-sm text-[var(--color-on-surface-variant)] leading-snug">十多年來，我們致力於將文化遺產空間轉化為現代傑作。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--color-surface-container-low)] py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl font-extrabold text-[var(--color-primary)] mb-6">卓越的工藝大師</h2>
            <p className="font-body text-lg text-[var(--color-on-surface-variant)]">我們的團隊由資深職人、建築師和設計師組成，每位專家都為您的專案貢獻數十年的專業知識。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Julian Thorne', role: '首席建築師', desc: '專精於結構修復與永續奢華建築框架。', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPfgKu9q0Ui6Gv9lic6Q33dkSdMgmhmbustZwYGHol2aljThde_-IiOaAOVP4xIH3Tek8M7M4Yh3_FvYCNK9DkunQpedKMdmeUWiZqxfacwAz9gwe-VEdmNgcs56yo-52me3_Qmn55cY9QYdDhULU8Firxd2WOT1jCbEZI_iSYyfNLauKFFF1CDU8-3m4uv6sldk_AsuA2aRSnKa-Ta23JiQ0tpoKz647Ei5oDlzGuzLkElvevIFbkPPXyYpAJxU-36IFx-FT57DI' },
              { name: 'Elena Vance', role: '資深設計師', desc: '材料美學與客製化內閣整合專家。', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSE35Q7f78KW1tfUeenIiryDFcOKB-gebUQZc_3ZS2p0xC4FK0wkDQqRmU3HhClRs-94rtDjCuXQPbPtAzgNyVTXxrkzQJtUG68eH-DGTxbjP1NpXTRybtVMzHk34OtN3db8g6_LZ0c_Ogj0c82ME3urIRqO5dlvsvatFgWzGtfL9OPg1daJBGd28Bi6CgNi7LaslgEVar3cSd4l9dsTtkkuAPx2P9UQKailbM5UFyDI_LD4NR8xEki9bLntCblqts-sZEXMVE_4E' },
              { name: 'Marcus Reed', role: '首席木工師', desc: '擁有三十年傳統接榫技術與藝術木構經驗。', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEO2PN1RmxRPjwrPeAdXW0yr-yT6ISz-cNKy2iqusVqh8JrakFu2AIirbxuE4X9nZEWpLXPsF-cbRnfh_QepZ29QJvgni-3eITwYouHUCxo8JW5dYQlIOAn0jAxJagpI-RKh-zJ6xOb5Hvg2CXi-H0YhL2XFVUs0c6fjhE6FnHfgJ3JmUA-HtFfqfgAOYUCo29TWplyZqLveHUGUaom4RHT6Z6lqWyoQ09NKrSMgn-Tb8DDZ1j7eMhttKL40TLQFl-blrf42W3Lzg' },
              { name: 'Sarah Chen', role: '營運總監', desc: '確保設計願景與工程實踐之間的無縫協作。', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_3X9k-iYf6pYGheveVVf6wNrGLRRa_7eQMn4Jv3hKKHnryosgKjKdA5oj0H5UHfjvaK-q-BUvg2PksxSdPJTHbfOUA2aPDV2soii9ejwe9FLwmvv5g89D7yh6EnJJu03wS_oblZsNX9Q9zpMzQmvZ9zsE9bG_Vz8bMPIHRdjr9J_9W0RkHdPLnSY5-MaSzU-QMwPfKnQ68f9TtQEs3qzDKpb2pKdI4cbKRvT9OJboMbcU8H2ecVeLsDGhc27koywveH0o6wFe1N8' },
            ].map(({ name, role, desc, src }) => (
              <div key={name} className="group">
                <div className="aspect-[3/4] bg-[var(--color-surface-container-highest)] rounded-xl overflow-hidden mb-6 relative">
                  <img alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src={src} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-headline font-bold text-xl text-[var(--color-primary)] mb-1">{name}</h3>
                <p className="font-label text-[var(--color-secondary)] font-medium text-sm uppercase tracking-wider mb-3">{role}</p>
                <p className="font-body text-sm text-[var(--color-on-surface-variant)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl font-extrabold text-[var(--color-primary)] mb-4">業界榮譽與專業認證</h2>
              <p className="font-body text-lg text-[var(--color-on-surface-variant)]">我們對卓越的承諾已獲得業界多家權威機構的肯定。</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-px w-32 bg-[var(--color-outline-variant)]/30 hidden lg:block" />
              <span className="font-label text-xs font-bold tracking-widest text-[var(--color-secondary)] uppercase">卓越工藝之選</span>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 items-center">
            {[
              { icon: 'architecture', label: '2023 建築文摘' },
              { icon: 'verified_user', label: '認證大師級建商' },
              { icon: 'eco', label: '綠色設計大獎' },
              { icon: 'foundation', label: '國家信託基金會認證' },
              { icon: 'workspace_premium', label: '2022 室內設計優越獎' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex justify-center flex-col items-center gap-4 text-center">
                <span className="material-symbols-outlined text-5xl text-[var(--color-primary)]">{icon}</span>
                <span className="font-headline font-bold text-xs uppercase tracking-tighter text-[var(--color-on-surface-variant)]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Letter */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="bg-[var(--color-primary-container)] rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <img alt="抽象建築線條" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbQxdRzJeLZZrcJuWQsw_rM5Z-N5XOGWDd1lv4xCF7Yzbp7oz-O5Qp_OzCjSmn9_5PDduEEAkYg0TwEo1MvBJAL8Mh0csIeO5uqanAkygGWzJN2X2NirTgmoIp68VjMgkEj2v1UyO8a2sIcGw4ik9vFiO3VZr9YUM2ssGwCZSedv0uPUSmZo3xQkIcK5X5SMRiCojZRdbhr15KUbBTeleKw84GLb4Lhb43pg4-OdjF1TB5uaqF0u7-hVZO5KExjBmOe3CYVgI_PGw" />
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px]">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-[var(--color-secondary-fixed-dim)] font-headline font-bold text-xs tracking-widest uppercase mb-6">創辦人之信</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-8 leading-snug">致裝修初學者：我們將是您的引路人。</h2>
              <div className="font-body text-[var(--color-on-primary-container)] text-lg leading-relaxed space-y-6">
                <p>我還記得第一次踏入工地現場的感受——無數的選擇、晦澀的專業術語，以及對做出永久性錯誤決定的恐懼。我創立 Atelier 正是為了像您一樣的初學者。</p>
                <p>我們的目標是將過程去神祕化。我們不只提供藍圖，更提供清晰的指引。我們希望您的第一次室內裝修是一場驚喜的旅程，而非充滿焦慮。</p>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="w-16 h-0.5 bg-[var(--color-secondary)]" />
                <div>
                  <p className="text-white font-headline font-bold text-xl">Arthur P. Sterling</p>
                  <p className="text-[var(--color-secondary)] text-sm font-medium uppercase tracking-wider">創辦人 兼 主持設計師</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <img alt="創辦人工作中" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9ME_K5T_PVp9de8ETHfRyZAbQyeT4vngdlT8dOOJVqojdesJnDpZV_VRL8BGgV36eh7RgyHICUct5pbkW1IrXKz8xDNtEF_qcc71VvUce_i1sIKvUQPNMvgbUHd1dKUv6nhgGyDaEXUKp22_m7JPP46rcrsJshtPp5M_6FWcDK4gOuqbkqYIjtPaeEibmNknI6tSsKQufLWWaoyI4X8SeeAUDodgsaIIBAHjjICPkrvWZpzJJQgoqiGbRz66cDhZS0vQyL20QeyI" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
