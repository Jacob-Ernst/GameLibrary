# frozen_string_literal: true

module Resolvers
  class GamesResolver < BaseResolver
    type Types::GameType.connection_type, null: false

    argument(
      :platform,
      Types::PlatformEnum,
      required: false,
      description: 'Filter games by platform'
    )

    def resolve(lookahead:, platform: nil)
      base_query = if platform
        Game.where(platform:)
      else
        Game.all
      end

      if lookahead.selection(:nodes).selects?(:tags)
        base_query.includes(:tags)
      else
        base_query
      end
    end
  end
end
