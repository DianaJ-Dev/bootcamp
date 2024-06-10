import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login () {

    return (
    <>
      <h1>Happy Travels</h1>

      <FloatingLabel controlId="floatingInput" label="" className="mb-3">
        <Form.Control type="email" placeholder="Ingresar Correo" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="">
        <Form.Control type="password" placeholder="contraseña" />
      </FloatingLabel>

      <Button variant="primary" type="submit">Ingresar</Button>
      <Button variant="link">Olvido o Bloqueo la contraseña</Button>
      <Button variant="link">Registrarse</Button>
       
    </>

    )
} 