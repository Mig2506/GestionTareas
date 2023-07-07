/*
Sistema de gestión de tareas


es un sistema que se ingresa con formato json usando el software postman para
hacer pruebas y tener el funcionamiento optimo del back-end, utilizando endpoints:
PUT, DELETE, POST, GET.
Se uso mongoDB para almacenar las tareas y poder tener un registro en la base de datos
asi recurrir cuando se necesite

Usando este formato en postman:


{
    "Title": "Almacenar tarea" ,
    "Description": "Usar el formato JSON para mandar los datos",
    "Completed": true,
    "Fecha": "2023-10-11",
    "Commentary":"",
    "Responsable":"",
    "Tags":""
}

Software de prueba usado:
              Postman
Servidor local:
              http://localhost:3000/

ID Tarea de prueba:

              64a7616d0ef55f9df26e27eb

Fecha de entrega: 10/6/2023



Miguel Angel Lopez Puebla


*/

//IMPORTACIONES DE MODULOS
const express = require('express');
const mongoose = require('mongoose');
const Tarea = require('./modelo/model-database');
const morgan = require('morgan');


//CONFIGURACIONES
const app = express();
const port = 3000;
app.use(express.json());
app.use(morgan('dev'));

// Obtener todas las tareas
app.get('/Tarea', async (req, res) => {
  try {
    const tareas = await Tarea.find({});
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error no hay nada' });
  }
});

// Obtener tarea por id 
app.get('/Tarea/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const tarea = await Tarea.findById(id);
    if (tarea) {
      res.status(200).json(tarea);
    } else {
      res.status(404).json({ message: 'Tarea no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la tarea' });
  }
});

// Crear Nueva Tarea
app.post('/Tarea', async (req, res) => {
  try {
    const tarea = await Tarea.create(req.body);
    res.status(201).json(tarea);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al Crear la tarea, favor checa tus campos' });
  }
});

// Eliminar por ID
app.delete('/Tarea/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const tarea = await Tarea.findByIdAndDelete(id);
    if (tarea) {
      res.status(200).json(tarea);
    } else {
      res.status(404).json({ message: 'Tarea no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'No se pudo eliminar' });
  }
});

// Actualizar por id
app.put('/Tarea/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const tarea = await Tarea.findByIdAndUpdate(id, req.body, { new: true });
    if (tarea) {
      res.status(200).json(tarea);
    } else {
      res.status(404).json({ message: 'Tarea no enontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar' });
  }
});

mongoose
  .connect('mongodb+srv://Miguel:1234@pruebatrabajo.uijjsxy.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log('Server running on port', port);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
