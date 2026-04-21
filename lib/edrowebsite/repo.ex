defmodule Edrowebsite.Repo do
  use Ecto.Repo,
    otp_app: :edrowebsite,
    adapter: Ecto.Adapters.Postgres
end
