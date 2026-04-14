import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42823339-1ca31e44a0bb15197c26bd0aa';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}