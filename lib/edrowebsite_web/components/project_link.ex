defmodule EdrowebsiteWeb.Components.ProjectLinkComponent do
  use EdrowebsiteWeb, :html

  attr :href, :string, required: true
  attr :title, :string, required: true
  attr :award, :string, default: nil
  attr :tags, :list, default: []
  attr :description, :string, required: true

  def project_link(assigns) do
    ~H"""
    <a
      href={@href}
      target="_blank"
      rel="noopener noreferrer"
      class="cursor-pointer group/project flex items-center justify-between gap-6 w-full hover:bg-black/5 rounded-md px-2 py-2"
    >
      <div class="flex flex-col w-full">
        <div class="flex justify-between">
          <div class="flex gap-3 items-center">
            <h1 class="font-semibold text-gray-900 group-hover/project:underline">
              {@title}
            </h1>

            <%= if @award do %>
              <h1 class="font-semibold tracking-tight text-[#7FBF1F]">
                {@award}
              </h1>
            <% end %>
          </div>

          <div class="flex items-center gap-2">
            <%= for tag <- @tags do %>
              <span class="text-xs text-gray-600 border border-gray-400 rounded px-2 py-0.5 font-mono">
                {tag}
              </span>
            <% end %>
          </div>
        </div>

        <p class="text-[13px] text-[var(--muted)]">
          {@description}
        </p>
      </div>
    </a>
    """
  end
end
