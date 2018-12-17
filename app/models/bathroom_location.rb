class BathroomLocation < ApplicationRecord
#  commented out because we don't need it no more after we got data from API and pushed it into database, then saved to .csv file and  created a new task to populate  it before deployment
    belongs_to :user
    has_many :reviews
    
    geocoded_by :address_from_components
    after_validation :geocode
     
    
    private
    def address_from_components
    	# puts '::::::::::::  geocode :::::::::::'
        "#{location}, #{borough}"
    end
end
