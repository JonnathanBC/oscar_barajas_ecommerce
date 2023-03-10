import { useState } from 'react'

const initialState = {
  cart: []
}

export const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = payload => {
    setState({
      ...state,
      cart: [
        ...state.cart,
        payload
      ]
    })
  }

  const removeFromCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(productCart => productCart.id !== payload.id)
    })
  }

  return {
    addToCart,
    state,
    removeFromCart
  }
}
