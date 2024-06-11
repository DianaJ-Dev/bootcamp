'use client'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useInputHook } from 'happy-travels/hooks/use-input-hook';



export default function Login () {

  const { value: email, bind: bindEmail } = useInputHook('');
  const { value: password, bind: bindPassword } = useInputHook('');

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)
  }

    return (
    <>
      <h1>Happy Travels</h1>
      <form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput" label="" className="mb-3">
          <Form.Control
            type="email"
            {...bindEmail}
            placeholder="Ingresar Correo"
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="">
          <Form.Control
           type="password"
           {...bindPassword}
           placeholder="contraseña"
           />
        </FloatingLabel>

        <Button variant="primary"
        type="submit"
        onClick={() => router.push('/')}
        >Ingresar
        </Button>
      </form>

      <Link href={'/changePassword'}>Olvido o Bloqueo la contraseña</Link>
      <Link href={'/register'}>Registrarse</Link>
       
    </>

    )
} 