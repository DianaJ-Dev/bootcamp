export default function UserPage(props) {

    console.log(props.params)
    const title = `Articulo ${props.params.artitle_is}`

    return (
      <>
      <h4>Detalle de usuario</h4>
      {title}
      {JSON.stringify(props)}
      </>
      
    )
  }