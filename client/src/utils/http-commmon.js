import axios from "axios"

const URL = import.meta.env.VITE_BASE_URL
const TOKEN = import.meta.env.VITE_STRIPE_SECRET_KEY

export default axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${TOKEN}`
  },
});
