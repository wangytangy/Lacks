class Api::UsersController < ApplicationController

  helper_method :current_user, :logged_in?

  def index
    @users = User.all.where.not(["id = ?", current_user.id])
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      if current_user
        current_user.channels << Channel.first
      else
        @user.channels << Channel.first
      end
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
