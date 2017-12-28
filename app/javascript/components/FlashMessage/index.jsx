import { connect } from 'react-redux'
import classNames from 'classnames'

const mapStateToProps = (state, ownProps) => {
  return {
    flashType: state.flash.type,
    flashMessage: state.flash.message
  }
}

class FlashMessage extends Component {
  render() {
    const { flashMessage, flashType } = this.props

    if (flashMessage) {
      return (
        <div className={classNames('alert', {
          'alert-danger': flashType === 'error',
          'alert-warning': flashType === 'warning',
          'alert-info': flashType === 'notice'
        })} role="alert">{flashMessage}</div>
      )
    } else {
      return null
    }
  }
}

export default connect(mapStateToProps)(FlashMessage)
