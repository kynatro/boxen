import Table from '../../Table'
import AdminUserResource from '../../../resources/AdminUser'

class UsersTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: ["Email", "Full Name", "Admin?"],
      rows: []
    }
  }

  componentWillMount() {
    AdminUserResource.get()
      .then((response) => {
        this.setState({
          rows: response.data.data.map(row => {
            const { email, full_name, admin } = row.attributes

            return [
              email,
              full_name || <em>Unspecified</em>,
              admin ? 'No' : 'Yes'
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

export default UsersTable
