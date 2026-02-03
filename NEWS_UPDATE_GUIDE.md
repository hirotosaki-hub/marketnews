# US Market News - ニュース更新ガイド

## 概要

このガイドでは、US Market Newsのニュースを更新する方法を説明します。

## 仕組み

1. **ニュース取得**: Pythonスクリプトが最新の米国市場ニュースを取得
2. **AI要約生成**: OpenAI APIで日本語要約を生成
3. **GitHub保存**: `data`ブランチの`api/news.json`に保存
4. **CDN配信**: jsDelivr CDN経由で全世界に配信
5. **ウェブサイト表示**: ウェブサイトがCDNから最新データを読み込み

## ニュース更新方法

### 方法1: スクリプト実行（推奨）

```bash
cd /home/ubuntu/marketnews
bash scripts/update-news-with-notification.sh
```

このスクリプトは以下を自動実行します:
- ✅ 最新ニュースを取得
- ✅ AI要約を生成
- ✅ GitHubにプッシュ
- ✅ LINE通知を送信

### 方法2: 手動実行

```bash
cd /home/ubuntu/marketnews

# 1. ニュースを更新
python3 scripts/update-news.py

# 2. dataブランチに切り替え
git checkout data

# 3. JSONファイルをコピー
cp client/public/news.json api/news.json

# 4. GitHubにプッシュ
git add api/news.json
git commit -m "Update news: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin data

# 5. mainブランチに戻る
git checkout main
```

## データ配信URL

最新のニュースデータは以下のURLで配信されています:

```
https://cdn.jsdelivr.net/gh/hirotosaki-hub/marketnews@data/api/news.json
```

## ウェブサイトの更新について

**重要**: ウェブサイト（https://usstocknews-bmbxqg5i.manus.space）は、Manusのウェブアプリプラットフォームでホストされています。

### 現在の状況

- ✅ ニュースデータはCDN経由で配信されています（日付: 2026.02.02）
- ⏳ ウェブサイトのコードは更新されましたが、再デプロイが必要です
- 🔄 Manusの自動デプロイが完了すると、最新のニュースが表示されます

### ウェブサイトが更新されない場合

Manusのウェブアプリ管理画面から手動で再デプロイを実行してください:

1. Manusのダッシュボードを開く
2. US Market Newsプロジェクトを選択
3. 「再デプロイ」ボタンをクリック

## トラブルシューティング

### ニュースが更新されない

1. CDNのデータを確認:
   ```bash
   curl -s "https://cdn.jsdelivr.net/gh/hirotosaki-hub/marketnews@data/api/news.json" | jq -r '.[0].date'
   ```

2. GitHubのdataブランチを確認:
   ```bash
   gh browse --branch data
   ```

### スクリプトがエラーになる

1. OpenAI APIキーを確認:
   ```bash
   echo $OPENAI_API_KEY
   ```

2. Python依存関係を確認:
   ```bash
   pip3 list | grep openai
   ```

## 自動更新の設定

Manusのスケジュール機能を使用して、毎日自動的にニュースを更新できます:

1. Manusのタスク画面を開く
2. 「スケジュール」機能を選択
3. 以下を設定:
   - **タスク名**: US Market News 更新
   - **スケジュール**: 毎日 09:00 (日本時間)
   - **プロンプト**: "US Market Newsプロジェクトのニュースを更新し、LINE通知を送信してください。`cd /home/ubuntu/marketnews && bash scripts/update-news-with-notification.sh`"

## 料金

- ✅ GitHub: 無料（パブリックリポジトリ）
- ✅ jsDelivr CDN: 無料
- 💰 OpenAI API: 使用量に応じて課金（1回の更新で約$0.05）
- ✅ LINE通知: 無料（月1000通まで）

---

**最終更新**: 2026年2月3日
