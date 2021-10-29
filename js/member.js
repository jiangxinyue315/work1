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
  // 開啟 Modal 彈跳視窗
  $("button.btn_modal").on("click", function(){
    $("div.overlay").fadeIn();
  });
  // 關閉 Modal
  $("button_back").on("click", function(){
    $("div.overlay").fadeOut();
  });
});
