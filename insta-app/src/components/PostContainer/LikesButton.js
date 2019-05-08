import React from 'react';

class LikesButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: props.likesProps
        }
    }

    handleClick = () => {
        this.setState(() => ({
          likes: this.state.likes + 1
        }));
      };

    render(){
        return (
            <div className="likescontainer">
                <i className="far fa-heart fa-2x" onClick={this.handleClick}></i>
                <i className="far fa-comment fa-2x"></i>
                <p>{this.state.likes} likes</p>
            </div>
        )
    }
}

export default LikesButton;