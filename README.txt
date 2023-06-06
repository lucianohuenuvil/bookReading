BOOK READING APP

Proyecto realizado en React para simular la lectura y búsqueda de libros, se consume la api de "https://anapioficeandfire.com/" para obtener la lista de libros para
luego ser utilizada en la app con las funcionalidades de "Ver detalles", "Agregar a favoritos" y por último la validación de un formulario para agregar un nuevo libro
(Esta es solo una validación de formulario mediante formik).
Se implementa Context para un control del estado base de la app, en este caso "favoritos" que usará el localstorage para guardar la información de manera local.
Para el diseño de la App se utilizó Tailwind Css


Requisitos:
-Instalar Node Js


Instalación:

-Clonar el repositorio "https://github.com/lucianohuenuvil/bookReading"
-Acceder a la carpeta book-reading y ejecutar "npm install" para instalar dependencias

Ejecución:

- npm start

- Abrir "http://localhost:3000/" en el navegador


Preguntas:

¿Cómo decidiste las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

 -Se implementaron el uso de hook's para el manejo de estados de la App, con el fin de manejar el estado de una manera óptima y moderna.
Tambien se implementó el uso de context debido a que la aplicación es bastante pequeña como para hacer uso de redux, ya que en la app solo se manera localmente el 
estado de los libros favoritos que el usuario seleccionó.
Por último, se implementó formik según lo solicitado para llevar un sencillo uso y validación de formularios.


¿Hay alguna mejora que dejaste pendiente de hacer en su envío?

-Si, lamentablemente no cuento algunos conocimientos relacionados al testing y storybook, los cuales eran requeridos en el planteamiento del ejercicio.

¿Qué harías de manera diferente si se le asignara más tiempo?

En esta ocasion debería optar por continuar aprendiendo sobre prácticas de testing, ya que es algo fundamental en el desarrollo de aplicaciones.
