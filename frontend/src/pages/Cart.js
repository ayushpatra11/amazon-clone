import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Cartcard from '../components/Cartcard';

const Section = styled.div`
    background: #DFDEE2;
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
`;

const LeftColumn = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
`;

const RightColumn = styled.div`
`;


function Cart({count, total, cart}) {
    var num=1;
    return (
        <div>
            <Section>
                <LeftColumn>
                {cart.map((item, index) => {
                    return(
                        <>
                        <Cartcard 
                        key={index}
                        id={item.id}
                        name={item.name}
                        qty={item.qty}
                        photo={item.photo}
                        price={item.price}
                         />
                        </>
                    )
                })}


                </LeftColumn>
                <RightColumn>
                <h1>Total: {total}</h1>
                </RightColumn>
            </Section>
        </div>
    )
}

const mapStatetoProps = (state) =>{
    console.log(state);
    return {count: state.count, cart: state.cart, total: state.total}
}

export default connect(mapStatetoProps) (Cart);


