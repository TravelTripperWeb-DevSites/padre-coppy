var proApp = angular.module('rezTrip');

 
proApp.controller('specialDetail', function($scope, $http){
	window.onhashchange = function() {
         window.location.reload();
      }   

  /// $scope.items1 = [1,2,3,4,5];
  ///$scope.items2 = [1,2,3,4,5,6,7,8,9,10];
	$scope.reloadPage = function(){$window.location.reload();}
	 var _array = window.location.pathname.split("/"); 
     url = _array[_array.length-2]; 
     $scope.nameurl = url.replace(/-/g, " ");  
	 $scope.special = function() {
           
            var urlspecialdetail = 'https://rt3api-prd.ttaws.com/hotels/special_rates.json?hotel_id=PADREH&portal_id=thepadrehotel&locale=en&currency=USD';
            $http.get(urlspecialdetail).success(httpSuccessoffer).error(function() {
                //alert('Unable to get back informations :( ');
            });
        }
        httpSuccessoffer = function(response) { 
            //$scope.offers = response.special_rates[0];
            $scope.offer = response; 
			var offerdetail = $scope.offer.special_rates.filter(function(item){
             //return item.name==newStrUrl; // example with id 1, or routeParams.id
             return item.rate_plan_name == $scope.nameurl;
            });
            $scope.specialOffer = offerdetail[0]; 
        } 
      $scope.special();
	
});
// add dash(-hyphen) function in url
proApp.filter('spaceDash', function() {
   return function(input) {
       return input.replace(/ /g, '-');
   }
   });
 proApp.filter('filterHtmlChars', function(){
   return function(html) {
       var filtered = angular.element('<div>').html(html).text(); 
       return filtered;
   }
});

proApp.filter('dateFrmt', function(){ 
	 return function(date) { 
	 console.log(date) ;
	  if(date =="null" || date ==""){
		  return date;
	  }else{ 
		 var d = new Date(date); 
		 var dd = d.getDate();
		 var mm = d.getMonth()+1;
		 var yy = d.getFullYear(); 
		 var newdate = mm+"-"+dd+"-"+yy;
       return newdate;
	  }
   }
});

proApp.directive("owlCarousel", function() {
	return {
		restrict: 'E',
		transclude: false,
		link: function (scope) {
			scope.initCarousel = function(element) {
			  // provide any default options you want
				var defaultOptions = {
				};
				var customOptions = scope.$eval($(element).attr('data-options'));
				// combine the two options objects
				for(var key in customOptions) {
					defaultOptions[key] = customOptions[key];
				}
				// init carousel
				$(element).owlCarousel(defaultOptions);
			};
		}
	};
});
proApp.directive('owlCarouselItem', [function() {
	return {
		restrict: 'A',
		transclude: false,
		link: function(scope, element) {
		  // wait for the last item in the ng-repeat then call init
			if(scope.$last) {
				scope.initCarousel(element.parent());
			}
		}
	};
}]);



 
 