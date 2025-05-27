import React from 'react'
import { Link } from 'react-router-dom'

function PrivateRoute({topSecret}) {
function usuarioValido(){
    const usuario = localStorage.getItem("idUsuario")

    if (usuario) {
        return true
    }else{
        return false
    }
}

  return (
    <div>
      {usuarioValido() ? topSecret : <div>Su acceso en este momento está restringido, le invitamos a crear una cuenta <Link to={"/Register"}>Ir a registrarse</Link></div>}
    </div>
  )
}

export default PrivateRoute