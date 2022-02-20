import type { NextPage } from 'next';
import styled from '@emotion/styled';
const Home: NextPage = () => {
  return (
    <RecommendContainer>
      <h3>이 상품은 어떤가요?</h3>
      <div>
        <div>
          <div>
            <div className="bookMark"></div>
            <div>
              <img alt="테이스터스" src="https://msr-assets.s3.ap-northeast-2.amazonaws.com/unlisted-default.png" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </RecommendContainer>
  );
};

export default Home;

const RecommendContainer = styled.div`
  padding: 0px 120px;
  max-width: 1440px;
  margin: 0px auto;
  h3 {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 28px;
    line-height: 42px;
    font-weight: 700;
    margin: 96px 0px 24px;
  }
  & > div > div {
    width: 100%;
    display: flex;
    gap: 24px;
    & > div {
      position: relative;
      width: 100%;
      cursor: pointer;
      transition: top 0.25s ease 0s;
      top: 0px;
      .bookMark {
        position: absolute;
        z-index: 2;
        top: 8px;
        right: 8px;
        padding: 12px;
        cursor: pointer;
      }
      .image {
        width: 100%;
        padding: 78px;
        background-color: rgb(244, 244, 244);
        height: 275px;
        border-radius: 4px;
        image {
          position: relative;
          width: 100%;
          min-height: 141px;
          height: 141px;
          object-fit: contain;
          transition: all 0.5s ease 0s;
          border-radius: 4px;
        }
      }
    }
  }
`;
