class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :devise_paths

  private

    def devise_paths
      @devise_paths ||= {
        new_user_session_path: new_user_session_path,
        new_user_registration_path: new_user_registration_path
      }

      if user_signed_in?
        @devise_paths.merge!({
          after_sign_in_path: after_sign_in_path_for(current_user),
          after_sign_out_path: after_sign_out_path_for(current_user),
          destroy_user_session_path: destroy_user_session_path
        })
      end
    end

    def flash_to_headers
      return unless request.xhr?
      response.headers['X-Message'] = flash_message
      response.headers["X-Message-Type"] = flash_type.to_s

      flash.discard # don't want the flash to appear when you reload page
    end

    def flash_message
      [:error, :warning, :notice].each do |type|
        return flash[type] unless flash[type].blank?
      end
    end

    def flash_type
      [:error, :warning, :notice].each do |type|
        return type unless flash[type].blank?
      end
    end
end
