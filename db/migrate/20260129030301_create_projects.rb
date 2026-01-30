class CreateProjects < ActiveRecord::Migration[8.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :slug
      t.text :summary
      t.string :role
      t.string :client
      t.text :tech_stack
      t.text :results
      t.boolean :featured
      t.datetime :published_at

      t.timestamps
    end
    add_index :projects, :slug
  end
end
