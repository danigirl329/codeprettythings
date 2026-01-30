require "application_system_test_case"

class ProjectsTest < ApplicationSystemTestCase
  setup do
    @project = projects(:one)
    @admin = users(:admin)
  end

  test "visiting the index" do
    visit projects_url
    assert_selector "h1", text: "Projects"
  end

  test "should create project" do
    sign_in_as(@admin)
    visit projects_url
    click_on "New project"

    fill_in "Client", with: @project.client
    check "Featured" if @project.featured
    fill_in "Published at", with: @project.published_at
    fill_in "Results", with: @project.results
    fill_in "Role", with: @project.role
    fill_in "Slug", with: "#{@project.slug}-new"
    fill_in "Summary", with: @project.summary
    fill_in "Tech stack", with: @project.tech_stack
    fill_in "Title", with: @project.title
    click_on "Create Project"

    assert_text "Project was successfully created"
    click_on "Back"
  end

  test "should update Project" do
    sign_in_as(@admin)
    visit project_url(@project)
    click_on "Edit this project", match: :first

    fill_in "Client", with: @project.client
    check "Featured" if @project.featured
    fill_in "Published at", with: @project.published_at.to_s
    fill_in "Results", with: @project.results
    fill_in "Role", with: @project.role
    fill_in "Slug", with: @project.slug
    fill_in "Summary", with: @project.summary
    fill_in "Tech stack", with: @project.tech_stack
    fill_in "Title", with: @project.title
    click_on "Update Project"

    assert_text "Project was successfully updated"
    click_on "Back"
  end

  test "should destroy Project" do
    sign_in_as(@admin)
    visit project_url(@project)
    accept_confirm { click_on "Destroy this project", match: :first }

    assert_text "Project was successfully destroyed"
  end
end
