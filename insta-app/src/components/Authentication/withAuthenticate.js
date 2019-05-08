import React from 'react';

const WithAuthenticate = PostPage => 
    class extends React.Component {
        render() {
            return (
                <PostPage />
            )
        }
}

export default WithAuthenticate;