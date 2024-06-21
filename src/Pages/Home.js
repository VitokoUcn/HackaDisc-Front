import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Importa componentes de react-bootstrap

const Home = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Bienvenido al Dashboard de Pignus</h1>
          <p>Aquí encontrarás un resumen de estado y métricas clave.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}>
          <Card>
            <Card.Body>
              <h2>Resumen General</h2>
              <p>Aquí puedes colocar un resumen ejecutivo o dashboard con gráficos y estadísticas clave.</p>
              {/* Ejemplo de gráfico */}
              <div style={{ height: '300px' /* Ajusta la altura según sea necesario */ }}>
                {/* Aquí iría tu gráfico o visualización de datos */}
                {/* Ejemplo: <Chart data={data} options={options} /> */}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h2>Últimos Eventos</h2>
              {/* Aquí puedes listar los últimos eventos o actividades recientes */}
              <ul>
                <li>Evento 1 - Descripción breve</li>
                <li>Evento 2 - Descripción breve</li>
                <li>Evento 3 - Descripción breve</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <h2>Estadísticas Clave</h2>
              {/* Aquí puedes colocar tablas o gráficos con estadísticas clave */}
              <p>Ejemplo de estadísticas o métricas importantes.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="primary" href="/dashboard">Ir al Dashboard</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
