class BathroomLocationsController < ApplicationController
    def index
        @bathroom_locations = BathroomLocation.all
    end
    
    def new
        @bathroom_location = BathroomLocation.new
    end
    
    def create
        new_bathroom_location = BathroomLocation.create(bathroom_location_params.merge(user_id: current_user.id))  
        redirect_to dashboard_path
    end
    
    def show
        @bathroom_location = BathroomLocation.find(params[:id])
    end
    
#    def edit
#        @bathroom_location = BathroomLocation.find(params[:id])
#    end
#    
#    def update
#        bathroom_location = BathroomLocation.find(params[:id])
#        bathroom_location.update(bathroom_location_params)
#        
#    end
#    
#    def destroy
#        
#    end
#    
    
    private
    def bathroom_location_params
        params.require(:bathroom_location).permit(:borough, :location, :name, :open_year_round)
    end
    
    
end
