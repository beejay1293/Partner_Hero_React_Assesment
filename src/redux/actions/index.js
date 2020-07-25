import { SET_FAVORITE_IMAGE_INFO, SET_NEXT_IMAGE, SET_PREV_IMAGE, SET_DATE, LOADING, REMOVE_FAVORITE_IMAGE_INFO, SET_CURRENT_DAY_IMAGE, GET_IMAGE_FAILED }  from '../constants';
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

export const set_next_image = (data) => ({
  type: SET_NEXT_IMAGE,
  payload: data.url ? data.url : null
})

export const set_prev_image = (data) => ({
  type: SET_PREV_IMAGE,
  payload: data.url ? data.url : null
})

export const fetchImage = (date) => async dispatch => {
    dispatch(loading());
    try {
        const selectedDate = date !== null ? date : new Date().toLocaleDateString('fr-CA')
        const response = await getImage(date)
        dispatch(set_image(response.data));
        dispatch(set_date(selectedDate))
    } catch (error) {
        dispatch(getImageFailed(error.response));
        const err = error.response ? error.response.data.msg : 'Internal Error, Please try again later'
        toast.error(err)
        return Promise.reject(error.response);
    }
};

export const fetchImagePreviews = (currentDate) => async dispatch => {
  dispatch(loading());
try {
   const selectedDate = currentDate !== null ? currentDate : new Date().toLocaleDateString('fr-CA')

   const nextDate = new Date(selectedDate)
   const prevDate = new Date(selectedDate)

   nextDate.setDate(nextDate.getDate() + 1);
   prevDate.setDate(prevDate.getDate() - 1);


   const nextImage = await getImage(nextDate.toLocaleDateString('fr-CA'))
   const prevImage = await getImage(prevDate.toLocaleDateString('fr-CA'))

   dispatch(set_prev_image(prevImage.data))
   dispatch(set_next_image(nextImage.data))
} catch (error) {
   dispatch(getImageFailed(error.response));
   return Promise.reject(error.response);
}
};
