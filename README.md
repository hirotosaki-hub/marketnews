# US Market News - 米国株ニュース for 初心者

> 米国株の「今」を、初心者にもわかりやすく解説するニュースサイト

[![Live Website](https://img.shields.io/badge/Live-Website-blue)](https://usstocknews-bmbxqg5i.manus.space)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-green)](https://github.com/hirotosaki-hub/marketnews)

## 🌐 ウェブサイト

**公開URL**: https://usstocknews-bmbxqg5i.manus.space

このウェブサイトは**Manusプラットフォーム**で永久的にホスティングされています。

## 📖 概要

US Market Newsは、米国株投資の初心者向けに、最新の市場ニュースをわかりやすく解説するウェブサイトです。

### 主な特徴

✅ **初心者向け解説**: 専門用語を噛み砕いて説明  
✅ **AI要約**: OpenAI APIを使用した自動要約  
✅ **毎日更新**: 最新のニュースを毎日自動取得  
✅ **2つのタブ**: Market News（市場）とTech Focus（テクノロジー）  
✅ **レスポンシブデザイン**: PC・スマホ対応  

## 🏗️ アーキテクチャ

### 技術スタック

**フロントエンド**: React 19.2.1 + TypeScript + Vite + TailwindCSS  
**バックエンド**: Node.js + Express.js + TypeScript  
**ニュース更新**: Python 3.11 + OpenAI API (gpt-4.1-mini)

## 🚀 セットアップ

### 前提条件

- Node.js 22.x
- Python 3.11
- OpenAI API キー

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/hirotosaki-hub/marketnews.git
cd marketnews

# Node.js の依存関係をインストール
pnpm install

# Python の依存関係をインストール
pip3 install openai
```

### 環境変数の設定

```bash
export OPENAI_API_KEY="your_openai_api_key_here"
export NODE_ENV="development"
export PORT="3000"
```

### ローカル開発

```bash
# 開発サーバーを起動
pnpm dev

# ブラウザで開く: http://localhost:3000
```

### ビルド

```bash
# プロジェクトをビルド
pnpm build

# news.json をコピー
cp client/public/news.json dist/public/news.json

# 本番サーバーを起動
NODE_ENV=production node dist/index.js
```

## 📰 ニュース更新

### 手動更新

```bash
# Python スクリプトを実行
python3 scripts/update-news.py
```

### API経由で更新

```bash
# APIエンドポイントを呼び出し
curl -X POST https://usstocknews-bmbxqg5i.manus.space/api/trpc/news.refresh \
  -H "Content-Type: application/json" \
  -d '{}'
```

### 自動更新（推奨）

#### 方法1: cronジョブ

```bash
# 毎日午前9時にニュース更新
0 9 * * * curl -X POST https://usstocknews-bmbxqg5i.manus.space/api/trpc/news.refresh -H "Content-Type: application/json" -d '{}'
```

#### 方法2: Manusスケジュール機能

Manusのスケジュール機能で以下を設定：
- **タスク名**: US Market News 更新
- **スケジュール**: 毎日 09:00 (日本時間)
- **プロンプト**: "US Market Newsプロジェクトのニュースを更新してください。APIエンドポイント: https://usstocknews-bmbxqg5i.manus.space/api/trpc/news.refresh を呼び出してください。"

## 🔧 API エンドポイント

### `POST /api/trpc/news.refresh`
ニュースを更新します。

### `GET /api/health`
サーバーのヘルスチェックを行います。

## 🌍 デプロイメント

### Manusでのデプロイ

このプロジェクトは**Manusプラットフォーム**で自動的にデプロイされています。

#### 再デプロイ方法

1. GitHubに変更をプッシュ
2. Manusのチャット画面で以下を入力：
   ```
   「GitHubリポジトリ https://github.com/hirotosaki-hub/marketnews から
   US Market Newsプロジェクトを再デプロイしてください」
   ```

#### カスタムドメインの設定

Manusでは独自ドメインの設定が可能です。詳細は [DEPLOYMENT.md](./DEPLOYMENT.md) を参照してください。

## 📈 今後の改善予定

### 短期（1週間以内）
- [ ] 実際のニュースAPI（NewsAPI、Finnhub）を統合
- [ ] エラー通知機能の追加

### 中期（1ヶ月以内）
- [ ] キャッシュの最適化（Redis、CDN）
- [ ] 多言語対応（英語版）

### 長期（3ヶ月以内）
- [ ] パーソナライゼーション機能
- [ ] リアルタイム更新（WebSocket）
- [ ] アナリティクス機能

## 🐛 トラブルシューティング

詳細は [DEPLOYMENT.md](./DEPLOYMENT.md) を参照してください。

## 📞 サポート

- **GitHub Issues**: https://github.com/hirotosaki-hub/marketnews/issues
- **Manusヘルプ**: https://help.manus.im

---

**作成日**: 2026年2月1日  
**バージョン**: 1.0.0  
**公開URL**: https://usstocknews-bmbxqg5i.manus.space
