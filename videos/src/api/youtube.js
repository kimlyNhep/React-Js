import axios from "axios";

const KEY = "AIzaSyDvvJmow2Z9xRLFHU1XLTKXbS7Tw3RhYuk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY
  }
});
