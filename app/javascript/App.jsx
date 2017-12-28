import { withRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import PrimaryNavigation from 'components/PrimaryNavigation'
import FlashMessage from 'components/FlashMessage'

import LocationsTable from 'components/admin/LocationsTable'
import UsersTable from 'components/admin/UsersTable'

import './App.scss'

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.location
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
              <Route path="/admin/locations" component={LocationsTable} />
            </Switch>
          )} />
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(connect(mapStateToProps)(App))
