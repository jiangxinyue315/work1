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
  // 「觸發」按鈕點擊
  $("button.trigger").on("click", function(){
    // move 樣式的切換(點擊一次加上 move 樣式，再點擊則移除)
    $("div.block").toggleClass("move");
  });
});
