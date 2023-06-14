import axios from "axios"
import { storeData } from "./localstorageUser";

export async function handleTable(table, livres = null) {
  switch (table) {
    case 'user':
      storeData("isLoggedIn", "true");
      return getUserById(data);
    case 'spot':
      const result = await getLivresOnSpot(livres)
      return result
    case 'livre':

      break;
    default:

      break;
  }
}

export async function getUserById(id) {
  const result = await axios.get("https://75a8-2a01-cb1c-1326-1300-c4d6-e4dc-fbe2-ce74.ngrok-free.app" + id)
  return JSON.stringify(result);
}

export async function getSpot(id) {
  const result = await axios.get("https://75a8-2a01-cb1c-1326-1300-c4d6-e4dc-fbe2-ce74.ngrok-free.app" + id)
  return JSON.stringify(result);
}

export async function getLivresOnSpot(id) {
  try {
    const response = await axios.get("https://75a8-2a01-cb1c-1326-1300-c4d6-e4dc-fbe2-ce74.ngrok-free.app/api/livres/spots/" + id);
    return response.data;
  } catch (error) {
    console.error("Error retrieving livres on spot:", error);
    throw error; // Rethrow the error or handle it appropriately
  }
}