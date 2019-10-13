import axios from 'axios';

const fetchPhotos = (query = '', pageNumber = 1) => {
  const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=5018958-ed49ccd90878e6614abdf24a6`;
  return axios.get(URL);
};

export default fetchPhotos;
