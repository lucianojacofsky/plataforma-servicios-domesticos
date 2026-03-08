const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Base de datos temporal (Mock Data) para tu portafolio
const services = [
  { id: 1, name: 'Plomería Urgente', category: 'Plomería', price: 2500, provider: 'Juan Pérez' },
  { id: 2, name: 'Limpieza Profunda', category: 'Limpieza', price: 1800, provider: 'Ana Gómez' },
  { id: 3, name: 'Electricista Matriculado', category: 'Electricidad', price: 3000, provider: 'Carlos Ruiz' }
];

// Ruta para obtener todos los servicios
app.get('/api/services', (req, res) => {
  res.json(services);
});

// Ruta para simular una reserva
app.post('/api/bookings', (req, res) => {
  const { serviceId, userId } = req.body;
  console.log(`Reserva recibida: Servicio ${serviceId} para el usuario ${userId}`);
  res.status(201).json({ message: 'Reserva creada con éxito' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});