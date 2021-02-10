---
title: 'Crear iconos SVG como componentes de Vue'
description: 'A la hora de usar svg icons en una aplicación Vue lo más habitual es gestionarlos como archivos independientes, pero si nos paramos a analizar el contenido de un archivo svg no deja de ser tags de html.'
date: 2021-02-10
timeToRead: 5
image: icons-svg.jpg
tags:
  - vue
---

> Esta implementación ha sido obtenida de un ejemplo de [Sarah Drasner](https://twitter.com/sarah_edo), pero adaptado a otras necesidades.

A la hora de usar archivos svg en una aplicación Vue lo más habitual es gestionarlos como archivos independientes (`example.svg`), pero si analizamos el contenido de un archivo svg veremos que no deja de ser **código html**.

<br>

Si quisieramos gestionar los elementos svg para hacerlos **dinámicos**, **flexibles** y **accesibles**, en resumen, tener un mayor control sobre ellos, podríamos gestionarlos mediante Vue components.

<br>

Para poder usar los svg como componentes de Vue, he creado un ejemplo en el que os iré explicando paso a paso cómo estructurarlos.

### Crear iconos

En primer lugar, vamos a crear vue components vacíos que posteriormente contendrán nuestro svg. Creamos una carpeta dentro de `components` que la podemos llamar **icons**, por ejemplo, y añadimos ahí nuestros iconos:

```markdown
/components/icons/IconHome.vue
/components/icons/IconLight.vue
/components/icons/IconDark.vue
```

A continuación, añadiremos el contenido del svg en el template del componente envuelto por `IconBase` (componente que crearemos posteriormente) e importamos el `IconMixin` que también veremos después.

```vue
<template>
  <IconBase view-box="0 0 460.298 460.297" icon-name="home" v-bind="$props">
    <path
      d="M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,
      0.38-0.144,0.656-0.144,0.852v137.041 c0,4.948,1.809,9.236,5.426,12.847c3.
      616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629
      c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.
      847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939 z"
    />
    <path
      d="M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.
      567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816 c-2.666,0-4.855,0.856-6.
      57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245 c-6.
      084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.
      172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136 c-0.193,2.568,0.472,4.811,
      1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,
      4.57-0.476,6.855-1.998 L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.
      991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125 c1.
      522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,
      225.438z"
    />
  </IconBase>
</template>

<script>
import IconMixin from '@/mixins/IconMixin.vue'

export default {
  name: 'IconHome',
  mixins: [IconMixin],
}
</script>
```

### Crear IconBase

En este paso vamos a crear el componente de icono base con un **slot** para que pueda usarse en todos los iconos que vayamos creando.

Este componente tendrá la base de un svg y mediante props lo adaptaremos a nuestras necesidades.

```vue
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconBase',
  props: {
    iconName: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
    viewBox: {
      type: String,
      default: '0 0 18 18',
    },
  },
}
</script>
```

Como vemos en el ejemplo, el componente está adaptado para que sea dinámico gracias a las props y para que tenga unos mínimos de accesibilidad, ya que la prop `iconName` se aplicará al title y a su id.

### Crear Mixin

El siguiente paso sería crear un mixin de vue, que será usado por todos los componentes de iconos para no tener que repetir el mismo código. El mixin contiene en este caso todas las props comunes y la importación del IconBase.

```vue
<script>
import IconBase from '@/components/ui/IconBase.vue'

export default {
  name: 'IconMixin',
  components: { IconBase },
  props: {
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
}
</script>
```

Tal y como podemos observar en el código, cada icono tiene por defecto un tamaño que puede cambiarse y el color del icono que por defecto es `currentColor`.

> `currentColor` significa que heredá el color que se le aplique al texto que lo envuelve.

### Ejemplo de uso

Para poder usarlo, simplemente tendríamos que importar el icono que queramos como un componente más de Vue.

```vue
<template>
  ...
  <IconHome />
  ...
</template>

<script>
import IconHome from '@/components/icons/IconHome.vue'

export default {
  ...
  components: {
    IconHome,
  }
}
</script>
```

### Conclusión

Como habéis podido observar, hemos creado un sistema de gestión de iconos en muy pocos pasos y de forma muy sencilla. Espero que os haya gustado y cualquier feedback constructivo será bienvenido, podéis encontrarme por [twitter](https://twitter.com/pablosirera)
