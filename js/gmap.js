/**
 * Created by hdelacruz24 on 2/26/15.
 */


var map;

function initialize() {
    var mapOptions = {
        center: { lat: 40.835692, lng:-73.941929 },
        zoom: 10
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}


google.maps.event.addDomListener(window, 'load', initialize);

var clickNav = function(choice) {
    var story = document.getElementById('myPlaces');
    switch(choice) {
        case 0:
            var homePosition = {lat: 40.835692, lng: -73.941929};
            var marker = new google.maps.Marker({
                position: homePosition,
                map: map,
                title: "This is my home"
            });
            map.setCenter(homePosition);
            map.setZoom(16);
            story.innerHTML = "This has been my home for my whole 21 year life.";
            document.getElementById("myPicture").src = "images/my_house.jpeg";
            break;


        case 1:
            var arenaPosition = {
                lat: 40.750719, lng: -73.993450
            };
            var marker = new google.maps.Marker({
                position: arenaPosition,
                map: map,
                title: "Favorite arena"
            });
            map.setCenter(arenaPosition);
            map.setZoom(18);
            story.innerHTML = "The arena that I have gone countless times to watch the Knicks win or lose.";
            document.getElementById("myPicture").src = "images/knicks.jpg";
            break;

        case 2:
            var hometownPosition = {
                lat: 19.373542, lng: -70.350904
            };
            var marker = new google.maps.Marker({
                position: hometownPosition,
                map: map,
                title: "Every year I come to my parents' country"
            });
            map.setCenter(hometownPosition);
            map.setZoom(10);
            story.innerHTML = "The yearly vacation to my parents hometown where family and friends still are.";
            document.getElementById("myPicture").src = "images/home_country.jpg";
            break;

        case 3:
            var vacationPosition = {lat: 21.324708, lng: -157.925063};
            var marker = new google.maps.Marker({
                position: vacationPosition,
                map: map,
                title: "Favorite vacation place ever"
            });
            map.setCenter(vacationPosition);
            map.setZoom(13);
            story.innerHTML = "A one time vacation that was taken for my 18th birthday in which resulted in little to no sleep";
            document.getElementById("myPicture").src = "images/hawaii.jpg";
            break;
    }

};