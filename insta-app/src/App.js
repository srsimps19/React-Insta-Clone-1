import React from 'react';
import PostPage from './components/PostContainer/PostPage';
import WithAuthenticate from './components/Authentication/withAuthenticate';
import './App.scss';

export const ComponentFromWithAuthenticate = WithAuthenticate(PostPage)

class App extends React.Component {
  render() {
    return(
      <ComponentFromWithAuthenticate />
    )
  }
}

export default App;
