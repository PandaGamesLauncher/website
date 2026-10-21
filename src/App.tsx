import React from 'react'
import { 
  Gamepad2, 
  Terminal, 
  ShieldCheck, 
  Smartphone, 
  SlidersHorizontal, 
  Cpu, 
  ArrowUpDown, 
  ExternalLink, 
  Layers, 
  Wifi, 
  Sparkles,
  Command
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-white selection:text-black font-sans">
      
      {/* Top Banner / Announcement */}
      <div className="border-b border-neutral-900 bg-neutral-950 px-4 py-2 text-center font-mono text-[11px] tracking-widest text-neutral-400">
        <span className="text-white font-bold mr-2">[PGL_SYS]</span> PANDA GAMES LAUNCHER — OPEN SOURCE ECOSYSTEM
      </div>

      {/* Navigation */}
      <header className="border-b border-neutral-800 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
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
            <a href="#mimari" className="hover:text-white transition-colors">Mimari</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => window.open('https://github.com', '_blank')}>
              <GithubIcon className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-36 border-b border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-8">
              <div className="inline-flex items-center space-x-2 border border-neutral-800 bg-neutral-950 px-3 py-1.5 font-mono text-xs text-neutral-300">
                <Command className="w-3.5 h-3.5 text-white" />
                <span>Not Defteri Tasarım Dokümanı v1.0</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-editorial tracking-tight text-white leading-[0.95]">
                Panda Games <br />
                <span className="italic text-neutral-400">Launcher (PGL)</span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-400 font-mono max-w-2xl leading-relaxed">
                Tüm oyun kütüphanenizi tek merkezde toplayan, düşükten yüksek fiyata akıllı sıralama yapan ve mobil cihazlarla yerel ağ üzerinden yönetilebilen açık kaynaklı oyun başlatıcısı.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="brutal" onClick={() => document.getElementById('ozellikler')?.scrollIntoView({ behavior: 'smooth' })}>
                  Özellikleri İncele
                </Button>
                <Button variant="outline" onClick={() => window.open('https://github.com', '_blank')}>
                  Kaynak Kodları <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Brutal Stat / Spec Box */}
            <div className="lg:col-span-4 border border-neutral-800 bg-neutral-950 p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 font-mono text-xs text-neutral-400">
                <span>SİSTEM DURUMU</span>
                <span className="text-emerald-400 flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
                  AKTİF GELİŞTİRME
                </span>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between py-2 border-b border-neutral-900">
                  <span className="text-neutral-500">MİMARİ</span>
                  <span className="text-white">Çoklu Platform</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-900">
                  <span className="text-neutral-500">HEDEF OS</span>
                  <span className="text-white">Linux / Win / Android</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-900">
                  <span className="text-neutral-500">HESAP SİSTEMİ</span>
                  <span className="text-white">Panda Account</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-neutral-500">UYGULAMA</span>
                  <span className="text-white">LAN Destekli Mobil</span>
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
              <h2 className="text-4xl md:text-5xl font-editorial text-white">Entegre Olduğu Platformlar</h2>
            </div>
            <p className="text-neutral-400 font-mono text-xs mt-4 md:mt-0 max-w-sm">
              Farklı ekosistemlerdeki oyunlarınızı tek bir çatı altında birleştirin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Steam Powered */}
            <Card className="group hover:border-neutral-500 transition-all">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 border border-neutral-800 bg-neutral-900 text-white group-hover:border-neutral-600">
                    <Gamepad2 className="w-6 h-6" />
                  </div>
                  <Badge variant="mono">Entegre</Badge>
                </div>
                <CardTitle className="text-3xl">Steam Powered</CardTitle>
                <CardDescription>Valve oyun kütüphanesi ve API senkronizasyonu.</CardDescription>
              </CardHeader>
            </Card>

            {/* Epic Games */}
            <Card className="group hover:border-neutral-500 transition-all">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 border border-neutral-800 bg-neutral-900 text-white group-hover:border-neutral-600">
                    <Layers className="w-6 h-6" />
                  </div>
                  <Badge variant="mono">Entegre</Badge>
                </div>
                <CardTitle className="text-3xl">Epic Games</CardTitle>
                <CardDescription>Epic Games Store kütüphane ve oyun erişimi.</CardDescription>
              </CardHeader>
            </Card>

            {/* itch.io */}
            <Card className="group hover:border-neutral-500 transition-all">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 border border-neutral-800 bg-neutral-900 text-white group-hover:border-neutral-600">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <Badge variant="mono">Entegre</Badge>
                </div>
                <CardTitle className="text-3xl">itch.io</CardTitle>
                <CardDescription>Bağımsız geliştirici oyunları ve koleksiyonlar.</CardDescription>
              </CardHeader>
            </Card>

            {/* GOG */}
            <Card className="group hover:border-neutral-500 transition-all">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 border border-neutral-800 bg-neutral-900 text-white group-hover:border-neutral-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <Badge variant="mono">DRM-Free</Badge>
                </div>
                <CardTitle className="text-3xl">GOG</CardTitle>
                <CardDescription>GOG gibi oyunun tam sahipliğini sunan platform desteği.</CardDescription>
              </CardHeader>
            </Card>

          </div>
        </div>
      </section>

      {/* Extra Features Section */}
      <section id="ozellikler" className="py-24 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-2">[02 / YETENEKLER]</span>
              <h2 className="text-4xl md:text-5xl font-editorial text-white">Ekstra Özellikler</h2>
            </div>
            <p className="text-neutral-400 font-mono text-xs mt-4 md:mt-0 max-w-sm">
              Not defterinde tasarlanan ve PGL'yi benzersiz kılan özel fonksiyonlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <Card className="p-8 space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white font-mono">
                <ArrowUpDown className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial text-white">Fiyata Göre Sıralama</h3>
              <p className="text-neutral-400 font-mono text-sm leading-relaxed">
                Oyunları düşükten yüksek fiyata doğru akıllıca sıralayarak bütçe dostu keşifler yapın.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white font-mono">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial text-white">Sahiplik Platformları İncelemesi</h3>
              <p className="text-neutral-400 font-mono text-sm leading-relaxed">
                GOG gibi oyunun tamamen size ait olduğu platformları ve DRM durumlarını detaylıca inceleyin.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white font-mono">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial text-white">Panda Games Account Desteği</h3>
              <p className="text-neutral-400 font-mono text-sm leading-relaxed">
                Özel hesap sistemi ile kütüphanenizi, ayarlarınızı ve tercihlerinizi bulutta eşitleyin.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white font-mono">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial text-white">Mobil Kütüphane Yönetimi</h3>
              <p className="text-neutral-400 font-mono text-sm leading-relaxed">
                Mobil uygulama ile kütüphanenizi uzaktan yönetin (şimdilik yerel ağ / LAN desteğiyle).
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="p-8 space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white font-mono">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial text-white">Görsel Fiyat Biçimlendirme</h3>
              <p className="text-neutral-400 font-mono text-sm leading-relaxed">
                Bir oyunun fiyat etiketinin görsel olarak biçimini ve gösterim stilini özelleştirin.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="p-8 space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white font-mono">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial text-white">Çoklu Platform Desteği</h3>
              <p className="text-neutral-400 font-mono text-sm leading-relaxed">
                Linux, Windows ve Android işletim sistemlerinde kesintisiz ve tutarlı çalışma deneyimi.
              </p>
            </Card>

          </div>
        </div>
      </section>

      {/* Architecture / Cloudflare Ready Section */}
      <section id="mimari" className="py-24 border-b border-neutral-800 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block">[03 / DEPLOI]</span>
              <h2 className="text-4xl md:text-5xl font-editorial text-white">Cloudflare Workers Optimize</h2>
              <p className="text-neutral-400 font-mono text-sm leading-relaxed">
                Bu web sitesi ve PGL web bileşenleri, Cloudflare Workers ve Edge ağlarında en yüksek performans ve düşük gecikme ile çalışacak şekilde optimize edilmiştir. Kaynak kodları GitHub üzerinden açık kaynak olarak yönetilmektedir.
              </p>
              <div className="flex items-center space-x-6 pt-2 font-mono text-xs text-neutral-300">
                <div className="flex items-center space-x-2">
                  <Wifi className="w-4 h-4 text-emerald-400" />
                  <span>Ultra Hızlı Edge Dağıtımı</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>GitHub Entegrasyonu</span>
                </div>
              </div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-900 pb-3 text-neutral-500">
                <span>pgl-manifest.json</span>
                <span>UTF-8</span>
              </div>
              <pre className="text-neutral-300 overflow-x-auto p-2">
{`{
  "name": "panda-games-launcher",
  "version": "1.0.0",
  "platforms": ["steam", "epic", "itch", "gog"],
  "features": [
    "price_sorting",
    "drm_free_inspection",
    "panda_account",
    "lan_mobile_sync",
    "cross_platform"
  ],
  "target_oses": ["linux", "windows", "android"],
  "deployment": "cloudflare-workers"
}`}
              </pre>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-neutral-500">
          <div>
            © 2026 Panda Games Launcher (PGL). Tüm hakları saklıdır.
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub Repository</a>
            <a href="#platformlar" className="hover:text-white transition-colors">Platformlar</a>
            <a href="#ozellikler" className="hover:text-white transition-colors">Özellikler</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
