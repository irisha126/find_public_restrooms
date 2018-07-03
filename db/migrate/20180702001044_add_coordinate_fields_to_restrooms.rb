class AddCoordinateFieldsToRestrooms < ActiveRecord::Migration[5.2]
  def change
    add_column :restrooms, :latitude, :float
    add_column :restrooms, :longitude, :float
  end
end
