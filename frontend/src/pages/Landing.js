import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Banner1 from '../images/banner.jpg';
import Banner2 from '../images/ps5banner.jpg';
import {motion} from 'framer-motion';
import Products from '../components/Products';
import axios from 'axios';
import Cards from '../components/Cards'


const Section = styled.div`
    width: 100%;
    background: #DFDEE2;
    justify-content: center;
    z-index: -2;
`;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin:auto 10% ;
    @media screen and (max-width: 1200px){
        margin:auto;  
    }
`;

const Banner = styled.div`
    object-fit: contain;
    z-index: 0;
    height: 500px;
    position: relative;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    @media screen and (max-width: 960px){
        height: 400px;
    }
    @media screen and (max-width: 760px){
        height: 350px;
    }
    @media screen and (max-width: 500px){
        height: 290px;
    }
`;

const Image = styled(motion.img)`
    width: 100%;
    cursor: pointer;
    position: relative;
    top: -10%;
`;

const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    z-index: 2;
`;




function Landing() {


    const [products, setProducts] = useState([]);

   

    useEffect(() => {
        async function getProducts(){
            const res = await axios.get("http://localhost:5000/products");
            setProducts(res.data);
            
        } 
        getProducts();
    },[]);  
    
    
    const [bannerImage, setBanner] = useState(Banner1);

    const handleBanner=() =>{
        if(bannerImage === Banner1){
            setBanner(Banner2);
        }
        else{
            setBanner(Banner1);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
          handleBanner();
        }, 5000);
        return () => clearInterval(interval);
      }, [bannerImage]);
      


    return (
        <div>
            <Section>
                <Container>
                    <Banner>
                        <Image 
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {duration: 0.5}}}
                        src={bannerImage} alt="Banner" />
                    </Banner>
                    <ProductsContainer>
            {products.data && products.data.map((e, index) => {
                            return (<Cards 
                                price={e.price}
                                id={e.id}
                                discprice = {e.discprice}
                                key={index}
                                name={e.name}
                                photo={e.photo}
                                desc={e.minidescription}
                            />)
                        })}
        </ProductsContainer>
                </Container>
            </Section>

        </div>
    )
}

export default Landing
