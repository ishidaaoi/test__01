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
// const navPos = jQuery( '#global-nav' ).offset().top; // グローバルメニューの位置
// const navHeight = jQuery( '#global-nav' ).outerHeight(); // グローバルメニューの高さ
// jQuery( window ).on( 'scroll', function() {
// 	if ( jQuery( this ).scrollTop() > navPos ) {
// 		jQuery( 'body' ).css( 'padding-top', navHeight );
// 		jQuery( '#global-nav' ).addClass( 'm_fixed' );
// 	} else {
// 		jQuery( 'body' ).css( 'padding-top', 0 );
// 		jQuery( '#global-nav' ).removeClass( 'm_fixed' );
// 	}
// });
  $(window).on('scroll', function() {
	if (600 < $(this).scrollTop() ) { // 1000px以上スクロールしたら
		$('.js-inHeader').addClass('is-active');
	} else {
		$('.js-inHeader').removeClass('is-active');
	}
});
});

$(() => {
  const $spNavButton = $(".js-humburger");

  $spNavButton.on("click",() => {

  const $spNav =  $(".l-spHeader__menu");
      $spNav.toggleClass("is-open");
  })
});
