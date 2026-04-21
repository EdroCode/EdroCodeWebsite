defmodule EdrowebsiteWeb.Components.Footer do
  use EdrowebsiteWeb, :html

  def footer(assigns) do
    ~H"""
    <footer class="border-t border-gray-300 hover:border-gray-500 transition-all duration-200">
      <div class="w-full mx-auto px-6 py-5 flex items-center justify-between">
        <span class="text-sm text-gray-700 font-mono">
          $ Built with Phoenix Liveview
        </span>
        <div class="flex gap-3">
          <a href="#" class="text-sm text-gray-400 hover:text-gray-700 transition-colors">
            GitHub
          </a>
          <a href="#" class="text-sm text-gray-400 hover:text-gray-700 transition-colors">
            Youtube
          </a>
          <a href="#" class="text-sm text-gray-400 hover:text-gray-700 transition-colors">
            Linkedin
          </a>
        </div>
      </div>
    </footer>
    """
  end
end
