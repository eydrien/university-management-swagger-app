# 🎓 **university-management-app** 📚

Este es un proyecto para la gestión de estudiantes, asignaturas y profesores en un contexto universitario. La aplicación permite gestionar datos de forma eficiente utilizando un backend robusto y un frontend intuitivo.

---

## 🔧 **Características** ✨

- **Backend:** Node.js, Express y TypeScript. 🖥️
- **Frontend:** HTML, CSS y JavaScript (Pendiente por actualizar).🌐 
- **API REST:** Soporta métodos HTTP ( **GET**,  **POST**,  **PUT**, DELETE). 🔄
- **Persistencia de Datos:** Base de datos para almacenar l **a info**rmación. 💾

---

## 📋 **Requisitos** ⚙️

Asegúrate de tener las siguientes versiones de herramientas:

- **Node.js** (v16 o superior) 🔑
- **npm** (v8 o superior) 📦

---

## 🛠️ **Instalación** 🚀

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/eydrien/university-management-app.git
   cd university-management-app

2. **Instala las dependencias**
   ```bash
    npm install express nodemon body-parser mysql2 dotenv cors
    npm install --save-dev ts-node nodemon
    npm install typescript --save-dev
3. **Configura el entorno de desarrollo**
    ```bash
    #Crea un archivo .env en la raíz del proyecto con las variables necesarias (por ejemplo, conexión a la base de datos, puertos, etc.)
    #Si no tienes un archivo .env, puedes basarte en el archivo .env.example para configurarlo.

4. **Ejecuta la aplicación**
    ```bash
    #Para iniciar el servidor en modo desarrollo, ejecuta:
    #Esto arrancará el servidor con nodemon para reiniciar automáticamente en caso de cambios en el código.
    npm run dev

---
## **🌍 Acceso a la API 💡**

 La API está configurada para interactuar con los siguientes métodos HTTP:

 **PROFESORES**
- **GET** /profesores: Obtener lista de profesores.
- **POST** /profesores: Crear un nuevo profesor.
- **PUT** /profesores/:cod_e: Actualizar un profesor por su ID.
- **DELETE** /profesores/:cod_e: Eliminar un profesor por su ID.   

**ESTUDIANTES**
- **GET** /estrudiantes: Obtener lista de estudiantes.
- **POST** /estrudiantes: Crear un nuevo estudiante.
- **PUT** /estrudiantes/:cod_e: Actualizar un estudiante por su ID.
- **DELETE** /estrudiantes/:cod_e: Eliminar un estudiante por su ID.

**ASIGNATURAS**
- **GET** /asignaturas: Obtener lista de asignaturas.
- **POST** /asignaturas: Crear una nueva asignatura.
- **PUT** /asignaturas/:cod_e: Actualizar una asignatura por su ID.
- **DELETE** /asignaturas/:cod_e: Eliminar una asignatura por su ID.

**IMPARTE**
- **GET** /imparte: Obtener lista de asignaturas impartidas.
- **POST** /imparte: Crear asigna la asignatura al profesor que la imparte.
- **PUT** /imparte?: Actualizar una asignatura por su llave compuesta (ip_p, cod_a, grupo, semestre) .
- **DELETE** /imparte?: Eliminar una asignatura por su llave compuesta (ip_p, cod_a, grupo, semestre) .

**INSCRIBE**
- **GET** /inscribe: Obtener lista de asignaturas y estudiantes inscritos.
- **POST** /inscribe: Crear una inscripcion a una materia.
- **PUT** /inscribe?: Actualiza las notas de una asignatura por su llave compuesta (cod_e, cod_a, ip_p, grupo, semestre) .
- **DELETE** /imparte?: Elimina la incripcion realizada por su llave compuesta (cod_e, cod_a, ip_p, grupo, semestre).  
---


## **📄 Licencia 🔒**
    Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

---
## **🌐 Grupo de trabajo 📱**
    1. Lorena
    2. Joynner
    3. Adrian 
