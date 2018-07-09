class AddColumnToBathroomLocations < ActiveRecord::Migration[5.2]
  def change
    add_reference :bathroom_locations, :user, foreign_key: true
  end
end
