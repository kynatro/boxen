import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import UserNavigation from '../UserNavigation'
import NavbarNav from '../NavbarNav'

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.appMeta.title,
    adminMode: state.adminMode,
    ...ownProps
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

export default connect(mapStateToProps)(PrimaryNavigation)
