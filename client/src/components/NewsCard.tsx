import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Info, ArrowRight } from "lucide-react";
import { NewsItem } from "@/lib/news-data";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTerm, setActiveTerm] = useState<string | null>(null);

  const toggleExpand = () => setIsExpanded(!isExpanded);
  const toggleTerm = (term: string) => {
    if (activeTerm === term) {
      setActiveTerm(null);
    } else {
      setActiveTerm(term);
    }
  };

  return (
    <motion.div
      layout
      className="bg-card border border-border overflow-hidden mb-6 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={toggleExpand}>
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 uppercase tracking-wider">
          {news.category}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
          <div className="text-white/80 text-xs mb-1 font-mono">{news.date}</div>
          <h2 className="text-white text-lg font-bold leading-tight line-clamp-2">
            {news.title}
          </h2>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-4">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2 text-[10px]">SUMMARY</h3>
          <p className="text-foreground font-medium leading-relaxed">
            {news.summary}
          </p>
        </div>

        <button
          onClick={toggleExpand}
          className="w-full flex items-center justify-center py-2 text-sm font-bold text-primary border border-primary/20 hover:bg-primary/5 transition-colors uppercase tracking-wider group"
        >
          {isExpanded ? "Close Details" : "Read Analysis"}
          {isExpanded ? (
            <ChevronUp className="ml-2 w-4 h-4" />
          ) : (
            <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          )}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-6 space-y-6 border-t border-border mt-4">
                {/* Background Section */}
                <div className="bg-secondary/50 p-4 border-l-4 border-primary">
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-2 flex items-center">
                    <Info className="w-4 h-4 mr-2" />
                    Context
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {news.background}
                  </p>
                </div>

                {/* Impact Section */}
                <div>
                  <h3 className="text-sm font-bold text-destructive uppercase tracking-widest mb-3 flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    So What? (Impact)
                  </h3>
                  <div className="prose prose-sm max-w-none text-foreground/90 leading-relaxed">
                    {news.impact.split('\n').map((line, i) => (
                      <p key={i} className={cn("mb-2", line.startsWith('**') && "font-bold text-primary mt-4")}>
                        {line.replace(/\*\*/g, '')}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Terms Section */}
                {news.terms.length > 0 && (
                  <div className="pt-4 border-t border-border/50">
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                      Key Terms
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {news.terms.map((term, index) => (
                        <div key={index} className="w-full">
                          <button
                            onClick={() => toggleTerm(term.term)}
                            className={cn(
                              "flex items-center justify-between w-full text-left px-3 py-2 text-sm font-medium border transition-all duration-200",
                              activeTerm === term.term
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-background text-foreground border-border hover:border-primary/50"
                            )}
                          >
                            <span>{term.term}</span>
                            {activeTerm === term.term ? (
                              <ChevronUp className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3 opacity-50" />
                            )}
                          </button>
                          <AnimatePresence>
                            {activeTerm === term.term && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="p-3 bg-secondary text-sm text-foreground/80 border-x border-b border-border text-xs leading-relaxed">
                                  {term.definition}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
