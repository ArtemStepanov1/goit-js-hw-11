const axios = require('axios').default;

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "28438794-f29eee1d756bb29e2deebcb2e";


export async function fetchPictures(value, page, perPage) {
      const searchParams = new URLSearchParams({
        key: API_KEY,
        q: value,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: perPage,
      });
      try {
       const response = await axios.get(`${BASE_URL}/?${searchParams}`)
        return response.data;
      } catch (error) {
        console.log(error);
      }
    
    }