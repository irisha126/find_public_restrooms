class Review < ApplicationRecord
  belongs_to :bathroom_location
  belongs_to :user
end
