# frozen_string_literal: true

module Types
  class GameType < BaseObject
    implements GraphQL::Types::Relay::Node

    field :title, String, 'The title for this game', null: false
    field(
      :platform,
      PlatformEnum,
      'The platform this game is owned on'
    )
    field(:tags, TagType.connection_type, 'The tags associated to this game')
  end
end
