//Header 
$(window).on('load scroll resize', function () {
 
 	var mheight = $(window).height();
	var mscroll = $(window).scrollTop();
	var mwidth = $(window).width();
	
	
	if(mscroll > 50){
		$(".header-wrapper").addClass("showmenu");
		$(".banner-onscroll").addClass("-banner-onscroll-padding");
		
	}
	else{
		$(".header-wrapper").removeClass("showmenu");
		$(".banner-onscroll").removeClass("-banner-onscroll-padding");
	}
	

	
	
	
	});
//Header 

//Responsive menu
$(document).ready(function() {
    $(".events-list-loc").owlCarousel({

     autoPlay: false, //Set AutoPlay to 3 seconds
     navigation: true,
     items: 3,
      itemsDesktop: [1199,3],
      itemsDesktopSmall: [979,3],
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
 });
		$(".menu-icon-holder").click(function(){
			$(".header-nav-bar").slideToggle(300);
		});
	});
	
//back to top
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

 //Date Picker

//$(".main-date").datepicker({
//            dateFormat: "yy-mm-dd",
//			altField  : '#arrival_date',
//			altFormat : 'yy-mm-dd',
//            minDate: 0,
//            onSelect: function (date) {
//                var date2 = $('#arrival_date').datepicker('getDate');
//                date2.setDate(date2.getDate() + 1);
//                $('#departure_date').datepicker('setDate', date2);
//                //sets minDate to dt1 date + 1
//                $('#departure_date').datepicker('option', 'minDate', date2);
//            }
//        });
//        $('#departure_date, .alternate-date, .alternate-date-1').datepicker({
//            dateFormat: "yy-mm-dd",
//			altField  : '#departure_dates',
//			altFormat : 'yy-mm-dd',
//            onClose: function () {
//                var dt1 = $('#v').datepicker('getDate');
//                console.log(dt1);
//                var dt2 = $('#departure_date').datepicker('getDate');
//                if (dt2 <= dt1) {
//                    var minDate = $('#departure_date').datepicker('option', 'minDate');
//                    $('#departure_date').datepicker('setDate', minDate);
//                }
//            }
//        });


}); 


  $('#Carousel').carousel({
    interval: 2600
});

$(window).load(function() {
        

    var hash = location.hash.replace('#',''); 
        if(hash != ''){  
        // smooth scroll to the anchor id
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top - 130 +"px"
        },500, 'swing'); 
       } 
        
});


