'use client'

import Footer from "happy-travels/components/footer/page";
import NavbarHome from "happy-travels/components/nabvar/page";
import { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export default function Product () {

    const [product, setProduct] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/api')
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err))
      
    }, [])
    

    return (
        <>
        <NavbarHome/>
        <h4>Producto</h4>
        <ListGroup as="ul">
            {product && product.length > 0 &&
             product.map((product)=>
            (<ListGroup.Item key={product.id} > {product.name} </ListGroup.Item>))}
        </ListGroup>
        <Footer/>
        </>
        
    )
} 