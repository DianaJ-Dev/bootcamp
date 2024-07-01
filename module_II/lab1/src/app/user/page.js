import Link from 'next/link'

export default function User (props) {

    const ListaUsuarios = [
        'Angie Vargas', 'Camilo Perez', 'Sandra Garcia'
    ]

    return (
        <>
        <h4>Usuarios</h4>
        <ul>
            {ListaUsuarios.map((item,index)=> (<li><Link href = {`/blog/${index}`}>{item}</Link></li>))}
        </ul>
        </>
    )
} 