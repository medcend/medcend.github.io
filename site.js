// ▼ リンク先はここで差し替える（全ページ共通）
const LINE_URL = "[LINEのURL]";              // LINE公式アカウントの友だち追加URL（決まったら https://lin.ee/… などに差し替える）
const NOTE_URL = "https://note.com/medcend"; // note のプロフィールURL
const X_URL    = "https://x.com/medcend";    // X のプロフィールURL

// LINE_URL が仮置きのあいだは、ボタンの飛び先を書き換えない
if (LINE_URL.startsWith("http")) document.querySelectorAll(".line-link").forEach(a => { a.href = LINE_URL; a.target = "_blank"; a.rel = "noopener"; });
document.querySelectorAll(".note-link").forEach(a => a.href = NOTE_URL);
document.querySelectorAll(".x-link").forEach(a => a.href = X_URL);
