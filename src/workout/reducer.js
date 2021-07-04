import { WORKOUTS } from './constants';

const initialState = {  
  list: [],
  requesting: false,
  errors: [],
}

const workoutsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WORKOUTS.LOAD:
      return {
        ...state, 
        requesting: true,
        errors: [],
      }
    case WORKOUTS.LOAD_SUCCESS:
      return {
        list: action.workouts,
        requesting: false,
        errors: [],
      }
    case WORKOUTS.LOAD_ERROR:
      return {
        requesting: false,
        errors: action.error
      }
    default:
      return state
  }
}
export default workoutsReducer;