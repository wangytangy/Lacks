class Api::ChannelMembershipsController < ApplicationController

  def create
    @channel_membership = ChannelMembership.new(membership_params)
    @channel_membership.member_id = current_user.id

    if @channel_membership.save
      render :show
    else
      render json: errors: ["channel mem not created"], status: 422
    end
  end

  private

  def membership_params
    params.require(:channel_membership).permit(:channel_id, :member_id)
  end

end
