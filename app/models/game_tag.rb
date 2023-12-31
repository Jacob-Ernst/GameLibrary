# frozen_string_literal: true

# Represents the relationship between a {Game} and a {Tag}.
class GameTag < ApplicationRecord
  # @internal Constants =====================================================

  # @internal Attributes ====================================================

  # @internal Extensions ====================================================

  # @internal Relationships =================================================
  belongs_to :game
  belongs_to :tag

  # @internal Validations ===================================================

  # @internal Scopes ========================================================

  # @internal Callbacks =====================================================

  # @internal Class Methods =================================================

  # @internal Instance Methods ==============================================
end
