// ▼ リンク先はここで差し替える（全ページ共通）
const LINE_URL = "[LINEのURL]";              // LINE公式アカウントの友だち追加URL（決まったら https://lin.ee/… などに差し替える）
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc95X303yRpBEhc627t221mSBZm7iB6NEHqc1IKTA-ngXQD3w/viewform"; // LINEができるまでの申込フォーム
const NOTE_URL = "https://note.com/medcend"; // note のプロフィールURL
const X_URL    = "https://x.com/medcend";    // X のプロフィールURL

// LINE_URL が https で始まればLINEモード、仮置きのあいだはフォームモード。
// 文言は .if-line / .if-form の両方をHTMLに書いておき、モードで出し分ける
const lineReady = LINE_URL.startsWith("http");
const CONTACT_URL = lineReady ? LINE_URL : FORM_URL;
document.documentElement.classList.add(lineReady ? "mode-line" : "mode-form");
document.querySelectorAll(".contact-link").forEach(a => { a.href = CONTACT_URL; a.target = "_blank"; a.rel = "noopener"; });
document.querySelectorAll(".note-link").forEach(a => a.href = NOTE_URL);
document.querySelectorAll(".x-link").forEach(a => a.href = X_URL);
