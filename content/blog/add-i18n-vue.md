---
title: 'Añadir i18n en una aplicación Vue'
description: 'Cómo traducir tus aplicaciones con Vue e I18n'
date: 2019-02-01
timeToRead: 5
tags:
  - vue
---

¿Hoy en día quién no necesita acceder a una web y poder visitarla en su propio idioma? La respuesta es obvia y con el plugin <the-link url='https://kazupon.github.io/vue-i18n/'>vue-i18n</the-link> podemos configurar nuestra aplicación para que sea multilenguaje.

Para poder seguir estas instrucciones es necesario tener ya generado un proyecto con Vue.

## Configurar vue-i18n

En primer lugar, hay que instalar el plugin vue-i18n para la internalización.

```bash
npm install vue-i18n --save
```

Una vez instalado, procedemos a configurar el plugin. En la carpeta <span class='code'>src</span>, hay que crear un directorio llamado <span class='code'>plugins</span> y dentro de él crear un fichero <span class='code'>i18n.js</span>.

Dentro de este archivo, añadiremos la configuración del plugin para los idiomas que nosotros queramos. Pueden añadirse todos los idiomas que se desee, pero para este ejemplo solamente haremos Español e Inglés.

Para poder iniciar la configuración de los idiomas, primero hay que crear la estructura de mensajes. Inicializaremos un objeto de JavaScript, las <span class='code'>keys</span> del objeto deben ser el idioma que queramos añadir.

Para crearlo, añade el siguiente código al archivo <span class='code'>i18n.js</span>:

```js
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  es: {},
  en: {},
}
```

Con el código <span class='code'>Vue.use(VueI18n)</span>, le estamos comunicando a <span class='vue'>Vue</span> que use el plugin que hemos instalado.

A continuación, vamos a crear una instancia de <span class='code'>VueI18n</span> para poder usarlo. Después del código anterior añadimos lo siguiente:

```js
export const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages,
})
```

En este caso, estamos transmitiendo a la librería de <span class='code'>vue-i 18n</span> que nos cree una instancia con el lenguaje que nosotros queremos, en este caso Español y en el caso de que falle sería el Inglés gracias a la propiedad <span class='code'>fallbackLocale</span>.

Si quisieramos que VueI18n se instanciase con el idioma por defecto del navegador, sería suficiente modificando la propiedad <span class='code'>locale</span> por lo siguiente:

```js
locale: window.navigator.language.split('-')[0]
```

Ahora necesitamos comunicar a <span class='vue'>Vue</span> que use la instancia de <span class='code'>VueI18n</span>. Para ello, iremos a main.js e importaremos nuestro objeto i18n:

```js
import { i18n } from '@/plugins/i18n'
```

Una vez importado, lo añadiremos al objeto de <span class='vue'>Vue</span>:

```js
import Vue from 'vue'
import App from './App.vue'
import { i18n } from '@/plugins/i18n'

Vue.config.productionTip = false

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount('#app')
```

## Añadir texto para traducir

Vamos a añadir contenido a nuestro objeto <span class='code'>messages</span>, concretamente aquellos textos que queramos usar posteriormente traducidos en la aplicación. Lo que deberá ir dentro del objeto del idioma será otro objeto clave-valor, donde la clave será el nombre por el cual accederemos a ese texto. Para ello, abrimos el fichero <span class='code'>i18n.js</span> y modificamos el objeto <span class='code'>messages</span>:

```js
const messages = {
  es: {
    hello: 'Hola Mundo!',
  },
  en: {
    hello: 'Hello World!',
  },
}
```

\* Es importante que tanto la clave del idioma como la del texto se llamen igual y que si se añade un texto se haga en ambos idiomas, para evitar que posteriormente nos de errores. \*

Ahora vamos a usar esas traducciones, para eso, nos vamos a cualquier componente ya creado (por ejemplo <span class='code'>App.vue</span>) y añadimos el siguiente código HTML:

```html
<h1>{{ $t('hello') }}</h1>
```

Para usar el plugin de internalización simplemente usaremos <span class='code'>\$t</span> y entre paréntesis añadiremos como un string la key deseada.

En el caso de tener más elementos dentro del objeto anterior, podremos modificarlo así:

```js
const messages = {
  es: {
    hello: {
      world: 'Hola Mundo!',
    },
  },
  en: {
    hello: {
      world: 'Hello World!',
    },
  },
}
```

y en nuestro código HTML sería:

```html
<h1>{{ $t('hello.world') }}</h1>
```

## Cambiar de idioma

\* Cabe destacar que la siguiente solución es una posibilidad que se propone pero existen muchas más que quizás se acoplen mejor a tu proyecto. \*

Para configurar el cambio de un idioma a otro debemos de tener implementada una lógica que cambie la propiedad <span class='code'>locale</span> de nuestra instancia de <span class='code'>i18n</span>, ya que es la propiedad que indica a la librería que idioma usar. Para esto, crearemos un componente de ejemplo que nos servirá para cambiar de un idioma a otro:

```html
// Language.vue
<template>
  <div>
    <button
      v-for="language in languages"
      :key="language.locale"
      @click="changeLanguage(language.locale)"
    >
      {{ language.title }}
    </button>
  </div>
</template>

<script>
  import { i18n } from '@/plugins/i18n'

  export default {
    name: 'Language',
    data: () => ({
      languages: [
        { locale: 'es', title: 'Español' },
        { locale: 'en', title: 'Inglés' },
      ],
    }),
    methods: {
      changeLanguage(locale) {
        i18n.locale = locale
      },
    },
  }
</script>
```

Para mostrarlo es suficiente con añadirlo al componente <span class='code'>App.vue</span> en el sitio que queramos.

```html
// App.vue
<template>
  ...
  <Language />
  ...
</template>

<script>
  import Language from './components/Language.vue'

  export default {
    name: 'App',
    components: {
      Language,
    },
  }
</script>
```

Ahora, si lanzamos el server (<span class='code'>npm run serve</span>) veremos en el navegador dos botones, si pulsamos cada uno de ellos puede verse como nuestro texto anterior cambia de idioma dinámicamente.

Para afinar un poco más, podemos añadir los dos <span class='code'>titles</span> de los idiomas para que se puedan traducir también. Primero, añadiremos en el fichero <span class='code'>i18n.js</span> los textos que queremos traducir:

```js
const messages = {
  es: {
    hello: {
      world: 'Hola Mundo!',
    },
    spanish: 'Español',
    english: 'Inglés',
  },
  en: {
    hello: {
      world: 'Hello World!',
    },
    spanish: 'Spanish',
    english: 'English',
  },
}
```

Además en nuestro componente tendremos que cambiar el <span class='code'>data languages</span> y convertirlo en una <span class='code'>computed</span>.

```js
import { i18n } from '@/plugins/i18n'

export default {
  name: 'LanguageComponent',
  computed: {
    languages() {
      return [
        { locale: 'es', title: this.$t('spanish') },
        { locale: 'en', title: this.$t('english') },
      ]
    },
  },
  methods: {
    changeLanguage(locale) {
      i18n.locale = locale
    },
  },
}
```

Este cambio se debe a que en el data no tienes acceso a la propiedad <span class='code'>this</span>, en cambio en una computed si.

Finalmente, si volvemos a lanzar el comando <span class='code'>npm run serve</span> podremos comprobar los cambios que hemos realizado anteriormente.

He creado un repositorio con todos estos cambios realizados <the-link url='https://github.com/pablosirera/seed-vue-i18n'>Seed Vue i18n</the-link>

<b>P.D.:</b> Quizás has pensado...¿y si tengo muchos textos para traducir? El archivo <span class='code'>i18n.js</span> se puede hacer muy complicado de leer...esto es cierto y para evitarlo se pueden añadir todos los textos en ficheros específicos para cada idioma. De todo esto hablaré con más detenimiento en el próximo post.
