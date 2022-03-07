import { AnyAction } from 'redux';
export const initialState = {
  roomId: null,
};

interface ROOM_PROPS {
  length: number;
}

export const AddRoom = (data: ROOM_PROPS) => {
  // window.sessionStorage.setItem('roomLength', String(data.length));
  return {
    type: 'ADD_ROOM',
    data,
  };
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'ADD_ROOM':
      return {
        ...state,
        roomId: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
