# frozen_string_literal: true

module Types
  class TagType < BaseObject
    implements GraphQL::Types::Relay::Node

    field :name, String, 'The name for this tag', null: false
  end
end
