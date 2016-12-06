class Api::UsersController < ApplicationController

  helper_method :current_user, :logged_in?

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: ["User not created"], status: 422
    end
  end

  private

  def user_params

    params.require(:user).permit(:username, :email, :password)
  end

end
