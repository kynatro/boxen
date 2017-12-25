import { connect } from 'react-redux'
import classNames from 'classnames'

const mapStateToProps = (state, ownProps) => {
  return {
    flashType: state.flash.type,
    flashMessage: state.flash.message,
    ...ownProps
  }
}

class FlashMessage extends Component {
  render() {
    const { message, type } = this.props

    if (message) {
      return (
        <div className={classNames('alert', {
          'alert-danger': type === 'error',
          'alert-warning': type === 'warning',
          'alert-info': type === 'notice'
        })} role="alert">{message}</div>
      )
    } else {
      return null
    }
  }
}

export default connect(mapStateToProps)(FlashMessage)
