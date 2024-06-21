import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const styles = {
  card: css`
    margin-bottom: 24px; /* theme.spacing(3) */
  `,
  title: css`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px; /* theme.spacing(2) */
  `,
  searchInput: css`
    margin-bottom: 16px; /* theme.spacing(2) */
  `,
  formControl: css`
    margin-left: 16px;
    min-width: 160px;
    width: 100%;
    margin-bottom: 16px; /* Espacio entre los select y los botones */
  `,
  selectLabel: css`
    background-color: #f2f2f2;
    padding: 8px;
    border-radius: 4px;
  `,
  button: css`
    margin-left: 16px;
    margin-top: 8px;
  `,
};

const workersData = [
  { id: 1, name: 'Juan Pérez', area: 'Administración', position: 'Analista', status: 'Evaluado' },
  { id: 2, name: 'María García', area: 'Producción', position: 'Operador', status: 'En Intervención' },
  { id: 3, name: 'Carlos López', area: 'Ventas', position: 'Vendedor', status: 'Intervenido' },
  // Agrega más datos según sea necesario
];

const WorkersList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArea, setFilterArea] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangeFilterArea = (event) => {
    setFilterArea(event.target.value);
  };

  const handleChangeFilterStatus = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleToggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleApplyFilters = () => {
    setFilterOpen(false); // Cerrar el menú de filtros al aplicar
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setFilterArea('');
    setFilterStatus('');
    setFilterOpen(false); // Cerrar el menú de filtros al limpiar
  };

  const filteredWorkers = workersData.filter((worker) => {
    const matchesSearch = worker.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = filterArea === '' || worker.area === filterArea;
    const matchesStatus = filterStatus === '' || worker.status === filterStatus;
    return matchesSearch && matchesArea && matchesStatus;
  });

  const sortedWorkers = filteredWorkers.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Card css={styles.card}>
      <CardContent>
        <Typography variant="h6" css={styles.title}>
          Lista de Trabajadores
        </Typography>
        <Box display="flex" alignItems="center">
          <TextField
            css={styles.searchInput}
            label="Buscar trabajador"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={handleChangeSearch}
          />
          <Box ml={2} display="flex" alignItems="center">
            <Button
              variant="outlined"
              size="small"
              onClick={handleToggleFilter}
              startIcon={<FilterListIcon />}
            >
              Filtrar
            </Button>
            {filterOpen && (
              <Box ml={2} display="flex" alignItems="center">
                <FormControl variant="outlined" size="small" css={styles.formControl}>
                  <InputLabel className={styles.selectLabel}>Filtrar por área</InputLabel>
                  <Select
                    value={filterArea}
                    onChange={handleChangeFilterArea}
                    label="Área"
                    defaultValue=""
                  >
                    <MenuItem value="">Todos</MenuItem>
                    <MenuItem value="Administración">Administración</MenuItem>
                    <MenuItem value="Producción">Producción</MenuItem>
                    <MenuItem value="Ventas">Ventas</MenuItem>
                    {/* Agregar más áreas según sea necesario */}
                  </Select>
                </FormControl>
                <FormControl variant="outlined" size="small" css={styles.formControl}>
                  <InputLabel className={styles.selectLabel}>Filtrar por estado</InputLabel>
                  <Select
                    value={filterStatus}
                    onChange={handleChangeFilterStatus}
                    label="Estado"
                    defaultValue=""
                  >
                    <MenuItem value="">Todos</MenuItem>
                    <MenuItem value="Evaluado">Evaluado</MenuItem>
                    <MenuItem value="En Intervención">En Intervención</MenuItem>
                    <MenuItem value="Intervenido">Intervenido</MenuItem>
                    
                  </Select>
                </FormControl>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleClearFilters}
                  css={styles.button}
                >
                  Limpiar filtros
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleApplyFilters}
                  css={styles.button}
                >
                  Aplicar
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Área</TableCell>
                <TableCell>Puesto</TableCell>
                <TableCell>Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedWorkers.map((worker) => (
                <TableRow key={worker.id}>
                  <TableCell>{worker.name}</TableCell>
                  <TableCell>{worker.area}</TableCell>
                  <TableCell>{worker.position}</TableCell>
                  <TableCell>{worker.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default WorkersList;

