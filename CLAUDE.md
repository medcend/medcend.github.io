# MEDCEND 公式サイト

ヨーロッパの英語医学部に通う日本人学生と、その親のための進級支援チーム MEDCEND の公式サイト。GitHub Pages で公開し、独自ドメイン https://medcend.com で配信している（`CNAME` ファイル）。DNS は Cloudflare で管理（A レコード4つ＋www の CNAME、すべて DNS only）。

## 作業の始め方と終わり方

- 作業を始める前に、Notion の「MEDCEND ハブ」と子ページ「Claude 共有ボード（Code ⇄ チャット）」を読む。
- 共有ボードの「依頼」で自分（Code）宛ての依頼を確認する。
- 作業が終わったら、共有ボードの「作業ログ」に日付・やったこと・残りを書く。
- 方針やルールを変えるときは、ハブ側を直す。

## 書いてはいけないこと

- 大学名・都市名・学年など、個人が特定される情報はサイトに書かない。講師の紹介も「東欧の国立医学部に在籍する現役医学生」程度の粒度にとどめる。
- 「私たちが〜します」のような、AIっぽい言い回しは使わない。

## デザイン

- ブランドカラーは紺・クリーム・テラコッタ。値は `style.css` の `:root` にある（`--navy` / `--cream` / `--terra`）。
- 問い合わせボタン（`.btn-contact`）は、LINE モードのときだけ LINE の緑になる。
- 上のバー：右に X・note のボタンと「≡」メニュー。メニューの中身は各ページの `.nav-links` を `site.js` が複製して作るので、項目を足すときは `.nav-links` に書く。バーに項目が横に並ぶのは幅1220px超のときだけ。

## ファイル構成

- `index.html`：トップ
- `parents.html`：保護者向け（留年の費用、落ちやすい原因）
- `tokushoho.html`：特定商取引法に基づく表記
- `privacy.html`：プライバシーポリシー
- `style.css`：全ページ共通のスタイル
- `site.js`：LINE・Googleフォーム・note・X のURL。リンク先はここだけで差し替える
- `og.png`：SNS 共有用の画像
- `img/`：note の表紙画像など

## 仮置きしているもの

- LINE の URL：`site.js` の `LINE_URL`（いまは `[LINEのURL]`）。仮置きのあいだは「フォームモード」で、問い合わせボタンは Google フォーム（`FORM_URL`）に飛び、文言もフォーム用になる。`LINE_URL` を https の URL にすると LINE モードに切り替わる。
- 問い合わせの文言は、HTML に `<span class="if-line">…</span><span class="if-form">…</span>` の両方を書いて出し分ける。新しく問い合わせの文言を足すときも両方書く。
- note の販売欄（トップの `#note`）：各巻のURLは `site.js` の `NOTE_ITEMS`（いまは `[0巻のURL]` `[1巻のURL]`）。どれか1つが https のURLになるまで、欄とナビの「解剖テキスト」は非表示。URLのない巻のボタンは「準備中」になる。`?note-preview` を付けて開くと、URLがなくても欄を表示して確認できる。表紙画像は `img/note-vol0.jpg` `img/note-vol1.jpg`
- 特商法・プライバシーポリシーの未定項目：`<span class="tbd">［未定］</span>` で示している。

## 公開の手順

- 変更したら、コミットとプッシュの前に差分と表示をユーザーに見せる。
- 手元での確認は `python3 -m http.server 8000` で http://localhost:8000 を開く。
- 公開はユーザーが GitHub Desktop の Commit → Push で行う。
