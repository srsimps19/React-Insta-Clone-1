import React from 'react';
import styled from 'styled-components';


export const SearchBarDiv = styled.div`
    width: 900px;
    height: 75px;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 6px;
    border: 1px solid grey;
    background-color: white;`;

export const LeftSide = styled.div`
    display: flex;
            
    .fa-instagram {
        margin-top: 10px;
    }

    p {
        padding: 10px;
        margin-top: 0;
        font-size: 2rem;
    }

    h1 {
        margin-top: 0;
        padding-top: 12px;
        font-family: 'Satisfy', cursive;

    }`;

export const Center = styled.div`
    margin-top: 15px;

    input {
        height: 30px;
        width: 200px;
        text-align: center;
        border-radius: 6px;
    }`;
    
export const RightSide = styled.div`
    margin-top: 10px;

    .fa-heart {
        padding: 0 15px;
    }`;


function SearchBar(props) {
    return (
        <SearchBarDiv>
            <LeftSide>
                <i className="fab fa-instagram fa-3x"></i>
                <p> | </p>
                <h1>Instagram</h1>
            </LeftSide>
            <Center>
                <input
                    type="text"
                    placeholder="🔍 Search"
                    onChange={props.searchPost}
                />
            </Center>
            <RightSide>
                <i className="far fa-compass fa-3x"></i>
                <i className="far fa-heart fa-3x"></i>
                <i className="far fa-user fa-3x"></i>
            </RightSide>
        </SearchBarDiv>
    )
}

export default SearchBar;