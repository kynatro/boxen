import md5 from 'blueimp-md5'

import './styles.scss'

class UserAvatar extends Component {
  render() {
    const { size, user } = this.props
    const { email, full_name } = user
    const url = `https://www.gravatar.com/avatar/${md5(email)}.jpg?s=${size}`

    return (
      <span className="UserAvatar" style={{width: `${size}px`}}>
        <img className="avatar-image rounded-circle" src={url} alt={full_name} />
      </span>
    )
  }
}

UserAvatar.defaultProps = {
  size: 32
}

UserAvatar.propTypes = {
  size: PropTypes.number
}

export default UserAvatar
