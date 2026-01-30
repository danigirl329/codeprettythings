require "test_helper"

class CaseStudiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @case_study = case_studies(:one)
    @admin = users(:admin)
    sign_in_as(@admin)
  end

  test "should get index" do
    get case_studies_url
    assert_response :success
  end

  test "should get new" do
    get new_case_study_url
    assert_response :success
  end

  test "should create case_study" do
    assert_difference("CaseStudy.count") do
      post case_studies_url, params: { case_study: { approach: @case_study.approach, context: @case_study.context, decisions: @case_study.decisions, implementation: @case_study.implementation, metrics: @case_study.metrics, next_steps: @case_study.next_steps, problem: @case_study.problem, project_id: @case_study.project_id, results: @case_study.results } }
    end

    assert_redirected_to case_study_url(CaseStudy.last)
  end

  test "should show case_study" do
    get case_study_url(@case_study)
    assert_response :success
  end

  test "should get edit" do
    get edit_case_study_url(@case_study)
    assert_response :success
  end

  test "should update case_study" do
    patch case_study_url(@case_study), params: { case_study: { approach: @case_study.approach, context: @case_study.context, decisions: @case_study.decisions, implementation: @case_study.implementation, metrics: @case_study.metrics, next_steps: @case_study.next_steps, problem: @case_study.problem, project_id: @case_study.project_id, results: @case_study.results } }
    assert_redirected_to case_study_url(@case_study)
  end

  test "should destroy case_study" do
    assert_difference("CaseStudy.count", -1) do
      delete case_study_url(@case_study)
    end

    assert_redirected_to case_studies_url
  end
end
