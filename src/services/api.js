import axios from "axios";

export const api = axios.create({
  baseURL: "https://projetorpgbackend-production-986c.up.railway.app"
  //baseURL: "http://localhost:8080"
});