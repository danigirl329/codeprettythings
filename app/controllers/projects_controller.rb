class ProjectsController < ApplicationController
  before_action :require_login, except: %i[ index show ]
  before_action :set_project, only: %i[ show edit update destroy ]

  # GET /projects or /projects.json
  def index
    scope = Project.order(published_at: :desc, created_at: :desc)

    # only show published projects on the public page (optional but recommended)
    scope = scope.published

    @featured_projects = scope.featured.limit(3)
    @projects = scope
  end

  # GET /projects/1 or /projects/1.json
  def show
  end

  # GET /projects/new
  def new
    @project = Project.new
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects or /projects.json
  def create
    @project = Project.new(project_params)

    respond_to do |format|
      if @project.save
        format.html { redirect_to @project, notice: "Project was successfully created." }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projects/1 or /projects/1.json
  def update
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to @project, notice: "Project was successfully updated.", status: :see_other }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projects/1 or /projects/1.json
  def destroy
    @project.destroy!

    respond_to do |format|
      format.html { redirect_to projects_path, notice: "Project was successfully destroyed.", status: :see_other }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find_by!(slug: params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.expect(project: [ :title, :slug, :summary, :role, :client, :tech_stack, :results, :featured, :published_at ])
    end

    def set_slug
      return if title.blank?

      base = title.parameterize
      self.slug = base if slug.blank?

      # ensure uniqueness if slug collides
      if slug_changed?
        candidate = slug
        counter = 2
        while Project.where.not(id: id).exists?(slug: candidate)
          candidate = "#{slug}-#{counter}"
          counter += 1
        end
        self.slug = candidate
      end
    end
end
