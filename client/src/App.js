import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, ListGroup, Spinner } from 'react-bootstrap'; // Importamos componentes de Bootstrap

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Petición al backend (Node.js)
    axios.get('http://localhost:5000/api/iphones')
      .then(response => {
        console.log('Datos recibidos:', response.data); // Verificación en consola
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar datos:', err);
        setError('No se pudieron cargar los productos. Intenta de nuevo.');
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Tienda de iPhones</h1>
      
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
          <p>Cargando productos...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : products.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <div className="row">
          {products.map(product => (
            <div key={product._id} className="col-md-4 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{product.name || 'Producto sin nombre'}</Card.Title>
                  <Card.Text>
                    Precio: ${product.price || 'N/A'}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}
import React from 'react';

function App() {
  return (
    <div>
      <h1>¡Bienvenido a la Tienda de iPhones!</h1>
      <p>Interfaz en construcción. Pronto verás los productos aquí.</p>
    </div>
  );
}


export default App;
