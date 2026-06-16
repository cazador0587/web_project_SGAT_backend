# SGAT Backend

Backend desarrollado para **SGAT (Sistema de Gestión de Activos Tecnológicos)**.

La API permite la gestión de usuarios y activos tecnológicos mediante autenticación basada en JWT, almacenamiento en MongoDB y validaciones de datos con Celebrate y Joi.

---

# Tecnologías utilizadas

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcryptjs
* Celebrate
* Joi
* dotenv
* cors
* winston
* express-winston

---

# Instalación

Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```

Instalar dependencias:

```bash
npm install
```

---

# Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/sgatdb
JWT_SECRET=dev-secret-sgat
```

---

# Scripts disponibles

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm start
```

---

# Dependencias principales

| Dependencia  | Descripción                    |
| ------------ | ------------------------------ |
| express      | Framework web                  |
| mongoose     | ODM para MongoDB               |
| bcryptjs     | Encriptación de contraseñas    |
| jsonwebtoken | Generación y validación de JWT |
| celebrate    | Middleware de validación       |
| joi          | Esquemas de validación         |
| dotenv       | Variables de entorno           |
| cors         | Configuración CORS             |
| winston      | Sistema de logs                |

---

# Autenticación

La API utiliza autenticación mediante JWT.

Para acceder a las rutas protegidas es necesario enviar el token en los headers:

```http
Authorization: Bearer JWT_TOKEN
```

---

# Endpoints disponibles

## Registro de usuario

```http
POST /signup
```

Body:

```json
{
  "name": "Fernando Salvador",
  "email": "fernando@sgat.com",
  "password": "123456"
}
```

Respuesta:

```json
{
  "name": "Fernando Salvador",
  "email": "fernando@sgat.com"
}
```

---

## Inicio de sesión

```http
POST /signin
```

Body:

```json
{
  "email": "fernando@sgat.com",
  "password": "123456"
}
```

Respuesta:

```json
{
  "token": "JWT_TOKEN"
}
```

---

## Obtener usuario autenticado

```http
GET /users/me
```

Requiere JWT.

---

## Obtener equipos

```http
GET /equipments
```

Requiere JWT.

---

## Crear equipo

```http
POST /equipments
```

Requiere JWT.

---

## Actualizar equipo

```http
PATCH /equipments/:id
```

Requiere JWT.

---

## Eliminar equipo

```http
DELETE /equipments/:id
```

Requiere JWT.

---

# Manejo de errores

La API implementa manejo centralizado de errores.

Códigos soportados:

| Código | Descripción                |
| ------ | -------------------------- |
| 400    | Datos inválidos            |
| 401    | No autorizado              |
| 404    | Recurso no encontrado      |
| 409    | Conflicto de datos         |
| 500    | Error interno del servidor |

---

# Logs

La aplicación genera automáticamente:

* request.log → Registro de solicitudes
* error.log → Registro de errores

---

# Pruebas

La API puede probarse utilizando:

* Thunder Client
* Postman
* curl

Ejemplo:

```bash
curl -X POST http://localhost:3000/signin \
-H "Content-Type: application/json" \
-d '{
  "email":"fernando@sgat.com",
  "password":"123456"
}'
```
