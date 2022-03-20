import { Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import HomePage from './pages/HomePage/HomePage';
import { ChilloutTemplate } from './templates/ChilloutTemplate/ChilloutTemplate';

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <ChilloutTemplate exact path="/" Component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
