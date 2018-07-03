class CreateBathroomLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :bathroom_locations do |t|
      t.string :borough
      t.text :location
      t.string :name
      t.string :open_year_round

      t.timestamps
    end
  end
end
