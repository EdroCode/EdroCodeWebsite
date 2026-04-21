defmodule EdrowebsiteWeb.Components.Navcard do
  use EdrowebsiteWeb, :html

  attr :title, :string, default: "Title", doc: "Title of navcard"
  attr :description, :string, default: "Description", doc: "Description of navcard"
  attr :path, :string, required: true

  def navcard(assigns) do
    ~H"""
    <a
      href={@path}
      class="group/navcard border border-gray-300 rounded-sm p-6 hover:border-gray-500 hover:shadow-sm transition-all group"
    >
      <div class="flex items-center justify-between mb-3">
        <span class="font-semibold text-gray-900">{@title}</span>
        <span class="hero-chevron-right text-gray-400 group-hover/navcard:text-gray-800 group-hover:translate-x-0.5 transition-transform">
        </span>
      </div>
      <p class="text-sm text-gray-400 leading-snug">{@description}</p>
    </a>
    """
  end
end
