import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
       data: dummyData
    }
  }

  render() {
  return (
    <div className="App">
    <PostContainer data={this.state.data}/>
    </div>
  );
  }
}

export default App;
