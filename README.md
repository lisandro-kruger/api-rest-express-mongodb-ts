### API REST TAREAS
Este proyecto es una API REST para la gestión de tareas. Utiliza Node.js, Express, MongoDB y Mongoose.

### Configuración 
Esta clase se encarga de la configuración de las variables de entorno. Estas variables se utilizan para configurar el puerto del servidor y la URI de MongoDB.

### Controladores 
Esta clase maneja las solicitudes HTTP. Define métodos para obtener todas las tareas, crear una nueva tarea, actualizar una tarea existente y eliminar una tarea.

### Base de datos 
Esta clase se encarga de la conexión a la base de datos MongoDB. Utiliza Mongoose para establecer la conexión.

### Modelos 
Esta clase define el esquema de las tareas en la base de datos. El esquema incluye el nombre de la tarea, la descripción y el estado.

### Rutas 
Esta clase define las rutas de la API. Cada ruta está asociada a un método del controlador.

### Servicios 
Esta clase define los servicios que se utilizan para interactuar con la base de datos. Incluye métodos para obtener todas las tareas, crear una nueva tarea, actualizar una tarea existente y eliminar una tarea.

### Servidor 
Esta clase se encarga de la configuración y el inicio del servidor. Configura los middlewares, define las rutas y inicia el servidor.
