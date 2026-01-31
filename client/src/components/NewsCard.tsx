import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Info, ArrowRight, ExternalLink } from "lucide-react";
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
      <div className="p-6 cursor-pointer hover:bg-secondary/30 transition-colors" onClick={toggleExpand}>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 uppercase tracking-wider border border-primary/20">
              {news.category}
            </span>
            <span className="text-muted-foreground text-xs font-mono">{news.date}</span>
          </div>
          {news.source && (
            <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider border border-border px-2 py-0.5">
              {news.source}
            </span>
          )}
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold leading-tight mb-4 text-foreground group-hover:text-primary transition-colors">
          {news.title}
        </h2>

        <div className="mb-2 pl-4 border-l-2 border-primary/30">
          <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">SUMMARY</h3>
          <p className="text-foreground/90 font-medium leading-relaxed">
            {news.summary}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6">

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

                {/* Source Link */}
                {news.sourceUrl && (
                  <div className="pt-4 border-t border-border/50 flex justify-end">
                    <a 
                      href={news.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-muted-foreground hover:text-primary flex items-center transition-colors uppercase tracking-wider"
                    >
                      Source: {news.source} <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                )}

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
