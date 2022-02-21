/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CarouSel = () => {
  return (
    <CarouSelWrapper slidesPerView={1} loop={true}>
      <SwiperSlide>
        <CarouSelContainer>
          <CarouSelInfo>
            <div>
              <p>NOW</p>
              <p>3일간 새로 등록된 상품</p>
            </div>
            <p>{Number(59)}개</p>
          </CarouSelInfo>
          <CarouSelImage>
            <img src={'https://msr-assets.s3.ap-northeast-2.amazonaws.com/calendar.png'} alt="달력" />
          </CarouSelImage>
        </CarouSelContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CarouSelContainer>
          <CarouSelInfo>
            <div>
              <p>NOW</p>
              <p>3일간 마감된 투자 상품</p>
            </div>
            <p>{Number(27)}개</p>
          </CarouSelInfo>
          <CarouSelImage>
            <img src={'https://msr-assets.s3.ap-northeast-2.amazonaws.com/rocket.png'} alt="달력" />
          </CarouSelImage>
        </CarouSelContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CarouSelContainer>
          <CarouSelInfo>
            <div>
              <p>NOW</p>
              <p>프랩에서 투자상품을 조회한 횟수</p>
            </div>
            <p>{Number(788800)}개</p>
          </CarouSelInfo>
          <CarouSelImage>
            <img src={'https://msr-assets.s3.ap-northeast-2.amazonaws.com/letter.png'} alt="달력" />
          </CarouSelImage>
        </CarouSelContainer>
      </SwiperSlide>
    </CarouSelWrapper>
  );
};
export default CarouSel;
const CarouSelWrapper = styled(Swiper)``;
const CarouSelContainer = styled.div`
  display: flex;
  gap: 100px;
  height: 182px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgb(76, 93, 94);
`;
const CarouSelInfo = styled.div`
  display: flex;
  gap: 32px;
  & > p {
    font-size: 38px;
    font-weight: 700;
    line-height: 72px;
    text-align: center;
    color: rgb(254, 254, 254);
    border-bottom: 1px solid rgb(254, 254, 254);
    margin: 0px;
  }
  & > div > p:first-of-type {
    color: rgb(107, 229, 182);
    font-size: 18px;
    line-height: 27px;
    margin: 0px;
  }
  & > div > p:last-of-type {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin: 0px;
    color: rgb(254, 254, 254);
  }
`;
const CarouSelImage = styled.div``;
