import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS

// Ejemplo de datos de empresas y trabajadores
const companiesData = [
  {
    id: 1,
    name: 'Alfaro y Pino Ltda.',
    subcompanies: [
      {
        id: 11,
        name: 'Fuentes Ltda.',
        workers: [
          {
            id: 101,
            name: 'Juan Pérez',
            area: 'Administración',
            position: 'Analista',
            status: 'Evaluado',
            evaluations: {
              adaptability_to_change: 8,
              safe_conduct: 7,
              dynamism_energy: 9,
              personal_effectiveness: 7,
              initiative: 8,
              working_under_pressure: 6,
            },
            last_evaluation_date: '2023-05-15',
          },
          {
            id: 102,
            name: 'María García',
            area: 'Producción',
            position: 'Operador',
            status: 'En Intervención',
            evaluations: {
              adaptability_to_change: 7,
              safe_conduct: 6,
              dynamism_energy: 8,
              personal_effectiveness: 6,
              initiative: 5,
              working_under_pressure: 7,
            },
            last_evaluation_date: '2023-06-20',
          },
        ],
      },
      {
        id: 12,
        name: 'Molina y Benítez Limitada',
        workers: [
          {
            id: 103,
            name: 'Carlos López',
            area: 'Ventas',
            position: 'Vendedor',
            status: 'Intervenido',
            evaluations: {
              adaptability_to_change: 9,
              safe_conduct: 8,
              dynamism_energy: 7,
              personal_effectiveness: 9,
              initiative: 8,
              working_under_pressure: 7,
            },
            last_evaluation_date: '2023-04-10',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Michelle Salazar Aravena EIRL',
    workers: [
      {
        id: 201,
        name: 'Laura Torres',
        area: 'Recursos Humanos',
        position: 'Gerente',
        status: 'Evaluado',
        evaluations: {
          adaptability_to_change: 7,
          safe_conduct: 8,
          dynamism_energy: 6,
          personal_effectiveness: 7,
          initiative: 6,
          working_under_pressure: 8,
        },
        last_evaluation_date: '2023-07-05',
      },
      {
        id: 202,
        name: 'Pedro Ramírez',
        area: 'Producción',
        position: 'Supervisor',
        status: 'En Intervención',
        evaluations: {
          adaptability_to_change: 6,
          safe_conduct: 7,
          dynamism_energy: 8,
          personal_effectiveness: 5,
          initiative: 6,
          working_under_pressure: 7,
        },
        last_evaluation_date: '2023-06-30',
      },
    ],
  },
];

const WorkerAdministrationPage = () => {
    const [selectedWorker, setSelectedWorker] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleWorkerClick = (worker) => {
        setSelectedWorker(worker);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div className="container mt-4">
            <Card style={{ width: '100%' }}>
                <CardContent>
                    <Typography variant="h6" className="mb-3">
                        Worker Administration
                    </Typography>
                    <Typography variant="h5" className="mb-3">
                        Company:
                    </Typography>
                    {companiesData.map((company) => (
                        <Accordion key={company.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className="bg-light"
                            >
                                <Typography>{company.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableContainer>
                                    <Table>
                                        {!company.subcompanies && (
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell style={{fontWeight: 'bold'}}>Nombre</TableCell>
                                                    <TableCell style={{fontWeight: 'bold'}}>Área</TableCell>
                                                    <TableCell style={{fontWeight: 'bold'}}>Estado</TableCell>
                                                    <TableCell style={{fontWeight: 'bold'}}>Promedio Puntaje</TableCell>
                                                </TableRow>
                                            </TableHead>
                                        )}
                                        <TableBody>
                                            {company.subcompanies && company.subcompanies.length > 0 ? (
                                                company.subcompanies.map((subcompany) => (
                                                    <Accordion key={subcompany.id}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel2a-content"
                                                            id="panel2a-header"
                                                            className="bg-light"
                                                        >
                                                            <Typography>{subcompany.name}</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails style={{minWidth: '700px'}}>
                                                            <TableContainer>
                                                                <Table>
                                                                <TableHead>
                                                                <TableRow>
                                                                    <TableCell style={{fontWeight: 'bold'}}>Nombre</TableCell>
                                                                    <TableCell style={{fontWeight: 'bold'}}>Área</TableCell>
                                                                    <TableCell style={{fontWeight: 'bold'}}>Estado</TableCell>
                                                                    <TableCell style={{fontWeight: 'bold'}}>Promedio Puntaje</TableCell>
                                                                </TableRow>
                                                                </TableHead>
                                                                    <TableBody style={{minWidth: '700px'}}>
                                                                        {subcompany.workers.map((worker) => (
                                                                            <TableRow
                                                                                key={worker.id}
                                                                                onClick={() => handleWorkerClick(worker)}
                                                                                className={selectedWorker && selectedWorker.id === worker.id ? 'table-primary' : ''}
                                                                                style={{ cursor: 'pointer' , width: '100%'}}
                                                                            >
                                                                                <TableCell>{worker.name}</TableCell>
                                                                                <TableCell>{worker.area}</TableCell>
                                                                                <TableCell>{worker.status}</TableCell>
                                                                                <TableCell>{(Object.values(worker.evaluations).reduce((acc, curr) => acc + curr, 0) / Object.values(worker.evaluations).length).toFixed(2)}</TableCell>
                                                                            </TableRow>
                                                                        ))}
                                                                    </TableBody>
                                                                </Table>
                                                            </TableContainer>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                ))
                                            ) : (
                                                <>
                                                    {company.workers.map((worker) => (
                                                        <TableRow
                                                            key={worker.id}
                                                            onClick={() => handleWorkerClick(worker)}
                                                            className={selectedWorker && selectedWorker.id === worker.id ? 'table-primary' : ''}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <TableCell>{worker.name}</TableCell>
                                                            <TableCell>{worker.area}</TableCell>
                                                            <TableCell>{worker.status}</TableCell>
                                                            <TableCell>{(Object.values(worker.evaluations).reduce((acc, curr) => acc + curr, 0) / Object.values(worker.evaluations).length).toFixed(2)}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                    <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="lg">
                        <DialogTitle>Detalles de Trabajador</DialogTitle>
                        <DialogContent style={{ minWidth: '800px' }}>
                            {selectedWorker && (
                                <React.Fragment>
                                    <div className="mb-3">
                                        <Typography variant="h6">Nombre: {selectedWorker.name}</Typography>
                                        <Typography variant="body1">Cargo: {selectedWorker.position}</Typography>
                                        <Typography variant="body1">Área: {selectedWorker.area}</Typography>
                                        <Typography variant="body1">Estado: {selectedWorker.status}</Typography>
                                        <Typography variant="body1">Fecha última evaluación: {selectedWorker.last_evaluation_date}</Typography>
                                    </div>
                                    <Typography variant="subtitle1">Evaluaciones:</Typography>
                                    <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell style={{fontWeight: 'bold'}}>Evaluación</TableCell>
                                                    <TableCell style={{fontWeight: 'bold'}}>Puntaje</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {Object.entries(selectedWorker.evaluations).map(([evaluation, score]) => (
                                                    <TableRow key={evaluation}>
                                                        <TableCell>{evaluation.replace(/_/g, ' ')}</TableCell>
                                                        <TableCell>{score}</TableCell>
                                                    </TableRow>
                                                ))}
                                                
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </React.Fragment>
                            )}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog} color="primary">
                                Cerrar
                            </Button>
                        </DialogActions>
                    </Dialog>
                </CardContent>
            </Card>
        </div>
    );
};

export default WorkerAdministrationPage;
