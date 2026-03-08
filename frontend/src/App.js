import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [services, setServices] = useState([]);
  const [filter, setFilter] = useState('Todos'); // Estado para el filtro

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log("Error al conectar con el servidor"));
  }, []);

  // Lógica de filtrado
  const servicesFiltered = filter === 'Todos' 
    ? services 
    : services.filter(s => s.category === filter);

  return (
    <div className="app-container">
      <h1>Servicios Domésticos</h1>
      
      {/* Botones de Filtro */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        {['Todos', 'Plomería', 'Limpieza', 'Electricidad'].map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            style={{ 
              margin: '0 5px', 
              padding: '8px 15px', 
              borderRadius: '20px',
              border: 'none',
              backgroundColor: filter === cat ? '#4f46e5' : '#e0e7ff',
              color: filter === cat ? 'white' : '#4338ca',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="services-grid">
        {servicesFiltered.map(s => (
          <div key={s.id} className="service-card">
            <span className="category-tag">{s.category}</span>
            <h2>{s.name}</h2>
            <p>Proveedor: <strong>{s.provider}</strong></p>
            <span className="price">${s.price}</span>
            <button className="btn-reserve" onClick={() => alert(`Reserva para ${s.name} enviada`)}>
              Reservar ahora
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;