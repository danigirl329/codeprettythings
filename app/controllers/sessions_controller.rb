class SessionsController < ApplicationController
  def new
  end

  def create
    credentials = params.expect(session: [ :email, :password ])
    user = User.find_by(email: credentials[:email].to_s.downcase)

    if user&.authenticate(credentials[:password])
      session[:user_id] = user.id
      redirect_to session.delete(:return_to) || root_path, notice: "Signed in successfully."
    else
      flash.now[:alert] = "Invalid email or password."
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to root_path, notice: "Signed out."
  end
end
