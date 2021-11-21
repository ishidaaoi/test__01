import $ from 'jquery'
import 'slick-carousel';
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  new router()
})

$(() => {
  $('.js-top-slide').slick({
    dots: true,
    arrow: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    cssEase:"linear",
  });
});

$(() => {
  $(".js-center-slide").slick({
    centerMode: true,
    centerPadding: '14%',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
  });
});

$(() => {
  $(".js-bottom-slide").slick({
    dots: true,
    arrow: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    cssEase:"linear",
  });
});

$(() => {
    const headerHight = 20; //ヘッダーの高さをpx指定
        const urlHash = location.hash;
        if(urlHash) {
            $('body,html').stop().scrollTop(0);
            setTimeout(() => {
                const target = $(urlHash);
                const position = target.offset().top - headerHight;
                $('body,html').stop().animate({scrollTop:position},1000,"linear");
                return false;
            }, 300);
        }
        $('a[href^="#"]').on("click", function() {
            const href= $(this).attr("href");
            const target = $(href);
            const position = target.offset().top - headerHight;
            $('body,html').stop().animate({scrollTop:position},1000 ,"linear");
            return false;
        });
});

$(() => {
  $(window).on('scroll', function() {
	if (600 < $(this).scrollTop() ) { // 1000px以上スクロールしたら
		$('.js-inHeader').addClass('is-active');
	} else {
		$('.js-inHeader').removeClass('is-active');
	}
});
});

// $(() => {
//   $(window).on('scroll', function() {
// 	if (600 < $(this).scrollTop() ) { // 1000px以上スクロールしたら
// 		$('.js-return').addClass('is-active');
// 	} else {
// 		$('.js-return').removeClass('is-active');
// 	}
// });
// });


$(() => {
  const $spNavButton = $(".js-humburger");

  $spNavButton.on("click",() => {

  const $spNav =  $(".l-spHeader__menu");
      $spNav.toggleClass("is-open");
  })
});

// $(() => {
// // $(function() {
//     const topBtn = $(".js-return");
//     // topBtn.hide();
//     //スクロールが100に達したらボタン表示
//     $(window).on('scroll', function() {
//         if ($(this).scrollTop() > 100) {
//             topBtn.fadeIn();
//         } else {
//             topBtn.fadeOut();
//         }
//     });
// });
