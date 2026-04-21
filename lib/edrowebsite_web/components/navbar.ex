defmodule EdrowebsiteWeb.Components.Navbar do
  use EdrowebsiteWeb, :html

  def navbar(assigns) do
    ~H"""
    <nav class="flex items-center justify-between px-8 py-4 border-b border-gray-800">
      <a
        href="/"
        class="font-semibold text-zinc-700 tracking-wide font-sans tracking-tight hover:font-bold hover:text-black"
      >
        ~/edro
      </a>
      <ul class="flex gap-8">
        <li>
          <.link
            navigate={~p"/"}
            class="hover:text-zinc-900 hover:font-semibold text-zinc-600 transition"
          >
            Home
          </.link>
        </li>
        <li>
          <.link
            navigate={~p"/projects"}
            class="hover:text-zinc-900 hover:font-semibold text-zinc-600 transition"
          >
            Projects
          </.link>
        </li>
        <li>
          <.link
            navigate={~p"/archive"}
            class="hover:text-zinc-900 hover:font-semibold text-zinc-600 transition"
          >
            Code Archive
          </.link>
        </li>
        <li>
          <.link
            navigate={~p"/tutorials"}
            class="hover:text-zinc-900 hover:font-semibold text-zinc-600 transition"
          >
            Tutorials
          </.link>
        </li>
        <li>
          <.link
            navigate={~p"/about"}
            class="hover:text-zinc-900 hover:font-semibold text-zinc-600 transition"
          >
            About
          </.link>
        </li>
      </ul>
    </nav>
    """
  end
end
