// ===== Q&A アコーディオン =====
document.querySelectorAll('.js-qa-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains('is-open');

    // 全部閉じる
    document.querySelectorAll('.js-qa-toggle').forEach(b => {
      b.classList.remove('is-open');
      b.nextElementSibling.classList.remove('is-open');
    });

    // クリックしたものを開く（既に開いていたら閉じたまま）
    if (!isOpen) {
      btn.classList.add('is-open');
      answer.classList.add('is-open');
    }
  });
});

// ===== ハンバーガーメニュー =====
const hamburger = document.querySelector('.hamburger');
const drawer = document.querySelector('.drawer');

hamburger?.addEventListener('click', () => {
  drawer.classList.toggle('is-open');
});

// ドロワー内リンクをクリックで閉じる
document.querySelectorAll('.drawer-list a, .drawer .btn').forEach(link => {
  link.addEventListener('click', () => {
    drawer.classList.remove('is-open');
  });
});

// ===== スクロール時ヘッダーシャドウ強化 =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.12)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
  }
});
