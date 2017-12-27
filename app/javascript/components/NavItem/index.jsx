import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

class NavItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  handleOutsideClick(event) {
    document.removeEventListener('click', this.handleOutsideClick)

    this.setState({
      show: false
    })
  }

  handleClick(event) {
    const { items } = this.props
    const { show } = this.state

    if (items) {
      event.preventDefault()

      this.setState({
        show: !show
      }, () => {
        if (this.state.show) {
          document.addEventListener('click', this.handleOutsideClick)
        }
      })
    }
  }

  render() {
    const { exact, items, label, path } = this.props
    const { show } = this.state

    return (
      <li className={classNames('nav-item', { dropdown: items, show })}>
        <NavLink
          className={classNames('nav-link', { 'dropdown-toggle': items })}
          exact={exact}
          to={path}
          onClick={this.handleClick}
        >
          {label}
        </NavLink>

        {items && (
          <div className={classNames('dropdown-menu', { show })} ref="dropdown">
            {items.map((item, i) => {
              if (item.props) {
                return <span key={i} className="dropdown-item">{item}</span>
              } else {
                const { label, path, exact } = item

                return (
                  <NavLink
                    className="dropdown-item"
                    exact={exact}
                    key={path}
                    to={path}
                  >
                    {label}
                  </NavLink>
                )
              }
            })}
          </div>
        )}
      </li>
    )
  }
}

NavItem.defaultProps = {
  exact: false
}

NavItem.propTypes = {
  exact: PropTypes.bool,
  items: PropTypes.array,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  path: PropTypes.string.isRequired
}

export default NavItem
