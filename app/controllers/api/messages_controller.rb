class Api::MessagesController < ApplicationController

  def index
    #get all messages belonging to a channel/DM
    @channel = Channel.find(params[:channel_id])
    @messages = @channel.messages
    render :index

  end

  def create

    @message = Message.new(message_params)
    @message.author_id = current_user.id
    @message.channel_id = params[:channel_id]
    @channel = Channel.find(params[:channel_id])


    if @message.save
      # if channel is a DM
      if @channel.direct_message_status
        # on message create, re-subscribe users to the DM
        # iterate over channel tile, split on ',' to get usernames
        all_usernames = @channel.title.split(',')
        all_usernames.each do |username|
          user = User.find_by(username: username)
          user.channels << @channel unless user.channels.include?(@channel)
        end
      end

      #publish an event
      #all componenets subscribed to that event can hear about it
      Pusher.trigger('channel', 'message_published', @message)
      render :show
    else
      render json: ["message could not be created"], status: 422
    end
  end

  def show
    @message = Message.find(params[:id])
  end

  def update
    #
  end

  def destroy
    @message = Message.find(params[:id])
    if @message
      @message.destroy
    else
      render json: ["message not destroyed"], status: 404
    end
  end

  private

  def message_params
    params.require(:messages).permit(
      :body,
      :author_id,
      :channel_id,
      :image,
      :giphy_url
    )
  end

end
