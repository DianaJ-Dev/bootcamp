import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ChangePassword() {

    return (
    <>
      <h1>Happy Travels</h1>
      <h4>Cambiar contarseña</h4>

      <FloatingLabel controlId="floatingInput" label="" className="mb-3">
      <Form.Label>Ingresar Correo </Form.Label>
        <Form.Control type="email" placeholder="Ingresar Correo" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="">
      <Form.Label>Ingresar nueva contraseña </Form.Label>
        <Form.Control type="password" placeholder="contraseña" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="">
      <Form.Label>Repetir contraseña </Form.Label>
        <Form.Control type="password" placeholder="contraseña" />
      </FloatingLabel>

      <Button variant="primary" type="submit">Enviar</Button>
       
    </>

    )
} 