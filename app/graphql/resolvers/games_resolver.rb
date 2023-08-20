# frozen_string_literal: true

module Resolvers
  class GamesResolver < BaseResolver
    type [Types::GameType], null: false

    def resolve
      Game.all
    end
  end
end
