class UsersController < ApplicationController
  def profile
    render jsonapi: current_user
  end
end
