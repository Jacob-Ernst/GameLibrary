# frozen_string_literal: true

namespace :db do
  desc 'build fake data to be used for app development'
  task populate: :environment do
    FactoryBot.create_list(:game, 5)
  end
end
