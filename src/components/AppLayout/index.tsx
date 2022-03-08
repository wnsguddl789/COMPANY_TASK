import React, { useState } from 'react';
import styled from '@emotion/styled';
import SideBar from '../SideBar';

const AppLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <SideBar />
      <MainConatiner>
        <main>{children}</main>
        {/* <span>DRX 방 1</span> */}
      </MainConatiner>
    </Container>
  );
};

export default AppLayout;

const Container = styled.div`
  @media (max-width: 899px) {
    padding: 20px;
  }
  @media (min-width: 900px) {
    padding: 60px;
  }
  display: flex;
`;

const MainConatiner = styled.div`
  width: 100%;
  display: flex;
  main {
    width: 100%;
    /* height: 100%; */
  }
`;
