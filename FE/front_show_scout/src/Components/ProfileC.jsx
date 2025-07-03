import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../Styles/ProfileC.css'


function ProfileC() {
const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    
    navigate('/');
  };

  {/*const { state: user } = useLocation();
  if (!user) return <p>Cargando...</p>;*/}

  return (
    <div>

      <div className="containerXPrC">
        <button className="buttonXPrC" onClick={handleLogout}>Cerrar sesión</button>
      </div>

      <p className='workingProfileC'>PERFIL DE COMPAÑÍA</p>

      {/*<h2>Perfil de {user.username}</h2>
      <p>Nombre: {user.user_first_name} {user.user_last_name}</p>
      <p>Email: {user.user_email}</p>
      {user.user_image && <img src={user.user_image} alt="Perfil" />}
      {/* construir los otros datos */}
    </div>
  );
}

export default ProfileC;