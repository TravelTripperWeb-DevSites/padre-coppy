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
}).filter('formatNameForLink', function () {
    return function (value) {
        var retString = String(value).toLowerCase();
        retString = retString.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); // replace leading and trailing spaces
        retString = retString.replace('%', 'percent');
        retString = retString.replace(/[^A-Z0-9]+/ig, "-");
        retString = retString.replace(/^--s*/, '').replace(/--*$/, ''); // replace leading and trailing hyphen
        return (!value) ? '' : retString;
    };
})
.filter('roomOrSuite', function () {
    return function (value) {
        var str = String(value).toLowerCase();
        var retStr;
        if(str.indexOf('suite') != -1){
            retStr = 'Suite';
        }else{
            retStr = 'Room';
        }
        return (!value) ? '' : retStr;
    };
});
