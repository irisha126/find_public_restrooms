class DashboardController < ApplicationController
    def index
        response = Excon.get('https://data.cityofnewyork.us/resource/r27e-u3sy.json')
        @my_response = JSON.parse(response.body)
        @my_response.each do |my_response|
#            BathroomLocation.create(
#                borough: 'my_response['borough']',
#                location: 'my_response['location']',
#                name: 'my_response['name']',
#                open_year_round: 'my_response['open_year_round']'
#                
#                )
        end
#        results = Geocoder.search('my_response['location']')
#        @my_result= results.first.coordinates
        
    end
    
end
