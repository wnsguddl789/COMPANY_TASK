import { AnyAction } from 'redux';
export const initialState = {
  roomId: null,
};

interface ROOM_PROPS {
  id: number;
}
interface Chat_Props {
  createdAt: String;
  content: String;
}

export const AddRoom = (data: ROOM_PROPS) => {
  // window.sessionStorage.setItem('roomLength', String(data.length));
  return {
    type: 'ADD_ROOM',
    data,
  };
};

export const ChatLog = (data: Chat_Props) => {
  return {
    type: 'CHAT_LOG',
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
    case 'CHAT_LOG':
      return {
        ...state,
        roomId: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
