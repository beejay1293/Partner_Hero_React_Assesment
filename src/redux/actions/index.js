import { SET_FAVORITE_IMAGE_INFO, SET_DATE, LOADING, REMOVE_FAVORITE_IMAGE_INFO, SET_CURRENT_DAY_IMAGE, GET_IMAGE_FAILED }  from '../constants';
import { getImage } from '../../utils/getImage'
import { toast } from 'react-toastify';

export const set_favorite_info = (data) => ({
  type: SET_FAVORITE_IMAGE_INFO,
  payload: data
})

export const loading = () => ({
  type: LOADING,
})

export const remove_favorite_info = (data) => ({
  type: REMOVE_FAVORITE_IMAGE_INFO,
  payload: data
})

export const set_date = (data) => ({
  type: SET_DATE,
  payload: data
})

export const set_image = (data) => ({
  type: SET_CURRENT_DAY_IMAGE,
  payload: data
})

export const getImageFailed = (error) => ({
  type: GET_IMAGE_FAILED,
  payload: error
})

export const fetchImage = (date) => async dispatch => {
    dispatch(loading());
    try {
        const selectedDate = date !== null ? date : new Date().toLocaleDateString('fr-CA')
        console.log(selectedDate);
        const response = await getImage(date)
        console.log(selectedDate, response.data);
        dispatch(set_image(response.data));
        dispatch(set_date(selectedDate))
    } catch (error) {
        dispatch(getImageFailed(error.response));
        const err = error.response ? error.response.data.msg : 'Internal Error, Please try again later'
        toast.error(err)
        return Promise.reject(error.response);
    }
};
