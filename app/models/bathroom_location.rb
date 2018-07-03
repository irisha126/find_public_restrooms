class BathroomLocation < ApplicationRecord
    
    geocoded_by :address_from_components
    after_validation :geocode
    
    private
    def address_from_components
        "#{location}, #{borough}"
    end
end
