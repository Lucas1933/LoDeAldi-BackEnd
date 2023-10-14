[README en español](#lo-de-aldi-backend---español)
# Lo De Aldi-BackEnd - English

## What is Lo De Aldi?

The API of the [Lo De Aldi!](https://lodealdi.com.ar/) website contains the necessary functionality to display the food menu and perform CRUD operations on it.

It was created with the purpose of building a web app that allows my partner to manage and display the foods she sells in her restaurant. When I started learning JavaScript, I wanted to create a Single Page Application (SPA) with vanilla JavaScript, and I did, but it turned out to be unscalable, and the code was hard to follow. (I'm still learning, of course, but at that moment, I did not know anything about design patterns, architectures, or backend development.) You can check it out here: [Lo De Aldi! Vanilla JavaScript SPA](https://scintillating-yeot-d720f3.netlify.app/).

With the acquired knowledge of how to create a simple server in Express.js, I decided to build something that I could scale and make self-sustainable.

## Back-End

The back-end is built with Node.js and Express.js. Multer is used for image uploads, and Mongoose is used to interact with the MongoDB database. All things considered, it's a very basic MERN app. You can find the front-end Vite+React+TypeScript repository here: [Lo De Aldi! Front-End Repository](https://github.com/Lucas1933/LoDeAldi-FrontEnd).

Regarding the implementation, I wanted to have foods that correspond to categories, so the documents are "Foods" and "Types," which allows adding more types of foods in the future and listing them based on their type. Nothing complicated about it.

The project also includes a login implementation for the CRUD panel. At the moment, I haven't implemented a "retrieve password" functionality because the end user, in this case, is the person I live with. However, I may implement it in the future. That being said, there are no hardcoded passwords or emails in the code. Everything is stored in the database and encrypted as it should be.

### Current State of the Project

As of writing this, the project is deployed and live. There are some bugs that I need to fix regarding image uploads and error handling, but the core functionality is working.

The code may not be as clean as it could be, partly due to time constraints and, more significantly, a lack of experience and mentorship. However, all things considered, I'm content with it. Coding is an ongoing learning journey, and as I gain more experience, I expect my code quality to naturally improve.

# Lo De Aldi-BackEnd - Español

## ¿Qué es Lo De Aldi?

La API del sitio web [Lo De Aldi!](https://lodealdi.com.ar/) contiene la funcionalidad necesaria para mostrar el menú de alimentos y realizar operaciones CRUD en él.

Fue creada con el propósito de construir una aplicación web que permitiera a mi pareja gestionar y mostrar los alimentos que vende en su restaurante. Cuando comencé a aprender JavaScript, quería crear una Aplicación de Página Única (SPA) con JavaScript puro, y lo logré, pero resultó ser poco escalable, y el código era difícil de seguir. (Todavía estoy aprendiendo, por supuesto, pero en ese momento no sabía nada sobre patrones de diseño, arquitecturas o desarrollo backend). Puedes verlo aquí: [Lo De Aldi! Vanilla JavaScript SPA](https://scintillating-yeot-d720f3.netlify.app/).

Con los conocimientos adquiridos sobre cómo crear un servidor simple en Express.js, decidí construir algo que pudiera escalar y ser autosostenible.

## Back-End

El back-end está construido con Node.js y Express.js. Se utiliza Multer para la carga de imágenes y Mongoose para interactuar con la base de datos MongoDB. En resumen, es una aplicación MERN básica. Puedes encontrar el repositorio del front-end Vite+React+TypeScript aquí: [Repositorio de Lo De Aldi! Front-End](https://github.com/Lucas1933/LoDeAldi-FrontEnd).

En cuanto a la implementación, quería tener alimentos que correspondieran a categorías, por lo que los documentos son "Alimentos" y "Tipos", lo que permite agregar más tipos de alimentos en el futuro y listarlos según su tipo. Nada complicado al respecto.

El proyecto también incluye una implementación de inicio de sesión para el panel de CRUD. En este momento, no he implementado una funcionalidad para "recuperar contraseña" porque el usuario final, en este caso, es la persona con la que vivo. Sin embargo, es posible que lo implemente en el futuro. Dicho esto, no hay contraseñas o correos electrónicos codificados en el código. Todo se almacena en la base de datos y está encriptado como debería ser.

### Estado Actual del Proyecto

Hasta la fecha de redacción, el proyecto está desplegado y en funcionamiento. Hay algunos errores que necesito corregir relacionados con la carga de imágenes y la gestión de errores, pero la funcionalidad principal está operativa.

El código puede no estar tan limpio como quisiera, en parte debido a limitaciones de tiempo y, lo que es más significativo, a la falta de experiencia y orientación. Sin embargo, en general, estoy satisfecho con ello. La programación es un proceso de aprendizaje continuo, y a medida que adquiera más experiencia, espero que la calidad de mi código mejore de forma natural.
