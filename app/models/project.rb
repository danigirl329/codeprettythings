class Project < ApplicationRecord
  has_one :case_study, dependent: :destroy

  validates :title, presence: true
  validates :slug, presence: true, uniqueness: true

  scope :published, -> { where.not(published_at: nil).where("published_at <= ?", Time.current) }
  scope :featured,  -> { where(featured: true) }

  # Use slug in URLs
  def to_param
    slug
  end
end
