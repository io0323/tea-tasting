# Tea Tasting App

お茶の味わいを記録し、共有するためのモバイルアプリケーション。

## 機能

- お茶の詳細情報の記録
- テイスティングノートの作成
- 写真の追加と管理
- お気に入りのお茶の管理
- 統計情報の表示

## 技術スタック

- React Native / Expo
- TypeScript
- Supabase (バックエンド)
- TailwindCSS (スタイリング)

## セットアップ

1. リポジトリのクローン:
```bash
git clone https://github.com/io0323/tea-tasting.git
cd tea-tasting
```

2. 依存関係のインストール:
```bash
npm install
```

3. 環境変数の設定:
`.env`ファイルを作成し、必要な環境変数を設定してください。

4. アプリケーションの起動:
```bash
npm start
```

## アプリケーション構造

```
src/
  ├── components/     # 再利用可能なコンポーネント
  ├── screens/        # 画面コンポーネント
  ├── navigation/     # ナビゲーション設定
  ├── services/       # APIサービス
  ├── contexts/       # Reactコンテキスト
  ├── hooks/          # カスタムフック
  └── types/          # 型定義
```

## メイン画面

- ホーム画面: お茶のリストと最近のテイスティング
- 追加画面: 新しいお茶の登録
- 詳細画面: お茶の詳細情報とテイスティングノート
- 統計画面: テイスティングの統計と分析

## ライセンス

MIT 