import { SET_NEXT_IMAGE, SET_PREV_IMAGE, LOADING, SET_FAVORITE_IMAGE_INFO, REMOVE_FAVORITE_IMAGE_INFO, SET_CURRENT_DAY_IMAGE, GET_IMAGE_FAILED, SET_DATE  } from '../constants'

const initialState = {
    favoriteImages : [],
    isLoading: false,
    pictureOfTheDay: {},
    selectedDate : new Date().toLocaleDateString('fr-CA'),
    error: {},
    prevImage: null,
    nextImage: null
}

export default (state= initialState, action) => {
    switch(action.type){
        case SET_FAVORITE_IMAGE_INFO:
            return {
                ...state,
                favoriteImages: [...state.favoriteImages, action.payload],
                isLoading: false,
            }

        case SET_PREV_IMAGE: 
           return {
               ...state,
               prevImage: action.payload,
               isLoading: false
           }
        case SET_NEXT_IMAGE:
           return {
               ...state,
               nextImage: action.payload,
               isLoading: false
           }
        case REMOVE_FAVORITE_IMAGE_INFO: 
            return {
                ...state,
                favoriteImages: state.favoriteImages.filter(img => img.title !== action.payload.title)
            }       
        case SET_CURRENT_DAY_IMAGE: 
           return {
               ...state,
               pictureOfTheDay: action.payload,
               isLoading: false,
               error: {}
           }
        case GET_IMAGE_FAILED: 
           return {
               ...state,
               isLoading: false,
               error: action.payload
           }
        case SET_DATE:
            return {
                ...state,
                selectedDate: action.payload,
            }
        case LOADING:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state;
    }
}