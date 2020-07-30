---
title: 'Bus de Eventos global con Vue'
description: 'Ejemplo de bus de eventos en Vue'
date: 2019-05-01
timeToRead: 3
image: event-bus-pattern.jpg
tags:
  - vue
---

Alguna vez me ha hecho falta crear un poco de <b>magia oscura</b> en alguna aplicación. Algunos le llaman también <b>extraña comunicación entre componentes</b>, aunque puede usarse sin necesidad de estar en un componente. Para realizar esto, existe un patrón llamado <span class='code'><b>event bus pattern === publish-subscribe pattern</b></span> que se integra genial con <span class='vue'>Vue</span>. Cabe mencionar que este patrón no está considerado una buena práctica, pero no obstante creo que es recomendable conocerlo por si en algún momento nos hiciese falta.

## Configurar Bus de Eventos

Lo primero que hay que hacer es crear un nuevo event bus y exportarlo.

```js
// event-bus.js

import Vue from 'vue'
export const EventBus = new Vue()
```

Lo único que hemos hecho ha sido crear una nueva instancia de <span class='vue'>Vue</span> que podremos usar en cualquier parte de nuestra aplicación.

## Emitir un evento

Ahora vamos a usar la instancia de event bus. Para esto, lo que hay que hacer es importarlo en el componente que queramos usarlo.

```html
// TestButton.vue

<template>
  <button @click="emitGlobalEvent()">I'm a button</button>
</template>

<script>
  import { EventBus } from '@/utils/event-bus'

  export default {
    name: 'TestButton',
    methods: {
      emitGlobalEvent() {
        EventBus.$emit('i-clicked-button')
      },
    },
  }
</script>
```

En el ejemplo, podemos observar que tenemos un componente con un botón. Al hacer click sobre él ejecuta un método y ese método emite un evento a través de nuestro <span class='code'>EventBus</span>. Lo que recibe como parámetro es un string que hace referencia al nombre del evento.

## Recibir un evento

A continuación realizaremos el código en el componente que queremos que reciba este evento que terminamos de emitir.

```js
import { EventBus } from '@/utils/event-bus'

export default {
  name: 'SomeList',
  mounted() {
    this.loadListenEvent()
  },
  methods: {
    loadListenEvent() {
      EventBus.$on('i-clicked-button', this.callbackEventBus)
    },
    callbackEventBus() {
      console.log('event bus has emitted a i-clicked-button event')
    },
  },
}
```

En el componente donde recibimos el evento cargamos, en el lifecycle <span class='code'>mounted</span>, los eventos que queremos escuchar, para que así, cuando lancemos el <span class='code'>\$emit</span> se llame a nuestro callback que pasamos por parámetro.

Si solo quisieramos escuchar el evento una sola vez, usaríamos <span class='code'>EventBus.\$once(nameEvent, callback)</span>

## Eliminar el evento

Por último, cabe decir que una vez que queramos terminar de escuchar el evento deberíamos eliminar dicho registro. Para ello usáremos el método <span class='code'>EventBus.\$off</span>, al cual podemos pasarle el nombre del evento que queremos eliminar y un callback o simplemente pasándole el nombre del evento.

Si quisiéramos eliminar todos los eventos, simplemente habría que usar <span class='code'>EventBus.\$off()</span>.

```js
import { EventBus } from '@/utils/event-bus.js'

// Stop register without callback
EventBus.$off('i-clicked-button')

// Stop register with callback
EventBus.$off('i-clicked-button', () => {
  console.log('EventBus remove i-clicked-button event')
})

// Stop all registers
EventBus.$off()
```
