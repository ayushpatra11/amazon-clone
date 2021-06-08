import React, {useEffect, useState} from 'react';
import Cards from '../components/Cards';
import axios from 'axios';
import styled from 'styled-components';



const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    z-index: 2;
`;

function Products() {


    const [products, setProducts] = useState([]);

   

    useEffect(() => {
        async function getProducts(){
            const res = await axios.get("http://localhost:5000/products");
            console.log(res);
            setProducts(res.data);
            
        } 
        getProducts();
    },[]);  
    
    console.log(products.data)

    return (
        <ProductsContainer>
            {products.data && products.data.map((e, index) => {
                            console.log(e);
                            <Cards 
                                key={index}
                                name={e.name}
                                photo={e.photo}
                                desc={e.minidescription}
                            />
                        })}
        </ProductsContainer>
    )
}

export default Products;
