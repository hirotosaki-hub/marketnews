# US Market News - デプロイメントガイド

## 概要

このドキュメントでは、US Market Newsプロジェクトのデプロイ方法と、ニュース自動更新機能の設定方法について説明します。

## アーキテクチャ

### システム構成

- **フロントエンド**: React + Vite + TypeScript
- **バックエンド**: Express.js (Node.js)
- **ニュースデータ**: JSON ファイル (`client/public/news.json`)
- **ニュース更新**: Python スクリプト (`scripts/update-news.py`)

### データフロー

1. ユーザーがウェブサイトにアクセス
2. フロントエンドが `/news.json` を読み込み
3. ニュースを表示
4. 定期的に `/api/trpc/news.refresh` が呼ばれる
5. Python スクリプトが実行され、最新ニュースを取得・要約
6. `news.json` が更新される
7. ユーザーがページをリロードすると最新ニュースが表示される

## デプロイ手順

### 1. 環境変数の設定

以下の環境変数を設定してください：

```bash
# OpenAI API キー（必須）
OPENAI_API_KEY=your_openai_api_key_here

# サーバーポート（オプション、デフォルト: 3000）
PORT=3000

# 環境（本番環境では production を設定）
NODE_ENV=production
```

### 2. 依存関係のインストール

```bash
# Node.js の依存関係をインストール
pnpm install

# Python の依存関係をインストール
pip3 install openai
```

### 3. プロジェクトのビルド

```bash
pnpm build
```

このコマンドは以下を実行します：
- フロントエンドをビルド (`dist/public/` に出力)
- バックエンドをビルド (`dist/index.js` に出力)

### 4. news.json のコピー

ビルド後、`news.json` を `dist/public/` にコピーしてください：

```bash
cp client/public/news.json dist/public/news.json
```

**重要**: この手順を忘れると、デプロイ後にニュースが表示されません。

### 5. サーバーの起動

```bash
NODE_ENV=production node dist/index.js
```

サーバーが起動すると、以下のエンドポイントが利用可能になります：

- `GET /` - ウェブサイト
- `POST /api/trpc/news.refresh` - ニュース更新API
- `GET /api/health` - ヘルスチェック

## ニュース自動更新の設定

### 手動更新

ニュースを手動で更新するには、以下のコマンドを実行します：

```bash
python3 scripts/update-news.py
```

または、APIエンドポイントを呼び出します：

```bash
curl -X POST http://localhost:3000/api/trpc/news.refresh \
  -H "Content-Type: application/json" \
  -d '{}'
```

### 自動更新（cron）

毎日自動的にニュースを更新するには、cronジョブを設定します。

#### 方法1: APIエンドポイント経由（推奨）

```bash
# crontabを編集
crontab -e

# 毎日午前9時（日本時間）にニュースを更新
0 9 * * * curl -X POST http://localhost:3000/api/trpc/news.refresh -H "Content-Type: application/json" -d '{}'
```

#### 方法2: Python スクリプト直接実行

```bash
# crontabを編集
crontab -e

# 毎日午前9時（日本時間）にニュースを更新
0 9 * * * cd /path/to/marketnews && python3 scripts/update-news.py
```

### Manusでのスケジュール設定

Manusのスケジュール機能を使用する場合：

1. Manusのタスク画面を開く
2. 「スケジュール」機能を選択
3. 以下の設定を入力：
   - **タスク名**: US Market News 更新
   - **スケジュール**: 毎日 09:00 (日本時間)
   - **プロンプト**: "US Market Newsプロジェクトのニュースを更新してください。プロジェクトパス: /home/ubuntu/marketnews。APIエンドポイント: http://localhost:3000/api/trpc/news.refresh を呼び出してください。"

## トラブルシューティング

### ニュースが表示されない

1. `news.json` が存在するか確認：
   ```bash
   ls -la dist/public/news.json
   ```

2. `news.json` の内容を確認：
   ```bash
   cat dist/public/news.json | jq
   ```

3. ブラウザの開発者ツールでネットワークタブを確認し、`/news.json` が正常に読み込まれているか確認

### API エンドポイントが 500 エラーを返す

1. サーバーログを確認：
   ```bash
   # サーバーを起動したターミナルでログを確認
   ```

2. OpenAI API キーが正しく設定されているか確認：
   ```bash
   echo $OPENAI_API_KEY
   ```

3. Python スクリプトを直接実行してエラーを確認：
   ```bash
   python3 scripts/update-news.py
   ```

### ニュース更新スクリプトが失敗する

1. OpenAI API キーを確認
2. Python の依存関係を確認：
   ```bash
   pip3 list | grep openai
   ```

3. スクリプトを手動実行してエラーメッセージを確認：
   ```bash
   python3 scripts/update-news.py
   ```

## Manusでの再デプロイ

Manusプロジェクトを再デプロイする場合：

1. Manusのプロジェクト管理画面を開く
2. US Market Newsプロジェクトを選択
3. 「再デプロイ」または「更新」ボタンをクリック
4. GitHubリポジトリから最新のコードが自動的にデプロイされます

**注意**: 再デプロイ後、環境変数（`OPENAI_API_KEY`など）が正しく設定されているか確認してください。

## パフォーマンスの最適化

### キャッシュの活用

フロントエンドでは、一度読み込んだニュースデータをキャッシュしています。ページをリロードするまで、同じデータが使用されます。

### API レート制限

OpenAI APIには レート制限があります。ニュース更新を頻繁に実行しすぎないように注意してください。推奨頻度：1日1回

## セキュリティ

### API キーの管理

- **絶対に** API キーをGitHubにコミットしないでください
- 環境変数を使用してAPI キーを管理してください
- `.env` ファイルは `.gitignore` に追加されています

### CORS 設定

現在、CORS は設定されていません。外部からのAPIアクセスを制限する場合は、Express.js に CORS ミドルウェアを追加してください。

## モニタリング

### ヘルスチェック

サーバーの状態を確認するには、ヘルスチェックエンドポイントを使用します：

```bash
curl http://localhost:3000/api/health
```

レスポンス例：
```json
{
  "status": "ok",
  "timestamp": "2026-02-01T04:57:08.581Z"
}
```

### ログ

サーバーログは標準出力に出力されます。本番環境では、ログを適切に管理してください（例：PM2、Docker、systemdなど）。

## サポート

問題が発生した場合は、以下を確認してください：

1. GitHubリポジトリの Issues
2. Manusのヘルプページ: https://help.manus.im
3. プロジェクトのREADME.md

---

**最終更新**: 2026年2月1日
