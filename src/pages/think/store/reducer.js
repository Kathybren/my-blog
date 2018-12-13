import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  aaa: false,
  list: []
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST: 
      return state.set('list', action.data)
    default:
      return state
  }
}