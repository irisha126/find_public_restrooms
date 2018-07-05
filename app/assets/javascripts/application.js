// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery/dist/jquery
//= require bootstrap/dist/js/bootstrap
//= require axios/dist/axios
//= require toastr/build/toastr.min.js
//= require_tree .


//    let restrooms = document.querySelectorAll('.location');
////    let myBathroom;
////    let longitude;
////    let latitude;    
////  for (let i = 0; i < restrooms.length; i++){
//    let myBathroom = restrooms[0];
//    let latitude = myBathroom.getAttribute('data-latitude');
//    let longitude = myBathroom.getAttribute('data-longitude');
////    }
//         
//function initMap() {     
//  var myLatLng = {lat: parseFloat(latitude), lng: parseFloat(longitude)};
//
//  var map = new google.maps.Map(document.getElementById('map'), {
//    zoom: 12,
//    center: myLatLng
//  });
//
//  var marker = new google.maps.Marker({
//    position: myLatLng,
//    map: map,
//    title: 'Hello World!'
//  });
//}

       
jQuery(function($) {
    // Asynchronously Load the map API 
    let script = document.createElement('script');
    script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyC_V2YhbRlxzD25WtJbAJo3oMyDCkpJqHk&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    let map;
    let bounds = new google.maps.LatLngBounds();
    let mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
//    var markers = [
////        ['London Eye, London', 51.503454,-0.119562],
////        ['Palace of Westminster, London', 51.499633,-0.124755]
//    ];
    
    let restrooms = document.querySelectorAll('.location');
    let myBathroom;
    let markers=[];
    let infoWindowContent = [];
    
    for (let i = 0; i < restrooms.length; i++){
        myBathroom = restrooms[i];
        let coordinates = {
        lat: parseFloat(myBathroom.getAttribute('data-latitude')),
        lng: parseFloat(myBathroom.getAttribute('data-longitude')),
        name: myBathroom.getAttribute('data-name')
        }
        
        markers.push(coordinates); 
        infoWindowContent.push(coordinates.name);
    };
                        
    // Info Window Content
//    let infoWindowContent = [
//        ['<div class="info_content">' +
//        '<h3>London Eye</h3>' +
//        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
//        ['<div class="info_content">' +
//        '<h3>Palace of Westminster</h3>' +
//        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
//        '</div>']
//    ];
        
    // Display multiple markers on a map
    let infoWindow = new google.maps.InfoWindow(), marker, i;
    
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
    

    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        let position = new google.maps.LatLng(markers[i].lat, markers[i].lng);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i].name
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
}
   
            // Ruby Excon gem, HTTParty gem

    
    
