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

    def resolve(**args)
      if args.any?
        Game.where(**args)
      else
        Game.all
      end
    end
  end
end
