class LocationsController < ApplicationController
  def index
    render jsonapi: current_user.locations
  end

  def show
    location = current_user.locations.find_by(id: params[:id])

    if location
      render jsonapi: location
    else
      render jsonapi_errors: location.errors
    end
  end
end
