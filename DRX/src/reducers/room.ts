import { AnyAction } from 'redux';
export const initialState = {
  chatRoom: [],
};

interface ROOM_PROPS {
  length: number;
}

export const AddRoom = (data: ROOM_PROPS) => {
  if (data.length !== 0) window.sessionStorage.setItem('room', JSON.stringify(data));
  return {
    type: 'ADD_ROOM',
    data,
  };
};

export const AddChatLog = (data: any) => {
  return {
    type: 'ADD_CHATLOG',
    data,
  };
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'ADD_ROOM':
      return {
        ...state,
        room: action.data,
      };
    case 'ADD_CHATLOG':
      return {
        ...state,
        chatRoom: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
