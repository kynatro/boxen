module ApplicationHelper
  def app_meta
    @app_meta ||= {
      title: "Boxen",
      devise_paths: @devise_paths
    }

    @app_meta[:admin] = true if current_user.admin?
    @app_meta[:current_user] = current_user.attributes.slice("id", "email", "full_name") if user_signed_in?

    content_tag(:script, "var AppMeta = #{@app_meta.to_json};".html_safe)
  end
end
