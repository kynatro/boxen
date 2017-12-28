class SerializableLocation < JSONAPI::Serializable::Resource
  type 'locations'

  attributes :title, :address

  belongs_to :user
  has_many :containers
  has_many :items

  link :self do
    @url_helpers.location_path(@object.id)
  end

  link :json do
    @url_helpers.location_path(@object.id, format: :json)
  end
end
