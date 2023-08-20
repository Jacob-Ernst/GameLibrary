# frozen_string_literal: true

namespace :db do
  desc 'build fake data to be used for app development'
  task populate: :environment do
    tags = []
    tags.push FactoryBot.create(:tag, name: 'Roguelike')
    tags.push FactoryBot.create(:tag, name: 'Sci-fi')
    tags.push FactoryBot.create(:tag, name: 'Cozy')
    tags.push FactoryBot.create(:tag, name: 'Dark Fantasy')
    tags.push FactoryBot.create(:tag, name: 'Action')
    tags.push FactoryBot.create(:tag, name: 'Casual')
    10.times do
      FactoryBot.create(:game, tags: tags.sample(2))
    end
  end
end
