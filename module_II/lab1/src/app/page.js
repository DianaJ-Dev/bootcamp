'use client'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from "lab1/components/footer/page";
import NavbarHome from "lab1/components/nabvar/page";

export default function Home() {

  
  return (
    <>
    <NavbarHome/>
    <Form className=" m-10" > 
      <FloatingLabel  className="text-center mb-10 p-10 " controlId="exampleForm.ControlInput1">
        <Form.Label> Buscar por producto </Form.Label>
        <Form.Control required type="text" placeholder="Buscar por producto" defaultValue=""/>
      </FloatingLabel>
      <FloatingLabel  className="text-center mb-10 p-10 " controlId="exampleForm.ControlTextarea1">
        <Form.Label>Buscar por usuario</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </FloatingLabel>
    </Form>
    <Button variant="primary" type="submit" className="bg-aliceblue text-blue ml-80% mx-40">Buscar</Button>
    <Footer/>
    </>
    
  );
}
