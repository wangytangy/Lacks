class Api::ChannelsController < ApplicationController

  def index
    #eventually...fetch all channels that belong to current user
    @channels = Channel.all
    render :index
  end

  def create
    @channel = Channel.new(channels_params)
    @channel.user_id = current_user.id

    if @channel.save
      render :show
    else
      render json: ["channel not created!"], status: 422
    end
  end

  def show
    @channel = Channel.find_by(params[:id])
    render :show
  end

  private

  def channels_params
    params.require(:channels).permit(:title, :description)
  end
end
