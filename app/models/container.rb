class Container < ApplicationRecord
  has_many :items, inverse_of: :container
  belongs_to :location, inverse_of: :containers

  validates :title, presence: true, uniqueness: { scope: :location, case_sensitive: false }
  validates :location, presence: true
end
