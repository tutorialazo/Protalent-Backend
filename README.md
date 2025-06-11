# Backend de Protalent

## Prerrequisitos

- **Node.js** v18 o posterior
- **MySQL** instancia en ejecución

## Instalación

1. Instalar dependencias:
```bash
npm install
```
2. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
PORT=5000 # opcional
DB_HOST=localhost
DB_PORT=3306
DB_NAME=your_database
DB_USER=your_user
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
```
3. Asegurarse de que MySQL se esté ejecutando y sea accesible con las credenciales mencionadas anteriormente.

## Ejecución del servidor

- Para desarrollo con recarga automática:
```bash
npm run dev
```
- Para producción/ejecución estándar:
```bash
npm start
```

El servidor escucha en el puerto definido por `PORT` (predeterminado: `5000`) y se conecta a MySQL utilizando la información de `.env`.
