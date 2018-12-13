import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
export const changeList = (data) => ({
  type: actionTypes.GET_LIST,
  data: fromJS(data)
});
export const getList = () => {
  const arr = [1, 2, 3]
  return (dispatch) => {
    dispatch(changeList(arr))
  }
}