<div align="center"><img  src='https://github.com/Cdev93/Weather/assets/146174446/8c9d5628-b4cb-42d2-a4d5-0d1a430cce70'></img><h1 align="center"> WeatherApp </h1> </div>

   <p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>

## Descripción

La WeatherApp es una aplicación web construida en React que permite a los usuarios obtener información meteorológica actualizada para una ciudad específica mediante la integración con una API de pronóstico del tiempo.

## Tecnologías Utilizadas

- Vite
- React
- [OpenWeatherMap API](https://openweathermap.org/api)
- Otros paquetes de npm utilizados

## Instalación

1. Clone este repositorio: `git clone [URL del repositorio]`
2. Navegue al directorio del proyecto
3. Instale las dependencias: `npm install`

## Configuración

Para configurar la aplicación, siga estos pasos:

1. Obtenga una clave de API gratuita de [OpenWeatherMap](https://openweathermap.org/api).
2. Cree un archivo `.env` en el directorio raíz del proyecto con el siguiente contenido:

```env
VITE_API_KEY=tu_api_key_aquí
VITE_BASE_URL_API=tu_url_api1
VITE_BASE_URL_API2=tu_url_api2
```

## Características

- Búsqueda por Ciudad: Ingrese el nombre de la ciudad para obtener información meteorológica actualizada.
- Guardado de Ciudades: Guarde ciudades para consultarlas fácilmente en el futuro.
- Visualización Interactiva: La información meteorológica se presenta de manera clara y atractiva.
- Datos en Tiempo Real: La aplicación se actualiza automáticamente para reflejar la información meteorológica más reciente.

## Uso

1. Inicie la aplicación: npm run dev
2. Abra su navegador y vaya a http://localhost:XXXX, donde XXXX es el puerto asignado por Vite.
   Asegúrese de que `(http://localhost:XXXX)` refleje el puerto que Vite realmente está utilizando. Vite generalmente elige un puerto disponible, y si el puerto 3000 está ocupado, elegirá el siguiente disponible automáticamente. Puede verificar el puerto en la salida de la consola cuando ejecuta `npm run dev`.
3. Ingrese el nombre de la ciudad en el cuadro de búsqueda para obtener el pronóstico meteorológico actualizado.
4. Para guardar una ciudad:

- Después de buscar una ciudad, haga clic en el botón "Add city" o similar.
- La ciudad se agregará a una lista de ciudades guardadas para futuras consultas.

5. Para consultar ciudades guardadas:

- En la aplicación, busque una sección de "Saved cities" o similar.
- Seleccione una ciudad guardada para ver el pronóstico meteorológico.
