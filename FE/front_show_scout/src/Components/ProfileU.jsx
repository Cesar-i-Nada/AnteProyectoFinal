import React from 'react';
import { useLocation } from 'react-router-dom';

function ProfileU() {
  const { state: user } = useLocation();
  if (!user) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Perfil de {user.username}</h2>
      <p>Nombre: {user.user_first_name} {user.user_last_name}</p>
      <p>Email: {user.user_email}</p>
      {user.user_image && <img src={user.user_image} alt="Perfil" />}
      {/* otros datos */}
    </div>
  );
}

export default ProfileU;
