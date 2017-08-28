  var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true
  })
  $('.arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper.swipePrev()
  })
  $('.arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
  })

window.onload=function(){
  var height=$(".swiper-slide img").eq(0).height();
  $('.swiper-container').height(height+'px');
  $(window).resize(function () {
    var height=$(".swiper-slide img").eq(0).height();
    $('.swiper-container').height(height+'px');
  });

  function text(){
    var eqs=$('.swiper-pagination-switch').index($('.swiper-visible-switch'));
    eqs++;
    if (eqs>2) {
      eqs=0;
    };
    // console.log(eqs)
    var width=$(".swiper-slide img").width();
    var match=$('.swiper-wrapper').css('transform').match(/\((.*),(.*),(.*),(.*),(.*),(.*)\)/)[5];
    var match_5=parseInt(match);
    if (match_5<=-width*4) {
      match_5=-width;
    };
    var x=match_5-width;
    $('.swiper-wrapper').css({'transform':'translate3d('+x+'px,0px,0px)','-webkit-transform':'translate3d('+x+'px,0px,0px)','-moz-transform':'translate3d('+x+'px,0px,0px)','-o-transform':'translate3d('+x+'px,0px,0px)','-sm-transform':'translate3d('+x+'px,0px,0px)','transition-duration': '0.3s','-webkit-transition-duration':'0.3s','-moz-transition-duration':'0.3s','-o-transition-duration':'0.3s','-ms-transition-duration':'0.3s'});
    // console.log(match_5)
    // console.log(x)

    $('.swiper-pagination-switch').removeClass('swiper-visible-switch swiper-active-switch');
    $('.swiper-pagination-switch').eq(eqs).addClass('swiper-visible-switch swiper-active-switch');
  }
  var tmp=setInterval(text,3000)
}