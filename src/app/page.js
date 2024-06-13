'use client'
import styles from "./page.module.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from "happy-travels/components/footer/page";
import NavbarHome from "happy-travels/components/nabvar/page";

export default function Home() {

  
  return (
    <>
    <NavbarHome className={styles.navbar} />
    <Form className={styles.home}> 
      <FloatingLabel  className="mb-3 mx-5" controlId="exampleForm.ControlInput1">
        <Form.Label> Destino </Form.Label>
        <Form.Control required type="text" placeholder="Lugar a visitar" defaultValue=""/>
      </FloatingLabel>
      <FloatingLabel  className="mb-3 mx-5" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Itinerario</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </FloatingLabel>
    </Form>
    <Button variant="primary" type="submit">Ingresar</Button>
    <Footer/>
    </>
    
  );
}
