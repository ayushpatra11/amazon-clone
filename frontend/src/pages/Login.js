import React, { useState } from 'react'
import styled from 'styled-components'
import amazonlogo from '../images/amazonlogo.png'
import auth from '../firebase';
import {Link, useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import { SET_USER } from '../redux/actions/action';


const Section= styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    background: #fff;
    display: flex;
    flex-direction: column;
`;

const Logo=styled.img`
    padding: 20px;
    object-fit: contain;
    max-height: 50px;
    width: 100%;
`;

const Container=styled.div`
    width: 400px;
    border: 1px solid #DFDEE2;
    padding: 40px;
    border-radius: 5px;
    h1{
        font-size: 1.8rem;
        color: black;
    }
    p{
        font-size: 0.8rem;
        color: grey;
        margin-bottom: 0;
    }
    
`;

const Input = styled.input`
    width: 100%;
    height: 25px;
    font-size: 0.8rem;
    margin-top: 5px;
    margin-bottom: 20px;
    border: 1px solid #DFDEE2;
    border-radius: 4px;
`;

const Label = styled.label`
    font-size: 0.8rem;
    font-weight: bold;
    color: black;
`;

const Button = styled.button`
    width: 100%;
    cursor: pointer;
    margin-top: 20px;
    border: none;
    outline: none;
    border-radius: 4px;
    height: 30px;
    background: #f4b23f;

    &:hover{
       border: 2px solid black; 
    }
`;

const Signup = styled.p`
    font-size: 1rem;
    text-align: center;
    color: grey;
    margin-bottom: 0;
`;

const SignUpButton = styled(Link)`
    text-decoration: none;
    width: 300px;
    cursor: pointer;
    margin-top: 20px;
    border: none;
    outline: none;
    border-radius: 4px;
    height: 30px;
    background: #DFDEE2; 
    color: black;
    text-align: center;
    padding-top: 10px;
    font-size: 1rem;

    &:hover{
       border: 2px solid black; 
    }
`;



function Login({dispatch}) {

    const [email, setEmail]= useState();
    const [password, setPassword]= useState();
    const [err, setError]=useState();

    let history = useHistory();
    
    const signin = () =>{
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
                dispatch({type: SET_USER, payload: {user: user}});
                history.push('/');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setError(errorMessage);
            });
    }

    return (
        <Section>
            <Logo src={amazonlogo} />
            <Container>
                <h1>Sign-In</h1>
                <Label htmlFor="Email">Enter Email:</Label>
                <Input type="text" name="Email" placeholder="Email" onChange={(e)=>{
                    setEmail(e.target.value);
                }} />
                <Label htmlFor="Password">Enter Password:</Label>
                <Input type="password" name="Password" placeholder="Password" onChange={(e)=>{
                    setPassword(e.target.value);
                }} />
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <p style={{color: "red"}}>{err}</p>
                <Button onClick={signin}>Sign-In</Button>
            </Container>
            <Signup>New to Amazon?</Signup>
            <SignUpButton to='/register'>Create your own account</SignUpButton>
        </Section>
    )
}



export default connect() (Login)
