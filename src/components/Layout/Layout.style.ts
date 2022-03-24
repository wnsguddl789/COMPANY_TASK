import styled from '@emotion/styled';

export const Container = styled.div``;
export const Header = styled.header`
  width: calc(100vw - 40px);
  height: 80px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  & > h1 {
    font-size: 20px;
    width: 20%l;
  }
`;
export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderItem = styled.li`
  padding: 0 20px;
  & > a {
    text-decoration: none;
    color: black;
  }
`;
export const Main = styled.main`
  width: calc(100% - 40px);
  min-height: calc(100vh - 120px);
  padding: 20px 20px;
`;

export const ProflieButton = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 2px 1px;
  padding: 3px 10px;
  & > img {
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
  & > span {
    margin-left: 5px;
    line-height: 30px;
  }

  cursor: pointer;
`;
