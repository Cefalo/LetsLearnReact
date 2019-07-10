import React from "react"
import {FETCH_APARTMENT} from '../actions'
import apartments from '../data';

const initialState = {apartments: []};

const rootReducer = (state, action)  => {
  switch (action.type) {
    case FETCH_APARTMENT:
      return {apartments: apartments};
    default:
      return [];
  }
}



export {rootReducer, initialState}