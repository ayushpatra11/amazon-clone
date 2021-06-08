import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../images/amazon.png'
import {connect} from 'react-redux';

const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    height: 60px;
    flex-direction: row;
    background: #131921;
    align-items: center;
`;

const LogoCont = styled(Link)`
    height: 100%;
    object-fit: contain;
    text-decoration: none;
`;

const Logo = styled.img`
    height: 50%;
    margin: 10px;
`;

const RightContainer = styled.div`
    display: flex;
    z-index: 999;
    flex-direction: row;
    align-content: end;
    justify-content: space-between;
    @media screen and (max-width: 1024px){
        flex-direction: column;
        background: white;
        opacity: 0.9;
        position: absolute;
        top: ${props=>props.open ? "60px" : "-150px" };
        right: 0;
        width: 60%;
        border: none;
        outline: none;
        justify-content: center;
        transition: all 0.3s ease;
    }

`;

const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 60%;
    margin: 20px;
    padding: 0;
    border-radius: 8px;
    @media screen and (max-width: 1024px){
        width: 80%;
    }
    @media screen and (max-width: 500px){
        width: 60%;
    }
`;

const Input = styled.input`
    width: 90%;
    height: 94%;
    padding-left: 10px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border:none;
    outline: none;
    @media screen and (max-width: 1024px){
        width: 73%;
    }
    @media screen and (max-width: 500px){
        width: 60%;
    }
`;

const Form = styled.form`
    width: 100%;
    padding: 0;
`;

const Button = styled.button`
    margin: 0;
    padding: 8px;
    cursor: pointer;
    height: 100%;
    background: #E39032;
    border: none;
    outline: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    font-size: 1rem;
`;

const BoxLoc = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    color: white;
    h1{
        cursor: pointer;
        font-size: 1rem;
        margin: 0;
    }
    p{
        font-size: 0.8rem;
        margin: 0;
    }
    @media screen and (max-width: 500px){
       display: none; 
    }
`;

const Box = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: white;
    h1{
        font-size: 1rem;
        margin: 0;
    }
    p{
        font-size: 0.8rem;
        margin: 0;
    }
    @media screen and (max-width: 1024px){
        p{
            display: none;
        }
        
    }
`;

const NavLink = styled(Link)`
        font-size: 1rem;
        font-weight: 900;
        cursor: pointer;
        margin: 0;
        color: White;
        text-decoration: none;
        @media screen and (max-width: 1024px){
            color: black;
            font-size: 1.5rem;
            text-align: center;
        }
`;

const MenuButton = styled.div`
    display: none;
    @media screen and (max-width: 1024px){
        display: block;
        cursor: pointer;
        font-size: 2rem;
        color: white;
        padding: 10px;
    }
`;

const Icon = styled(Link)`
    color: white;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;
    margin-top: 20px;
    margin-right: 20px;
    h1{
        font-size: 1.2rem;
        color: #E39032;
        font-weight: 900;
    }
`;



function Navbar({num}) {

    const [search, setSearch] = useState();
    const[open, setOpen] = useState(false);

    const handleMenu = () =>{
        setOpen(!open);
    }

    return (
        <div>
            <NavbarContainer>
                <LogoCont to='/'><Logo src={logo} /></LogoCont>
                <BoxLoc><p>Deliver to</p><h1>Location</h1></BoxLoc>
                <SearchBar>
                    <Form action="submit">
                        <Input type="text" placeholder="Search for a product" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                        <Button type="submit"><i class="fas fa-search"></i></Button>
                    </Form>
                </SearchBar>
                <Icon to="/cart" >
                <i class="fas fa-shopping-cart"></i> 
                <h1>{num}</h1>               
                </Icon>
                <RightContainer open={open}>
                    <Box><p>Hello, Guest</p><NavLink>Sign in</NavLink></Box>
                    <Box><p>Returns &</p><NavLink>Orders</NavLink></Box>
                </RightContainer>
                <MenuButton onClick={handleMenu}>
                {open 
                ?<i class="fas fa-times"></i>
                :<i class="fas fa-bars"></i>
                }
                </MenuButton>
            </NavbarContainer>
        </div>
    )
}

const mapStatetoProps = (state)=>{
   return {num:state.count}
}

export default connect(mapStatetoProps) (Navbar);
