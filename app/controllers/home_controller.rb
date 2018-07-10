class HomeController < ApplicationController
     def index
         @my_restrooms = BathroomLocation.all
        if user_signed_in?
           return redirect_to dashboard_path 
        end
    end
    
end
