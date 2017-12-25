import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames'

import UserNavigation from '../UserNavigation'

const { AppMeta } = window

class PrimaryNavigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: [
        {
          label: 'Home',
          path: '/'
        }
      ]
    }
  }

  render() {
    const { navItems } = this.state

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light PrimaryNavigation">
        <Link to="/" className="navbar-brand">{AppMeta.title}</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarPrimaryNavigation" aria-controls="navbarPrimaryNavigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarPrimaryNavigation">
          <ul className="navbar-nav mr-auto">
            {navItems.map(({ path, label }, i) => (
              <li key={path} className={classNames('nav-item')}>
                <NavLink to={path} exact>{label}</NavLink>
              </li>
            ))}
          </ul>
          <UserNavigation />
        </div>
      </nav>
    )
  }
}

export default PrimaryNavigation
