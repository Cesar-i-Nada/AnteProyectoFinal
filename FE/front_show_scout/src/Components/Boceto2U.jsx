import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
  TableSortLabel, Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip,
  FormControlLabel, Switch
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import fetchUsers from '../Services/fetchUsers';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import EditIcon from '@mui/icons-material/Edit';
import '../Styles/Boceto2U.css'


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  { id: 'username', numeric: false, disablePadding: true, label: 'Alias' },
  { id: 'user_first_name', numeric: true, disablePadding: false, label: 'Nombre' },
  { id: 'user_last_name', numeric: true, disablePadding: false, label: 'Apellido' },
  { id: 'user_email', numeric: true, disablePadding: false, label: 'Correo' },
  { id: 'user_age', numeric: true, disablePadding: false, label: 'Edad' },
  { id: 'user_phone', numeric: true, disablePadding: false, label: 'Teléfono' },
  { id: 'user_country', numeric: true, disablePadding: false, label: 'País' },
  { id: 'user_address', numeric: true, disablePadding: false, label: 'Dirección' },
  { id: 'user_type_profile', numeric: true, disablePadding: false, label: 'Categoría' },
  { id: 'user_website', numeric: true, disablePadding: false, label: 'Sitio oficial' },
  { id: 'user_social_media', numeric: true, disablePadding: false, label: 'Redes sociales' },
  { id: 'actions', numeric: true, disablePadding: false, label: 'Acciones', colSpan: 2 },

];

function EnhancedTableHead({ onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }) {
  const createSortHandler = (property) => (event) => onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow className='tableRowUColor'>
        <TableCell className='tableCellUColor' padding="checkbox">
          <Checkbox 
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all users' }}
          />
        </TableCell >
        {headCells.map((headCell) => (
          <TableCell className='tableCellUColor'
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar({ numSelected }) {
  return (
    <Toolbar className='toolUColor' sx={{
      pl: { sm: 2 }, pr: { xs: 1, sm: 1 },
      ...(numSelected > 0 && {
        bgcolor: (theme) =>
          alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
      }),
    }}>
      {numSelected > 0 ? (
        <Typography className='typoUColor' sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} seleccionados
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          Gestión de usuarios
        </Typography>
      )}
      
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export function EditUserDialog({ open, user, onClose, onSave }) {
  const [formData, setFormData] = useState(user || {});

  useEffect(() => {
    setFormData(user || {});
  }, [user]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = () => onSave(formData);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Editar usuario</DialogTitle>
      <DialogContent>
        {Object.entries(formData).map(([key, value]) => (
          typeof value === 'string' || typeof value === 'number' ? (
            <TextField
              key={key}
              margin="dense"
              name={key}
              label={key.replace(/_/g, ' ')}
              fullWidth
              value={value}
              onChange={handleChange}
              variant="outlined"
            />
          ) : null
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave} variant="contained">Guardar</Button>
      </DialogActions>
    </Dialog>
  );
}

EditUserDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  user: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export function ConfirmDeleteDialog({ open, user, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Eliminar usuario</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ¿Estás seguro de que deseas eliminar al usuario <strong>{user?.username}</strong>?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={() => onConfirm(user?.id)} variant="contained" color="error">
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmDeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  user: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('username');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [usuarios, setUsuarios] = useState([]);
  

  useEffect(() => {
    const traeUsuarios = async () => {
      try {
        const data = await fetchUsers.getUsers();
        setUsuarios(data);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    };
    traeUsuarios();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = usuarios.map((n) => n.id);
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, id];
    } else {
      newSelected = selected.filter((item) => item !== id);
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const deleteUser = async(id)=>{
    const peticion = await fetchUsers.deleteUsers(id)
    console.log(peticion);
  }

  const updateUser = async(id)=>{
    const peticion = await fetchUsers.updateUsers(id)
    console.log(peticion);
  }

  const handleChangeDense = (event) => setDense(event.target.checked);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - usuarios.length) : 0;

  const visibleRows = useMemo(() => {
    return [...usuarios]
      .sort(getComparator(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [usuarios, order, orderBy, page, rowsPerPage]);

  const isSelected = (id) => selected.indexOf(id) !== -1;


  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={usuarios.length}
            />
            <TableBody className='tableBodyUColor'>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow className='tableRowUColor'
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">{row.username}</TableCell>
                    <TableCell align="right">{row.user_first_name}</TableCell>
                    <TableCell align="right">{row.user_last_name}</TableCell>
                    <TableCell align="right">{row.user_email}</TableCell>
                    <TableCell align="right">{row.user_age}</TableCell>
                    <TableCell align="right">{row.user_phone}</TableCell>
                    <TableCell align="right">{row.user_country}</TableCell>
                    <TableCell align="right">{row.user_address}</TableCell>
                    <TableCell align="right">{row.user_type_profile}</TableCell>
                    <TableCell align="right">{row.user_website}</TableCell>
                    <TableCell align="right">{row.user_social_media}</TableCell>
  
                    <TableCell align='center' colspan="2">{row.actions}
                      
                        <TableCell align="right">
                        <button onClick={()=>deleteUser(row.id)}>Eliminar</button>
                        </TableCell>

                        <TableCell align="right">
                        <button onClick={()=>updateUser(row.id)}>Actualizar</button>
                        </TableCell>
                      
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={1} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={usuarios.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Compactar"
      />
    </Box>
  );
}

