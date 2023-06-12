### OBSERVACIONES DEL EJERCICIO

- Agregar las regalas del archivo "tsconfig.json" de la siguiente forma:

  ```json
  "rootDir": "./src".
  "outDir": "./dist".
  ```

- La instalación de "ts-node" la debemos instalar para poder compilar y ejecutar nuestra app.ts con un solo comando, se debe modificar el
  pakage.json con el siguiente script (el flag --respawn es similar a --watch en node.js):

  ```json
  "scripts": {
    "start": "ts-node src/app.ts",
    "dev": "ts-node-dev --respawn src/app.ts",
    "build": "tsc"
  }
  ```

- Realizada la configuración anterior, iniciamos la configuración de nuestra "API express", cuando trabajamos con typescript podemos importar nuestros modulos con la palabra reservada "import", diferente como lo haciamos con node.js, debemos instalar los tipos de express:

```
npm i -D @types/express
```
