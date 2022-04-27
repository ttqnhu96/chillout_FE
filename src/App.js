import { Switch } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import { MainContentTemplate } from './templates/MainContentTemplate/MainContentTemplate';
import Login from './pages/Login/Login';
import { LoginTemplate } from './templates/LoginTemplate/LoginTemplate';
import Wall from './pages/Wall/Wall';
import Friends from './pages/Friends/Friends';
import Messenger from './pages/Messenger/Messenger';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <>
      <Switch>
        <MainContentTemplate exact path="/home" Component={HomePage} />
        <LoginTemplate exact path="/login" Component={Login} />
        <MainContentTemplate exact path="/wall" Component={Wall} />
        <MainContentTemplate exact path="/friends" Component={Friends} />
        <MainContentTemplate exact path="/message" Component={Messenger} />
        <MainContentTemplate exact path="/" Component={HomePage} />

        <MainContentTemplate exact path="*" Component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
