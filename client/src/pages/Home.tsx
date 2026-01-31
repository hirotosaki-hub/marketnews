import { useState } from "react";
import { newsData } from "@/lib/news-data";
import NewsCard from "@/components/NewsCard";
import { Search, Menu, TrendingUp, DollarSign, Activity, LayoutGrid, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"market" | "tech">("market");

  const filteredNews = newsData.filter(news => news.tab === activeTab);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground font-black text-lg">
              US
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:inline-block">
              STOCK NEWS
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Market</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Economy</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Tech</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Learn</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 hover:bg-secondary transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-12 md:py-20 overflow-hidden">
        {/* Abstract Geometric Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 border border-primary-foreground/30 text-xs font-bold uppercase tracking-widest mb-6 bg-primary-foreground/5 backdrop-blur-sm">
              Daily Briefing
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
              MARKET <br/>
              INTELLIGENCE
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg leading-relaxed mb-8">
              米国株の「今」を、初心者にもわかりやすく解説。
              <br/>
              ニュースの裏側にある「なぜ」と「これから」を読み解く。
            </p>
            
            {/* Market Ticker (Static for demo) */}
            <div className="flex flex-col sm:flex-row sm:grid sm:grid-cols-3 gap-4 bg-white/10 backdrop-blur-md p-4 border border-white/20">
              <div className="flex items-center justify-between sm:flex-col sm:items-start">
                <span className="text-xs opacity-70 uppercase tracking-wider">S&P 500</span>
                <div className="flex items-center gap-2 sm:gap-1 font-mono font-bold">
                  6,978.03 <span className="text-red-300 text-xs bg-red-500/20 px-1 rounded">-0.01%</span>
                </div>
              </div>
              <div className="flex items-center justify-between sm:flex-col sm:items-start border-t sm:border-t-0 sm:border-l border-white/20 pt-2 sm:pt-0 sm:pl-4">
                <span className="text-xs opacity-70 uppercase tracking-wider">NASDAQ</span>
                <div className="flex items-center gap-2 sm:gap-1 font-mono font-bold">
                  23,817.10 <span className="text-green-300 text-xs bg-green-500/20 px-1 rounded">+0.91%</span>
                </div>
              </div>
              <div className="flex items-center justify-between sm:flex-col sm:items-start border-t sm:border-t-0 sm:border-l border-white/20 pt-2 sm:pt-0 sm:pl-4">
                <span className="text-xs opacity-70 uppercase tracking-wider">USD/JPY</span>
                <div className="flex items-center gap-2 sm:gap-1 font-mono font-bold">
                  153.39 <span className="text-green-300 text-xs bg-green-500/20 px-1 rounded">+0.49%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Latest Insights</h2>
            <p className="text-muted-foreground">
              {activeTab === "market" 
                ? "今日の重要ニュースを厳選してお届けします。" 
                : "主要テック企業の最新動向と影響を解説します。"}
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex p-1 bg-muted/50 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setActiveTab("market")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all duration-200",
                activeTab === "market" 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              )}
            >
              <LayoutGrid className="w-4 h-4" />
              Market News
            </button>
            <button
              onClick={() => setActiveTab("tech")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all duration-200",
                activeTab === "tech" 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              )}
            >
              <Cpu className="w-4 h-4" />
              Tech Focus
            </button>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-secondary py-16 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-background border border-border">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Market Analysis</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                単なるニュースの羅列ではなく、市場への影響を深く分析し、投資判断に役立つ情報を提供します。
              </p>
            </div>
            <div className="p-6 bg-background border border-border">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Future Outlook</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                「だから何？」に答える。ニュースが今後の株価や経済にどう影響するかを予測します。
              </p>
            </div>
            <div className="p-6 bg-background border border-border">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Beginner Friendly</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                専門用語はワンクリックで解説。初心者でも挫折せずに経済ニュースを読み解く力が身につきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-white text-primary flex items-center justify-center font-black text-xs">
                  US
                </div>
                <span className="font-bold tracking-tight">STOCK NEWS</span>
              </div>
              <p className="text-sm text-primary-foreground/70 max-w-xs leading-relaxed">
                米国株投資を始めるすべての人のための、信頼できる情報源。
                複雑なマーケットをシンプルに、深く理解するお手伝いをします。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest opacity-70">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest opacity-70">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-primary-foreground/20 text-xs text-primary-foreground/50 flex justify-between items-center">
            <p>&copy; 2026 US Stock News. All rights reserved.</p>
            <p>Designed with Swiss Style Philosophy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
