export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  background: string;
  impact: string;
  terms: { term: string; definition: string }[];
  category: string;
  date: string;
  image: string;
  source: string;
  sourceUrl: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    source: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com/news/articles/2026-01-28/stock-market-today-dow-s-p-live-updates",
    title: "FRB、政策金利を3.50-3.75%で据え置き。経済は「堅調」と評価",
    summary: "FRBは今年最初のFOMCで政策金利の据え置きを決定しました。パウエル議長は米国経済が堅調であるとの認識を示し、市場の予想通りの結果となりました。",
    background: "FRB（連邦準備制度理事会）は、物価の安定と雇用の最大化を目指して金融政策を決定します。現在は、インフレを抑えつつ景気を冷やしすぎないよう、金利を慎重にコントロールしている段階です。今回の決定は、賛成10対反対2で可決されました。",
    impact: "市場にとってサプライズはなく、安心感が広がりました。しかし、経済が「堅調」であると評価されたことで、FRBが急いで利下げを行う必要性は薄れました。\n\n**投資家への影響**: 「金利が高い状態がもう少し続くかもしれない」という見方が強まれば、借入コストの負担が大きい中小企業や不動産関連株には逆風となる可能性があります。一方で、景気が良いこと自体は企業業績にとってプラスです。\n\n**今後の注目点**: 次回のFOMCに向けて、インフレ率や雇用統計などのデータがこれまで以上に重要になります。",
    terms: [
      {
        term: "FOMC",
        definition: "連邦公開市場委員会。アメリカの金融政策を決定する最高意思決定機関で、年8回開催されます。"
      },
      {
        term: "政策金利",
        definition: "中央銀行が一般の銀行にお金を貸し出す際の金利。これが上がると、住宅ローンや企業の借入金利も上がり、景気が冷え込む傾向があります。"
      }
    ],
    category: "Monetary Policy",
    date: "2026.01.29",
    image: "/images/news-fomc.jpg"
  },
  {
    id: "2",
    source: "Reuters",
    sourceUrl: "https://www.reuters.com/markets/us/sp-500-briefly-tops-7000-before-pullback-as-fed-big-tech-earnings-loom-2026-01-28/",
    title: "S&P 500、一時7,000ポイントの大台を突破。史上最高値を更新",
    summary: "米国の代表的な株価指数であるS&P 500が、取引時間中に史上初めて7,000ポイントを突破しました。その後は利益確定売りに押され、終値では大台を割りました。",
    background: "S&P 500は、米国を代表する500社の株価を元に算出される指数で、米国株式市場全体の動きを示す最も重要な指標の一つです。7,000ポイントという数字は心理的な節目であり、市場の強気心理を象徴しています。",
    impact: "7,000ポイント到達は、AIブームや米国経済の強さを背景とした上昇トレンドが続いていることを示しています。\n\n**投資家への影響**: 「高値警戒感」も出てくる水準です。一本調子で上がり続けることは稀なため、短期的には調整（株価の下落）が入る可能性も頭に入れておく必要があります。長期投資家にとっては、通過点の一つに過ぎませんが、積立投資などを継続する良いモチベーションになるでしょう。",
    terms: [
      {
        term: "S&P 500",
        definition: "米国を代表する大型株500銘柄で構成される株価指数。米国経済の体温計とも呼ばれます。"
      },
      {
        term: "利益確定売り",
        definition: "株価が上がったところで株を売り、利益を現金化すること。これにより株価が一時的に下がることがあります。"
      }
    ],
    category: "Market Trends",
    date: "2026.01.29",
    image: "/images/news-market.jpg"
  },
  {
    id: "3",
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/livecoverage/stock-market-today-sp500-7000-dow-nasdaq-up-tech-boost-meta-microsoft-tesla-fed-dollar-gold-record",
    title: "ドル急伸、財務長官発言で11月以来の上昇幅",
    summary: "外国為替市場でドルが買われ、11月以来の大きな上昇となりました。ベッセント財務長官の発言がきっかけとなり、これまでのドル安トレンドが一服しました。",
    background: "為替レートは、各国の金利差や経済状況、そして政府要人の発言によって大きく変動します。ドル高は、米国製品の輸出競争力を弱める一方で、輸入品の価格を下げてインフレを抑制する効果があります。",
    impact: "急激なドル高は、米国企業の海外収益（ドル換算）を目減りさせるため、グローバル企業の株価にはマイナス要因となることがあります。\n\n**日本への影響**: ドル高はすなわち「円安」です。輸入品価格の上昇を通じて、日本の物価高が続く可能性があります。米国株投資をしている日本人にとっては、円換算での資産価値が増えるため、プラスの影響があります。",
    terms: [
      {
        term: "為替レート",
        definition: "ある国の通貨と別の国の通貨を交換する際の比率。1ドル＝150円などと表されます。"
      },
      {
        term: "インフレ",
        definition: "モノやサービスの値段（物価）が継続的に上がること。通貨の価値が下がることと同義です。"
      }
    ],
    category: "Economy",
    date: "2026.01.29",
    image: "/images/news-tech.jpg"
  }
];
