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
//= require jquery/dist/jquery
//= require bootstrap/dist/js/bootstrap.min
//= require rails-ujs
//= require axios/dist/axios
//= require toastr/build/toastr.min
//= require_tree .


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
// Initializing callback for rendering directions
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();
                    
// Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    directionsDisplay.setMap(map)
    map.setTilt(45);   
    
    
// Get user's location  
    let pos = {};
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
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
    
    
    let restrooms = document.querySelectorAll('.location');
    let myBathroom;
// Multiple Markers
    let markers=[];
    let infoWindowContent = [];
    let stats = [];
    
    for (let i = 0; i < restrooms.length; i++){
        myBathroom = restrooms[i];
        let coordinates = {
            lat: parseFloat(myBathroom.getAttribute('data-latitude')),
            lng: parseFloat(myBathroom.getAttribute('data-longitude')),
            name: myBathroom.getAttribute('data-name')
        }
        
        let info = {
            name: myBathroom.getAttribute('data-name'),
            location: myBathroom.getAttribute('data-location'),
            borough: myBathroom.getAttribute('data-borough'),
            open: myBathroom.getAttribute('data-open')
        }
        
        markers.push(coordinates); 
        infoWindowContent.push(coordinates.name);
        stats.push(info);
        
    };
        
// Display multiple markers on a map
    let infoWindow = new google.maps.InfoWindow(), marker, i;
    
 
    
// Loop through our array of markers & place each one on the map  
    for(let i = 0; i < markers.length; i++ ) {
        let position = new google.maps.LatLng(markers[i].lat, markers[i].lng);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i].name
        });
        iconFile = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'; 
marker.setIcon(iconFile);
        
// Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
//            console.log(infoWindowContent[i])
//            info.classList.toggle("show");
            let toiletName = document.querySelector('.bathroom_name');
            let toiletLocation = document.querySelector('.bathroom_location');
            let toiletBorough = document.querySelector('.bathroom_borough');
            let toiletOpen = document.querySelector('.bathroom_open');
            
            return function() {
//  Show stats for clicked marker
                toiletName.innerText = stats[i].name;
                toiletLocation.innerText = stats[i].location;
                toiletBorough.innerText = stats[i].borough;
                toiletOpen.innerText = stats[i].open;
                
  // Zoom when user is clicking on a marker              
                map.setZoom(13);
                map.setCenter(marker.getPosition());
                
                
   // Open info window for clicked marker            
               infoWindow.setContent(infoWindowContent[i]);
               infoWindow.open(map, marker);
                
// get directions to clicked marker
                calcRoute();
            }
        })(marker, i));
       

// Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

// Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    let boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });


function calcRoute() {
  var selectedMode = document.getElementById('mode').value;
  var request = {
      origin: pos,
      destination: marker.position,
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode]
  };
  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(response);
    }
  });
}
   
   }         // Ruby Excon gem, HTTParty gem

    
    
