import React from 'react';
import axios from 'axios';

import {LOAD_CART, ADD_TO_CART, REMOVE_FROM_CART} from 'APP/app/constants';

export const addToCart = product => ({
    type: ADD_TO_CART,
    product: product
})

export const removeFromCart = lineitem => ({
    type: REMOVE_FROM_CART,
    lineitem: lineitem
})

export const loadCart = lineItems => ({
    type: LOAD_CART,
    cart: lineItems
})

export const receiveCart = (auth) => {
    return dispatch => {
        axios.get(`/api/orders/cart/${auth.id}`)
        .then(order => {
            dispatch(loadCart(order.data))
        })
        .then()
        .catch(console.error())
    };
}

export const asyncRemoveFromCart = (lineitem) => {
    return dispatch => {
        axios.delete(`/api/orders/cartitem/${lineitem.id}`)
        .then(deleted => {
            console.log('THE DELETED ITEM', deleted)
            dispatch(removeFromCart(deleted.data))
        })
        .catch(console.error())
    };
}

