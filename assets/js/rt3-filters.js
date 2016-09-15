angular.module('rezTrip')
  .filter('isArray', [function() {
    return function(input) {
      return angular.isArray(input);
    };
  }])
.filter('formatpolicydescription', function() {
    return function(text) {
      return  text ? String(text).replace('["', '<p>').replace('"]', '</p>').replace(',',' ') : '';
    }
  }
)
.filter('filterHtmlChars', function(){
   return function(html) {
       var filtered = angular.element('<div>').html(html).text(); 
       return filtered;
   }
})
.filter('ampersand', function(){
    return function(input){
        return input ? input.replace(/&amp;/, '&') : '';
    }
});
