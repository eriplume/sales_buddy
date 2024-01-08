# sales buddy

## サービス概要
接客を頑張っているアパレルスタッフをサポートするアプリです

## 想定されるユーザー層
アパレル店舗で働く人
- セルフ型店舗ではなく接客力が求められるブランド、店舗で働く人
- 個人売上システムがないブランド、店舗に所属する人
- 手書きよりスマホで手軽にデータを入力、管理したい人

### ユーザーの獲得について
所属店舗での使用を想定したアプリの為チームのメンバーに使用していただきます。

## サービスコンセプト
アパレル店舗で働く人の、記録係的ポジションを担いたい。
自己成長とプチ面倒な業務をサポートをするアプリを考えました。

「この作業時間もったいないな」「今月誰よりも販売頑張ったけど見てもらえてないな」「もっと初めからやっておけばよかった...」
私自身某アパレルセレクトショップにて新人〜責任者まで働いてきた中で小さなモヤモヤや後悔を経験しました。
同時にそれを解消できる便利なツールを探したりもしましたが、しっくりくるものもありませんでした。

仕事仲間と話す中で同じような気持ちを持っていることも知り、今なら解消できるかも！と思いました。
私の後を歩んでいる後輩が過去の私と同じモヤモヤを抱えないでいいように、以下のような課題を解決したいと思います。

【ユーザーが抱える課題】 
- 個人の売上記録や取り組みをわかりやすく記録したい、手間を減らしたい。続けるモチベーションが欲しい。 
- 月次人事評価シートを書くのに毎回困っている。
  - 毎日頑張ってはいるのに何をどう頑張ったのかが振り返れない。
  - 具体的な数値がなく評価者への説得力に欠けてしまう。
  - 文章を遡ってまとめることが手間。
 
【解決方法】 
- 個人売上管理機能
売上金額はもちろん、アパレル販売員お馴染みのセット率や客単価、客層を簡単な入力で記録出来ます。
また週間売上目標に対する自分の進捗や「あとどのくらい売ればいいか？」を可視化しモチベーションに繋げます。
接客業務につかず他の業務しか行わなかった場合はそちらを入力できるようにします。

- Weekly Report、目標設定機能
自身の１週間の振り返りを記録します。（毎日だと負担が多いので週単位での記録にします）
こちらは同時に月次人事評価シートを作成する為の種にもなっています。
忘れずに記録を促す為、LINEで通知を受け取れるようにします。
振り返りの入力、同時に次週の目標設定をステップ入力で行います。

- Monthly Report作成サポート
Weekly Reportとして記録したコメントを要約し、月次評価シートに記載する文章の下書き案を作成します。

## 実装を予定している機能
### MVP
* LINEログイン
* 売上登録機能
* グラフ表示機能
* 目標設定機能
* 週間レポート投稿機能
* 月間レポート作成機能(openaiAPIを使用)
* LINE通知機能
* 接客外業務記録機能（オートコンプリート）

### その後の機能
* テスト機能
* 管理者ユーザー機能
* グループページ
  - チャット機能
  - チームタスク管理機能

## 使用技術
#### フレームワーク
* Next.js14
* Rails7 apiモード

#### データベース
* PostgreSQL

#### API
* openAI API

#### ライブラリ
* NextAuth.js
* axios
* zustand

#### CSSフレームワーク,　UIライブラリ
* Tailwind CSS
* Mantine UI
* Recharts

#### インフラ
* Vercel
* Render

### バックエンド
https://github.com/eriplume/sales_buddy_backend.git