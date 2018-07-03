namespace :dummy do 

    task create_bathroom_locations: :environment do

        response = Excon.get('https://data.cityofnewyork.us/resource/r27e-u3sy.json')
        @my_response = JSON.parse(response.body)
        @my_response.each do |my_response|
            next if BathroomLocation.exists?(location: my_response['location'])
            BathroomLocation.create(
                borough: my_response['borough'],
                location: my_response['location'],
                name: my_response['name'],
                open_year_round: my_response['open_year_round']
            )
        end
    end
        
end
        
            
