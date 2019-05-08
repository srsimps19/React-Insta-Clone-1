import React from 'react';
import Comment from './Comment';
import './CommentSection.scss';

class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: props.comments,
            input: ""
        }
    }

    addNewComment = (e,i) => {
        e.preventDefault()
        this.setState({
            comments: [...this.state.comments, {username: localStorage.getItem('user'),
                text:this.state.input}]
        })
        this.setState({input: ""})
        console.log(this.state.comments)
    }
    

    handleChanges = (e) => {
        this.setState({input: e.target.value})
    }

    render() {
        return (
            <div className="commentSection">
                <Comment data={this.state.comments}/>
                <form onSubmit={this.addNewComment}>
                    <input 
                        type="text"
                        placeholder="Add a comment..."
                        value={this.state.input}
                        onChange={this.handleChanges}
                    />
                </form>
            </div>
        )
    }
}

export default CommentSection;