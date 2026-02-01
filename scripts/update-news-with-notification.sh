#!/bin/bash

# US Market News - ニュース更新 + LINE通知スクリプト

set -e

cd /home/ubuntu/marketnews

# ニュース更新
if python3 scripts/update-news.py; then
    # LINE通知（シンプル版）
    manus-mcp-cli tool call push_text_message --server line --input '{"message":{"text":"US Market Newsを更新しました\n\nhttps://usstocknews-bmbxqg5i.manus.space"}}'
    exit 0
else
    # エラー通知
    manus-mcp-cli tool call push_text_message --server line --input '{"message":{"text":"US Market Newsの更新に失敗しました"}}'
    exit 1
fi
