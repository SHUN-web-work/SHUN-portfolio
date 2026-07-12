// スワイパー
const mySwiper = new Swiper ('.swiper', {
  // ここからオプション
  loop: true,
  initialSlide: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  width: 274,
  spaceBetween: 20,
  breakpoints: {
    // スライドの表示枚数：500px以上の場合
    768: {
      width: 400,
      spaceBetween: 40,
      // slideToClickedSlide: true,
    },
  },
});

// jQuery('a[href^="#"]').on('click', function() {
  // #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id != "#") {
    position = jQuery(id).offset().top - header;
  }

  jQuery("html, body").animate({
      scrollTop: position
    },
    300
  );
  return false;
});

// アコーディオン
jQuery('.qa-item-q').on('click', function() {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-item-q-icon').toggleClass('is-open');
});

// WOW
new WOW().init();


jQuery('.js-gender').on('click',function() {
  jQuery(this).toggleClass('clicked');
});

function hoge() {
  jQuery(this).toggleClass('clicked');
}


// ハンバーガーメニュー
jQuery('.hamburger').on('click', function(e) {
  e.preventDefault()

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});

// ドロワー
jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault()

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});

// googleForm
let $form = $( '#js-form' )
$form.submit(function(e) { 
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理 
        $form.slideUp()
        $( '#js-success' ).slideDown()
      }, 
      200: function() { 
        //送信に失敗したときの処理 
        $form.slideUp()
        $( '#js-error' ).slideDown()
      }
    } 
  });
  return false; 
}); 

// コンタクト 必須入力チェック
$(document).ready(function () {
  const $submitBtn = $( '#js-submit' )
  $('#js-form input,#js-form textarea').on('change', function() {
    if (
      $('#js-form input[type="text"]').val() !== ""
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }

  });
});
