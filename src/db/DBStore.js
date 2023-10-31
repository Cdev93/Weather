//Crea la base de datos

const dbName = 'CityDB';
const dbVersion = 1;

function openIdexedDB() {
    return new Promise ((resolve, reject) => {
      const request = indexedDB.open(dbName, dbVersion);
      let db;

      request.onupgradeneeded= (event) => {
        db = event.target.result;

        const objectStore = db.createObjectStore('cities', {keyPath: 'name'});
        objectStore.createIndex("cityIndex", "name", { unique: false });
      };
      request.onsuccess = function (e) {
        console.log('running onsuccess');
        db = e.target.result;
        resolve(db);
        
      };
      request.onerror = function (e) {
        console.log('onerror!');
        console.dir(e);
        resolve();
      };
    

    })
}
  

//Añadir ciudades (guardarlas)

  export const addItem = async(city, id, country) => {
    const db = await openIdexedDB();
    const transaction = db.transaction(['cities'], 'readwrite');
    const store = transaction.objectStore('cities');
    if (!city) return console.log('loading...')
    const item = {
      name: city,
      id: id,
      country: country,
      created: new Date().getTime(),
    };

    const request = store.add(item);

  
}



//Cargar ciudades ya almacenadas

export const getSavedCities = async() => {

  const db = await openIdexedDB();
return new Promise((resolve)=> {
      try{
       
        const cities = [];
        const mappedCities = [];
        const transaction = db.transaction(['cities'], 'readonly');
        const store       = transaction.objectStore('cities');
        const request    = store.getAll();
        request.onsuccess = (e)  => {
         
          cities.push(...e.target.result);
          (cities.map((c)=>{
            
            return mappedCities.push(c.name)
          }));
          
        }
        if(mappedCities){
          console.warn('ciudades de la base', mappedCities)
          resolve(mappedCities)
        }
        else{
          console.log('entra por aqui')
          resolve([]);
        }
      }
      catch(error){
        console.log('error')
        resolve([]);
      }

    });
      /*
      return new Promise((resolve)=> {
        
      
        const cities = [];
        const transaction = db.transaction(['cities'], 'readonly');
        const store       = transaction.objectStore('cities');
        const request    = store.getAll();
        request.onsuccess = (e)  => {
          cities.push(...e.target.result);
         
            resolve(cities);
         
        }
    
      
    }); */
}

//Eliminar ciudades almacenadas

export const deleteCity = async(city) =>{
console.log('city',city)
const db = await openIdexedDB();
const transaction = db.transaction(['cities'], 'readwrite');
const store       = transaction.objectStore('cities');
const request     = store.delete(city);
console.log('City removed')

};



