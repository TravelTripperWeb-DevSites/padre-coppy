var proApp = angular.module('rezTrip');


proApp.controller('specialDetail', function($scope, $http,$filter){
	window.onhashchange = function() {
         window.location.reload();
      }

  /// $scope.items1 = [1,2,3,4,5];
  ///$scope.items2 = [1,2,3,4,5,6,7,8,9,10];
	$scope.reloadPage = function(){$window.location.reload();}
	   var _array = window.location.pathname.split("/");
     url = _array[_array.length-2];
     var hotelNameHash = window.location.search.substr(1);

//var filename = url.substring(url.lastIndexOf('/')+1);

     $scope.nameurl = $filter('formatNameForLink')(hotelNameHash);
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
             return $filter('formatNameForLink')(item.rate_plan_name) == $scope.nameurl;
            });
            $scope.specialOffer = offerdetail[0];
        }
      $scope.special();

});

proApp.controller('roomDetail', ['$scope', 'rt3Search', 'rt3Browser','$timeout','$filter', function($scope, rt3Search, rt3Browser,$timeout, $filter) {
    window.onhashchange = function() {
      window.location.reload();
    }
    $scope.reloadPage = function(){window.location.reload();}
    $timeout(function() {
       var roomsList = JSON.parse($("#roomList").val());
       var roomId = window.location.search.substr(1); //$("#roomId").val();
       var roomSizeSqm, tmpName;
       var roomSizeSqft;
       for(var j= 0 ; j < roomsList.length ; j++){
         rName = $filter('formatNameForLink')(roomId);
         tmpName = $filter('formatNameForLink')(roomsList[j].name);

           if(rName == tmpName ){
              // find room size for diff size units
              $scope.selectedRoom = roomsList[j];

              // find previous and next rooms name
              if(j > 0){
                 $scope.prevRoomName = roomsList[j-1].name;
              }

              if(j < roomsList.length -1){
                 $scope.nextRoomName = roomsList[j+1].name;
              }
              break;
           }
       }

    }, 1800);

}])
// add dash(-hyphen) function in url
proApp.filter('spaceDash', function() {
   return function(input) {
       return input ? input.replace(/ /g, '-') : '';
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
