/* ========================================
   ハンバーガーメニュー
======================================== */
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay   = document.getElementById('mobile-nav-overlay');
  if (!hamburger || !mobileNav) return;

  function openMenu() {
    hamburger.classList.add('is-open');
    mobileNav.classList.add('is-open');
    overlay && overlay.classList.add('is-open');
    document.body.classList.add('menu-open');
    hamburger.setAttribute('aria-label', 'メニューを閉じる');
  }

  function closeMenu() {
    hamburger.classList.remove('is-open');
    mobileNav.classList.remove('is-open');
    overlay && overlay.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    hamburger.setAttribute('aria-label', 'メニューを開く');
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  // メニュー内リンクをタップしたら閉じる
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // 左側の余白（オーバーレイ）をタップしたら閉じる
  overlay && overlay.addEventListener('click', closeMenu);
});

/* ========================================
   スキルバー：スクロール時にアニメーション
======================================== */
document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (bars.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => {
    bar.style.width = '0';
    observer.observe(bar);
  });
});

/* ========================================
   Worksフィルター
======================================== */
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workItems = document.querySelectorAll('.work-item');
  if (filterBtns.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // activeクラスの切り替え
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      workItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.removeAttribute('data-hidden');
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

/* ========================================
   お問い合わせフォーム送信
   （見た目は自作フォーム、送信先はGoogleフォーム）
======================================== */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', () => {
    // 必須項目が未入力ならブラウザの検証で止まり、この処理は走らない。
    // 検証を通過した場合のみ、非表示iframe宛てに送信されるので、
    // 画面遷移せずにフォームを隠して完了メッセージを表示する。
    const thanks = document.getElementById('form-thanks');
    setTimeout(() => {
      form.style.display = 'none';
      if (thanks) thanks.classList.add('is-visible');
    }, 400);
  });
}
