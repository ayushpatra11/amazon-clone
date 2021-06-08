import React from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import { ADD_TO_CART, REMOVE_ALL, REMOVE_FROM_CART } from '../redux/actions/action';

const CardDiv= styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    background: #fff;
    border-bottom: 2px solid grey;
`;

const Left= styled.div`
    width: 100%;
    padding: 10px;
    margin: 10px;
    object-fit: contain;
`;

const Right = styled.div`
    padding: 10px;
    margin: 10px;
    border-left: 2px solid grey;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const RightContLeft = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        margin: 10px;
        font-size: 1.3rem;
    }
    h3{
        margin: 10px;
        font-size: 1rem;
        color: red;
    }
    p{
        margin: 10px;
        font-size: 0.8rem;
    }
`;

const RightContRight = styled.div`
    display: flex;
    border-left: 2px solid grey;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 70%;
    object-fit: contain;
`;

const Top = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    justify-content: center;
`;

const QtyButton = styled.button`
    border-radius: 100%;
    background: #DFDEE2;
    color: black;
    padding: 5px;
    width: auto;
    margin: 10px;
    font-size: 0.8rem;
`;

const Remove = styled.button`
    border-radius: 8px;
    font-size: 1rem;
    color: black;
    width: auto;
    margin: 20px;
    background: orange;
`;


function Cartcard({name, price, qty, photo, remove, removeall, add, id}) {
    return (
        <div>
            <CardDiv>
                <Left>
                    <Image src={photo} />
                </Left>
                <Right>
                    <RightContLeft>
                        <h1>Product Name: {name}</h1>
                        <h3>Price: Rs.{price}</h3>
                        <Remove onClick={()=>{removeall()}}>Remove All</Remove>
                    </RightContLeft>
                    <RightContRight>
                    <p>Quantity: {qty}</p>
                        <Top>
                            <QtyButton onClick={() => {add()}}>
                                +
                            </QtyButton>
                            <QtyButton onClick = {()=>{remove()}}>
                                -
                            </QtyButton>
                        </Top>
                        
                    </RightContRight>
                </Right>
            </CardDiv>
        </div>
    )
}

const mapDispatchtoProps = (dispatch, chosenProps) =>{
    return {
        remove: ()=>{
            dispatch({type: REMOVE_FROM_CART, payload: {id: chosenProps.id, price: chosenProps.price, qty: chosenProps.qty}})
        },
        add: ()=>{
            dispatch({type: ADD_TO_CART, payload: {id: chosenProps.id, name: chosenProps.name, price: chosenProps.price, photo: chosenProps.photo}});
        },
        removeall: ()=>{
            dispatch({type: REMOVE_ALL, payload: {id: chosenProps.id, price: chosenProps.price, qty: chosenProps.qty}})
        }
    }
}

export default connect(null, mapDispatchtoProps) (Cartcard)
