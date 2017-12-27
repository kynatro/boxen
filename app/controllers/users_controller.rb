class UsersController < ApplicationController
  before_action :verify_admin!, only: [:index]

  def index
    render jsonapi: User.all,
      fields: {
        users: [:email, :full_name, :admin]
      },
      format: :json
  end
end
