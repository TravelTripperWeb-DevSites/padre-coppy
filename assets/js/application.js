$(function() {
    var rt3 = new Rt3Api({
      portalId: 'natasha',
      hotelId: 'NCP',
      defaultLocale: 'en',
      defaultCurrency: 'USD'
    });
    
    var listHolder = $("#rooms-list");
    if (listHolder.length > 0) {
        rt3.getAllRooms().then(function(listHolder, results) {
            var rooms = results.rooms;
            for(var i=0; i<rooms.length; i++) {
                var room = rooms[i];
                var roomDiv = document.createElement("section");
                $(roomDiv).addClass("room");
                
                var roomPhoto = document.createElement("img");
                $(roomPhoto).attr('src', room.photos[0].thumb_jumbo);
                
                var roomTitle = document.createElement("h4");
                $(roomTitle).text(room.name);
                var roomDesc = document.createElement("p");
                $(roomDesc).text(room.description)
                $(roomDiv).append(roomTitle, roomPhoto, roomDesc)
                listHolder.append(roomDiv)
            }
        }.bind(this, listHolder))
    }
        
})