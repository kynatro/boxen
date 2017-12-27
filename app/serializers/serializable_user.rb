class SerializableUser < JSONAPI::Serializable::Resource
  type 'users'

  attributes :email, :full_name, :admin

  has_many :locations
  has_many :containers
  has_many :items
end
