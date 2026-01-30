class CreateCaseStudies < ActiveRecord::Migration[8.0]
  def change
    create_table :case_studies do |t|
      t.references :project, null: false, foreign_key: true
      t.text :context
      t.text :problem
      t.text :approach
      t.text :decisions
      t.text :implementation
      t.text :results
      t.text :metrics
      t.text :next_steps

      t.timestamps
    end
  end
end
