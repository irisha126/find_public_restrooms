class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :comment
      t.integer :num_of_stars
      t.references :bathroom_location, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
