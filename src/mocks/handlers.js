import { http, HttpResponse } from 'msw'

const apiKey = import.meta.env.VITE_API_KEY
const baseUrl = import.meta.env.VITE_BASE_URL_API
const baseUrl2 = import.meta.env.VITE_BASE_URL_API2

export const handlers = [
  http.get(`${baseUrl}?q='Alicante'&appid=${apiKey}&units=metric`, () => {
    return HttpResponse.json({
      coord: {
        lon: -0.4817,
        lat: 38.3452,
      },
      weather: [
        {
          id: 741,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      base: 'stations',
      main: {
        temp: 20,
        feels_like: 18.54,
        temp_min: 20,
        temp_max: 20,
        pressure: 1022,
        humidity: 60,
      },
      visibility: 10000,
      wind: {
        speed: 5.5,
        deg: 330,
      },
      clouds: {
        all: 0,
      },
      dt: 1636315313,
      sys: {
        type: 1,
        id: 6392,
        country: 'ES',
        sunrise: 1636272163,
        sunset: 1636310754,
      },
      timezone: 3600,
      id: 2521972,
      name: 'Alicante',
      cod: 200,
    })
  }),
  http.get(
    `${baseUrl2}?q='Alicante'&mode=json&appid=${apiKey}&lang=es&units=metric`,
    () => {
      return HttpResponse.json({
        list: [
          {
            dt: 1636399200,
            main: {
              temp: 20,
              humidity: 60,
            },
            weather: [
              {
                description: 'clear sky',
                icon: '01d',
              },
            ],
          },
        ],
      })
    },
  ),
]
