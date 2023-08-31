# frozen_string_literal: true

class TagsController < ApplicationController
  # @note GET /tags/:id
  def show
    @id = params[:id]
  end
end
