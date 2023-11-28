import Dexie from 'dexie'

var db = new Dexie('citiesDB')
db.version(1).stores({
  cities: '++id,name,country',
})

//
// Manipulate and Query Database
//

export const addCities = async (name, id, country) => {
  try {
    await db.cities.add({ name: name, id: id, country: country })
  } catch (e) {
    alert(`Error: ${e}`)
  }
  return console.log('added')
}

export const getAddedCities = async () => {
  try {
    const ADDED = await db.cities.toArray()
    return ADDED
  } catch (e) {
    alert(`Error: ${e}`)
  }
}

export const deleteCity = async (id) => {
  try {
    await db.cities.delete(id)
    console.log('deleted')
  } catch (e) {
    alert(`Error: ${e}`)
  }
}
