//Header 
$(window).on('load scroll resize', function () {
 
 	var mheight = $(window).height();
	var mscroll = $(window).scrollTop();
	var mwidth = $(window).width();
	
	
	if(mscroll > 50){
		$(".nav-normal-scroll").addClass("showmenu");
		$(".banner-onscroll").addClass("-banner-onscroll-padding");
		
	}
	else{
		$(".nav-normal-scroll").removeClass("showmenu");
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

