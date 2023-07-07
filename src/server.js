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
              http://localhost:3000/tarea/

ID Tarea de prueba:

              64a7616d0ef55f9df26e27eb

Fecha de entrega: 10/6/2023



Miguel Angel Lopez Puebla


*/

//IMPORTACIONES DE MODULOS
const express = require("express"); //variable para usar express
const mongoose = require("mongoose"); //variable para usar mongoose
const Tarea = require("./modelo/model-database"); //variable para comunicarse al modelo
const morgan = require("morgan"); //variable para el uso de morgan

//CONFIGURACIONES
const app = express(); //inicializar express para usarlo
const port = 3000; //puerto
app.use(express.json()); //configuracion para usar el formato JSON
app.use(morgan("dev")); //configuracion para tener un registro en la terminal que se esta mandando al servidor

//--------Inicializacion de EndPoints----------//

// Obtener todas las tareas
app.get("/", async (req, res) => {

  res.send("Hola Invocador!!, gracias por abrir el navegador y entrar al host!, Disfrute su revision y testeo!");
  res.send("Miguel Angel Lopez Puebla" +
  "3328359396" +
  "Miguel.LopezP25@outlook.com");

});




// Obtener todas las tareas
app.get("/Tarea", async (req, res) => {
  try {
    const tareas = await Tarea.find({}); //await espera que tareas se inicialize para seguir con el proceso
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error no hay nada" });
  }
});

// Obtener tarea por id
app.get("/Tarea/:id", async (req, res) => {
  try {
    const { id } = req.params; //parametro de busqueda
    const tarea = await Tarea.findById(id); //crea una tarea
    if (tarea) {
      res.status(200).json(tarea);
    } else {
      res.status(404).json({ message: "Tarea no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener la tarea" });
  }
});

// Crear Nueva Tarea
app.post("/Tarea", async (req, res) => {
  try {
    const tarea = await Tarea.create(req.body); //crea nueva tarea
    res.status(201).json(tarea);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al Crear la tarea, favor checa tus campos" });
  }
});

// Eliminar por ID
app.delete("/Tarea/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tarea = await Tarea.findByIdAndDelete(id); //busca el  id para eliminarlo
    if (tarea) {
      res.status(200).json(tarea);
    } else {
      res.status(404).json({ message: "Tarea no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "No se pudo eliminar" });
  }
});

// Actualizar por id
app.put("/Tarea/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tarea = await Tarea.findByIdAndUpdate(id, req.body, { new: true }); //busca el  id para actualizarlo
    if (tarea) {
      res.status(200).json(tarea);
    } else {
      res.status(404).json({ message: "Tarea no enontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar" });
  }
});

//conexion a base de datos
mongoose
  .connect(
    "mongodb+srv://Miguel:1234@pruebatrabajo.uijjsxy.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Server running on port", port);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
