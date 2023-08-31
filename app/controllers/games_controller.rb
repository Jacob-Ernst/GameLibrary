# frozen_string_literal: true

class GamesController < ApplicationController
  # @note GET /
  def index; end

  # @note GET /games/:id
  def show
    @id = params[:id]
  end
end
