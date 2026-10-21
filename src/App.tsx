import React, { useState } from 'react'
import { 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Smartphone, 
  SlidersHorizontal, 
  Cpu, 
  ArrowUpDown, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Globe,
  Settings,
  Heart,
  HelpCircle,
  BookOpen
} from 'lucide-react'
import { Button } from '@/components/ui/button'

function GithubIcon({ className = "w-4 h-4", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <svg onClick={onClick} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function DiscordIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  )
}

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const GITHUB_URL = "https://github.com/PandaGamesLauncher"

  const slides = [
    {
      title: "Kütüphane Görünümü",
      desc: "Steam, Epic, itch.io ve GOG oyunlarınızı tek ekranda filtreleyin ve yönetin.",
      img: "library"
    },
    {
      title: "Oyun Detayları",
      desc: "Oynama süresi, sürüm bilgileri, kurulum yolu ve Wine/Proton ayarlarını kolayca yapılandırın.",
      img: "details"
    },
    {
      title: "Akıllı Fiyat Sıralaması",
      desc: "Oyunları en düşükten en yüksek fiyata göre sıralayın, fırsatları kaçırmayın.",
      img: "sorting"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0b0e14] text-[#e2e8f0] font-sans selection:bg-indigo-600 selection:text-white">
      
      {/* Header */}
      <header className="border-b border-neutral-800/60 bg-[#0b0e14]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 text-lg">
              P
            </div>
            <span className="font-bold text-xl tracking-wide text-white">Panda Games Launcher</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-300">
            <a href="#platformlar" className="hover:text-white transition-colors flex items-center gap-1.5"><Globe className="w-4 h-4 text-indigo-400" /> Platformlar</a>
            <a href="#ozellikler" className="hover:text-white transition-colors flex items-center gap-1.5"><HelpCircle className="w-4 h-4 text-indigo-400" /> SSS & Özellikler</a>
            <a href="#dokuman" className="hover:text-white transition-colors flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-indigo-400" /> Dokümantasyon</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all cursor-pointer"
              onClick={() => window.open(GITHUB_URL, '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              İndir
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            KAHRAMANLAR GİBİ OYNA!
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            PGL, <strong className="text-white font-semibold">Linux, Windows ve Android</strong> için <span className="text-indigo-400 font-medium">Steam, Epic, itch.io ve GOG</span> oyunlarını destekleyen, ücretsiz ve açık kaynaklı bir oyun başlatıcısıdır.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl text-base shadow-xl shadow-indigo-600/30 transition-all cursor-pointer flex items-center gap-2"
              onClick={() => window.open(GITHUB_URL, '_blank')}
            >
              <Download className="w-5 h-5" />
              Windows için İndir
            </Button>
            <Button 
              variant="outline" 
              className="border-neutral-700 bg-neutral-900/50 hover:bg-neutral-800 text-neutral-200 font-semibold px-8 py-4 rounded-xl text-base transition-all cursor-pointer flex items-center gap-2"
              onClick={() => window.open(GITHUB_URL, '_blank')}
            >
              <GithubIcon className="w-5 h-5" />
              GitHub'da Görüntüle
            </Button>
          </div>

          <div className="flex items-center justify-center gap-12 pt-8 text-neutral-400 text-sm font-mono border-t border-neutral-800/60 max-w-lg mx-auto">
            <div>
              <span className="text-2xl font-bold text-white block">100%</span>
              Açık Kaynak
            </div>
            <div className="w-px h-8 bg-neutral-800" />
            <div>
              <span className="text-2xl font-bold text-white block">Multi-OS</span>
              Linux / Win / Android
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshot Preview */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-3 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800/60 mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono text-neutral-500">Panda Games Launcher v1.0.0</span>
            <div className="w-12" />
          </div>
          
          <div className="relative rounded-xl overflow-hidden bg-[#0d1117] border border-neutral-800/50 p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Sidebar mock */}
            <div className="hidden md:block space-y-3 pr-4 border-r border-neutral-800/60 text-xs font-mono text-neutral-400">
              <div className="text-indigo-400 font-bold px-3 py-2 rounded-lg bg-indigo-600/10 flex items-center gap-2">
                <Globe className="w-4 h-4" /> Kütüphane (731)
              </div>
              <div className="px-3 py-2 hover:bg-neutral-800/40 rounded-lg cursor-pointer">Mağazalar</div>
              <div className="px-3 py-2 hover:bg-neutral-800/40 rounded-lg cursor-pointer">İndirmeler</div>
              <div className="px-3 py-2 hover:bg-neutral-800/40 rounded-lg cursor-pointer">Ayarlar</div>
              <div className="px-3 py-2 hover:bg-neutral-800/40 rounded-lg cursor-pointer">Panda Account</div>
            </div>

            {/* Games grid mock */}
            <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "Cyberpunk 2077", store: "GOG" },
                { name: "Hades II", store: "Epic" },
                { name: "Celeste", store: "itch.io" },
                { name: "Baldur's Gate 3", store: "Steam" },
                { name: "Dead Cells", store: "Steam" },
                { name: "Hollow Knight", store: "GOG" }
              ].map((game, i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-[3/4] flex flex-col justify-end p-4 hover:border-indigo-500/50 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                  <div className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900/80 text-neutral-300 border border-neutral-800">
                    {game.store}
                  </div>
                  <span className="relative z-10 font-bold text-sm text-white group-hover:text-indigo-400 transition-colors">
                    {game.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section id="ozellikler" className="max-w-7xl mx-auto px-6 py-20 border-t border-neutral-800/60">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">ÖNCE GİZLİLİK VE GÜÇ</h2>
          <p className="text-neutral-400">PGL, kullanıcı verilerini asla satmaz ve tamamen açık kaynaklı geliştirilir.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-indigo-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Önce Gizlilik</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Reklam yok ve verileriniz asla satılmaz. Analizler anonimdir ve varsayılan olarak tamamen kapalıdır.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-indigo-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Ücretsiz ve Açık Kaynak</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              GPLv3 lisanslı ve topluluk tarafından şeffaf bir şekilde geliştirilmektedir.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-indigo-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Çoklu Platform</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Linux, Windows, macOS ve Android işletim sistemlerinde sorunsuz çalışır.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-indigo-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <ArrowUpDown className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Akıllı Fiyat Sıralaması</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Oyunları düşükten yüksek fiyata doğru sıralayarak bütçenize en uygun oyunları keşfedin.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-indigo-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Mobil LAN Yönetimi</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Mobil uygulamanız ile yerel ağ (LAN) üzerinden kütüphanenizi ve indirmelerinizi uzaktan yönetin.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-indigo-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <SlidersHorizontal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">GOG & Sahiplik İncelemesi</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              GOG gibi oyunların tam sahipliğini ve DRM-free durumunu detaylıca inceleyin ve takip edin.
            </p>
          </div>

        </div>
      </section>

      {/* Integrated Platforms Showcase */}
      <section id="platformlar" className="max-w-7xl mx-auto px-6 py-20 border-t border-neutral-800/60">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">ENTEGRE EDİLEN PLATFORMLAR</h2>
          <p className="text-neutral-400">Tüm mağazalar ve kütüphaneleriniz tek bir çatı altında birleşiyor.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Steam Powered", icon: "/logos/steam.svg", desc: "Valve kütüphane ve arkadaşlık entegrasyonu" },
            { name: "Epic Games", icon: "/logos/epic.svg", desc: "Epic Games Store kütüphane erişimi" },
            { name: "itch.io", icon: "/logos/itch.svg", desc: "Bağımsız geliştirici oyun koleksiyonları" },
            { name: "GOG", icon: "/logos/gog.svg", desc: "DRM-free ve tam sahiplik incelemesi" }
          ].map((platform, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 flex flex-col items-center text-center space-y-4 hover:border-indigo-500/50 transition-all">
              <div className="w-14 h-14 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center p-3 shadow-inner">
                <img src={platform.icon} alt={platform.name} className="w-8 h-8 object-contain filter brightness-0 invert" />
              </div>
              <h3 className="text-lg font-bold text-white">{platform.name}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{platform.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800/60 bg-[#07090d] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                P
              </div>
              <span className="font-bold text-lg text-white">Panda Games Launcher</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Linux, Windows, macOS ve Android üzerinde Epic, GOG, Steam ve itch.io oyunlarını destekleyen, ücretsiz ve açık kaynaklı oyun başlatıcısı.
            </p>
            <div className="flex items-center space-x-3 pt-2 text-neutral-400">
              <GithubIcon className="w-5 h-5 hover:text-white cursor-pointer" onClick={() => window.open(GITHUB_URL, '_blank')} />
              <DiscordIcon className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">PGL'İ EDİNİN</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">İndirmeler</a></li>
              <li><a href="#platformlar" className="hover:text-white transition-colors">Desteklenen Platformlar</a></li>
              <li><a href="#ozellikler" className="hover:text-white transition-colors">Mobil LAN Sürümü</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">KAYNAKLAR</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li><a href="#ozellikler" className="hover:text-white transition-colors">SSS</a></li>
              <li><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Dokümantasyon</a></li>
              <li><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Bizi Destekle</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">PROJE</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Katkıda Bulun</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
          <div>
            © 2026 Panda Games Launcher · GPLv3 Lisanslı
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Türkçe</span>
            <Settings className="w-4 h-4 cursor-pointer hover:text-white" />
          </div>
        </div>
      </footer>

    </div>
  )
}
