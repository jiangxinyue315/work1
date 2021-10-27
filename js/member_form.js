$(function(){

  // 開啟 Modal 彈跳視窗
  $("button.buttona1").on("click", function(){
    $("div.overlay").fadeIn();
  });

  // 關閉 Modal
  $("button.btn_modal_close").on("click", function(){
    $("div.overlay").fadeOut();
  });

});
