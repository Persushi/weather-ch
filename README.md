# weather-ch

## Challenge propuesto por Personal Pay, basados en el documento que se pasó

Para iniciar se debe clonar el repositorio, agregar .env en la carpeta raíz y colocar la variable API_KEY dada por la OpenWeatherAPI
en caso de no tenerla a continuación se facilita **0c90e6d3bc82b180e08188cf2cf07d4a**

1. npm install para las dependencias
2. npm start para probar el servicio en local

*pendiente realizar los test

a continuación el objetivo pedido y los endpoints funcionales

Backend Test
Preferentemente desarrollar sobre NodeJS.
Se requiere implementar una API que provea en formato JSON el estado del tiempo basado en
diferentes endpoints.

Se requiere realizar tests con las librerías antes mencionadas o con equivalentes.
A continuación se detallan los endpoints que deben ser implementados

Ruta base
/v1

Endpoints

/location
Devuelve los datos de ubicación city según ip-api.

/current[/city]
City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
ip-api y el estado del tiempo actual.

/forecast[/city]
City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
ip-api y el estado del tiempo a 5 días 
