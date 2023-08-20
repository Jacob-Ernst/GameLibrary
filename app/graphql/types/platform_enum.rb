# frozen_string_literal: true

module Types
  class PlatformEnum < BaseEnum
    Game.platforms.each_key do |platform|
      value(platform.upcase, value: platform)
    end
  end
end
