/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import 'moment/locale/ko';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

import { AddRoom } from '../../reducers/room';

import wrapper from '../../store';
import { useDispatch, useSelector } from 'react-redux';
interface RoomType {
  id: number;
  createdAt: String;
}
const SideBar = () => {
  const [chatRoomList, setChatRoomList] = useState<RoomType[]>([]);
  const [newId, setNewId] = useState(1);
  const [visible, setVisible] = useState(false);

  const room = useSelector((state: RootState) => state.room);
  useEffect(() => {
    if (window.sessionStorage.getItem('room')) {
      const arr = JSON.parse(window.sessionStorage.getItem('room'));
      arr.map((list) => {
        // console.log(newId, list.id, newId === list.id);
        // newId === list.id ? setNewId(newId + 1) : null;
        // console.log(newId, list.id, newId === list.id);
      });
      // if (arr && arr.length !== 0) setChatRoomList(arr);
      // console.log(arr);
    }
  }, [newId]);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddRoom = () => {
    setNewId(newId + 1);
    const newRoom = {
      id: newId,
      createdAt: moment().format('LTS'),
    };
    setChatRoomList([...chatRoomList, newRoom]);
  };
  useEffect(() => {
    dispatch(AddRoom(chatRoomList));
  }, [chatRoomList]);
  useEffect(() => {
    if (chatRoomList.length === 0) router.replace('/');
  }, [chatRoomList.length]);

  const FetchRoom = () => {
    const roomLength = window.sessionStorage.getItem('roomLength');
    return roomLength;
  };

  const func = (item) => {
    router.push(`/room/${item.id}`);
    setVisible(!visible);
  };

  return (
    <>
      <SideContainer>
        <Text onClick={() => router.replace('/')}>Chating List</Text>
        <ChatList>
          {chatRoomList &&
            chatRoomList.length > 0 &&
            chatRoomList.map((item: RoomType, idx) => {
              router;
              return (
                <ChatListItem
                  key={`chatRoom_${idx}`}
                  onClick={() => router.push(`/room/${item.id}`)}
                  isCurrent={router.query.roomId && Number(router.query.roomId) === item.id ? true : false}
                >
                  <ChatTitle>{`채팅 방 ${item.id}`}</ChatTitle>
                  <ChatCreaetedAt>{item.createdAt}</ChatCreaetedAt>
                </ChatListItem>
              );
            })}
        </ChatList>
        <ChatAddBtn onClick={() => handleAddRoom()}>채팅방 추가하기 +</ChatAddBtn>
      </SideContainer>
      <SmallSideContainer>
        <MenuOpenBtn onClick={() => setVisible(!visible)} />
        <SmallSideWrapper visible={visible}>
          <SideHeader>
            <Text onClick={() => router.replace('/')}>Chating List</Text>
            <Text onClick={() => setVisible(!visible)}>x</Text>
          </SideHeader>
          <ChatList>
            {chatRoomList &&
              chatRoomList.length > 0 &&
              chatRoomList.map((item: RoomType, idx) => {
                router;
                return (
                  <ChatListItem
                    key={`chatRoom_${idx}`}
                    onClick={() => func(item)}
                    isCurrent={router.query.roomId && Number(router.query.roomId) === item.id ? true : false}
                  >
                    <ChatTitle>{`채팅 방 ${item.id}`}</ChatTitle>
                    <ChatCreaetedAt>{item.createdAt}</ChatCreaetedAt>
                  </ChatListItem>
                );
              })}
          </ChatList>
          <ChatAddBtn onClick={() => handleAddRoom()}>채팅방 추가하기 +</ChatAddBtn>
        </SmallSideWrapper>
      </SmallSideContainer>
    </>
  );
};
export default wrapper.withRedux(SideBar);
const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  position: relative;
  height: calc(100vh - 120px);

  @media (min-width: 1200px) {
    width: 30%;
  }
  @media (max-width: 1199px) {
    width: 40%;
  }
  @media (max-width: 899px) {
    display: none;
  }
`;
const SmallSideContainer = styled.div`
  @media (min-width: 899px) {
    display: none;
  }
  position: absolute;
  top: 10px;
  left: 10px;
`;
const MenuOpenBtn = styled(MenuIcon)`
  :hover {
    cursor: pointer;
  }
`;
const SmallSideWrapper = styled.div<{ visible: boolean }>`
  width: calc(100vw - 20px);
  height: calc(100vh - 20px);
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  z-index: 99999;
  background-color: #fff;
`;
const SideHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Text = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  /* identical to box height */

  color: #5a8dff;
  :hover {
    cursor: pointer;
  }
`;

const ChatList = styled.ul`
  list-style: none;
  margin-top: 39px;
  overflow-y: scroll;
  padding: 0 10px;
  height: calc(100vh - 360px);
  ::-webkit-scrollbar {
    display: none;
  }
`;
const ChatListItem = styled.li<{
  isCurrent: boolean;
}>`
  /* position: absolute; */
  height: 80px;
  background: ${(props) => (props.isCurrent ? '#f9f9f9' : '#fff')};
  border-radius: 10px;
  padding: 0 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
  }
`;

const ChatTitle = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
const ChatCreaetedAt = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  text-align: right;
`;
const ChatAddBtn = styled.button`
  width: 100%;
  padding: 20px;
  border: none;
  background: #5a8dff;
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  position: absolute;
  bottom: 0;
  color: #ffffff;
  :hover {
    cursor: pointer;
    background: rgb(40, 107, 250);
  }
`;
