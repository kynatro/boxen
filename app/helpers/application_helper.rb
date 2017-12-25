module ApplicationHelper
  def app_meta
    @app_meta ||= {
      title: "Boxen",
      devise_paths: @devise_paths
    }

    content_tag(:script, "var AppMeta = #{@app_meta.to_json};".html_safe)
  end
end
