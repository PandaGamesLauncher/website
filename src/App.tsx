import React from 'react'
import { 
  ShieldCheck, 
  Smartphone, 
  SlidersHorizontal, 
  Cpu, 
  ArrowUpDown, 
  ExternalLink, 
  Sparkles,
  Command,
  MessageSquarePlus,
  GitPullRequest
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function SteamLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-2h2v-1.5C10 9.5 11.5 8 13.5 8H15v2h-1.5c-.83 0-1.5.67-1.5 1.5V13h3v2h-3v6.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z"/>
    </svg>
  )
}

function EpicLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h16v3H7v4h11v3H7v4h13v3H4V4z"/>
    </svg>
  )
}

function ItchLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 7l10-4 10 4v10l-10 4L2 17V7zm10 2.5L5.5 12 12 14.5 18.5 12 12 9.5z"/>
    </svg>
  )
}

function GogLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 12h8M12 8v8"/>
    </svg>
  )
}

export default function App() {
  const GITHUB_URL = "https://github.com/PandaGamesLauncher";
  const FIKIR_URL = "https://github.com/PandaGamesLauncher/fikir";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-white selection:text-black font-sans">
      
      {/* Top Ticker */}
      <div className="border-b border-neutral-900 bg-neutral-950 px-4 py-2 text-center font-mono text-[11px] tracking-widest text-neutral-400">
        <span className="text-white font-bold mr-2">[PGL]</span> PANDA GAMES LAUNCHER — OPEN SOURCE
      </div>

      {/* Navigation */}
      <header className="border-b border-neutral-800 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 border border-white flex items-center justify-center font-mono font-bold text-sm bg-neutral-900">
              P
            </div>
            <div>
              <span className="font-editorial text-2xl tracking-wide text-white block leading-none">PGL</span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Panda Games Launcher</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 font-mono text-xs uppercase tracking-wider text-neutral-400">
            <a href="#platformlar" className="hover:text-white transition-colors">Platformlar</a>
            <a href="#ozellikler" className="hover:text-white transition-colors">Özellikler</a>
            <a href="#fikir" className="hover:text-white transition-colors">Öneri & Fikir</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => window.open(GITHUB_URL, '_blank')}>
              <GithubIcon className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 border-b border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-8">
              <div className="inline-flex items-center space-x-2 border border-neutral-800 bg-neutral-950 px-3 py-1.5 font-mono text-xs text-neutral-300">
                <Command className="w-3.5 h-3.5 text-white" />
                <span>Açık Kaynak Oyun Ekosistemi</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-editorial tracking-tight text-white leading-[0.95]">
                Panda Games <br />
                <span className="italic text-neutral-400">Launcher (PGL)</span>
              </h1>

              <p className="text-base md:text-lg text-neutral-400 font-mono max-w-xl leading-relaxed">
                Tüm oyun kütüphanenizi tek merkezde toplayan, düşükten yüksek fiyata akıllı sıralama yapan hafif ve açık kaynaklı başlatıcı.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="brutal" onClick={() => document.getElementById('ozellikler')?.scrollIntoView({ behavior: 'smooth' })}>
                  Özellikleri Keşfet
                </Button>
                <Button variant="outline" onClick={() => window.open(FIKIR_URL + '/issues', '_blank')}>
                  Öneri / Sorun Bildir <GitPullRequest className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Spec Box */}
            <div className="lg:col-span-4 border border-neutral-800 bg-neutral-950 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 font-mono text-xs text-neutral-400">
                <span>REPOS</span>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-white hover:underline flex items-center">
                  GitHub <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-neutral-900">
                  <span className="text-neutral-500">MİMARİ</span>
                  <span className="text-white">Çoklu Platform</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-900">
                  <span className="text-neutral-500">DESTEKLENEN OS</span>
                  <span className="text-white">Linux / Win / Android</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-500">HESAP SİSTEMİ</span>
                  <span className="text-white">Panda Account</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Integrated Platforms Section */}
      <section id="platformlar" className="py-24 border-b border-neutral-800 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-2">[01 / ENTEGRASYON]</span>
              <h2 className="text-4xl md:text-5xl font-editorial text-white">Entegre Platformlar</h2>
            </div>
            <p className="text-neutral-400 font-mono text-xs mt-2 md:mt-0">
              Tüm kütüphaneniz tek noktada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Steam */}
            <Card className="group hover:border-neutral-500 transition-all p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-3 border border-neutral-800 bg-neutral-900 text-white group-hover:border-neutral-600">
                  <SteamLogo className="w-6 h-6" />
                </div>
                <Badge variant="mono">Entegre</Badge>
              </div>
              <div>
                <h3 className="text-2xl font-editorial text-white mb-1">Steam Powered</h3>
                <p className="text-neutral-400 font-mono text-xs">Valve kütüphane ve oyun senkronizasyonu.</p>
              </div>
            </Card>

            {/* Epic Games */}
            <Card className="group hover:border-neutral-500 transition-all p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-3 border border-neutral-800 bg-neutral-900 text-white group-hover:border-neutral-600">
                  <EpicLogo className="w-6 h-6" />
                </div>
                <Badge variant="mono">Entegre</Badge>
              </div>
              <div>
                <h3 className="text-2xl font-editorial text-white mb-1">Epic Games</h3>
                <p className="text-neutral-400 font-mono text-xs">Epic Games Store entegrasyonu.</p>
              </div>
            </Card>

            {/* itch.io */}
            <Card className="group hover:border-neutral-500 transition-all p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-3 border border-neutral-800 bg-neutral-900 text-white group-hover:border-neutral-600">
                  <ItchLogo className="w-6 h-6" />
                </div>
                <Badge variant="mono">Entegre</Badge>
              </div>
              <div>
                <h3 className="text-2xl font-editorial text-white mb-1">itch.io</h3>
                <p className="text-neutral-400 font-mono text-xs">Bağımsız oyun koleksiyonları.</p>
              </div>
            </Card>

            {/* GOG */}
            <Card className="group hover:border-neutral-500 transition-all p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-3 border border-neutral-800 bg-neutral-900 text-white group-hover:border-neutral-600">
                  <GogLogo className="w-6 h-6" />
                </div>
                <Badge variant="mono">DRM-Free</Badge>
              </div>
              <div>
                <h3 className="text-2xl font-editorial text-white mb-1">GOG</h3>
                <p className="text-neutral-400 font-mono text-xs">Tam sahiplik ve DRM-free incelemesi.</p>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Extra Features Section */}
      <section id="ozellikler" className="py-24 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-2">[02 / ÖZELLİKLER]</span>
              <h2 className="text-4xl md:text-5xl font-editorial text-white">Özellikler</h2>
            </div>
            <p className="text-neutral-400 font-mono text-xs mt-2 md:mt-0">
              PGL'yi farklı kılan temel fonksiyonlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Card className="p-8 space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white">
                <ArrowUpDown className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial text-white">Akıllı Fiyat Sıralaması</h3>
              <p className="text-neutral-400 font-mono text-xs leading-relaxed">
                Oyunları düşükten yüksek fiyata göre anında sıralayın.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial text-white">Sahiplik İncelemesi</h3>
              <p className="text-neutral-400 font-mono text-xs leading-relaxed">
                GOG tarzı DRM-free ve oyun sahipliği doğrulama desteği.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial text-white">Panda Account</h3>
              <p className="text-neutral-400 font-mono text-xs leading-relaxed">
                Özel hesap sistemi ile kütüphane ve ayar senkronizasyonu.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial text-white">Mobil LAN Yönetimi</h3>
              <p className="text-neutral-400 font-mono text-xs leading-relaxed">
                Yerel ağ üzerinden mobil uygulama ile kütüphane kontrolü.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial text-white">Görsel Fiyat Formatı</h3>
              <p className="text-neutral-400 font-mono text-xs leading-relaxed">
                Oyun fiyatlarının arayüzdeki görsel biçimini özelleştirin.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial text-white">Çoklu Platform</h3>
              <p className="text-neutral-400 font-mono text-xs leading-relaxed">
                Linux, Windows ve Android desteğiyle her cihazda çalışın.
              </p>
            </Card>

          </div>
        </div>
      </section>

      {/* Fikir & Öneri / Issues Section */}
      <section id="fikir" className="py-24 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-neutral-800 bg-neutral-950 p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">[03 / TOPLULUK & KATKI]</span>
                <h2 className="text-4xl md:text-5xl font-editorial text-white">Fikirlerinizi ve Sorunlarınızı Paylaşın</h2>
                <p className="text-neutral-400 font-mono text-xs max-w-xl leading-relaxed">
                  PGL'yi birlikte geliştirelim. Yeni bir özellik önermek veya bir hata bildirmek için <code className="text-white bg-neutral-900 px-1.5 py-0.5 border border-neutral-800">fikir</code> reposu üzerinden issue açabilirsiniz.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
                <Button variant="brutal" className="w-full justify-center" onClick={() => window.open(FIKIR_URL + '/issues', '_blank')}>
                  <MessageSquarePlus className="w-4 h-4 mr-2" />
                  Öneri / Issue Aç
                </Button>
                <Button variant="outline" className="w-full justify-center" onClick={() => window.open(FIKIR_URL, '_blank')}>
                  <GitPullRequest className="w-4 h-4 mr-2" />
                  Fikir Deposunu İncele
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-neutral-500">
          <div>
            © 2026 Panda Games Launcher (PGL). Açık Kaynak Proje.
          </div>
          <div className="flex items-center space-x-6">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub (PandaGamesLauncher)</a>
            <a href={FIKIR_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Fikir Reposu</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
