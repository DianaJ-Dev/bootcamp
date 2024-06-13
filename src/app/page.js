'use client'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from "happy-travels/components/footer/page";
import NavbarHome from "happy-travels/components/nabvar/page";

export default function Home() {

  
  return (
    <>
    <NavbarHome/>
    <Form>
      <FloatingLabel  className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Destino </Form.Label>
        <Form.Control required type="text" placeholder="Lugar a visitar" defaultValue=""/>
      </FloatingLabel>
      <FloatingLabel  className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Itinerario</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </FloatingLabel>
    </Form>
    <Button variant="primary" type="submit">Ingresar</Button>
    <Footer/>
    </>
    
  );
}
