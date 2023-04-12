import axios from 'axios';

const API_KEY = '33855338-27803738c9487be1d7de18644';
const BASE_URL = 'https://pixabay.com';

export const fetchImg = (query, page, perPage) => {
  return axios
    .get(
      `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data);
};
