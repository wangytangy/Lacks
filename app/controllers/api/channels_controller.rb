class Api::ChannelsController < ApplicationController

  def index
    #eventually...fetch all channels that belong to current user
    # @channels = current_user.channels
    @channels = Channel.all.where({ direct_message_status: false })
    #index action, don't send all channels
    #have custom search method
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

  def create_dm
    @channel = Channel.new(channels_params)
    @channel.direct_message_status = true
    @channel.user_id = current_user.id

    if @channel.save
      #join all the members
      params[:channels][:friends].each do |username|
        user = User.find_by(username: username)
        user.channels << @channel
      end
      render :show
    else
      render json: ["direct message channel not created!"], status: 422
    end

  end

  def get_direct_messages
    @direct_messages = current_user.channels.where({ direct_message_status: true })
    render :dm_index
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

  def leave_channel
    @channel = Channel.find(params[:id].to_i)
    current_user.channels.delete(@channel)
    @remaining_channels = current_user.channels
    render :remaining_channels
  end

  private

  def channels_params
    params.require(:channels).permit(
      :title,
      :description,
      :direct_message_status
    )
  end
end
