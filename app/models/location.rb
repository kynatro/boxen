class Location < ApplicationRecord
  belongs_to :user, inverse_of: :locations
  has_many :containers, inverse_of: :location
  has_many :items, through: :containers

  validates :title, presence: true, uniqueness: { scope: :user, case_sensitive: false }
end
