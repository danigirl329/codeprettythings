class CaseStudy < ApplicationRecord
  belongs_to :project

  validates :project, presence: true
end
