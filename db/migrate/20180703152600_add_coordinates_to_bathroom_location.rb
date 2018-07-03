class AddCoordinatesToBathroomLocation < ActiveRecord::Migration[5.2]
  def change
    add_column :bathroom_locations, :latitude, :float
    add_column :bathroom_locations, :longitude, :float
  end
end
