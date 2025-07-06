$(function () {
/*=================================================
ハンバーガーメニュー
===================================================*/
$(".hamburger").on("click", function () {
// headerにopenクラスがあるか判定する
if ($("header").hasClass("open")) {
// headerにopenクラスが存在する場合、openクラスを削除する
$("header").removeClass("open");
} else {
// headerにopenクラスが存在しない場合、openクラスを加える
$("header").addClass("open");
}
});

  // メニューが表示されている時に画面をクリックした場合
$("nav a").on("click", function () {

  // openクラスを削除して、メニューを閉じる
$("header").removeClass("open");
});
});

  /*=================================================
  スムーススクロール
  ===================================================*/
  $("nav a").click(function() {

  let href = $(this).attr("href");

  let target = $(href == "#" || href == "" ? "html" : href);
  
  let position = target.offset().top;

    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });


  /*=================================================
  タイトル
  ===================================================*/
    $(window).scroll(function () {

    $(".section-title").each(function () {
      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("balloon");
      }
    });
  });



    /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });



  /*=================================================
  PICK UP スライダー
  ===================================================*/
  $(".slick-items").slick({
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });


