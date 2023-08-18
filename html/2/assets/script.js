//random bg//

if ($(window).width() >= 480) {
function changeImg(imgNumber)	{
			var myImages = ["assets/bg1.jpg", "assets/bg2.jpg", "assets/bg3.jpg", "assets/bg4.jpg", "assets/bg5.jpg", "assets/bg6.jpg", "assets/bg7.jpg", "assets/bg9.jpg", "assets/bg10.jpg", "assets/bg11.jpg"]; 
			var imgShown = document.body.style.backgroundImage;
			var newImgNumber =Math.floor(Math.random()*myImages.length);
			document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
		}
		window.onload=changeImg;
}

//end random bg//

//tracking animation//

var terms = ["-----***-----", "--***--------", "***----------", "--***--------", "-----***-----", "--------***--", "----------***", "--------***--", "-----***-----", "tracking", "/racking", "//acking", "///cking", "/////ing", "//////ng", "///////g", "////////", "////////", "t///////", "tr//////", "tra/////", "trac////", "track///", "tracki//", "trackin/", "tracking", "tracking", "-----***-----", "--***--------", "***----------", "--***--------", "-----***-----", "--------***--", "----------***", "--------***--"];

function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn(0)
              .delay(100).fadeOut(0, rotateTerm);
}
$(rotateTerm);

//end tracking animation//

//animations//

$(document).ready(function(){

//$('html, body').delay(2500).animate({ scrollTop: $('#scroll').offset().top}, 2000);
$('#content').css('display', 'none');
$('#content_head').css('display', 'none');
$('#content_footer').css('display', 'none');
$('.blink').css('display', 'none');
$('#content').delay(3500).fadeIn(0);
$('#content_head').delay(3500).fadeIn(0);
$('#content_footer').delay(3500).fadeIn(0);
$('#load').delay(3500).fadeOut(0);
$('.blink').delay(3500).fadeIn(0);

});

//end animations//