# frozen_string_literal: true

# Game in a user's video game library.
class Game < ApplicationRecord
  # @internal Constants =====================================================

  # @internal Attributes ====================================================
  enum(
    platform: { ps5: 0, nintendo_switch: 1, pc: 2, wii_u: 3 }
  )

  # @internal Extensions ====================================================

  # @internal Relationships =================================================
  has_many :game_tags, dependent: :destroy
  has_many :tags, through: :game_tags

  # @internal Validations ===================================================
  validates :title, :platform, presence: true

  # @internal Scopes ========================================================

  # @internal Callbacks =====================================================

  # @internal Class Methods =================================================

  # @internal Instance Methods ==============================================
end
