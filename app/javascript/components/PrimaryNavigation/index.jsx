import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import UserNavigation from '../UserNavigation'
import NavbarNav from '../NavbarNav'

const mapStateToProps = (state, ownProps) => {
  return {
    adminMode: state.adminMode,
    location: ownProps.location,
    title: state.appMeta.title
  }
}

class PrimaryNavigation extends Component {
  render() {
    const { adminMode, title } = this.props

    let navItems = []

    if (adminMode) {
      navItems.push({
        label: 'Administer',
        path: '/admin',
        items: [
          {
            label: 'Users',
            path: '/admin/users'
          },
          {
            label: 'Locations',
            path: '/admin/locations'
          }
        ]
      })
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light PrimaryNavigation">
        <Link to="/" className="navbar-brand">{title}</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarPrimaryNavigation" aria-controls="navbarPrimaryNavigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarPrimaryNavigation">
          <NavbarNav items={navItems} rightSpacing="auto" />
          <UserNavigation />
        </div>
      </nav>
    )
  }
}

export default withRouter(connect(mapStateToProps)(PrimaryNavigation))
