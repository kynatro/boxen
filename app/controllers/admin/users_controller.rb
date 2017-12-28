class Admin::UsersController < Admin::ApplicationController
  def index
    render jsonapi: User.all
  end

  def show
    user = User.find_by(id: params[:id])

    render jsonapi: user
  end
end
