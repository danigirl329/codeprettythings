module ProjectsHelper

  def tech_stack_list(project)
    raw = project.tech_stack.to_s
    raw.split(/,|\n/).map(&:strip).reject(&:blank?).uniq
  end

end
