---
title: 'Desplegar una aplicación hecha con Vue en GithubPages'
description: 'Tutorial sobre cómo desplegar una aplicación Vue en github pages'
date: 2018-11-01
timeToRead: 2
tags:
  - vue
---

¿Quieres desplegar tu aplicación con Vue en internet y no sabes cómo? Sigue entonces los siguientes pasos para desplegar tu app en GitHub Pages:

Primero de todo, cámbiate a otra rama diferente de master, esta la usaremos para trabajar sobre ella en vez de sobre la rama principal.

```bash
git checkout -b github-pages
```

El motivo de esto, es que al hacer a continuación el deploy de la aplicación, la carpeta <span class="code">/dist</span> se subirá a master y no estará el contenido de la aplicación, sino el de la carpeta <span class="code">/dist</span>.

En el siguiente paso, habrá que crear el archivo <span class="code">github-pages.sh</span> en la raíz del proyecto con el siguiente contenido:

```shell
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# copy README.md
cp README.md dist/

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://USERNAME.github.io
git push -f git@github.com:USERNAME/USERNAME.github.io.git master

cd -
```

La tarea de build es la establecida por defecto en <span class='vue'>Vue</span> <span class='code'>"build": "vue-cli-service build"</span>.

Para finalizar, en la consola hay que lanzar el comando <span class='code'>sh github-pages.sh</span> para ejecutar el script que se ha creado anteriormente. Una vez que termine, ya estará disponible en la url de Github Pages la aplicación desplegada.
