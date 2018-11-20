


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
    
    task populate_db_bathroom_locations: :environment do
        
        CSV.foreach("./bathroom_locations.csv") do |data_row|
            
            unless data_row[0] == 'id'
                next if BathroomLocation.exists?(location: data_row[2])
              BathroomLocation.create(
                    borough: data_row[1],
                    location: data_row[2],
                    name: data_row[3],
                    open_year_round: data_row[4],
                    created_at: data_row[5],
                    updated_at: data_row[6],
                    latitude: data_row[7],
                    longitude: data_row[8]
    
                )
            end
        end
            
    end
        
end
        
            
