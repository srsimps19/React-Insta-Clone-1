import React from 'react';

function SearchBar() {
    return (
        <>
            <div className="leftSide">
                <i className="fab fa-instagram fa-3x"></i>
                <p> | </p>
                <img src="../../insta-logo.png" alt='instagram logo'/>
            </div>
            <div className="center">
                <input
                    type="text"
                    placeholder="🔍 Search"
                />
            </div>
            <div className="rightSide">
                <i className="far fa-compass fa-3x"></i>
                <i className="far fa-heart fa-3x"></i>
                <i className="far fa-user fa-3x"></i>
            </div>
        </>
    )
}

export default SearchBar;