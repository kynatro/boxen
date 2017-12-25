import axios from 'axios'

const { AppMeta } = window

class SignOut extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { after_sign_out_path, destroy_user_session_path } = AppMeta.devise_paths

    axios.delete(destroy_user_session_path)
      .then(() => {
        window.location.replace(after_sign_out_path)
      })
  }

  render() {
    const { label } = this.props

    return (
      <a rel="nofollow" onClick={this.handleClick}>{label}</a>
    )
  }
}

SignOut.defaultProps = {
  label: "Sign Out"
}

SignOut.propTypes = {
  label: PropTypes.string
}

export default SignOut
