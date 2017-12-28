import Table from '../../Table'
import AdminLocationResource from '../../../resources/AdminLocation'

import UserAvatar from '../../UserAvatar'

class LocationsTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: ["Title", "Address", "User"],
      rows: []
    }
  }

  componentWillMount() {
    AdminLocationResource.get()
      .then((response) => {
        this.setState({
          rows: response.data.data.map(row => {
            const { title, address } = row.attributes
            const { type: userType, id: userId } = row.relationships.user.data
            const user = response.data.included.find(item => item.type === userType && item.id === userId)

            return [
              title,
              address,
              <UserAvatar user={user.attributes} />
            ]
          })
        })
      })
  }

  render() {
    const { columns, rows } = this.state

    return (
      <Table headTheme="dark" {...{columns, rows}} />
    )
  }
}

export default LocationsTable
