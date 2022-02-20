import styled from '@emotion/styled';

const IntroDuce = () => {
  return (
    <Container>
      <h2>프랩은 어떤 서비스 인가요?</h2>
      <p>
        프랩은 국내 최초이자 최대의 대체투자상품 정보 비교 플랫폼 입니다. 투자시장의 정보격차를 해소하고, 투자자의 합리적인 결정을 돕는 것이
        목표입니다.
      </p>
      <div>
        <section>
          <div>
            <div>
              <h2>요즘 투자 트렌드를 빠르게</h2>
              <span>프랩은 빠르게 변화하는 투자 상품 정보를 객관적으로 전달합니다.</span>
            </div>
            <svg width="308" height="190" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.2" width="74" height="18" rx="9" transform="matrix(-1 0 0 1 127 64)" fill="#6BDEE5"></rect>
              <path d="M132 87.918l15.712-19.288L163.86 98l38.407-51.726 5.237 17.096L235 34" stroke="#3FA078"></path>
              <path d="M114.919 97H140l-6.919 63H108l6.919-63z" fill="#6BE5B6"></path>
              <path d="M150.412 112H176l-4.412 48H146l4.412-48z" fill="#3FA078"></path>
              <path d="M190.816 75H216l-7.816 85H183l7.816-85z" fill="#6BE5B6"></path>
              <path d="M228.718 52H254l-8.718 108H220l8.718-108z" fill="#3FA078"></path>
              <path fill="#3FA078" d="M97.558 159.653h157.263v.874H97.558zM192 172h6v6h-6z"></path>
              <path fill="#6BE5B6" d="M231 172h6v6h-6z"></path>
              <circle cx="177" cy="16" r="4" fill="#E0F8F9"></circle>
            </svg>
          </div>
          <div>
            <div>
              <h2>최저가, 최고가를 한눈에</h2>
              <span>플랫폼 간 가격을 비교해서 특정 투자 상품의 최저가, 최고가를 제공합니다.</span>
            </div>
            <svg width="308" height="190" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="67" y="87.419" width="153.514" height="33.698" rx="16.849" fill="#6BE5B6"></rect>
              <rect x="80" y="35" width="126" height="18" rx="9" fill="#C4F5E2"></rect>
              <rect x="80" y="61" width="126" height="18" rx="9" fill="#C4F5E2"></rect>
              <rect x="80" y="128" width="126" height="18" rx="9" fill="#C4F5E2"></rect>
              <path
                d="M202.805 98c-.744 0-1.457.29-1.983.807a2.732 2.732 0 00-.822 1.949v41.529c0 1.523 1.255 2.757 2.805 2.757a2.87 2.87 0 001.771-.581l7.049-5.621 6.127 13.129c.48.979 1.476 1.56 2.546 1.56.406 0 .812 0 1.218-.29l10.186-4.643c1.403-.653 2.067-2.321 1.329-3.663l-6.163-13.166 8.894-1.632a3.257 3.257 0 001.587-.943c.997-1.161.849-2.865-.443-3.917L204.65 98.617l-.037.036a2.82 2.82 0 00-1.808-.653z"
                fill="#4C5D5E"
              ></path>
            </svg>
          </div>
          <div>
            <div>
              <h2>투자 상품 검색을 한번에</h2>
              <span>실시간 검색을 통해 각종 플랫폼에 흩어져 있는 투자 상품들을 한번에 모아줍니다. </span>
            </div>
            <svg width="308" height="190" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="119" y="96" width="100" height="77" rx="5" fill="#3FA078"></rect>
              <rect x="132" y="73" width="68" height="68" rx="2" fill="#C4F5E2"></rect>
              <rect opacity="0.8" x="108" y="27" width="20" height="20" rx="2" transform="rotate(18.442 108 27)" fill="#4C5D5E"></rect>
              <path
                opacity="0.8"
                d="M190.281 25.107c.414-1.483 2.277-1.963 3.355-.864l25.463 25.974c1.078 1.1.561 2.953-.93 3.337l-35.225 9.065c-1.491.383-2.838-.99-2.425-2.474l9.762-35.038z"
                fill="#6BDEE5"
              ></path>
              <circle opacity="0.8" cx="90" cy="91" r="11" fill="#FB5353"></circle>
              <path
                d="M94.99 113.807A4 4 0 0198.908 109h103.65a4 4 0 013.918 3.193l11.534 56a4 4 0 01-3.918 4.807h-103.65a4 4 0 01-3.918-3.193l-11.534-56z"
                fill="#6BE5B6"
              ></path>
              <path d="M138 83h56M138 90h56M138 97h56M138 104h56" stroke="#89EAC5"></path>
              <path d="M97 114.571c0-1.714 1.651-2.571 2.236-2.571h102.811c1.2 0 3.403 1 3.953 3" stroke="#C4F5E2"></path>
            </svg>
          </div>
        </section>
      </div>
    </Container>
  );
};
export default IntroDuce;

const Container = styled.div`
  text-align: center;
  background-color: rgb(243, 244, 245);
  padding: 72px 138px 0px;
  & > h2 {
    font-size: 36px;
    font-weight: 700;
    margin: 0px 0px 16px;
  }
  & > p {
    margin: 0px auto 48px;
    padding: 0px;
    width: 540px;
    word-break: keep-all;
    text-align: center;
    white-space: pre-wrap;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  & > div > section {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 24px;
    padding-bottom: 68px;
    margin: 0px auto;
    max-width: 1200px;
    & > div {
      text-align: center;
      background-color: rgb(254, 254, 254);
      width: 100%;
      & > div {
        h2 {
          font-weight: 700;
          margin: 27px 0px 16px;
        }
        span {
          font-weight: 400;
          font-size: 16px;
          white-space: pre-wrap;
          line-height: 24px;
        }
      }
    }
  }
`;
