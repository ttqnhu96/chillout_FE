import { Switch } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import { MainContentTemplate } from './templates/MainContentTemplate/MainContentTemplate';
import Login from './pages/Login/Login';
import { LoginTemplate } from './templates/LoginTemplate/LoginTemplate';
import Messenger from './pages/Messenger/Messenger';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import WallPostList from './components/WallPostList/WallPostList';
import About from './components/About/About';
import FriendList from './components/FriendList/FriendList';
import Photos from './components/Photos/Photos';
import { WallTemplate } from './templates/WallTemplate/WallTemplate';
import { FriendsTemplate } from './templates/FriendsTemplate/FriendsTemplate';
import FriendRequests from './components/FriendRequests/FriendRequests';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <>
      <Switch>
        <HomeTemplate exact path="/home" Component={HomePage} />
        <HomeTemplate exact path="/" Component={HomePage} />
        <HomeTemplate exact path="/settings" Component={Settings} />
        
        <LoginTemplate exact path="/login" Component={Login} />

        <WallTemplate exact path="/user/:id" Component={WallPostList} />
        <WallTemplate exact path="/user/:id/about" Component={About} />
        <WallTemplate exact path="/user/:id/friends" Component={FriendList} />
        <WallTemplate exact path="/user/:id/photos" Component={Photos} />

        <FriendsTemplate exact path="/friends" Component={FriendList} />
        <FriendsTemplate exact path="/friends/request" Component={FriendRequests} />

        <MainContentTemplate exact path="/message" Component={Messenger} />
        <MainContentTemplate exact path="*" Component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
