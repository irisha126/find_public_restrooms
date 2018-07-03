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
//= require axios/dist/axios.min.js
//= require rails-ujs
//= require_tree .
//




//window.onload = function(function() {
//    // Construct the query string
//    url = 'https://data.cityofnewyork.us/resource/r27e-u3sy.json';
//    
//    // Intialize our map
//    var center = new google.maps.LatLng(41.7656874,-72.680087);
//    var mapOptions = {
//      zoom: 8,
//      center: center
//    }
//    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//    
//    // Retrieve our data and plot it
//    $.getJSON(url, function(data, textstatus) {
//          $.each(data, function(i, entry) {
//              var marker = new google.maps.Marker({
//                  position: new google.maps.LatLng(entry.location_1.coordinates[1], 
//                                                   entry.location_1.coordinates[0]),
//                  map: map,
//                  title: location.name
//              });
//          });
//    });
//});
//


//function getMarker() {
//    axios.get('https://data.cityofnewyork.us/resource/r27e-u3sy.json')
//        .then(function (myResponse) {
//            let locationsArr = [];
//            let locationsApi = myResponse.data.location;
//            for (let i = 0; i < locationsApi.length; i++) {
//                locationsArr.push(locationsApi[i].location);
//            }
            // Ruby Excon gem, HTTParty gem

        });
    
    
