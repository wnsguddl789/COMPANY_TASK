import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers, AnyAction } from 'redux';
import room from './room';
declare global {
  type RootState = ReturnType<typeof appReducer>;
}
export interface State {
  tick: string;
}

const appReducer = combineReducers({ room: room });

// const rootReducer = (state: RootState | undefined, action: AnyAction) => {
//   switch (action.type) {
//     case HYDRATE:
//       return action.payload;

//     default: {
//       return appReducer(state, action);
//     }
//   }
// };
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return action.payload;
      default:
        return state;
    }
  },
  room,
});
export default rootReducer;
