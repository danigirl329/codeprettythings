require "application_system_test_case"

class CaseStudiesTest < ApplicationSystemTestCase
  setup do
    @case_study = case_studies(:one)
  end

  test "visiting the index" do
    visit case_studies_url
    assert_selector "h1", text: "Case studies"
  end

  test "should create case study" do
    visit case_studies_url
    click_on "New case study"

    fill_in "Approach", with: @case_study.approach
    fill_in "Context", with: @case_study.context
    fill_in "Decisions", with: @case_study.decisions
    fill_in "Implementation", with: @case_study.implementation
    fill_in "Metrics", with: @case_study.metrics
    fill_in "Next steps", with: @case_study.next_steps
    fill_in "Problem", with: @case_study.problem
    fill_in "Project", with: @case_study.project_id
    fill_in "Results", with: @case_study.results
    click_on "Create Case study"

    assert_text "Case study was successfully created"
    click_on "Back"
  end

  test "should update Case study" do
    visit case_study_url(@case_study)
    click_on "Edit this case study", match: :first

    fill_in "Approach", with: @case_study.approach
    fill_in "Context", with: @case_study.context
    fill_in "Decisions", with: @case_study.decisions
    fill_in "Implementation", with: @case_study.implementation
    fill_in "Metrics", with: @case_study.metrics
    fill_in "Next steps", with: @case_study.next_steps
    fill_in "Problem", with: @case_study.problem
    fill_in "Project", with: @case_study.project_id
    fill_in "Results", with: @case_study.results
    click_on "Update Case study"

    assert_text "Case study was successfully updated"
    click_on "Back"
  end

  test "should destroy Case study" do
    visit case_study_url(@case_study)
    accept_confirm { click_on "Destroy this case study", match: :first }

    assert_text "Case study was successfully destroyed"
  end
end
