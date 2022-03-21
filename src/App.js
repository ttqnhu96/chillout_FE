import { Router, Switch } from 'react-router';
// import { createBrowserHistory } from 'history';
import HomePage from './pages/HomePage/HomePage';
import { MainContentTemplate } from './templates/MainContentTemplate/MainContentTemplate';
import Login from './pages/Login/Login';
import { LoginTemplate } from './templates/LoginTemplate/LoginTemplate';
import { history } from './common/history';

// export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <MainContentTemplate exact path="/home" Component={HomePage} />
        <LoginTemplate exact path="/login" Component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
