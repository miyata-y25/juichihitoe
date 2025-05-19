(function ($) {
    //ページ内スクロール
    $('a[href*="#"]').on('click',function() {
        var target = $(this).attr('href');
        var position = $(target).offset().top;
        var $header     = $('.site-header');
        var fheaderH    = $header.innerHeight();
        $('body,html').animate({scrollTop:position - 0}, 600, 'swing');
        return false;
    });
    //スマホグロナビボタン
    $('.menu-btn').on('click',function(){
        $(this).toggleClass('menu-btn--opened');
        $('body').toggleClass('opened');
        $('.header-cont').stop().fadeToggle();
    });
    $('.header-cont a[href*="#"]').on('click',function() {
        $('.menu-btn').removeClass('menu-btn--opened');
        $('body').removeClass('opened');
        $('.header-cont').stop().fadeOut();
    });

    $(window).on('load scroll', function(){
        var animTrigger = $('.anim');
        $(animTrigger).each(function(){
            var scroll = $(window).scrollTop(),
                elemTop = $(this).offset().top,
                windowHeight = $(window).height();

            if (scroll > elemTop - (windowHeight * 0.6)){
                $(this).addClass('is-animated');
            } else {
            }
        });
    });
    $(window).trigger('scroll');
    $('.is-animated').removeClass('is-animated');
})(jQuery);

$(function(){
	$('.-tablist input').on('click', function(){
		var index = $('.-tablist input').index(this);
		$('.-tabflex').eq(index).addClass('-act').siblings('div').removeClass('-act');
        $('body,html').animate({scrollTop:$('#-tablink').offset().top - $('.site-header').innerHeight()}, 400, 'swing');
	});
});

$(function(){
  $('.jsAccordionBtn').on('click',function(){
    $(this).toggleClass('active').next('.jsAccordionText').slideToggle();
  });
});

$(function(){
  $('.more-btn').on('click',function(){
    const target = $(this).prev('.more-cont');
    target.toggleClass('active');
    if(target.hasClass('active')){
      const height = target.get(0).scrollHeight;
      target.css('height',height);
      $(this).text('閉じる').addClass("active");
    }else{
      target.css('height','');
      $(this).text('もっと見る').removeClass("active");;
    }
  });
});

$(function(){
  $('.map-pin , .link-list a').on('click',function(){
    const target = $('.more-cont');
    const height = target.get(0).scrollHeight;
    target.addClass('active');
    target.css('height',height);
    $('.more-btn').text('閉じる').addClass("active");
  });
});
