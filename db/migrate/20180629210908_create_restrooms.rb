class CreateRestrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :restrooms do |t|
      t.string :borough
      t.string :location
      t.string :name
      t.time :open_time
      t.time :close_time

      t.timestamps
    end
  end
end
