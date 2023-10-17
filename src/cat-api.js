// import axios from 'axios';
import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const BREEDS = 'breeds';
const IMAGES = 'images/search';
const API_KEY =
  'live_TI2USeFd4AqEQH5y1ouJPjEtbw4urfxMRloTbNbOEr1PDZiXR8x60UmnPXyhQ6kv';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  return axios
    .get(`${BASE_URL}/${BREEDS}`);
}

export function fetchCatByBreed(breed_id) {
  return axios
    .get(`${BASE_URL}/${IMAGES}?breed_ids=${breed_id}`);
}

// fetchCatByBreed()
// .then((response) => {console.log(response.data)})
