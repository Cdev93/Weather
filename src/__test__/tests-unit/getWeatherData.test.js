import { expect } from 'vitest'
import getWeatherData from '../../utils/getWeatherData'
import { server } from '../../mocks/setupTest'
import { beforeAll } from 'vitest'
import { afterAll } from 'vitest'
import { afterEach } from 'vitest'
import { describe } from 'vitest'
import { test } from 'vitest'

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

describe('Testeo de la petición a la API de getWeatherData', () => {
  test('Should receive api data', async () => {
    const { weatherData, weatherData2 } = await getWeatherData('Alicante')
    expect(weatherData.main.temp).toBe(20)
    expect(weatherData.main.temp_min).toBe(20)
    expect(weatherData.weather[0].id).toBe(741)
    expect(weatherData2.list[0]).toHaveProperty('weather')
    expect(weatherData2.list[0].weather[0]).toHaveProperty('description')
  })
})
