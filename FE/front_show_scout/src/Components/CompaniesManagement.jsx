import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, 
  TableRow, TableSortLabel, Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip,
  FormControlLabel, Switch } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import fetchCompanies from '../Services/fetchCompanies';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import EditIcon from '@mui/icons-material/Edit';
import '../Styles/CompaniesManagement.css'
import { Dialog, DialogActions, DialogContent, DialogContentText, 
  DialogTitle, TextField, Button } from '@mui/material';

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
  { id: 'company_name', numeric: true, disablePadding: false, label: 'Nombre' },
  { id: 'company_password', numeric: true, disablePadding: false, label: 'Contraseña' },
  { id: 'company_email', numeric: true, disablePadding: false, label: 'Correo' },
  { id: 'company_funding', numeric: true, disablePadding: false, label: 'Fecha de fundación' },
  { id: 'company_phone', numeric: true, disablePadding: false, label: 'Teléfono' },
  { id: 'company_country', numeric: true, disablePadding: false, label: 'País' },
  { id: 'company_address', numeric: true, disablePadding: false, label: 'Dirección' },
  { id: 'company_type_profile', numeric: true, disablePadding: false, label: 'Categoría' },
  { id: 'company_website', numeric: true, disablePadding: false, label: 'Sitio oficial' },
  { id: 'company_social_media', numeric: true, disablePadding: false, label: 'Redes sociales' },
  { id: 'actions', numeric: true, disablePadding: false, label: 'Acciones', colSpan: 2 },

];

function EnhancedTableHead({ onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }) {
  const createSortHandler = (property) => (event) => onRequestSort(event, property);

return (
  <TableHead>
    <TableRow className='tableRowCColor'>
      <TableCell className='tableCellCColor' padding="checkbox">
        <Checkbox 
          color="primary"
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={rowCount > 0 && numSelected === rowCount}
          onChange={onSelectAllClick}
          inputProps={{ 'aria-label': 'select all users' }}
        />
      </TableCell >      
      {headCells.map((headCell) => (
        <TableCell className='tableCellCColor'
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
    <Toolbar className='toolCColor' sx={{
      pl: { sm: 2 }, pr: { xs: 1, sm: 1 },
      ...(numSelected > 0 && {
        bgcolor: (theme) =>
          alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
      }),
    }}>
      {numSelected > 0 ? (
        <Typography className='typoCColor' sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} seleccionados
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          Gestión de compañías
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
      <DialogTitle>Editar compañía</DialogTitle>
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
      <DialogTitle>Eliminar compañía</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ¿Estás seguro de que deseas eliminar la compañía <strong>{user?.username}</strong>?
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
  const [registrosPorPagina, setRegistrosPorPagina] = useState(5);
  const [companias, setCompanias] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const traeCompanias = async () => {
      try {
        const data = await fetchCompanies.getCompanies();
        setCompanias(data);
      } catch (error) {
        console.error('Error al cargar compañias:', error);
      }
    };
    traeCompanias();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = companias.map((n) => n.id);
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

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setDeleteDialogOpen(true);
  };

  const handleEditSave = async (updatedUser) => {
    try {
      await fetchCompanies.updateCompanies(updatedUser.id, updatedUser);
      setCompanias((prev) =>
        prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
      );
      setEditDialogOpen(false);
    } catch (error) {
      console.error('Error al actualizar:', error);
    }
  };

  const handleDeleteConfirm = async (userId) => {
    try {
      await fetchCompanies.deleteCompanies(userId);
      setCompanias((prev) => prev.filter((u) => u.id !== userId));
      setDeleteDialogOpen(false);
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRegistrosPorPagina = (event) => {
    setRegistrosPorPagina(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangeDense = (event) => setDense(event.target.checked);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * registrosPorPagina - companias.length) : 0;

  const visibleRows = useMemo(() => {
    return [...companias]
      .sort(getComparator(order, orderBy))
      .slice(page * registrosPorPagina, page * registrosPorPagina + registrosPorPagina);
  }, [companias, order, orderBy, page, registrosPorPagina]);

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
              rowCount={companias.length}
            />
            <TableBody className="tableBodyCColor">
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    className="tableRowCColor"
                    hover
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
                        onChange={(event) => handleClick(event, row.id)}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.username}
                    </TableCell>
                    <TableCell align="right">{row.company_name}</TableCell>
                    <TableCell align="right">{row.company_password}</TableCell>
                    <TableCell align="right">{row.company_email}</TableCell>
                    <TableCell align="right">{row.company_funding}</TableCell>
                    <TableCell align="right">{row.company_phone}</TableCell>
                    <TableCell align="right">{row.company_country}</TableCell>
                    <TableCell align="right">{row.company_address}</TableCell>
                    <TableCell align="right">{row.company_type_profile}</TableCell>
                    <TableCell align="right">{row.company_website}</TableCell>
                    <TableCell align="right">{row.company_social_media}</TableCell>
                    <TableCell align="center" colSpan={2}>
                      <Tooltip title="Editar">
                        <IconButton onClick={() => handleEditClick(row)}>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Eliminar">
                        <IconButton onClick={() => handleDeleteClick(row)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={12} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          registrosPorPaginaOptions={[5, 10, 25]}
          component="div"
          count={companias.length}
          registrosPorPagina={registrosPorPagina}
          page={page}
          onPageChange={handleChangePage}
          onRegistrosPorPaginaChange={handleChangeRegistrosPorPagina}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Compactar"
      />

      <EditUserDialog
        open={editDialogOpen}
        user={selectedUser}
        onClose={() => setEditDialogOpen(false)}
        onSave={handleEditSave}
      />

      <ConfirmDeleteDialog
        open={deleteDialogOpen}
        user={selectedUser}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </Box>
  );
}