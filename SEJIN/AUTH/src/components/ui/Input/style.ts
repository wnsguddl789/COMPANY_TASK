import styled from '@emotion/styled';

export const InputContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 12px;
  position: relative;
  /* padding: 0 10px; */
  & > label {
    padding: 0 10px;
    width: 20%;
    font-size: 12px;
  }
  & > div {
    width: 100%;
  }
  & > div > input {
    outline: none;
    padding: 20px 0px;
    border: none;
    width: 100%;
  }
`;

export const ValidateComment = styled.p<{ visible: boolean }>`
  color: tomato;
  font-size: 10px;
  position: absolute;
  bottom: -10;
  display: ${(props) => (props.visible ? 'blick' : 'none')};
`;
