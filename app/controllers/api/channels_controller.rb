class Api::ChannelsController < ApplicationController

  def index
    #eventually...fetch all channels that belong to current user
    # @channels = current_user.channels
    @channels = Channel.all
    render :index
  end

  def create
    @channel = Channel.new(channels_params)
    @channel.user_id = current_user.id

    if @channel.save
      #channel_membership is created with current_user
      #research this:
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

  def destroy
    @channel = Channel.find(params[:id])
    if @channel
      #needs dependent destroy for channel_memberships
      @channel.destroy
      render :show
    else
      render json: ["channel not destroyed"], status: 404
    end
  end

  private

  def channels_params
    params.require(:channels).permit(:title, :description)
  end
end
