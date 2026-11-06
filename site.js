// ▼ リンク先はここで差し替える（全ページ共通）
const LINE_URL = "[LINEのURL]";              // LINE公式アカウントの友だち追加URL（決まったら https://lin.ee/… などに差し替える）
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc95X303yRpBEhc627t221mSBZm7iB6NEHqc1IKTA-ngXQD3w/viewform"; // LINEができるまでの申込フォーム
const NOTE_URL = "https://note.com/medcend"; // note のプロフィールURL
const X_URL    = "https://x.com/medcend";    // X のプロフィールURL

// noteの各巻のURL。https のURLを入れた巻からボタンが有効になる。
// どれか1つでも入ると、トップの「解剖テキスト」欄が表示される（それまでは非表示）
const NOTE_ITEMS = {
  vol0: "[0巻のURL]",
  vol1: "[1巻のURL]",
};

// LINE_URL が https で始まればLINEモード、仮置きのあいだはフォームモード。
// 文言は .if-line / .if-form の両方をHTMLに書いておき、モードで出し分ける
const lineReady = LINE_URL.startsWith("http");
const CONTACT_URL = lineReady ? LINE_URL : FORM_URL;
document.documentElement.classList.add(lineReady ? "mode-line" : "mode-form");
document.querySelectorAll(".contact-link").forEach(a => { a.href = CONTACT_URL; a.target = "_blank"; a.rel = "noopener"; });
document.querySelectorAll(".note-link").forEach(a => a.href = NOTE_URL);
document.querySelectorAll(".x-link").forEach(a => a.href = X_URL);

// note の販売欄：URLが入るまでは隠す。?note-preview を付けると、URLがなくても表示して確認できる
const noteReady = Object.values(NOTE_ITEMS).some(u => u.startsWith("http"));
const notePreview = location.search.includes("note-preview");
if (!noteReady && !notePreview) document.documentElement.classList.add("note-off");
document.querySelectorAll("[data-note]").forEach(a => {
  const u = NOTE_ITEMS[a.dataset.note] || "";
  if (u.startsWith("http")) { a.href = u; a.target = "_blank"; a.rel = "noopener"; }
  else { a.removeAttribute("href"); a.classList.add("is-soon"); a.textContent = "準備中"; }
});

// メニュー：「≡」でページ内の項目一覧を開き、項目を押したら閉じる（PC・スマホ共通）
// 一覧の中身は .nav-links を複製して作る
const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".nav-menu");
const links = document.querySelector(".nav-links");
if (nav && menuBtn && links) {
  const drawer = links.cloneNode(true);
  drawer.removeAttribute("id");
  drawer.className = "nav-drawer";
  drawer.id = "nav-drawer";
  menuBtn.setAttribute("aria-controls", "nav-drawer");
  nav.appendChild(drawer);
  const setOpen = open => {
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
  };
  menuBtn.addEventListener("click", e => { e.stopPropagation(); setOpen(!nav.classList.contains("open")); });
  drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("click", e => { if (!nav.contains(e.target)) setOpen(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
}
