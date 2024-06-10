import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

export default function Register () {

    return (
    <>
    <Form>
        <FloatingLabel controlId="floatingInput" label="" className="mb-3">
            <Form.Label>Ingresar Correo </Form.Label>
            <Form.Control type="email" placeholder="Ingresar Correo" />
        </FloatingLabel>

        
        <Form.Label required type="text">Nombres</Form.Label>
        <Form.Control required type="text" placeholder="Nombres" defaultValue=""/>

        <Form.Label> Tipo de identificación </Form.Label>
        <Form.Select aria-label="Default select example">
        <option>Cédula de Ciudadanía (CC)</option>
        <option>Tarjeta de Identidad (TI)</option>
        <option>Registro Civil (RC)</option>
        <option>Carné de Identidad (CI)</option>
        <option>Documento Nacional de Identidad (DNI)</option>
        </Form.Select>

        <Form.Label required type="text">Número o ID de identificación</Form.Label>
        <Form.Control required type="text" placeholder="1234" defaultValue=""/>

        <Form.Label required type="text">Teléfono</Form.Label>
        <Form.Control required type="text" placeholder="12345" defaultValue=""/>

        <Form.Label required type="text">Dirección</Form.Label>
        <Form.Control required type="text" placeholder="av 122 " defaultValue=""/>

        <FloatingLabel controlId="floatingPassword" label="">
        <Form.Label>Ingresar Contraseña </Form.Label>
            <Form.Control type="password" placeholder="contraseña" />
        </FloatingLabel>

        <Button variant="primary" type="submit">Enviar</Button>

    
    </Form>
    </>
    )
} 