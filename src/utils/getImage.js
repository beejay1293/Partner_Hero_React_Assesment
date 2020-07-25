
import { toast } from "react-toastify";
import axios from 'axios'

export const getImage = (date) => axios(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`, {
    method: 'GET',
    params: { date },
    headers: {
      accept: 'application/json',
      'Content-type': 'application/json; charset=UTF-8',
    },
})



