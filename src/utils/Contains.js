/*import getStoredData from "./getDataDB";


const displayController = async(city) =>{


    async function handleCitySaved() {
        const mappedCities = await getStoredData();

        return await mappedCities;
    }



   const storedCities = await handleCitySaved()


  
    const normalizeName = (name) =>name.toLowerCase();

    const isCityStored = storedCities.some((storedCity)=> normalizeName(storedCity.name) === normalizeName(city));

   

    return isCityStored;

}


export default displayController;*/