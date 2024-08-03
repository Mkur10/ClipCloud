import axios from 'axios';

export const BASE_URL =  'https://youtube-v31.p.rapidapi.com' 
const options = {
  method: 'GET',
  //url: BASE_URL,
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10',
    maxResults:'50'
  },
  headers: {
    'X-RapidAPI-Key':'66e939dd2cmsh89d7e7e569f3ce0p1baa4ejsnf28384698993',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};