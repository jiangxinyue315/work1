$(function(){
  // 點擊按鈕，頁面滑到最上方
  $(".top_label2").on("click", function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 750);
  });
});

$(function(){
  AOS.init();
});
