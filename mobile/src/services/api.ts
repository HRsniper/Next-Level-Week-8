import axios from "axios";
import { API } from "react-native-dotenv";

export const api = axios.create({
  baseURL: API
});
