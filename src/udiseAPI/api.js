import axios from "axios";

const API_URL =`https://api.data.gov.in/resource/756c8caf-ef26-44d1-8034-c9afd6107aab?api-key=${import.meta.env.VITE_DATA_GOV_API_KEY}&format=json&limit=40`

export const fetchUdiseData = async () => {     //makes the function asynchronous(wait)

  const response = await axios.get(API_URL);    //await waits untill the data is fetched
  return response.data.records;
};

