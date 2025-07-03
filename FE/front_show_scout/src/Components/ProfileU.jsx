import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

function ProfileU() {
const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    
    navigate('/');
  };

  const { state: user } = useLocation();
  if (!user) return <p>Cargando...</p>;

  return (
    <div>

      <div className="containerXPrU">
        <button className="buttonXPrU" onClick={handleLogout}>Cerrar sesión</button>
      </div>

      <h2>Perfil de {user.username}</h2>
      <p>Nombre: {user.user_first_name} {user.user_last_name}</p>
      <p>Email: {user.user_email}</p>
      {user.user_image && <img src={user.user_image} alt="Perfil" />}
      {/* construir los otros datos */}
    </div>
  );
}

export default ProfileU;
