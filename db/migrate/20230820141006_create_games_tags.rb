# frozen_string_literal: true

class CreateGamesTags < ActiveRecord::Migration[7.0]
  def change
    create_table :game_tags do |t|
      t.belongs_to(:game, foreign_key: true)
      t.belongs_to(:tag, foreign_key: true)
    end
  end
end
