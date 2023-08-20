# frozen_string_literal: true

class CreateGames < ActiveRecord::Migration[7.0]
  def change
    enable_extension('pg_trgm')
    create_table :games do |t|
      t.string :title, null: false, default: ''
      t.integer :platform

      t.timestamps
    end

    add_index :games, :title, using: 'gin', opclass: :gin_trgm_ops
  end
end
