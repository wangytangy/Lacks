class Api::ChannelsController < ApplicationController

  def index
    #eventually...fetch all channels that belong to current user
    # @channels = Channel.where(user_id: current_user.id)
    @channels = current_user.channels
    render :index
  end

  def create
    @channel = Channel.new(channels_params)
    @channel.user_id = current_user.id
    debugger

    #add author to channel automatically? create a channel_membership

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
    debugger
    params.require(:channels).permit(:title, :description)
  end
end
