# frozen_string_literal: true

module Types
  class GameType < BaseObject
    field :title, String, 'The title for this game', null: false
    field(
      :platform,
      PlatformEnum,
      'The platform this game is owned on'
    )
  end
end
