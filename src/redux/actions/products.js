import { SET_PRODUCTS, SET_SINGLE_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, REMOVE_ITEM, SET_COUNT }  from '../constants/product-constants';
import { LOADING } from '../constants/index'
import { getAllProducts } from '../utils/product';

export const set_products = (data) => ({
  type: SET_PRODUCTS,
  payload: data
})

export const loading = () => ({
  type: LOADING,
})

export const set_single_product = (data) => ({
  type: SET_SINGLE_PRODUCT,
  payload: data
})

export const add_to_cart = (data) => ({
  type: ADD_TO_CART,
  payload: data
})

export const remove_from_cart = (data) => ({
  type: REMOVE_FROM_CART,
  payload: data
})

export const clear_cart = () => ({
  type: CLEAR_CART,
})

export const remove_item = (data) => ({
  type: REMOVE_ITEM,
  payload: data
})

export const set_product_count = (data) => ({
  type: SET_COUNT,
  payload: data
})


export const getProducts = (merchantId) => async (dispatch) => {
  try {
    dispatch(loading());
    const response = await getAllProducts(merchantId)
    console.log(response);
    dispatch(set_products(response.data.data))
  } catch (error) {   
    //  toast.error("try again, an error occured")
  }
}

