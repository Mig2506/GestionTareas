# GestionTareas
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

 Codigo Para Gestion de tareas mediante js, express, nodeJS


comandos utilizados para el funcionamiento del 

Si fallan los modulos, borrar e instalar de nuevo con este comando

    npm install
  
   
   instalacion de modulos de mongodb
        
        npm i mongodb
     

        
instalacion de modulos de express

    npm i express
        

        
creacion de package.json

    npm init -y
        

corregir vulnerabilidades

        npm audit fix

 correr el servidor por nodemon
                        
    npm run dev
       

registro de request del servidor

    npm i morgan
        
herramienta para correr y actualizar el servidor tiempo real

        npm i nodemon
    
 instalar el comunicador a la base de datos de mongoDB

    npm i mongoose
       
para correr el servidor   

    npm run dev     
    
