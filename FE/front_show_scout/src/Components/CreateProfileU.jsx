import React, { useState, useEffect } from 'react';
import '../Styles/CreateProfileU.css';
import { useNavigate } from 'react-router-dom';
import fetchUsers from '../Services/fetchUsers';

function CreateProfileU() {
  const [Img, setImg] = useState(null);
  const [username, SetUsername] = useState('');
  const [user_password, SetUserPassword] = useState('');
  const [user_first_name, SetUserFirstName] = useState('');
  const [user_last_name, SetUserLastName] = useState('');
  const [user_email, SetUserEmail] = useState('');
  const [user_age, SetUserAge] = useState('');
  const [user_phone, SetUserPhone] = useState('');
  const [user_country, SetUserCountry] = useState('');
  const [user_address, SetUserAddress] = useState('');
  const [user_type_profile, SetUserTypeProfile] = useState('');
  const [user_website, SetUserWebsite] = useState('');
  const [user_social_media, SetUserSocialMedia] = useState('');
  const [users, SetUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDataUsers() {
      const datos = await fetchUsers.getUsers();
      SetUsers(datos);
    }
    fetchDataUsers();
  }, []);

  const subirImagen = (evento) => {
    const archivo = evento.target.files[0];
    if (archivo) {
      const lector = new FileReader();
      lector.onloadend = () => {
        setImg(lector.result);
      };
      lector.readAsDataURL(archivo);
    }
  };

  const handleCreate = async () => {
    if (!username || !user_password || !user_first_name || !user_last_name || !user_email) {
      alert('Por favor, complete los campos obligatorios.');
      return;
    }

    const payload = {
      username,
      user_password,
      user_first_name,
      user_last_name,
      user_email,
      user_age,
      user_phone,
      user_country,
      user_address,
      user_type_profile,
      user_website,
      user_social_media,
      user_image: Img,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/userData/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Perfil creado:', data);
        navigate('/ProfileUPage');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Error al crear perfil.');
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('Error de red al crear perfil.');
    }
  };

  return (
    <div className="containerU">
      <div>
        <img className='Cabritas' src="src/assets/img/CabritasClr.gif" />
      </div>
      <div>
        <div className='espCreateU'>
          <p className='textCreateU'>Cree su perfil</p><br />
          <p className='textPhotoCharge'>Cargue la fotografía de su perfil</p><br />
          <input className='inpUPhFil' type="file" onChange={subirImagen} /><br /><br />

          <input className='inpU' value={username} onChange={(e) => SetUsername(e.target.value)} placeholder='Alias' />
          <input className='inpU' value={user_password} onChange={(e) => SetUserPassword(e.target.value)} placeholder='Contraseña' />
          <input className='inpU' value={user_first_name} onChange={(e) => SetUserFirstName(e.target.value)} placeholder='Nombre' />
          <input className='inpU' value={user_last_name} onChange={(e) => SetUserLastName(e.target.value)} placeholder='Apellido' />
          <input className='inpU' value={user_email} onChange={(e) => SetUserEmail(e.target.value)} placeholder='Correo' />
          <input className='inpU' value={user_age} onChange={(e) => SetUserAge(e.target.value)} placeholder='Edad' />
          <input className='inpU' value={user_phone} onChange={(e) => SetUserPhone(e.target.value)} placeholder='Teléfono' />

          <select className='inpSelectU' value={user_country} onChange={(e) => SetUserCountry(e.target.value)}>
            <option value="" disabled>Selecciona un país</option>
            <option value="CR">Costa Rica</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="BR">Brasil</option>
            <option value="US">Estados Unidos</option>
          </select><br />

          <input className='inpU' value={user_address} onChange={(e) => SetUserAddress(e.target.value)} placeholder='Dirección' />

          <select className='inpSelectU' value={user_type_profile} onChange={(e) => SetUserTypeProfile(e.target.value)}>
            <option value="" disabled>Selecciona un tipo de perfil</option>
            <option value="I">Intérprete</option>
            <option value="T">Técnico</option>
            <option value="D">Director</option>
          </select>

          <input className='inpU' value={user_website} onChange={(e) => SetUserWebsite(e.target.value)} placeholder='Sitio Web' />

          <select className='inpSelectU' value={user_social_media} onChange={(e) => SetUserSocialMedia(e.target.value)}>
            <option value="" disabled>Selecciona una red social</option>
            <option value="IG">Instagram</option>
            <option value="FB">Facebook</option>
            <option value="TT">Tik Tok</option>
          </select><br /><br />

          <button onClick={handleCreate} className='btnIniciarU'>Crear</button><br /><br />
        </div>
      </div>
    </div>
  );
}

export default CreateProfileU;