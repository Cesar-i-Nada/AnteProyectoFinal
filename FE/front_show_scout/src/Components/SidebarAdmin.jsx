import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button
} from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faPeopleGroup, faSitemap, faDoorOpen } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import '../Styles/SidebarAdmin.css';

function SidebarAdmin({ mostrarUsuarios, showCompanies, showOrganizations }) {
  const [open, setOpen] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  const confirmLogout = () => setLogoutDialogOpen(true);
  const cancelLogout = () => setLogoutDialogOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setLogoutDialogOpen(false);
    toast.success('Sesión cerrada correctamente');
    setTimeout(() => navigate('/'), 1500);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <ListItemButton onClick={mostrarUsuarios}>
        <FontAwesomeIcon icon={faCircleUser} />
        <ListItemIcon>
          <ListItemText primary="Gestión de usuarios" />
        </ListItemIcon>
      </ListItemButton>

      <ListItemButton onClick={showCompanies}>
        <FontAwesomeIcon icon={faPeopleGroup} />
        <ListItemIcon>
          <ListItemText primary="Gestión de compañías" />
        </ListItemIcon>
      </ListItemButton>

      <ListItemButton onClick={showOrganizations}>
        <FontAwesomeIcon icon={faSitemap} />
        <ListItemIcon>
          <ListItemText primary="Gestión de organizaciones" />
        </ListItemIcon>
      </ListItemButton>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={confirmLogout}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faDoorOpen} />
            </ListItemIcon>
            <ListItemText primary="Salir" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)} className='menuSidebar'>
        Menú de mantenimiento
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      <Dialog open={logoutDialogOpen} onClose={cancelLogout}>
        <DialogTitle>Confirmar cierre de sesión</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas cerrar sesión?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelLogout}>Cancelar</Button>
          <Button onClick={handleLogout} variant="contained" color="error">
            Cerrar sesión
          </Button>
        </DialogActions>
      </Dialog>
      
      <ToastContainer position="top-center" autoClose={1200} hideProgressBar />
    </div>
  );
}

export default SidebarAdmin;
