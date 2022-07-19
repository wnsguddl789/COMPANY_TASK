import styled from '@emotion/styled';

export const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const SignInLeftContainer = styled.div`
  width: 60%;
  background-image: url('https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80');
  background-size: cover;
  @media (max-width: 940px) {
    display: none;
  }
`;

export const SignInRightContainer = styled.div`
  width: 40%;
  @media (max-width: 940px) {
    background-image: url('https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80');
    background-size: contain;
    width: 100%;
  }
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const SignInForm = styled.form`
  padding: 80px 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  line-height: 2;
  display: flex;
  justify-content: center;
  width: 90%;

  @media (max-width: 940px) {
    background-color: white;
    opacity: 1;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
  }
  & > div > h1 {
    font-size: 32px;
    font-weight: 700;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const DEFAULT_BTN_STYLE = `
    width: 50%;
    text-align: center;
    border-radius: 4px;
    padding: 10px 20px;
    color:white;
    font-size: 14px;
    :nth-of-type(1) {
        margin-right: 20px;
    }
    cursor:pointer;
`;
export const Button = styled.div<{ isSubmit: boolean }>`
  ${DEFAULT_BTN_STYLE}
  background-color: ${(props) =>
    props.isSubmit ? 'rgba(232, 141, 56)' : 'rgba(189, 195, 199)'};

  :hover {
    background-color: ${(props) =>
      props.isSubmit ? 'rgba(232, 167, 56)' : 'rgba(218, 223, 225)'};
  }
`;
