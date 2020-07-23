import { SET_PRODUCTS, SET_SINGLE_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, REMOVE_ITEM, SET_COUNT }  from '../constants/product-constants';
import { LOADING } from '../constants/index'

const initialState = {
    allProducts : [],
    isLoading: false,
    product: {},
    error: '',
    cart: []
}

export default (state= initialState, action) => {
    switch(action.type){
        case SET_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                isLoading: false,
            }
        case LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case SET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload,
                isLoading: false,
            }
        case ADD_TO_CART:
            let oldCart = [...state.cart]
            let newCart
            if(oldCart.filter(e => e.name === action.payload.name).length > 0){
              const ind = oldCart.findIndex(e => e.name === action.payload.name)
              oldCart[ind].qty += 1
              newCart = oldCart
            } else {
                action.payload.qty = 1
                newCart = [...oldCart, action.payload]
            }
            return {
                ...state,
                isLoading: false,
                cart: newCart
            }
        case REMOVE_FROM_CART:
            let old = [...state.cart]
            let carts
            if(old.filter(e => e.name === action.payload.name)[0].qty > 1){
                const ind = old.findIndex(e => e.name === action.payload.name)
                old[ind].qty -= 1
                carts = old
              } else {
                  action.payload.qty = 1
                  carts = [...old]
              }
            // const removed = state.cart.splice(state.cart.indexOf(e => e.slug === action.payload.slug), 1)
            return {
                ...state,
                isLoading: false,
                cart: carts
            }
        case SET_COUNT:
            let currentCart = [...state.cart]
            const prodInd = currentCart.findIndex(e => e.name === action.payload.name)
            currentCart[prodInd].qty = parseInt(action.payload.count)
            return {
                 ...state,
                 isLoading: false,
                 cart: currentCart
            }
        case CLEAR_CART:
            return {
                ...state,
                isLoading: false,
                cart: []
            }
        case REMOVE_ITEM:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.filter(e => e.slug !== action.payload.slug)
            }
        default:
            return state;
    }
}