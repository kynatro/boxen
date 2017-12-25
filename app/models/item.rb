class Item < ApplicationRecord
  belongs_to :container, inverse_of: :items

  validates :title, presence: true
  validates :quantity, presence: true, numericality: { only_integer: true }
  validates :container, presence: true, uniqueness: { scope: :container, case_sensitive: false }
end
