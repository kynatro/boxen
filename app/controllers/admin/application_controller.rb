class Admin::ApplicationController < ApplicationController
  before_action :verify_admin!

  private
    def verify_admin!
      redirect_to "/", flash: "You must be an administrator to access this content" if !current_user.admin?
    end
end
