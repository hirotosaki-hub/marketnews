export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  background: string;
  impact: string;
  terms: { term: string; definition: string }[];
  category: string; // "Market" | "Tech" | "Economy" etc.
  tab: "market" | "tech"; // New field for tab filtering
  date: string;
  image: string;
  source: string;
  sourceUrl: string;
}

export const newsData: NewsItem[] = [
  // --- Market News (5 items) ---
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
    tab: "market",
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
    tab: "market",
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
    tab: "market",
    date: "2026.01.29",
    image: "/images/news-tech.jpg"
  },
  {
    id: "4",
    source: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com/news/articles/2026-01-28/big-tech-earnings-mixed-results",
    title: "ビッグテック決算は「まちまち」。市場は選別色を強める",
    summary: "巨大IT企業の決算発表が本格化していますが、結果は明暗が分かれています。MicrosoftやMetaなどの動向が注目される中、投資家はよりシビアに業績を見極めようとしています。",
    background: "「ビッグテック」とは、Google, Apple, Meta, Amazon, Microsoftなどの巨大IT企業を指します。これらの企業の業績は、米国株式市場全体に大きな影響を与えます。",
    impact: "AIへの投資競争が激化する中、収益化の道筋が見えている企業とそうでない企業の差が開いています。\n\n**投資家への影響**: 「ハイテク株なら何でも上がる」という局面は終わりつつあります。個別の決算内容をしっかり確認し、将来性のある企業を選別する必要があります。",
    terms: [
      {
        term: "決算",
        definition: "企業が一定期間の業績（売上や利益など）を発表すること。株価が大きく動くイベントです。"
      },
      {
        term: "選別色",
        definition: "良いものと悪いものを区別して投資すること。市場全体が上がるのではなく、特定の銘柄だけが上がる状況。"
      }
    ],
    category: "Earnings",
    tab: "market",
    date: "2026.01.29",
    image: "/images/news-market.jpg"
  },
  {
    id: "5",
    source: "Investing.com",
    sourceUrl: "https://www.investing.com/news/economic-indicators/jobless-claims-preview-2026-01-29",
    title: "市場の関心は「雇用統計」へ。労働市場の強さが焦点",
    summary: "FOMCを通過し、投資家の関心は労働市場のデータに移っています。特に新規失業保険申請件数などの指標が、今後の景気動向を占う上で重要視されています。",
    background: "米国経済の7割は個人消費が支えており、その源泉となるのが「雇用」です。失業者が増えれば消費が落ち込み、景気が悪化するリスクが高まります。",
    impact: "労働市場が強すぎるとインフレが再燃する恐れがあり、弱すぎると景気後退（リセッション）の懸念が高まります。\n\n**投資家への影響**: 「程よい」強さのデータが出ることが、株価にとっては最も好ましいシナリオ（ゴルディロックス相場）です。指標発表前後は株価が乱高下しやすいため注意が必要です。",
    terms: [
      {
        term: "雇用統計",
        definition: "米国の労働市場の状況を示す経済指標。毎月第一金曜日に発表され、世界中の投資家が注目します。"
      },
      {
        term: "リセッション",
        definition: "景気後退のこと。一般的に、GDPが2四半期連続でマイナス成長になるとリセッションと見なされます。"
      }
    ],
    category: "Economy",
    tab: "market",
    date: "2026.01.29",
    image: "/images/news-fomc.jpg"
  },

  // --- Tech News (5 items) ---
  {
    id: "6",
    source: "Reuters",
    sourceUrl: "https://www.reuters.com/legal/transactional/tesla-jumps-spacex-merger-talks-fuel-musk-empire-consolidation-hopes-2026-01-30/",
    title: "テスラ株急騰、SpaceXとの合併協議報道で「マスク帝国」統合への期待",
    summary: "テスラ（Tesla）の株価が約5%上昇しました。イーロン・マスク氏が率いる宇宙開発企業SpaceXとの合併協議が行われているとの報道が好感されました。",
    background: "テスラは電気自動車（EV）、SpaceXはロケットや衛星通信を手掛ける企業で、どちらもイーロン・マスク氏がCEOを務めています。これまで別々の会社でしたが、統合されれば巨大な技術コングロマリットが誕生することになります。",
    impact: "EV市場の競争が激化する中、テスラ単体での成長に対する懸念がありましたが、SpaceXという強力な成長エンジンと一緒になることで、企業価値が再評価される可能性があります。\n\n**投資家への影響**: 合併が実現すれば、テスラ株を持っているだけでSpaceXの成長も享受できるようになるため、買い材料となります。ただし、規制当局の承認などハードルも高く、実現するかは不透明です。",
    terms: [
      {
        term: "コングロマリット",
        definition: "異業種の会社を多角的に経営する巨大複合企業のこと。"
      },
      {
        term: "シナジー効果",
        definition: "複数の企業が協力・統合することで、単独で活動する以上の成果を生み出す相乗効果のこと。"
      }
    ],
    category: "EV & Space",
    tab: "tech",
    date: "2026.01.30",
    image: "/images/news-tech.jpg"
  },
  {
    id: "7",
    source: "WSJ",
    sourceUrl: "https://www.wsj.com/tech/ai/the-100-billion-megadeal-between-openai-and-nvidia-is-on-ice-aa3025e3",
    title: "OpenAIとNvidiaの15兆円規模の提携、一時凍結か",
    summary: "AI開発のOpenAIと半導体大手Nvidiaの間で進められていた約1000億ドル（15兆円）規模の取引が、一時的にストップしていると報じられました。それでもNvidia株は上昇しています。",
    background: "OpenAIは「ChatGPT」を開発するAIのトップ企業、NvidiaはそのAIを動かすための半導体（GPU）で独占的なシェアを持つ企業です。両社の提携は、AIインフラの構築を加速させるものとして注目されていました。",
    impact: "提携の遅れはAI開発競争に影響を与える可能性がありますが、市場は「Nvidiaの優位性は変わらない」と判断し、株価はむしろ上昇しました。\n\n**投資家への影響**: ニュースのヘッドライン（見出し）だけで判断せず、市場の反応を見ることが重要です。「悪材料が出ても株価が下がらない」のは、その銘柄への需要が非常に強いことを示唆しています。",
    terms: [
      {
        term: "GPU",
        definition: "画像処理半導体。元々はゲーム用でしたが、現在はAIの計算処理に不可欠な部品となっています。"
      },
      {
        term: "時価総額",
        definition: "株価 × 発行済み株式数で計算される、企業の価値を表す指標。Nvidiaは世界トップクラスです。"
      }
    ],
    category: "AI & Chips",
    tab: "tech",
    date: "2026.01.30",
    image: "/images/news-market.jpg"
  },
  {
    id: "8",
    source: "Reuters",
    sourceUrl: "https://www.reuters.com/legal/litigation/musks-starlink-updates-privacy-policy-allow-consumer-data-train-ai-2026-01-30/",
    title: "Starlink、顧客データをAI学習に利用へ。規約を変更",
    summary: "衛星通信サービス「Starlink」がプライバシーポリシーを変更し、顧客データをAIのトレーニングに利用できるようにしました。イーロン・マスク氏のAI開発を加速させる狙いがあります。",
    background: "AIを賢くするには、大量のデータ（テキストや画像など）を読み込ませて学習させる必要があります。Starlinkの通信データを使うことで、よりリアルなデータをAIに学ばせることができます。",
    impact: "プライバシーへの懸念はありますが、マスク氏が率いるAI企業（xAIなど）にとっては強力な武器になります。\n\n**投資家への影響**: データは「21世紀の石油」とも呼ばれます。独自のデータ源を持っている企業は、AI開発競争において有利な立場に立てるため、長期的な競争力強化につながります。",
    terms: [
      {
        term: "Starlink",
        definition: "数千基の人工衛星を使って、地球上のあらゆる場所にインターネット接続を提供するサービス。"
      },
      {
        term: "プライバシーポリシー",
        definition: "企業が個人情報をどう扱うかを定めた方針。これに同意しないとサービスを使えないことが多いです。"
      }
    ],
    category: "AI & Data",
    tab: "tech",
    date: "2026.01.30",
    image: "/images/news-fomc.jpg"
  },
  {
    id: "9",
    source: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com/news/articles/2026-01-30/bitcoin-btc-slumps-to-two-month-low-as-us-funds-shed-billions",
    title: "ビットコイン、2ヶ月ぶりの安値に下落。ETFからの資金流出続く",
    summary: "暗号資産（仮想通貨）のビットコイン価格が下落し、2ヶ月ぶりの安値をつけました。米国のビットコインETF（上場投資信託）から資金が流出していることが主な要因です。",
    background: "ビットコインは、テック株と同様にリスク資産と見なされることが多く、金利動向や規制ニュースに敏感に反応します。最近はETFを通じた機関投資家の資金流入が価格を支えていました。",
    impact: "暗号資産市場の冷え込みは、ブロックチェーン関連企業の株価にも悪影響を与える可能性があります。\n\n**投資家への影響**: 暗号資産はボラティリティ（価格変動）が非常に激しい資産です。ポートフォリオの一部として保有する場合は、リスク管理を徹底する必要があります。",
    terms: [
      {
        term: "ETF",
        definition: "証券取引所に上場している投資信託。株と同じようにリアルタイムで売買できます。"
      },
      {
        term: "リスクオフ",
        definition: "投資家がリスクを避けるために、株式などのリスク資産を売って現金や国債などの安全資産に移す動き。"
      }
    ],
    category: "Crypto",
    tab: "tech",
    date: "2026.01.30",
    image: "/images/news-tech.jpg"
  },
  {
    id: "10",
    source: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com/news/videos/2026-01-30/bloomberg-tech-1-30-2026-video",
    title: "Apple、メモリ価格上昇が利益を圧迫か。コスト増への懸念",
    summary: "Appleの業績に対し、メモリチップの価格上昇がコスト増加の要因として懸念されています。iPhoneなどの主力製品の利益率に影響を与える可能性があります。",
    background: "スマートフォンやPCには、データを一時的に保存するためのメモリ（DRAM）や、データを長期保存するためのストレージ（NAND）が大量に使われています。これらの部品価格は市場の需給によって変動します。",
    impact: "ハードウェアの製造コストが上がれば、Appleは製品価格を上げるか、利益率の低下を受け入れるかの選択を迫られます。\n\n**投資家への影響**: Appleは強力なブランド力を持っているため、コスト増を価格転嫁しやすい企業ですが、消費者の財布の紐が固くなれば販売数量に影響が出るリスクもあります。",
    terms: [
      {
        term: "利益率",
        definition: "売上高に対する利益の割合。これが高いほど、効率よく稼いでいる企業と言えます。"
      },
      {
        term: "価格転嫁",
        definition: "原材料費などのコスト上昇分を、製品の販売価格に上乗せすること。"
      }
    ],
    category: "Hardware",
    tab: "tech",
    date: "2026.01.30",
    image: "/images/news-market.jpg"
  }
];
