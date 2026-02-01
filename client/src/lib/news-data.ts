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

// デフォルトのニュースデータ（フォールバック用）
const defaultNewsData: NewsItem[] = [
  {
    id: "1",
    source: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com/",
    title: "ニュースを読み込み中...",
    summary: "最新のニュースを取得しています。しばらくお待ちください。",
    background: "",
    impact: "",
    terms: [],
    category: "Market",
    tab: "market",
    date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
    image: "/images/news-market.jpg"
  }
];

// ニュースデータを非同期で読み込む
let cachedNewsData: NewsItem[] | null = null;

export async function fetchNewsData(): Promise<NewsItem[]> {
  // キャッシュがあればそれを返す
  if (cachedNewsData) {
    return cachedNewsData;
  }

  try {
    const response = await fetch('/news.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    cachedNewsData = data;
    return data;
  } catch (error) {
    console.error('Failed to fetch news data:', error);
    return defaultNewsData;
  }
}

// 同期的にアクセスするための変数（初期値はデフォルト）
export let newsData: NewsItem[] = defaultNewsData;

// ページ読み込み時にニュースを取得
if (typeof window !== 'undefined') {
  fetchNewsData().then(data => {
    newsData = data;
    // カスタムイベントを発火してコンポーネントに通知
    window.dispatchEvent(new CustomEvent('newsDataLoaded', { detail: data }));
  });
}
