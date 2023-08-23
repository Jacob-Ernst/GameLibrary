# frozen_string_literal: true

# A sub-genre or common characteristic shared between certain {Game}s.
class Tag < ApplicationRecord
  # @internal Constants =====================================================

  # @internal Attributes ====================================================

  # @internal Extensions ====================================================

  # @internal Relationships =================================================
  has_many :game_tags, dependent: :destroy
  has_many :games, through: :game_tags

  # @internal Validations ===================================================
  validates :name, uniqueness: true, presence: true

  # @internal Scopes ========================================================

  # @internal Callbacks =====================================================

  # @internal Class Methods =================================================

  # @internal Instance Methods ==============================================
end
