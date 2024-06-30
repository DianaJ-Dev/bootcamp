'use client'
import styles from "./register.module.css";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useInputHook } from 'happy-travels/hooks/use-input-hook';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'



export default function Register () {

    const router = useRouter()
    const [validated, setValidated] = useState(false);
    const [typeDocument,setTypeDocument] = useState('');
    const [register, setRegister] = useState('')

    const { value: email, bind: bindEmail } = useInputHook('');
    const { value: name, bind: bindName } = useInputHook('');
    const { value: lastName, bind: bindLastName } = useInputHook('');
    const { value: numberId, bind: bindNumberId } = useInputHook('');
    const { value: phone, bind: bindPhone } = useInputHook('');
    const { value: address, bind: bindAddress } = useInputHook('');
    const { value: password, bind: bindPassword } = useInputHook('');

    useEffect(() => {
        register && localStorage.setItem('register', JSON.stringify(register))
    
    }, [register])
    
    const getFormRegister = (event) => {
        setRegister({
            email:email,
            name:name,
            lastName:lastName,
            numberId:numberId,
            phone:phone,
            address:address,
            password:password
        })
    }

    const handleSelect = (eventKey) => {
        setTypeDocument(eventKey)
    }

    const handleSubmit = (e) => {
        const form = e.currentTarget
        e.preventDefault();

        if(!form.checkValidity()){
          setValidated(true);
        }else{
          setValidated(false);
          router.push('/login');
          getFormRegister()
        }
      }

    return (
    <div className={styles.register}>    
    <h4 className={styles.title}>Ingresar datos de registro </h4>    
    <Form className={styles.formRegister} noValidate validated={validated} onSubmit={handleSubmit} >
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Correo" {...bindEmail}/>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
            <Form.Label required type="text">Nombres</Form.Label>
            <Form.Control required type="text" placeholder="Nombres" {...bindName}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label required type="text">Apellidos</Form.Label>
            <Form.Control required type="text" placeholder="Apellidos" {...bindLastName}/>
        </Form.Group>
    </Row>       

    <Row className="mb-3">
    <Form.Group className="mb-3" controlId="formGridAddress1">
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                {typeDocument ? typeDocument : 'Tipo de Documento'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey='CC'>Cédula de Ciudadania</Dropdown.Item>
                    <Dropdown.Item eventKey="TI">Tarjeta de identidad</Dropdown.Item>
                    <Dropdown.Item eventKey="RC">Registro Civil</Dropdown.Item>
                    <Dropdown.Item eventKey='CE'>Cédula de Extranjeria</Dropdown.Item>
                    <Dropdown.Item eventKey="CI">Carné de identidad</Dropdown.Item>
                    <Dropdown.Item eventKey="DNI">Documento Nacional de Identidad</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label required type="text">Número o ID de identificación</Form.Label>
            <Form.Control required type="text" placeholder="123456829" {...bindNumberId}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
            <Form.Label required type="text">Teléfono</Form.Label>
            <Form.Control required type="text" placeholder="+51 426212345" {...bindPhone}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label required type="text">Dirección</Form.Label>
            <Form.Control required type="text" placeholder="av 122 #122 " {...bindAddress}/>
        </Form.Group>

    </Row>      
    <FloatingLabel controlId="floatingPassword" label="Ingresa Contraseña" className="mb-3">
          <Form.Control
            type="password"
            placeholder='Password'
            required
            minLength={6}
            isInvalid = {
              validated && password && password.length < 6
            }
            {...bindPassword}
          />
        </FloatingLabel> 

        <Button variant="primary" type="submit">Enviar</Button>

    </Form>
    </div>
    )
} 