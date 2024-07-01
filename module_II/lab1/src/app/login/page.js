'use client'
import styles from "./login.module.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useInputHook } from 'lab1/hooks/use-input-hook';
import { useEffect, useState } from 'react';


export default function Login () {

  const { value: email, bind: bindEmail } = useInputHook('');
  const { value: password, bind: bindPassword } = useInputHook('');

  const router = useRouter()
  const [user, setUser] = useState({});
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    user && localStorage.setItem('user',JSON.stringify(user))
    
  },[user]);

  
  const salveInformation = () => {
    
      setUser({
        email:email,
        password:password
      })
    
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget
    e.preventDefault();
    console.log(email)
    console.log(password)

    if(!form.checkValidity()){
      setValidated(true);
    }else{
      setValidated(false);
      salveInformation();
      router.push('/')
    }
  }

    return (
      <div className={styles.imgForm}>
      <h1 className="text-center text-5xl font-bold text-white mb-10 p-10">Happy Travels</h1>
      <Form noValidate className="border-b border-gray-900 border-opacity-10 pb-12 mx-5" validated={validated} onSubmit={handleSubmit} >
        <FloatingLabel  controlId="email" label="Ingresa Correo" className="mb-3 space-y-0.5 ">
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
        <Form.Control.Feedback type='invalid'>
            Por favor ingrese la contraseña de manera correcta
        </Form.Control.Feedback> 

          <Button className="bg-aliceblue text-blue ml-40% mx-40" variant="primary" type="submit" >
            Ingresar
          </Button>
        </FloatingLabel>
      </Form>

      <div className="linkLogin flex flex-col items-center gap-4 underline text-sm  ">
      <Link className = "hover:text-white" href={'/changePassword'}>Olvido o Bloqueo la contraseña</Link>
      <Link className = "hover:text-white" href={'/register'}>Registrarse</Link>
      </div>        
    </div>

    )
} 