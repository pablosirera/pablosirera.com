---
title: 'Estructura de carpetas en Vue'
description: 'Ejemplo de estructura de carpetas en Vue'
date: 2020-02-01
timeToRead: 4
image: scaffolding-vuejs.jpg
tags:
  - vue
---

Hace ya un tiempo que empecé a trabajar con <span class='vue'>Vue</span> y, sinceramente, es uno de los frameworks que más me apasiona. Entre muchas razones, me gusta por su sencillez, por su flexibilidad y por su comunidad.

Una vez comienzas a usar <span class='vue'>Vue</span> con asiduidad y realizas varios proyectos, empiezas a darte cuenta de que su base se construye sobre componentes. Con el desarrollo de aplicaciones se hace notar su flexibilidad con respecto a la estructura de carpetas, el framework no te pone prácticamente ningún problema al respecto, pero una vez comienzas a generar vistas (que son componentes), componentes que pertenecen solo a una vista, componentes comunes, etc. ¿qué pasa? ¿cómo organizamos todos esos componentes para verlos día a día y que sea lo menos doloroso posible?

En el post de hoy os enseñaré un ejemplo de scaffolding, el cual he ido adquiriendo con el paso del tiempo tras probar un ejemplo tras otro, finalmente este es, desde mi opinión, el más cómodo.

## Crear estructura base

Para empezar, tendremos que generar un proyecto de <span class='vue'>Vue</span> básico con <span class='code'>vue-cli</span>, ya que la estructura que nos presenta desde un primer momento es la que intentaremos mantener siempre. Yo he generado un proyecto con la configuración lo más real posible a lo que se podría usar en un proyecto relativamente grande.

<custom-image src="https://res.cloudinary.com/de5xzoviz/image/upload/v1596040025/scaffolding-vue/options-vue-cli.png" alt="opciones vue cli seleccionadas"></custom-image>

Una vez termine de instalarse todo, esta será la estructura que nos genera <span class='code'>vue-cli</span>.

<custom-image src="https://res.cloudinary.com/de5xzoviz/image/upload/v1596040025/scaffolding-vue/scaffolding-base.png" alt="estructura base proyecto vue"></custom-image>

## Crear componentes globales

Cuando desarrollas una aplicación SPA, por ejemplo, con diferentes rutas y diferentes vistas, al final terminas teniendo componentes que se usan solamente en ciertas vistas y otros que se usan por toda la aplicación. En este apartado vamos a organizar los componentes comunes por tipos de componentes. Veamos un ejemplo visual:

<custom-image src="https://res.cloudinary.com/de5xzoviz/image/upload/v1596040025/scaffolding-vue/scaffolding-global-components.png" alt="estructura componentes globales vue">
</custom-image>

Como veis, dentro de la carpeta <span class='code'>Components</span> hemos generado dos carpetas, una <span class='code'>Layout</span> y otra <span class='code'>Ui</span>. Esto son dos de las diferenciaciones que yo suelo hacer en mis proyectos, pero depende del proyecto o del equipo de desarrollo los tipos de organización pueden variar.

En el caso de tener componentes que no pertenecen a ningún tipo específico, la idea sería generar una carpeta llamada <span class='code'>Common</span> a la misma altura que layout y ui.

## Crear componentes de vista

Una vez que tengamos los componentes globales organizados, continuaremos con los componentes que solamente pertenecen a una vista en concreto. Veamos un ejemplo.

<custom-image src="https://res.cloudinary.com/de5xzoviz/image/upload/v1596040025/scaffolding-vue/scaffolding-views-components.png" alt="estructura componentes vista vue"></custom-image>

En este ejemplo vemos como he creado una carpeta por vista y dentro de ella el componente de la vista lo he llamado <span class='code'>index.vue</span>. Dentro de cada carpeta existe una carpeta <span class='code'>components</span> que en este caso pertenecen solamente a los componentes de la vista.

## Resto de ficheros

Una vez tengamos los componentes organizados, vamos a organizar el resto de ficheros de la aplicación. La idea sería crear una carpeta <span class='code'>shared</span> dentro de nuestro <strong>src</strong> y ahí añadir por ejemplo nuestras constantes, los archivos de traducciones, directivas, mixins, constantes, modelos, etc.

<custom-image src="https://res.cloudinary.com/de5xzoviz/image/upload/v1596040025/scaffolding-vue/scaffolding-rest-of-files.png" alt="estructura resto de ficheros vue">
</custom-image>

La idea de shared es mantener lo nativo de <span class='vue'>Vue</span> en la carpeta raíz (components, store, etc.) y el contenido adicional almacenarlo dentro de este directorio.

## Conclusión

Por último, me gustaría remarcar que aunque para mi este scaffolding es el más útil para trabajar no tiene que ser así para todo el mundo. Así que os animo a todos a probar día a día cual es el que más se adapta a vuestra forma de trabajo.

Espero que pueda serviros de ayuda y cualquier feedback por <the-link url='https://twitter.com/pablosirera'>twitter</the-link> será bienvenido ✌️.

Os dejo también el link al repo de <the-link url='https://github.com/pablosirera/scaffolding-vue'>github</the-link>, por si os queréis descargar este ejemplo.
