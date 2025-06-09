import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SidebarAdmin({mostrarUsuarios, showCompanies, showOrganizations}) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <ListItemButton onClick={mostrarUsuarios}>
      <ListItemIcon>
        <InboxIcon/>
        <ListItemText primary={"Gestión de usuarios"}/>
      </ListItemIcon>
      </ListItemButton>

      <ListItemButton onClick={showCompanies}>
      <ListItemIcon>
        <InboxIcon/>
        <ListItemText primary={"Gestión de compañías"}/>
      </ListItemIcon>
      </ListItemButton>

      <ListItemButton onClick={showOrganizations}>
      <ListItemIcon>
        <InboxIcon/>
        <ListItemText primary={"Gestión de organizaciones"}/>
      </ListItemIcon>
      </ListItemButton>

      <Divider />
      <List>
        {['Salir'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Menú de mantenimiento</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
export default SidebarAdmin;