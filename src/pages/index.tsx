import type { NextPage } from 'next';
import styled from '@emotion/styled';
const Home: NextPage = () => {
  return (
    <Container>
      <RoomIdText>채팅시작</RoomIdText>
    </Container>
  );
};

export default Home;

const Container = styled.div``;
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
