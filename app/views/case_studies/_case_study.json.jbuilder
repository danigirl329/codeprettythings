json.extract! case_study, :id, :project_id, :context, :problem, :approach, :decisions, :implementation, :results, :metrics, :next_steps, :created_at, :updated_at
json.url case_study_url(case_study, format: :json)
