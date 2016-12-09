class Api::MessagesController < ApplicationController

  def index
    #get all messages belonging to a channel/DM
    @messages = Message.all
  end

  def create
    @message = Message.new(message_params)

    if @message.save
      #
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
      :messageable_id,
      :messageable_type
    )
  end

end
