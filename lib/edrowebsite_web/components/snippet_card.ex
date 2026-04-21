defmodule EdrowebsiteWeb.Components.SnippetCard do
  use EdrowebsiteWeb, :html

  attr :title, :string, required: true
  attr :description, :string, required: true
  attr :code, :string, required: true
  attr :id, :string, required: true
  attr :tags, :list, default: []

  def snippet_card(assigns) do
    ~H"""
    <div class="border border-gray-200 rounded-sm overflow-hidden">
      <div class="p-5 bg-gray-50 border-b border-gray-200">
        <div class="flex justify-between items-start mb-2">
          <p class="text-zinc-900 font-mono text-lg">
            {@title}
          </p>

          <button
            onclick={"navigator.clipboard.writeText(document.getElementById('#{@id}').innerText)"}
            class="text-sm text-zinc-500 hover:text-black hover:font-bold cursor-pointer font-mono transition"
          >
            copy
          </button>
        </div>

        <p class="text-gray-600 text-sm mb-3">
          {@description}
        </p>

        <div class="flex gap-2 flex-wrap">
          <%= for tag <- @tags do %>
            <span class="text-xs font-mono text-zinc-500 border border-gray-200 px-2 py-0.5 rounded-sm">
              {tag}
            </span>
          <% end %>
        </div>
      </div>

      <pre id={@id} class="flex bg-white text-sm p-5 overflow-x-auto font-mono text-zinc-800">
        <code class=" p-2 whitespace-pre">
    {raw(@code)}
        </code>
      </pre>
    </div>
    """
  end
end
