class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :locations, inverse_of: :user
  has_many :containers, through: :locations
  has_many :items, through: :containers

  validates :email, presence: true, uniqueness: true
  validates :admin, inclusion: { in: [true, false] }, exclusion: { in: [nil] }
end
