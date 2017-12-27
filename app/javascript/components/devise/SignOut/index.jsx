import { connect } from 'react-redux'
import axios from 'axios'

const mapStateToProps = (state, ownProps) => {
  return {
    after_sign_out_path: state.appMeta.devise_paths.after_sign_out_path,
    destroy_user_session_path: state.appMeta.devise_paths.destroy_user_session_path,
    ...ownProps
  }
}

class SignOut extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const { after_sign_out_path, destroy_user_session_path } = this.props

    event.preventDefault()

    axios.delete(destroy_user_session_path)
      .then(() => {
        window.location.replace(after_sign_out_path)
      })
  }

  render() {
    const { destroy_user_session_path, label } = this.props

    return (
      <a href={destroy_user_session_path} rel="nofollow" onClick={this.handleClick}>{label}</a>
    )
  }
}

SignOut.defaultProps = {
  label: "Sign Out"
}

SignOut.propTypes = {
  label: PropTypes.string
}

export default connect(mapStateToProps)(SignOut)
