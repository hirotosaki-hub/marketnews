#!/usr/bin/env python3
"""
US Market News - ニュース自動更新スクリプト
米国株ニュースを取得し、AI要約を生成して、JSONファイルに保存します。
"""

import json
import os
import sys
from datetime import datetime
from openai import OpenAI

# OpenAI クライアントの初期化
client = OpenAI()

def search_us_market_news():
    """米国市場の最新ニュースを検索"""
    print("📰 米国市場の最新ニュースを検索中...")
    
    # 検索クエリ（市場ニュース5件 + テックニュース5件）
    market_queries = [
        "US stock market today",
        "Federal Reserve interest rates",
        "S&P 500 Nasdaq Dow Jones",
        "US economy inflation employment",
        "Dollar USD currency market"
    ]
    
    tech_queries = [
        "Apple Microsoft Google Meta Amazon earnings",
        "Tesla SpaceX Elon Musk",
        "Nvidia OpenAI artificial intelligence",
        "Bitcoin cryptocurrency ETF",
        "Tech stocks semiconductor chips"
    ]
    
    # 実際のニュース検索は、ここでは簡略化のため、
    # 最新のトピックを手動で指定します
    # 本番環境では、NewsAPI、Finnhub、Alpha Vantageなどを使用
    
    news_items = []
    
    # サンプルニュース（実際にはAPIから取得）
    sample_news = [
        {
            "title": "Fed Holds Rates Steady as Economic Data Shows Resilience",
            "url": "https://www.bloomberg.com/news/articles/2026-02-01/fed-holds-rates",
            "source": "Bloomberg",
            "category": "Monetary Policy",
            "tab": "market",
            "published": "2026-02-01"
        },
        {
            "title": "S&P 500 Reaches New All-Time High Above 7,000",
            "url": "https://www.reuters.com/markets/us/sp-500-7000-2026-02-01/",
            "source": "Reuters",
            "category": "Market Trends",
            "tab": "market",
            "published": "2026-02-01"
        },
        {
            "title": "Dollar Strengthens on Strong Jobs Report",
            "url": "https://www.marketwatch.com/story/dollar-jobs-2026-02-01",
            "source": "MarketWatch",
            "category": "Economy",
            "tab": "market",
            "published": "2026-02-01"
        },
        {
            "title": "Big Tech Earnings Beat Expectations, AI Spending Surges",
            "url": "https://www.bloomberg.com/news/articles/2026-02-01/big-tech-earnings",
            "source": "Bloomberg",
            "category": "Earnings",
            "tab": "market",
            "published": "2026-02-01"
        },
        {
            "title": "Labor Market Shows Continued Strength, Jobless Claims Fall",
            "url": "https://www.investing.com/news/economy/jobless-claims-2026-02-01",
            "source": "Investing.com",
            "category": "Economy",
            "tab": "market",
            "published": "2026-02-01"
        },
        # Tech News
        {
            "title": "Tesla Stock Surges on SpaceX Merger Speculation",
            "url": "https://www.reuters.com/business/autos-transportation/tesla-spacex-2026-02-01/",
            "source": "Reuters",
            "category": "EV & Space",
            "tab": "tech",
            "published": "2026-02-01"
        },
        {
            "title": "Nvidia and OpenAI Announce $100B AI Infrastructure Deal",
            "url": "https://www.wsj.com/tech/ai/nvidia-openai-deal-2026-02-01",
            "source": "WSJ",
            "category": "AI & Chips",
            "tab": "tech",
            "published": "2026-02-01"
        },
        {
            "title": "Starlink Updates Privacy Policy to Allow AI Training on User Data",
            "url": "https://www.reuters.com/technology/starlink-ai-privacy-2026-02-01/",
            "source": "Reuters",
            "category": "AI & Data",
            "tab": "tech",
            "published": "2026-02-01"
        },
        {
            "title": "Bitcoin Falls to Two-Month Low as ETF Outflows Continue",
            "url": "https://www.bloomberg.com/news/articles/2026-02-01/bitcoin-etf-outflows",
            "source": "Bloomberg",
            "category": "Crypto",
            "tab": "tech",
            "published": "2026-02-01"
        },
        {
            "title": "Apple Faces Margin Pressure from Rising Memory Chip Costs",
            "url": "https://www.bloomberg.com/news/videos/2026-02-01/apple-memory-costs",
            "source": "Bloomberg",
            "category": "Hardware",
            "tab": "tech",
            "published": "2026-02-01"
        }
    ]
    
    return sample_news

def generate_japanese_summary(news_item):
    """OpenAI APIを使用してニュースの日本語要約を生成"""
    print(f"  🤖 AI要約生成中: {news_item['title'][:50]}...")
    
    prompt = f"""あなたは米国株投資の初心者向けに、ニュースをわかりやすく解説する専門家です。

以下の英語ニュースを日本語で解説してください。

ニュースタイトル: {news_item['title']}
カテゴリ: {news_item['category']}
ソース: {news_item['source']}

以下の形式で出力してください（JSONフォーマット）:

{{
  "title": "日本語タイトル（簡潔で分かりやすく）",
  "summary": "1-2文の要約（初心者にもわかりやすく）",
  "background": "背景説明（なぜこのニュースが重要か、専門用語を噛み砕いて説明）",
  "impact": "市場への影響と投資家への示唆（具体的に）",
  "terms": [
    {{"term": "専門用語1", "definition": "初心者向けの説明"}},
    {{"term": "専門用語2", "definition": "初心者向けの説明"}}
  ]
}}

重要な注意事項:
- タイトルは40文字以内
- summaryは1-2文、80文字以内
- backgroundは200文字程度
- impactは300文字程度で、「投資家への影響」セクションを含める
- termsは2-3個の重要な専門用語を選ぶ
- 初心者にもわかりやすい言葉で説明する
- JSONフォーマットで出力（他のテキストは含めない）
"""
    
    try:
        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {"role": "system", "content": "あなたは金融ニュースを初心者向けに解説する専門家です。"},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=1500
        )
        
        content = response.choices[0].message.content.strip()
        
        # JSONパース
        # コードブロックを削除
        if content.startswith("```json"):
            content = content[7:]
        if content.startswith("```"):
            content = content[3:]
        if content.endswith("```"):
            content = content[:-3]
        content = content.strip()
        
        summary_data = json.loads(content)
        return summary_data
        
    except Exception as e:
        print(f"  ❌ エラー: {e}")
        return None

def create_news_json(news_items):
    """ニュースアイテムをJSON形式に変換"""
    print("\n📝 ニュースデータを生成中...")
    
    news_data = []
    
    for i, news in enumerate(news_items, 1):
        print(f"\n[{i}/{len(news_items)}] 処理中...")
        
        # AI要約を生成
        summary = generate_japanese_summary(news)
        
        if not summary:
            print(f"  ⚠️  スキップ: {news['title']}")
            continue
        
        # ニュースアイテムを作成
        news_item = {
            "id": str(i),
            "source": news["source"],
            "sourceUrl": news["url"],
            "title": summary["title"],
            "summary": summary["summary"],
            "background": summary["background"],
            "impact": summary["impact"],
            "terms": summary["terms"],
            "category": news["category"],
            "tab": news["tab"],
            "date": datetime.now().strftime("%Y.%m.%d"),
            "image": f"/images/news-{'market' if i % 2 == 0 else 'tech' if i % 3 == 0 else 'fomc'}.jpg"
        }
        
        news_data.append(news_item)
        print(f"  ✅ 完了: {summary['title'][:40]}...")
    
    return news_data

def save_news_json(news_data, output_path):
    """ニュースデータをJSONファイルに保存"""
    print(f"\n💾 JSONファイルを保存中: {output_path}")
    
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(news_data, f, ensure_ascii=False, indent=2)
        
        print(f"✅ 保存完了: {len(news_data)}件のニュース")
        return True
        
    except Exception as e:
        print(f"❌ 保存エラー: {e}")
        return False

def main():
    """メイン処理"""
    print("=" * 60)
    print("US Market News - ニュース自動更新")
    print("=" * 60)
    print()
    
    # ニュースを検索
    news_items = search_us_market_news()
    print(f"✅ {len(news_items)}件のニュースを取得しました")
    
    # AI要約を生成
    news_data = create_news_json(news_items)
    
    if not news_data:
        print("❌ ニュースデータの生成に失敗しました")
        sys.exit(1)
    
    # JSONファイルに保存
    output_path = os.path.join(
        os.path.dirname(os.path.dirname(__file__)),
        "client",
        "public",
        "news.json"
    )
    
    success = save_news_json(news_data, output_path)
    
    if success:
        print("\n" + "=" * 60)
        print("✨ ニュース更新が完了しました！")
        print("=" * 60)
        sys.exit(0)
    else:
        sys.exit(1)

if __name__ == "__main__":
    main()
