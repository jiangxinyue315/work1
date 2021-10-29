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

$(function(){
  // 使用者點擊按鈕，會執行以下 function 裡的程式
  $("button.trigger").hover(function(){
    // 加上 animated 和 bounce 這兩個 class
    $("button.trigger").addClass("animate__animated animate__wobble");
  });
});
