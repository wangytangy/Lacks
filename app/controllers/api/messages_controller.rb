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

    if @message.save
      #publish an event
      #all componenets subscribed to that event can hear about it
      # debugger
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
    params.require(:messages).permit(:body, :author_id, :channel_id)
  end

end
