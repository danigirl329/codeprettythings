# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2026_01_29_065700) do
  create_table "case_studies", force: :cascade do |t|
    t.integer "project_id", null: false
    t.text "context"
    t.text "problem"
    t.text "approach"
    t.text "decisions"
    t.text "implementation"
    t.text "results"
    t.text "metrics"
    t.text "next_steps"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_case_studies_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.string "slug"
    t.text "summary"
    t.string "role"
    t.string "client"
    t.text "tech_stack"
    t.text "results"
    t.boolean "featured"
    t.datetime "published_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_projects_on_slug"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "case_studies", "projects"
end
