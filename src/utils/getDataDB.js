import { getSavedCities } from "../db/DBStore";

const getStoredData = async() => {

    const addedCities = await getSavedCities();
    

   return addedCities;
}

export default getStoredData;