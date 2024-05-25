<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Web Básica</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: white;
            padding: 10px 0;
            text-align: center;
        }
        nav {
            margin: 0;
            padding: 10px;
            background-color: #444;
            text-align: center;
        }
        nav a {
            color: white;
            margin: 0 10px;
            text-decoration: none;
        }
        main {
            padding: 20px;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>

<header>
    <h1>Bienvenido a Mi Página Web</h1>
</header>

<nav>
    <a href="#inicio">Inicio</a>
    <a href="#sobre">Sobre Nosotros</a>
    <a href="#contacto">Contacto</a>
</nav>

<main>
    <section id="inicio">
        <h2>Inicio</h2>
        <p>Esta es una página web básica hecha con HTML y CSS.</p>
    </section>

    <section id="sobre">
        <h2>Sobre Nosotros</h2>
        <p>Somos una empresa dedicada a proporcionar soluciones web.</p>
    </section>

    <section id="contacto">
        <h2>Contacto</h2>
        <p>Puedes contactarnos a través de nuestro correo: contacto@ejemplo.com</p>
    </section>
</main>

<footer>
    <p>&copy; 2024 Mi Página Web. Todos los derechos reservados.</p>
</footer>

</body>
</html>
