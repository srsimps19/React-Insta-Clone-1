import React from 'react';
import './SearchBar.scss';

function SearchBar(props) {
    return (
        <div className="searchBar">
            <div className="leftSide">
                <i className="fab fa-instagram fa-3x"></i>
                <p> | </p>
                <h1>Instagram</h1>
            </div>
            <div className="center">
                <input
                    type="text"
                    placeholder="🔍 Search"
                    onChange={props.searchPost}
                />
            </div>
            <div className="rightSide">
                <i className="far fa-compass fa-3x"></i>
                <i className="far fa-heart fa-3x"></i>
                <i className="far fa-user fa-3x"></i>
            </div>
        </div>
    )
}

export default SearchBar;