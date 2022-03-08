import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AddChatLog } from '../../../reducers/room';

import moment from 'moment';
import 'moment/locale/ko';

import SendIcon from '@mui/icons-material/Send';

interface ChatDataType {
  ChatData: Array<ChatProps>;
}

interface ChatProps {
  time: string;
  content: Array<string>;
}
const Room = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [chatData, setChatData] = useState<ChatProps[]>([]);
  const [currentRouter] = useState(router.query.roomId);
  const room = useSelector((state: RootState) => state.room);
  useEffect(() => {
    if (currentRouter !== router.query.roomId) {
      setChatData([]);
    }
  }, [currentRouter, router]);

  const handleSubmit = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (value.trim() === '') return;
    if (e.key === 'Enter' && !e.shiftKey) {
      setChatData([...chatData, { time: moment().format('LT'), content: stringtoArray() }]);
      setValue('');
      dispatch(AddChatLog([{ id: Number(currentRouter), data: [...chatData] }]));
      if (e.preventDefault) e.preventDefault(); // This should fix it
      return false; // Just a workaround for old browsers
    }
  };
  const handleAddChat = () => {
    if (value.trim() === '') return;
    setChatData([...chatData, { time: moment().format('LT'), content: stringtoArray() }]);
    dispatch(AddChatLog([{ id: Number(currentRouter), data: [...chatData] }]));
    setValue('');
  };

  const stringtoArray = () => {
    const array = value.split('\n').filter((word) => word !== '');
    return array;
  };
  return (
    <Container>
      <RoomIdText>채팅 방 {router.query.roomId}</RoomIdText>
      <Chat ChatData={chatData} />

      <InputContainer>
        <Input
          placeholder="내용을 입력해주세요."
          onKeyPress={(e) => handleSubmit(e)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <SendBtn onClick={() => handleAddChat()}>
          <SendIconBtn />
        </SendBtn>
      </InputContainer>
    </Container>
  );
};
export default Room;

const Chat = ({ ChatData }: ChatDataType) => {
  return (
    <ChatContainer>
      {ChatData &&
        ChatData.map((data, idx) => {
          return (
            <ChatWrapper key={idx}>
              <ChatTime>{data.time}</ChatTime>
              <ChatContent>
                {data.content.map((text: string, idx: number) => {
                  return <p key={idx}>{text}</p>;
                })}
              </ChatContent>
            </ChatWrapper>
          );
        })}
    </ChatContainer>
  );
};

const Container = styled.div`
  width: auto;
  height: calc(100vh - 120px);
  position: relative;
`;

const RoomIdText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #515151;
  position: relative;
  padding-bottom: 10px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: calc(100%);
  height: 131px;
  @media (max-width: 899px) {
    height: 91px;
  }
  background: #ffffff;

  /* padding: 21px; */
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  border-radius: 10px;
`;
const Input = styled.textarea`
  position: relative;
  width: 100%;
  height: calc(100% - 48px);
  border: none;

  margin: 21px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  outline: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const SendBtn = styled.div`
  position: absolute;
  right: 15px;
  width: 40px;
  height: 40px;
  background: #5a8dff;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;
const SendIconBtn = styled(SendIcon)`
  width: 25px;
  height: 25px;
  color: white;
`;
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media (max-width: 899px) {
    height: calc(100vh - 300px);
  }
  @media (min-width: 900px) {
    height: calc(100vh - 360px);
  }

  position: relative;
  width: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const ChatWrapper = styled.div`
  width: auto;
  margin-bottom: 25px;
`;
const ChatTime = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #848484;
`;
const ChatContent = styled.div`
  width: auto;
  padding: 11px;
  background: #5a8dff;
  border-radius: 10px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
`;
