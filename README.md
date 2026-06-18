# SGAT Backend

## Sistema de Gestión de Activos Tecnológicos (SGAT)

API REST desarrollada con Node.js y Express para la administración de usuarios y activos tecnológicos.

## URL de Producción

https://api.sgat-fsalvador.mooo.com

## Funcionalidades Implementadas

### Usuarios

* Registro de usuarios.
* Inicio de sesión.
* Encriptación de contraseñas mediante bcrypt.
* Generación de JWT.
* Validación de credenciales.

### Equipos

* Crear equipos.
* Obtener equipos.
* Obtener detalle de equipo.
* Actualizar equipos.
* Eliminar equipos.

### Seguridad

* Autenticación mediante JWT.
* Protección de rutas.
* Validación de datos.
* Manejo centralizado de errores.
* Variables de entorno.

## Tecnologías Utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* JWT
* Bcrypt
* PM2
* Nginx

## Variables de Entorno

Archivo `.env`

```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/sgatdb
JWT_SECRET=YOUR_SECRET_KEY
```

## Instalación Local

```bash
git clone <repositorio>
cd web_project_SGAT_backend
npm install
npm start
```

## Endpoints Principales

### Autenticación

```http
POST /signup
POST /signin
```

### Equipos

```http
GET /equipments
GET /equipments/:id
POST /equipments
PATCH /equipments/:id
DELETE /equipments/:id
```

## Despliegue

La aplicación se encuentra desplegada en una máquina virtual de Google Cloud utilizando:

* Ubuntu Server
* Node.js
* MongoDB
* PM2
* Nginx
* Let's Encrypt SSL

## Mejoras Futuras

Se contempla la implementación de nuevos módulos:

* Roles y permisos.
* Gestión de incidencias.
* Gestión de mantenimientos.
* Gestión de licencias.
* Reportes avanzados.
* Exportación de información.
* Auditoría de cambios.
* Notificaciones.
* Dashboard ejecutivo.

## Autor

Fernando Salvador
