import React from 'react';
import './App.scss';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar';

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
    <SearchBar />
    <PostContainer data={this.state.data}/>
    </div>
  );
  }
}

export default App;
