import PrimaryNavigation from 'components/PrimaryNavigation'
import FlashMessage from 'components/FlashMessage'

import './App.scss'

class App extends Component {
  render() {
    return (
      <div>
        <PrimaryNavigation />
        <FlashMessage />
      </div>
    )
  }
}

export default App
