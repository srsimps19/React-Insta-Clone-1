import React from 'react';
import PostPage from './components/PostContainer/PostPage';
import WithAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';
import './App.scss';

export const ComponentFromWithAuthenticate = WithAuthenticate(PostPage)(Login)

class App extends React.Component {
  render() {
    return(
      <ComponentFromWithAuthenticate />
    )
  }
}

export default App;
