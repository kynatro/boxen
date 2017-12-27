import { connect } from 'react-redux'

import SignOut from '../devise/SignOut'
import NavbarNav from '../NavbarNav'
import UserAvatar from '../UserAvatar'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    ...ownProps
  }
}

class UserNavigation extends Component {
  render() {
    const { currentUser } = this.props

    let navItems = [
      {
        label: <UserAvatar user={currentUser} />,
        path: '/profile',
        items: [
          {
            label: 'Edit Profile',
            path: '/profile/edit'
          },
          <SignOut />
        ]
      }
    ]

    return (
      <NavbarNav items={navItems} />
    )
  }
}

export default connect(mapStateToProps)(UserNavigation)
