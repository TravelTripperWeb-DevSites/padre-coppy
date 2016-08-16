//Header 
$(window).on('load scroll resize', function () {
 
 	var mheight = $(window).height();
	var mscroll = $(window).scrollTop();
	var mwidth = $(window).width();
	
	
	if(mscroll > 50){
		$(".nav-normal-scroll").addClass("-show");
		$(".banner-onscroll").addClass("-banner-onscroll-padding");
		
	}
	else{
		$(".nav-normal-scroll").removeClass("-show");
		$(".banner-onscroll").removeClass("-banner-onscroll-padding");
	}
	

	
	
	
	});
//Header 

//Responsive menu
$(document).ready(function() {
		$(".menu-icon-holder").click(function(){
			$(".header-nav-bar").slideToggle(300);
		});
	});