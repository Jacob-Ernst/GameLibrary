# frozen_string_literal: true

class Game < ApplicationRecord
  # @internal Constants =====================================================

  # @internal Attributes ====================================================
  enum(
    platform: { ps5: 0, nintendo_switch: 1, pc: 2, wii_u: 3 }
  )

  # @internal Extensions ====================================================

  # @internal Relationships =================================================

  # @internal Validations ===================================================

  # @internal Scopes ========================================================

  # @internal Callbacks =====================================================

  # @internal Class Methods =================================================

  # @internal Instance Methods ==============================================
end
