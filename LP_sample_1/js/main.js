$(function () {

  /* ========================================
     FAQアコーディオン
  ======================================== */
  $('.faq-question').on('click', function () {
    const $item = $(this).closest('.faq-item');
    const $answer = $item.find('.faq-answer');

    if ($item.hasClass('is-open')) {
      // 閉じる
      $item.removeClass('is-open');
      $answer.slideUp(280);
    } else {
      // 他を閉じてから開く
      $('.faq-item.is-open').each(function () {
        $(this).removeClass('is-open');
        $(this).find('.faq-answer').slideUp(280);
      });
      $item.addClass('is-open');
      $answer.slideDown(280);
    }
  });

  /* ========================================
     スクロールフェードイン（Intersection Observer）
  ======================================== */
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        $(entry.target).addClass('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  $('.fade-in').each(function () {
    observer.observe(this);
  });

  /* ========================================
     スムーススクロール（jQuery）
  ======================================== */
  $('a[href^="#"]').on('click', function (e) {
    const target = $(this).attr('href');
    if (target === '#') return;
    const $target = $(target);
    if ($target.length) {
      e.preventDefault();
      const offset = $target.offset().top - 70;
      $('html, body').animate({ scrollTop: offset }, 500, 'swing');
    }
  });

  /* ========================================
     固定CTAバナー：ヒーローを過ぎたら表示
  ======================================== */
  $(window).on('scroll', function () {
    const heroBottom = $('.hero').offset().top + $('.hero').outerHeight();
    if ($(window).scrollTop() > heroBottom) {
      $('.fixed-cta').addClass('is-visible').css('display', 'block');
    } else {
      $('.fixed-cta').css('display', 'none');
    }
  });

});
