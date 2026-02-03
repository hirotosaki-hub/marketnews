#!/bin/bash

# US Market News - ニュース更新 + GitHub自動プッシュ + LINE通知スクリプト

set -e

cd /home/ubuntu/marketnews

# mainブランチに移動
git checkout main 2>/dev/null || true

# ニュース更新
if python3 scripts/update-news.py; then
    # dataブランチに切り替え
    git checkout data
    
    # 最新のニュースをコピー
    cp client/public/news.json api/news.json
    
    # GitHubにプッシュ
    git add api/news.json
    git commit -m "Update news: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"
    git push origin data
    
    # mainブランチに戻る
    git checkout main
    
    # LINE通知（シンプル版）
    manus-mcp-cli tool call push_text_message --server line --input '{"message":{"text":"US Market Newsを更新しました\n\nhttps://usstocknews-bmbxqg5i.manus.space"}}'
    exit 0
else
    # エラー通知
    manus-mcp-cli tool call push_text_message --server line --input '{"message":{"text":"US Market Newsの更新に失敗しました"}}'
    exit 1
fi
