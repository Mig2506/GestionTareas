//omporacion de mongoose
const mongoose = require('mongoose');


// Crear el eschema
const productSchema = mongoose.Schema(
 
 //base de datos no relacional
  {
    Title: {
      type: String,
      required: [true, "Titulo requerido"],
    },
    Description: {
      type: String,

      required: [true, "Descripcion requerida"],
    },

    Completed: {
      type: Boolean,
      required: [true, "Campo requerido"],

    },

    Fecha: {
      type: Date,
      required: [true, "Fecha requerida year-month-day"],

    },

    Commentary: {
      type: String,
      default: "",
    },

    Responsable: {

      type: String,
      default: "",
    },

    Tags: {

      type: String,
      default: "",
    }

  
  },

);

// Crear el modelo Tarea
const Tarea = mongoose.model('Tarea', productSchema);

module.exports = Tarea;
