  import axios from "axios";
import { API_URL, WORDPRESS_API_URL  } from "./constants";


const instance = axios.create({
  baseURL: `${API_URL}`,
  
});


const wordpressInstance = axios.create({
  baseURL: `${WORDPRESS_API_URL}`,
  
});

export default {instance, wordpressInstance};