import { getAddedCities } from '../db/DBStore'

const displayController = async (city) => {
  const storedCities = await getAddedCities()

  const normalizeName = (name) => name.toLowerCase()

  const isCityStored = storedCities.some(
    (storedCity) => normalizeName(storedCity.name) === normalizeName(city),
  )

  return isCityStored
}

export default displayController
