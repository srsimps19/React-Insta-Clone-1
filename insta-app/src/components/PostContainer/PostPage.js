import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import { Button } from 'reactstrap';
import './PostContainer.scss';

class PostPage extends React.Component {
    state = {
        data: [],
        filteredPost: []
     }
   
     componentDidMount() {
       this.setState({
         data: dummyData
       })
     }
 
     searchPostsHandler = e => {
       const posts = this.state.data.filter(p => {
         if (p.username.includes(e.target.value))
           return p;
       })
       this.setState({ filteredPost: posts});
     }
     
     logout = () => {
      localStorage.removeItem('user');
      window.location.reload();
  }
 
   render() {
   return (
     <div className="App">
        <SearchBar searchPost={this.searchPostsHandler}/>
        <PostContainer data={this.state.filteredPost.length > 0
            ? this.state.filteredPost
            : this.state.data}/>
        <Button color="secondary" onClick={this.logout} className="logoutBtn">Log Out</Button>
     </div>
   );
   }
}

export default PostPage;