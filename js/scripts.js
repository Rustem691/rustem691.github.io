$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function(){
  $('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $('.menu-btn').toggleClass('menu-btn_active');
  $('.nav_block').toggleClass('nav_block_active');
  });
});
