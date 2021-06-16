import React, {useState} from 'react'
import styled from 'styled-components';
import amazonlogo from '../images/amazonlogo.png'
import auth from '../firebase';
import { connect } from 'react-redux';
import { SET_USER } from '../redux/actions/action';
import { useHistory } from 'react-router';

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
    margin-top: 10px;
    border: none;
    outline: none;
    border-radius: 4px;
    height: 30px;
    background: #DFDEE2;

    &:hover{
       border: 2px solid black; 
    }
`;

function Register({dispatch}) {
    const [email, setEmail]= useState();
    const [name, setName]= useState();
    // const [number, setNumber]= useState();
    const [password, setPassword]= useState();
    const [cpassword, setCpassword]= useState();
    const [er, setError]=useState();

    let history= useHistory();

    const signup = () =>{
        if(password===cpassword){
            
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log("Signed Up");
            user.updateProfile({
                displayName: name,
                // phoneNumber: number,
              })
            dispatch({type: SET_USER, payload: {user: user}});
            history.push('/');
            setError("");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            setError(errorMessage);
        });

        }

        else{
            setError("Passwords are not same, try again");
        }
    }

    return (
        <Section>
            <Logo src={amazonlogo} />
            <Container>
                <h1>Sign-Up</h1>
                <Label htmlFor="Name">Enter Name:</Label>
                <Input type="text" name="Name" placeholder="Name" onChange={(e)=>{
                    setName(e.target.value);
                }} />
                {/* <Label htmlFor="Number">Enter Number:</Label>
                <Input type="text" name="Number" placeholder="Number" onChange={(e)=>{
                    setNumber(e.target.value);
                }} /> */}
                <Label htmlFor="Email">Enter Email:</Label>
                <Input type="text" name="Email" placeholder="Email" onChange={(e)=>{
                    setEmail(e.target.value);
                }} />
                <Label htmlFor="Password">Enter Password:</Label>
                <Input type="password" name="Password" placeholder="Password" onChange={(e)=>{
                    setPassword(e.target.value);
                }} />
                <Label htmlFor="cpassword">Confirm Password:</Label>
                <Input type="password" name="cpassword" placeholder="Confirm Password" onChange={(e)=>{
                    setCpassword(e.target.value);
                }} />
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <p style={{color: "red"}}>{er}</p>
                <Button onClick={signup}>Sign-Up</Button>
            </Container>
        </Section>
    )
}

export default connect() (Register)
