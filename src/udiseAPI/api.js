import axios from "axios";

const API_URL = `https://api.data.gov.in/resource/756c8caf-ef26-44d1-8034-c9afd6107aab?api-key=${import.meta.env.VITE_DATA_GOV_API_KEY}&format=json&limit=20`;


export const fetchUdiseData = async () => {

  const response = await axios.get(API_URL);
  return response.data.records;
};
