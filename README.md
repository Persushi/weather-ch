# weather-ch

## Challenge propuesto por Personal Pay, basados en el documento que se pasó

Para iniciar se debe clonar el repositorio, agregar .env en la carpeta raíz y colocar la variable API_KEY dada por la OpenWeatherAPI

1. npm install para las dependencias
2. npm run test para ejecutar los tests
3. actualmente la api no funciona en local a traves de ip porque este al estar levantado en local, valga la redundancia, trata de levantar con la ip
privada

a continuación el objetivo pedido y los endpoints funcionales con el deploy en Heroku

Backend Test
Preferentemente desarrollar sobre NodeJS.
Se requiere implementar una API que provea en formato JSON el estado del tiempo basado en
diferentes endpoints.

Se requiere realizar tests con las librerías antes mencionadas o con equivalentes.
A continuación se detallan los endpoints que deben ser implementados

Ruta base
/v1

Endpoints

https://ch-personal.herokuapp.com/v1/location
Devuelve los datos de ubicación city según ip-api.

https://ch-personal.herokuapp.com/v1/current /city *parametro opcional
City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
ip-api y el estado del tiempo actual.

https://ch-personal.herokuapp.com/v1/forecast /city *parametro opcional
City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
ip-api y el estado del tiempo a 5 días 
