class Api::ChannelsController < ApplicationController

  def index
    #eventually...fetch all channels that belong to current user
    @channels = current_user.channels
    render :index
  end

  def create
    @channel = Channel.new(channels_params)
    @channel.user_id = current_user.id


    #add author to channel automatically? create a channel_membership

    if @channel.save
      #channel_membership is created with current_user
      current_user.channels << @channel
      render :show
    else
      render json: ["channel not created!"], status: 422
    end
  end

  def show
    @channel = Channel.find(params[:id])
    render :show
  end

  private

  def channels_params
    params.require(:channels).permit(:title, :description)
  end
end
