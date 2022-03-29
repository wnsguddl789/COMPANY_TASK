import styled from '@emotion/styled';

const AppFooter = () => {
  return (
    <Container>
      <div>
        <div className="Flex">
          <div>
            <svg width="92" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 10 }}>
              <path
                d="M17.891 6.13a6.627 6.627 0 01-.107 1.937 6.586 6.586 0 01-.3 1.024 4.026 4.026 0 01-2.702 7.019H9.166l.826 2.685.827 2.685h2.688l-.827-2.685h2.102a6.724 6.724 0 006.525-5.115 6.707 6.707 0 00-3.416-7.55z"
                fill="#4C5D5E"
              ></path>
              <path
                d="M17.918 6.712a6.778 6.778 0 01-.134 1.355 6.712 6.712 0 01-4.201 4.923l-.035.014a6.725 6.725 0 01-2.35.42H0V10.74h11.199a4.036 4.036 0 003.934-3.151A4.025 4.025 0 0011.2 2.685H5.375V5.37H2.688V0h8.594a6.724 6.724 0 014.2 1.539 6.712 6.712 0 012.302 3.83v.009c.089.439.134.886.134 1.334z"
                fill="url(#logo_svg__paint0_linear)"
              ></path>
              <path
                d="M14.998 8.062v-.006A4.038 4.038 0 0015 5.375H2.688v13.42h2.687V8.056h9.407c.073 0 .15 0 .216.007zM28 19.316h3.822V14.76h2.751c4.452 0 7.056-2.478 7.056-6.3 0-3.78-2.604-6.258-7.056-6.258H28v17.115zm3.822-7.938V5.582h2.583c2.121 0 3.402.987 3.402 2.877 0 1.911-1.28 2.92-3.402 2.92h-2.583zM58.305 19.316l-3.97-6.153c2.017-.945 3.13-2.75 3.13-5.103 0-3.549-2.541-5.859-6.888-5.859h-6.888v17.115h3.822V13.92h3.045l3.318 5.397h4.43zM47.51 5.582h2.898c2.016 0 3.234.861 3.234 2.478 0 1.617-1.218 2.478-3.234 2.478H47.51V5.582zM71.956 19.316h4.263L69.583 2.201h-3.97l-6.635 17.115h3.948l1.197-3.318h6.636l1.197 3.318zm-6.657-6.636l2.142-5.964 2.142 5.964h-4.284zM77.937 19.316h3.822V14.76h2.751c4.452 0 7.056-2.478 7.056-6.3 0-3.78-2.604-6.258-7.056-6.258h-6.573v17.115zm3.822-7.938V5.582h2.583c2.121 0 3.402.987 3.402 2.877 0 1.911-1.28 2.92-3.402 2.92H81.76z"
                fill="#4C5D5E"
              ></path>
              <defs>
                <linearGradient
                  id="logo_svg__paint0_linear"
                  x1="0"
                  y1="6.712"
                  x2="17.918"
                  y2="6.712"
                  gradientUnits="userSpaceOnUse"
                ></linearGradient>
              </defs>
            </svg>
            <a target="-_blank" href="https://about.prap.kr/" className="text">
              회사소개
            </a>
            <a target="-_blank" href="https://about.prap.kr/career" className="text">
              프랩 합류하기
            </a>
            <a target="-_blank" href="https://about.prap.kr/contact" className="text">
              제휴제안
            </a>
          </div>
          <div>
            <h3 className="title">안내</h3>
            <a className="text">공지사항</a>
            <a className="text">이벤트</a>
          </div>
          <div>
            <h3 className="title">정책</h3>
            <a target="-_blank" href="https://www.notion.so/tartapp/811e864d536f44e1b9d38bc38099c744" className="text">
              이용약관
            </a>
            <a target="-_blank" href="https://www.notion.so/tartapp/bb3c623e864b4d5da6431274b9c33692" className="text">
              개인정보처리방침
            </a>
          </div>
        </div>
        <div className="FooterColumn">
          <span className="label">대표이사</span>
          <span className="value"> 박아윤 </span>
          <span> | </span>
          <span className="label"> 사업자등록번호 </span>
          <span className="value">622-88-01428</span>
          <span> | </span>
          <span className="label">주소</span>
          <span className="value">서울시 강남구 역삼로 172, 8층 </span>
          <span> | </span>
          <span className="label"> 문의 </span>
          <span className="value">hello@prap.kr</span>
        </div>
        <div className="FooterColumn"></div>
        <div className="FooterColumn">
          <span className="label">©All rights reserved. 2020. (주)타르트</span>
        </div>
      </div>
    </Container>
  );
};

export default AppFooter;

const Container = styled.div`
  background-color: #f7f8f9;
  padding-top: 30px;
  bottom: 0px;

  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 0px;
  padding: 30px 0;
  & > div {
    padding: 0px 120px;
    width: 100%;
    max-width: 1440px;
    .Flex {
      display: flex;
      width: 100%;
      gap: 66px;
      max-width: 1440px;
      & > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
        .text {
          color: rgb(104, 105, 107);
          font-size: 16px;
          line-height: 24px;
          cursor: pointer;
        }
        .title {
          margin: 0px 0px 4px;
          font-size: 18px;
          font-weight: 700;
          line-height: 27px;
        }
      }
    }
    .FooterColumn {
      margin-top: 7px;
      color: rgb(179, 180, 183);
      .label {
        font-size: 12px;
        font-weight: 700;
        @media screen and (max-width: 768px) {
          font-size: 10px;
        }
      }
      .value {
        font-size: 12px;
        font-weight: 400;
        @media screen and (max-width: 768px) {
          font-size: 10px;
        }
      }
    }
  }
`;
