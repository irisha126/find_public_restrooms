class ReviewsController < ApplicationController
    def index
    end
    
    def new
        @review = Review.new
    end
    
    def create
        bathroom_location = Bathroom_location.find(params[:bathroom_location_id])
        new_review = bathroom_location.reviews.create(review_params.merge(user_id: current_user.id))  
        redirect_to dashboard_path
    end
    
    def show
    end
    
    def edit
    end
    
    def update
    end
    
    def destroy
    end
    
    
    private
    def review_params
        params(:review).permit(:comment)
    
end
