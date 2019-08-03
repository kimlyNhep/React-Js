import axios from "axios";

export default axios.create({
  baseURL: `https://api.unsplash.com`,
  headers: {
    Authorization:
      "Client-ID f636a4277f34a1eff3e91d7d0bacc9e11a83b9b87b7d01344cb723770e3825d6"
  }
});
