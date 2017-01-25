class Api::ChannelMembershipsController < ApplicationController

  def create
    @channel = Channel.find(params[:channel_id].to_i)
    current_user.channels << @channel

    render :join_channel
  end

end
