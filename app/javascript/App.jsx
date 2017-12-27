import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import PrimaryNavigation from 'components/PrimaryNavigation'
import FlashMessage from 'components/FlashMessage'

import UsersTable from 'components/admin/UsersTable'

import './App.scss'

const mapStateToProps = (state, ownProps) => {
  return {
    adminMode: state.adminMode,
    location: state.router.location,
    ...ownProps
  }
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PrimaryNavigation />
        <div className="container">
          <FlashMessage />

          <Route path="/admin" render={() => (
            <Switch>
              <Route path="/admin/users" component={UsersTable} />
            </Switch>
          )} />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(App)
