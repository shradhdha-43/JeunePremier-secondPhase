$('.play-btn:not(.added)').click(function(ev) {
    $(this).addClass('no-disp');
    $(this).closest('.img-w-txt-video-wrap').find('.video-cover').hide();
     if($(this).parent().hasClass('custom-video')){
       $(this).closest('.custom-video').find('.cust-video').trigger('play');
     }
     else{
       $(this).closest('.img-w-txt-video-wrap').find('.yt-video').removeClass('no-disp');
       var symbol = $(this).closest('.img-w-txt-video-wrap').find(".yt-video")[0].src.indexOf("?") > -1 ? "&" : "?";
       $(this).closest('.img-w-txt-video-wrap').find(".yt-video")[0].src += symbol + "autoplay=1&mute=1&rel=0";
     }
  });
$('.play-btn:not(.added)').addClass('added');



$('.langs').click(function() {
    $('.modal').css("display","flex");
});


var chatbutton;
//Get the button
var mybutton = document.getElementById("to-top");
function hideChatBtn() {
  $("#chat-button").css("z-index","8");
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



  