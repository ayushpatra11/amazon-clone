import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ADD_TO_CART } from '../redux/actions/action';
import {connect} from 'react-redux';

const CardDiv = styled.div`
background: #FFFFFF;
overflow: hidden;
position: relative;
    display: grid;
    padding: 10px;
    margin: 10px;
    grid-template-rows: repeat(4, 1fr);
    justify-content: center;
    width: 250px;
    height: 400px;
    p{
        font-size: 1.2rem;
        color: black;
        text-align: center;
    }
`;

const Bottom = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

const Header = styled(Link)`
        margin: 10px;
        text-decoration: none;
        font-size: 1.5rem;
        color: black;
        text-align: center;
    &:hover{
        color: #E39032;
        text-decoration: underline;
    }
`;

const ImageContainer = styled.div`
    height: 175px;
    object-fit: contain;
`;

const Image = styled.img`
    height: 100%;
    border-radius: 18px;
    border: none;
    outline: none;
`;

const Price = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1.25rem;
    color: black;
    text-decoration: line-through;
    text-align: center;
`;

const DiscPrice = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 1.35rem;
    color: red;
    text-align: center;
`;

const Button = styled.button`
    background: #E39032;
    cursor: pointer;
    width: 50%;
    position: absolute;
    bottom: 10px;
    padding: 5px;
    margin: 0 62px; 
    border-radius: 8px;
    color: black;
    font-size: 1rem;
    &:hover{
        background: orange;
    }
`;

function Cards({name, photo, desc, price, discprice, dispatch, id, add}) {

    

    return (
        <div>
            <CardDiv>
                <ImageContainer>
                    <Image src={photo} /> 
                </ImageContainer>
                <Bottom> 
                        <Header>{name}</Header>
                        {
                            (price===discprice)
                            ? <DiscPrice>Rs. {price}</DiscPrice>
                            : <><Price>Rs. {price}</Price> <DiscPrice>Rs. {discprice}</DiscPrice></>
                        }
                        
                        <p>{desc}</p>
                        
                </Bottom>
                <Button onClick={()=>{add()}}><i class="fas fa-shopping-cart"></i> Add to cart</Button>
            </CardDiv>
        </div>
    )
}

const mapDispatchtoProps = (dispatch, chosenProps) =>{
    return {
        add: ()=>{
            dispatch({type: ADD_TO_CART, payload: {id: chosenProps.id, name: chosenProps.name, price: chosenProps.discprice, photo: chosenProps.photo}})
        }
    }
}

export default connect(null, mapDispatchtoProps) (Cards);
