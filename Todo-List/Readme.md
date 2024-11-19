# Todo List App

Realizado Por Mariano apoyandome en Herramientas de IA, el proyecto se desarrollo en un marco para tener algun proyecto visible y con fines educativos.



Este es un proyecto de una aplicación de lista de tareas (Todo List) que permite agregar, eliminar y gestionar tareas de manera sencilla. La aplicación está construida usando **React** para el frontend y **Django** con **Django Rest Framework** para el backend. 

## Funcionalidades

- **Agregar tarea**: Puedes agregar nuevas tareas con un nombre y una descripción.
- **Eliminar tarea**: Puedes eliminar tareas de la lista.
- **Marcar tarea como completada**: Las tareas pueden ser gestionadas como completadas, eliminándolas automáticamente si lo deseas.

## Tecnologías Usadas

- **Frontend**: React.js, CSS
- **Backend**: Django, Django Rest Framework
- **Base de Datos**: SQLite (para desarrollo)

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/en/) (preferentemente la versión LTS)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Python 3.x y Django

## Instalación

### 1. Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio

### 2. Configuraciones Django

Navega a la carpeta del backend y crea un entorno virtual:

cd backend
python -m venv venv
source venv/bin/activate  # En Linux/Mac
venv\Scripts\activate  # En Windows

Instala los requisitos del backend:

pip install -r requirements.txt

Configura la base de datos (en el caso de que necesites migrar las tablas de la base de datos):

python manage.py migrate

Inicia el servidor de desarrollo:

python manage.py runserver
El backend estará disponible en http://localhost:8000.

3. Configuración del frontend (React)
Instala las dependencias del frontend:

Navega a la carpeta del frontend y ejecuta el siguiente comando:

cd frontend
npm install

Inicia el servidor de desarrollo de React:

npm start
El frontend estará disponible en http://localhost:3000.

##Uso

Una vez que ambos servidores estén corriendo:

Ve a http://localhost:3000 en tu navegador.
Puedes agregar nuevas tareas escribiendo un nombre y descripción, luego hacer clic en "Agregar tarea".
Las tareas se pueden eliminar haciendo clic en el botón "Eliminar".
Si una tarea es completada, será eliminada automáticamente.

## Licencia

Este proyecto está licenciado bajo la MIT License - consulta el archivo [LICENSE](LICENSE) para más detalles.

### MIT License

La MIT License es una licencia de software permisiva que permite usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del software, bajo las siguientes condiciones:

1. El aviso de copyright y esta lista de condiciones deben incluirse en todas las copias o partes sustanciales del software.
2. El software se proporciona "tal cual", sin garantía de ningún tipo, expresa o implícita, incluyendo pero no limitándose a las garantías de comerciabilidad, idoneidad para un propósito particular y no infracción.

Contacto
Si tienes alguna pregunta, no dudes en contactarme:

Correo electrónico: mariano_fernandezzs@hotmail.com
GitHub: https://github.com/marianofernandezs

