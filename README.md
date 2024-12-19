
# Frontend - React (Dockerizado)

Este proyecto proporciona una aplicación frontend construida con **React** y **Vite**, lista para ser ejecutada en contenedores Docker.

## Requisitos

- Docker y Docker Compose instalados en tu máquina.
- Node.js y npm (si decides correr el proyecto de forma local fuera del contenedor).

## Instrucciones de instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/danessi/frontend-react.git
   ```

2. **Accede al directorio del proyecto:**

   ```bash
   cd frontend-react
   ```

3. **Define el nombre de tu empresa:**

   Abre el archivo `docker-compose.yml` y reemplaza todos los valores `xxxx-companyname` por el nombre que desees (por ejemplo, `0001-companyname` o `solarsystem`):
   
   - Reemplaza `xxxx-companyname` por el nombre de tu empresa o identificador único en todos los servicios.
   - Ejemplo: si decides usar `solarsystem`, la entrada en el archivo `docker-compose.yml` quedaría como `solarsystem-frontend-react`.

   Aplica este cambio de nombre en toda ocurrencia de `xxxx-companyname` para que funcione correctamente

   Si no se aplica el punto 3 se setearan con el nombre generico xxxx-companyname todos.

4. **Levanta los contenedores con Docker Compose:**

   Este comando construirá y levantará los contenedores en segundo plano:

   ```bash
   docker compose up -d
   ```

5. **Instala las dependencias si decides correr el proyecto de manera local:**

   Si prefieres correr el proyecto fuera del contenedor, ejecuta los siguientes comandos:

   ```bash
   npm install
   ```

6. **Correr el servidor en modo Live de desarrollo de React:**

   Para ver la aplicación en vivo, puedes usar el siguiente comando:

   ```bash
   npm run dev
   ```
   Después de ejecutar este comando, el puerto puede variar. Si el puerto 3000 ya está en uso, Vite intentará usar otros puertos. Un ejemplo de salida podría ser:

   ```
   Port 3000 is in use, trying another one...
   Port 3001 is in use, trying another one...
   Port 3002 is in use, trying another one...

   VITE v6.0.3  ready in 294 ms

   ➜  Local:   http://localhost:3003/
   ➜  Network: http://192.168.1.139:3003/
   ➜  Network: http://172.24.0.1:3003/
   ➜  Network: http://172.19.0.1:3003/
   ➜  Network: http://172.25.0.1:3003/
   ➜  press h + enter to show help
   ```

   Asegúrate de acceder a la URL correcta que se muestra en la terminal para ver la aplicación en vivo. Generalmente será algo similar a:

   ```bash
   http://localhost:3003/

## Accesos URL

- **Acceso principal donde se genera el build**: [http://localhost:3001](http://localhost:3001)

Este enlace se configurará de manera predeterminada una vez que se haya hecho el build de la aplicación y se haya ejecutado en el contenedor.