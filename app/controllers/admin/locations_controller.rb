class Admin::LocationsController < Admin::ApplicationController
  def index
    render jsonapi: Location.all, include: [:user]
  end

  def show
    location = Location.find_by(id: params[:id])

    if location
      render jsonapi: location, relationship: :user, include: [:user]
    else
      render jsonapi_errors: location.errors
    end
  end
end
