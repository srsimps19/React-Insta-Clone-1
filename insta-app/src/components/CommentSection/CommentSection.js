import React from 'react';
import Comment from './Comment';
import styled from 'styled-components';

export const CommentSectionDiv = styled.div`
    margin: 0;
    
    input {
        width: 620px;
        height: 40px;
        padding: 0;
        border-top: 1px solid grey;
        border-right: none;
        border-bottom: none;
        border-left: none;
        margin-left: 11px;
        margin-top: 5px;
    }`;

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
            <CommentSectionDiv>
                <Comment data={this.state.comments}/>
                <form onSubmit={this.addNewComment}>
                    <input 
                        type="text"
                        placeholder="Add a comment..."
                        value={this.state.input}
                        onChange={this.handleChanges}
                    />
                </form>
            </CommentSectionDiv>
        )
    }
}

export default CommentSection;