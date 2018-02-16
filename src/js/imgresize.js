/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
//    alert();
    set_body_height();
//     function set_body_height() { // set body height = window height
//    $('.middle_img').width($(window).width());
//  }
//  $(document).ready(function() {
//    $(window).bind('resize', set_body_height);
//    set_body_height();
//  });
 
//    $('.middle_img').each(function() {
//        var maxWidth = 100; // Max width for the image
//        var maxHeight = 100;    // Max height for the image
//        var ratio = 0;  // Used for aspect ratio
//        var width = $(this).width();    // Current image width
//        var height = $(this).height();  // Current image height
//
//        // Check if the current width is larger than the max
//        if(width > maxWidth){
//            ratio = maxWidth / width;   // get ratio for scaling image
//            $(this).css("width", maxWidth); // Set new width
//            $(this).css("height", height * ratio);  // Scale height based on ratio
//            height = height * ratio;    // Reset height to match scaled image
//            width = width * ratio;    // Reset width to match scaled image
//        }
//
//        // Check if current height is larger than max
//        if(height > maxHeight){
//            ratio = maxHeight / height; // get ratio for scaling image
//            $(this).css("height", maxHeight);   // Set new height
//            $(this).css("width", width * ratio);    // Scale width based on ratio
//            width = width * ratio;    // Reset width to match scaled image
//        }
//    });


// function set_body_height() {
//    alert();
//	//Define starting width and height values for the original image
//	var startwidth = 1280;  
//	var startheight = 960;
//	//Define image ratio
//	var ratio = startheight/startwidth;
//	//Gather browser dimensions
//	var browserwidth = $(window).width();
//	var browserheight = $(window).height();
//	//Resize image to proper ratio
//	if ((browserheight/browserwidth) > ratio) {
//	    $(this).height(browserheight);
//	    $(this).width(browserheight / ratio);
//		$('#grid').height(browserheight);
//		$('#grid').width(browserheight / ratio);
//	    $(this).children().height(browserheight);
//	    $(this).children().width(browserheight / ratio);
//	} else {
//	    $(this).width(browserwidth);
//	    $(this).height(browserwidth * ratio);
//		$('#grid').width(browserwidth);
//	    $('#grid').height(browserwidth * ratio);
//	    $(this).children().width(browserwidth);
//	    $(this).children().height(browserwidth * ratio);
//	}
//	//Make sure the image stays center in the window
//	$(this).children().css('left', (browserwidth - $(this).width())/2);
//	$(this).children().css('top', (browserheight - $(this).height())/2);
//}; 



var $winwidth = $(window).width();
console.log($winwidth);
		$(".middle_img").attr({
			width: $winwidth
		});
		$(window).bind("resize", function(){ 
			var $winwidth = $(window).width();
                        alert($winwidth);
			$(".middle_img").attr({
				width: $winwidth
			});
		 });
});
