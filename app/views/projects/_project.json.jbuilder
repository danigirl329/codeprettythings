json.extract! project, :id, :title, :slug, :summary, :role, :client, :tech_stack, :results, :featured, :published_at, :created_at, :updated_at
json.url project_url(project, format: :json)
