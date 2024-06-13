'use client'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useInputHook } from 'happy-travels/hooks/use-input-hook';
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';
import styles from "./changePassword.module.css";


export default function ChangePassword() {

  const { value: email, bind: bindEmail } = useInputHook('');
  const { value: newPassword, bind: bindNewPassword} = useInputHook('');
  const { value: repeatPassword, bind: bindRepeatPassword} = useInputHook('');

  const router = useRouter()
  const [validated, setValidated] = useState(false);
  const [userPassword, setUserPassword] = useState({});

  useEffect(() => {
    userPassword && localStorage.setItem('userPassword',JSON.stringify(userPassword))
    
  },[userPassword]);

  const salveInformation = () => {
    
    setUserPassword({
      email:email,
      newPassword:newPassword,
      repeatPassword:repeatPassword
    })
}

  const handleSubmit = (e) => {
    const form = e.currentTarget
    e.preventDefault();
    console.log(email)
    console.log(newPassword)
    console.log(repeatPassword)

    if(!form.checkValidity()){
      setValidated(true);
    }else{
      setValidated(false);
      salveInformation();
      router.push('/login')
    }
  }

    return (
    <div className={styles.changePassword}>
      <h1 className={styles.title}>Happy Travels</h1>
      <h4 className={styles.change}>Cambiar contarseña</h4>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingInput" label="Ingresa Correo" className="mb-3  mx-5">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            required
            isInvalid={validated && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/.test(email)}
            {...bindEmail}
          />
      <Form.Control.Feedback type='invalid'>
        Por favor ingrese un correo en formato correcto
      </Form.Control.Feedback>

      <FloatingLabel controlId="floatingPassword" label="Ingresa Nueva Contraseña">
        <Form.Control 
          type="password"
          placeholder='Password'
          required
          minLength={6}
          isInvalid = {
            validated && userPassword && userPassword.length < 6
          }
          {...bindNewPassword}
       />
      </FloatingLabel>
      <Form.Control.Feedback type='invalid'>
            Por favor ingrese la contraseña de manera correcta
      </Form.Control.Feedback> 

      <FloatingLabel controlId="floatingPassword" label="Repetir Contraseña">
        <Form.Control 
          type="password"
          placeholder='Password'
          required
          minLength={6}
          isInvalid = {
            validated && userPassword && userPassword.length < 6
          } 
          {...bindRepeatPassword}
         />
      </FloatingLabel>
      <Form.Control.Feedback type='invalid'>
            Contraseña no coinciden 
      </Form.Control.Feedback> 

      <Button variant="primary" type="submit" className={styles.button}>Enviar</Button>
      </FloatingLabel>
      </Form> 
    </div>

    )
} 