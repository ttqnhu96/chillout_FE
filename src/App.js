import { Switch } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import { MainContentTemplate } from './templates/MainContentTemplate/MainContentTemplate';
import Login from './pages/Login/Login';
import { LoginTemplate } from './templates/LoginTemplate/LoginTemplate';
import Wall from './pages/Wall/Wall';
import Friends from './pages/Friends/Friends';

function App() {
  return (
    <>
      <Switch>
        <MainContentTemplate exact path="/home" Component={HomePage} />
        <LoginTemplate exact path="/login" Component={Login} />
        <MainContentTemplate exact path="/wall" Component={Wall} />
        <MainContentTemplate exact path="/friends" Component={Friends} />

        <MainContentTemplate exact path="/" Component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
