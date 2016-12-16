class Api::UsersController < ApplicationController

  helper_method :current_user, :logged_in?

  PROFILE_PICS = [
    "http://pix.iemoji.com/images/emoji/apple/ios-9/256/grinning-face.png",
    "https://cdn-assets.insomniac.com/emoji_sexface.png",
    "http://pix.iemoji.com/images/emoji/apple/ios-9/256/flushed-face.png",
    "http://cdn.shopify.com/s/files/1/0185/5092/products/persons-0006.png?v=1369544093",
    "http://pix.iemoji.com/images/emoji/apple/ios-9/256/dog-face.png",
    "http://pix.iemoji.com/images/emoji/apple/ios-9/256/pouting-face.png",
    "http://cdn.playbuzz.com/cdn/ef15cfd0-01f0-466c-97b8-56adae1450bd/409312fb-e43e-42c9-a69c-7cdda7a76281.png",
    "http://pix.iemoji.com/images/emoji/apple/ios-9/256/sleeping-face.png",
    "http://pix.iemoji.com/images/emoji/apple/ios-9/256/smiling-face-with-smiling-eyes.png",
    "http://pix.iemoji.com/images/emoji/apple/ios-9/256/thumbs-up-sign.png"
  ]

  def index
    @users = User.all.where.not(["id = ?", current_user.id])
    render :index
  end

  def create
    @user = User.new(user_params)
    @user.profile_pic_url = PROFILE_PICS[rand(0...10)]

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
