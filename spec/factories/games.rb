# frozen_string_literal: true

FactoryBot.define do
  factory :game do
    title { Faker::Game.title }
    platform { Game.platforms.keys.sample }
  end
end
