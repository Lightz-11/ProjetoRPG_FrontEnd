import axios from "axios";

export const api = axios.create({
  baseURL: "https://projetorpgbackend-production-7186.up.railway.app"
});