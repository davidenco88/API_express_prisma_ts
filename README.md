# MI API EXPRESS - PRISMA - TYPESCRIPT

### Built with

- Node.js
- Express.js
- Primsa ORM
- Postgres SQL
- Typescript

### Descripción

Esta API permite soporta las principales funciones CRUD, la cual se encuentra conectada a una base de datos SQL Postgres.
La API soporta las siguinetes peticiones:

- Agregar un resgistro a la DB.

http://localhost:3001/api/(users-posts-reviews) - (POST)

- Obtener todos los registros de la base de datos.

http://localhost:3000/api/(users-posts-reviews) - (GET)

- Obtener un resgistro especifico de la DB.

http://localhost:3001/api/(users-posts-reviews)/id - (GET)

- Actualizar un registro de cualquier campo de la tabla especificada en la base de datos, el body ***debe contener el ID*** del registro que se va a actualizar.

http://localhost:3001/api/(users-posts-reviews) - (UPDATE)

- Eliminar un resgistro especifico de la DB.

http://localhost:3001/api/(users-posts-reviews)/id - (DELETE)


