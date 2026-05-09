$(function () {
  $(".faq-question").on("click", function () {
    var $item = $(this).closest(".faq-item");
    var $answer = $item.find(".faq-answer");
    if ($item.hasClass("is-open")) {
      $item.removeClass("is-open");
      $answer.slideUp(280);
    } else {
      $(".faq-item.is-open").each(function () {
        $(this).removeClass("is-open");
        $(this).find(".faq-answer").slideUp(280);
      });
      $item.addClass("is-open");
      $answer.slideDown(280);
    }
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        $(entry.target).addClass("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $(".fade-in").each(function () { observer.observe(this); });

  $("a[href^=\"#\"]").on("click", function (e) {
    var target = $(this).attr("href");
    if (target === "#") return;
    var $target = $(target);
    if ($target.length) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: $target.offset().top - 70 }, 500);
    }
  });

  $(window).on("scroll", function () {
    var heroBottom = $(".hero").offset().top + $(".hero").outerHeight();
    if ($(window).scrollTop() > heroBottom) {
      $(".fixed-cta").css("display", "block");
    } else {
      $(".fixed-cta").css("display", "none");
    }
  });
});
