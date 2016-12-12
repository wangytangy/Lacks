class Api::ChannelMembershipsController < ApplicationController

  def create
    @channel = Channel.find(params[:channel_id].to_i)

    #add current_user to @channel's users
    @channel.users << current_user
    @joined_channels = current_user.channels
    render :joined_channels
  end
  
end
