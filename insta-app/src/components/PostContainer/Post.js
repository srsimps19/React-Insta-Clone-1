import React from "react";
import CommentSection from '../CommentSection/CommentSection.js';
import moment from 'moment';
import PropTypes from 'prop-types';
import './PostContainer.scss'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          likes: this.props.likes,
          data: []
        };
      }

      handleClick = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    };
    

    render() {
        console.log(this.state.data)
        return (
            <>
                {this.props.data.map(data => (
                    <div key={data.imageUrl} className="post">
                        <div className="postHeader">
                            <img src={data.thumbnailUrl} alt={data.username}/>
                            <h4>{data.username}</h4>
                        </div>
                        <img src={data.imageUrl} alt="from post"/>
                        <div className="belowPicture">
                            <i className="far fa-heart fa-2x" onClick={this.handleClick}></i>
                            <i className="far fa-comment fa-2x"></i>
                            <h4>{this.state.likes} likes</h4>
                            <CommentSection comments={data.comments}/>
                            <p className="timestamp">{moment().startOf('day').fromNow()}</p>
                        </div>
                    </div>
                ))} 
            </>
        )
    }
}

Post.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        thumbnailUrl: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,

    })).isRequired
}
export default Post;