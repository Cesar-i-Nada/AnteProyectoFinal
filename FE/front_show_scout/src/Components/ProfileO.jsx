import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../Styles/ProfileO.css'


function ProfileO() {
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

      <div className="containerXPrO">
        <button className="buttonXPrO" onClick={handleLogout}>Cerrar sesión</button>
      </div>

      <p className='workingProfileO'>PERFIL DE ORGANIZACION</p>

      {/*<h2>Perfil de {user.username}</h2>
      <p>Nombre: {user.user_first_name} {user.user_last_name}</p>
      <p>Email: {user.user_email}</p>
      {user.user_image && <img src={user.user_image} alt="Perfil" />}
      {/* construir los otros datos */}
    </div>
  );
}

export default ProfileO;