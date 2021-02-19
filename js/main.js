$(function() {

  // aos.jsの初期化
  AOS.init()

  // swiper
  let mySwiper = new Swiper(".swiper-container", {
    loop: true, // ループの指定
    effect: "fade", //フェードの指定
    autoplay: {
        delay: 4000, //４秒後に次のスライドへ
        disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
    },
    speed: 2000, //２秒かけてフェードで切り替わる
  });

  // スクロール時のヘッダー
  if ( window.document.body.id === 'top' ) {
    var headNav = $(".header");
    //scrollだけだと読み込み時困るのでloadも追加
    $(window).on('load scroll', function () {
      //現在の位置が500px以上かつ、クラスfixedが付与されていない時
      if($(this).scrollTop() > 500 && headNav.hasClass('fixed') == false) {
        //headerの高さ分上に設定
        headNav.css({"top": '-100px'});
        //クラスfixedを付与
        headNav.addClass('fixed');
        //位置を0に設定し、アニメーションのスピードを指定
        headNav.animate({"top": 0},600);
      }
      //現在の位置が300px以下かつ、クラスfixedが付与されている時にfixedを外す
      else if($(this).scrollTop() < 300 && headNav.hasClass('fixed') == true){
        headNav.removeClass('fixed');
      }
    });
  }

  // ドロワー
  $('.js-drawer').hide();
  $('.js-drawer-open').click(function() {
    $('.js-drawer').fadeIn();
    $(this).fadeOut();
    return false;
  });
  $('.js-drawer-close').click(function() {
    $('.js-drawer').fadeOut();
    $('.js-drawer-open').fadeIn();
    return false;
  });

  // ハンバーガーボタン


  // モーダル
  $('.js-modal').hide();
  $('.js-modal-open').on('click',function(){
    $('.js-modal').fadeIn();
    return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  });

  // flatpickr
  const config = {
    'locale': 'ja',
    mode: "multiple",
    minDate: "today"
  }
  flatpickr('.flatpickr', config, {locale:"ja"});

  // タブメニュー
  $('.tab li').click(function() {
    $('.tab li').removeClass('line');
    $(this).addClass('line');
  });

  $('.info-items-other').hide();
  $('.sales').click(function() {
    $('.info-items-other').hide();
    $('.info-items-sales').fadeIn();
  });

  $('.other').click(function() {
    $('.info-items-sales').hide();
    $('.info-items-other').fadeIn();
  })

  // フォームの入力確認
  $('form input:required').change(function () {
      //必須項目が空かどうかフラグ
      let flag = true;
      //必須項目をひとつずつチェック
      $('form input:required').each(function(e) {
          //もし必須項目が空なら
          if ($('form input:required').eq(e).val() === "") {
              flag = false;
          }
      });
      //全て埋まっていたら
      if (flag) {
          //送信ボタンを復活
          $('.modal-submit').prop("disabled", false);
      }
      else {
          //送信ボタンを閉じる
          $('.modal-submit').prop("disabled", true);
      }
  });


});