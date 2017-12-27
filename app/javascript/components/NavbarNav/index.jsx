import { connect } from 'react-redux'
import classNames from 'classnames'

import uniqid from '../../helpers/uniqid'

import NavItem from '../NavItem'

const mapStateToProps = (state, ownProps) => {
  const { items, ...restProps } = ownProps

  return {
    items: items.map(item => {
      if (item.props) {
        return React.cloneElement(item, {
          key: uniqid()
        })
      } else {
        return item
      }
    }),
    ...restProps
  }
}

class NavbarNav extends Component {
  render() {
    const { leftSpacing, items, rightSpacing } = this.props

    return (
      <ul className={classNames('navbar-nav', {
        [`mr-${rightSpacing}`]: rightSpacing,
        [`mr-${leftSpacing}`]: leftSpacing
      })}>
        {items && items.map(item => {
          // Naive check to see if this is an element or an object
          if (item.props) {
            return item
          } else {
            return <NavItem key={item.path} {...item} />
          }
        })}
      </ul>
    )
  }
}

NavbarNav.propTypes = {
  leftSpacing: PropTypes.oneOf(['auto', '0', '1', '2', '3', '4', '5']),
  items: PropTypes.array.isRequired,
  rightSpacing: PropTypes.oneOf(['auto', '0', '1', '2', '3', '4', '5'])
}

export default connect(mapStateToProps)(NavbarNav)
