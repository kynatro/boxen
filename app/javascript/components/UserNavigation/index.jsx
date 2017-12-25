import SignOut from '../devise/SignOut'

class UserNavigation extends Component {
  render() {
    return (
      <ul className="navbar-nav">
        <li><SignOut /></li>
      </ul>
    )
  }
}

export default UserNavigation
