import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { API } from './api';
const Home: NextPage = ({ data }: any) => {
  const [list, setData] = useState();
  const [isMouseOn, setIsMouseOn] = useState(false);

  const onMouseOut = () => {
    setIsMouseOn(!isMouseOn);
  };
  const onMouseOver = () => {
    setIsMouseOn(!isMouseOn);
  };

  return (
    <>
      <RecommendContainer>
        <h3>이 상품은 어떤가요?</h3>
        <RecommendList>
          <div>
            <RecommendItem>
              <div className="bookMark"></div>
              <ImageContainer>
                <Image alt="테이스터스" src="https://msr-assets.s3.ap-northeast-2.amazonaws.com/unlisted-default.png" />
              </ImageContainer>
              <RecommendDesc>
                <Tag>비상장주식</Tag>
                <DescContainer>
                  <div>
                    <Data>
                      <DataTitle>테이스터스</DataTitle>
                      <span>
                        <svg width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 6L0 0h10L5 6z" fill="#5378FB"></path>
                        </svg>
                        0%
                      </span>
                    </Data>
                    <DataTable>
                      <DataCol isEnd={false}>
                        <span className="DataSplit">-</span> <span className="DataValue">0원</span>
                      </DataCol>
                      <DataCol isEnd={false}>
                        <span className="DataSplit">-</span> <span className="DataValue">-</span>
                      </DataCol>
                      <DataCol isEnd={true}>
                        <span className="DataSplit">-</span> <span className="DataValue">-</span>
                      </DataCol>
                    </DataTable>
                  </div>
                </DescContainer>
              </RecommendDesc>
            </RecommendItem>

            <RecommendItem>
              <div className="bookMark"></div>
              <ImageContainer>
                <Image alt="퀼슨" src="https://msr-assets.s3.ap-northeast-2.amazonaws.com/unlisted-default.png" />
              </ImageContainer>
              <RecommendDesc>
                <Tag>비상장주식</Tag>
                <DescContainer>
                  <div>
                    <Data>
                      <DataTitle>퀼슨</DataTitle>
                      <span>
                        <svg width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 6L0 0h10L5 6z" fill="#5378FB"></path>
                        </svg>
                        0%
                      </span>
                    </Data>
                    <DataTable>
                      <DataCol isEnd={false}>
                        <span className="DataSplit">-</span> <span className="DataValue">0원</span>
                      </DataCol>
                      <DataCol isEnd={false}>
                        <span className="DataSplit">-</span> <span className="DataValue">-</span>
                      </DataCol>
                      <DataCol isEnd={true}>
                        <span className="DataSplit">-</span> <span className="DataValue">-</span>
                      </DataCol>
                    </DataTable>
                  </div>
                </DescContainer>
              </RecommendDesc>
            </RecommendItem>

            <RecommendItem>
              <div className="bookMark"></div>
              <ImageContainer>
                <Image alt="한국신용데이터" src="https://msr-assets.s3.ap-northeast-2.amazonaws.com/unlisted-default.png" />
              </ImageContainer>
              <RecommendDesc>
                <Tag>비상장주식</Tag>
                <DescContainer>
                  <div>
                    <Data>
                      <DataTitle>한국신용데이터</DataTitle>
                      <span>
                        <svg width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 6L0 0h10L5 6z" fill="#5378FB"></path>
                        </svg>
                        0%
                      </span>
                    </Data>
                    <DataTable>
                      <DataCol isEnd={false}>
                        <span className="DataSplit">-</span> <span className="DataValue">50,000원</span>
                      </DataCol>
                      <DataCol isEnd={false}>
                        <span className="DataSplit">-</span> <span className="DataValue">-</span>
                      </DataCol>
                      <DataCol isEnd={true}>
                        <span className="DataSplit">-</span> <span className="DataValue">-</span>
                      </DataCol>
                    </DataTable>
                  </div>
                </DescContainer>
              </RecommendDesc>
            </RecommendItem>
          </div>
        </RecommendList>
      </RecommendContainer>
      <RecommendContainer>
        <h3>
          인기가 많은&nbsp;
          <span>
            <ColorText onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
              모든 투자상품
            </ColorText>
            <svg width="14" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.68.22L.5 1.4 7.1 8l6.6-6.6L12.52.22 7.1 5.64 1.68.22z" fill="#B3B4B7"></path>
            </svg>
            <Select visible={isMouseOn}>
              <li>
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M83.093 23a1.322 1.322 0 011.12.67l21 37.35a1.31 1.31 0 010 1.3l-21 37.35a1.323 1.323 0 01-1.16.68h-41.72a1.322 1.322 0 01-1.12-.68l-21-37.35a1.31 1.31 0 010-1.3l21-37.35a1.32 1.32 0 011.16-.68h41.72V23zm0-4.01h-41.76a5.34 5.34 0 00-4.65 2.72l-21 37.34a5.33 5.33 0 000 5.22l21 37.4a5.341 5.341 0 004.65 2.72h41.76a5.333 5.333 0 004.65-2.72l21-37.34a5.337 5.337 0 000-5.22l-21-37.34a5.34 5.34 0 00-4.65-2.72v-.06z"
                    fill="#4C5D5E"
                  ></path>
                  <path
                    d="M78.57 97.11h-6.73a2 2 0 010-4h6.73a2.25 2.25 0 001.1-.3 2.22 2.22 0 00.8-.81l16.46-29.26a2.2 2.2 0 000-2.14L80.47 31.34a2.18 2.18 0 00-1.9-1.11h-19a2 2 0 010-4h19a6.2 6.2 0 015.39 3.15l16.46 29.29a6.217 6.217 0 010 6.06L83.96 93.96a6.22 6.22 0 01-5.39 3.15zM64.807 97.11h-19a6.2 6.2 0 01-5.39-3.15l-16.41-29.29a6.22 6.22 0 010-6.06l16.46-29.23a6.199 6.199 0 015.39-3.15h6.74a2 2 0 010 4h-6.74a2.18 2.18 0 00-1.9 1.11L27.497 60.6a2.2 2.2 0 000 2.14L43.957 92a2.18 2.18 0 001.9 1.11h19a2 2 0 010 4h-.05z"
                    fill="#4C5D5E"
                  ></path>
                  <path
                    d="M50.04 71.12L42.1 55.76c0 1.8.07 4.56.07 6.36v9h-3.31V52.21h4.68l7.87 14.66V52.21h3.31v18.91h-4.68zM61.11 63.471v7.65h-3.32v-16.13a2.78 2.78 0 012.79-2.78h9.5v3h-8.54a.44.44 0 00-.43.44v4.87h8.42v3l-8.42-.05zM77.52 71.12V55.18H72v-3h14.35v3h-5.52v15.94h-3.31z"
                    fill="#4C5D5E"
                  ></path>
                </svg>
                <span>모든투자상품</span>
              </li>
              <li>
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M83.093 23a1.322 1.322 0 011.12.67l21 37.35a1.31 1.31 0 010 1.3l-21 37.35a1.323 1.323 0 01-1.16.68h-41.72a1.322 1.322 0 01-1.12-.68l-21-37.35a1.31 1.31 0 010-1.3l21-37.35a1.32 1.32 0 011.16-.68h41.72V23zm0-4.01h-41.76a5.34 5.34 0 00-4.65 2.72l-21 37.34a5.33 5.33 0 000 5.22l21 37.4a5.341 5.341 0 004.65 2.72h41.76a5.333 5.333 0 004.65-2.72l21-37.34a5.337 5.337 0 000-5.22l-21-37.34a5.34 5.34 0 00-4.65-2.72v-.06z"
                    fill="#4C5D5E"
                  ></path>
                  <path
                    d="M78.57 97.11h-6.73a2 2 0 010-4h6.73a2.25 2.25 0 001.1-.3 2.22 2.22 0 00.8-.81l16.46-29.26a2.2 2.2 0 000-2.14L80.47 31.34a2.18 2.18 0 00-1.9-1.11h-19a2 2 0 010-4h19a6.2 6.2 0 015.39 3.15l16.46 29.29a6.217 6.217 0 010 6.06L83.96 93.96a6.22 6.22 0 01-5.39 3.15zM64.807 97.11h-19a6.2 6.2 0 01-5.39-3.15l-16.41-29.29a6.22 6.22 0 010-6.06l16.46-29.23a6.199 6.199 0 015.39-3.15h6.74a2 2 0 010 4h-6.74a2.18 2.18 0 00-1.9 1.11L27.497 60.6a2.2 2.2 0 000 2.14L43.957 92a2.18 2.18 0 001.9 1.11h19a2 2 0 010 4h-.05z"
                    fill="#4C5D5E"
                  ></path>
                  <path
                    d="M50.04 71.12L42.1 55.76c0 1.8.07 4.56.07 6.36v9h-3.31V52.21h4.68l7.87 14.66V52.21h3.31v18.91h-4.68zM61.11 63.471v7.65h-3.32v-16.13a2.78 2.78 0 012.79-2.78h9.5v3h-8.54a.44.44 0 00-.43.44v4.87h8.42v3l-8.42-.05zM77.52 71.12V55.18H72v-3h14.35v3h-5.52v15.94h-3.31z"
                    fill="#4C5D5E"
                  ></path>
                </svg>
                <span>NFT</span>
              </li>
              <li>
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#4C5D5E">
                    <path d="M43.21 36a5.469 5.469 0 013.93 1.65l1.53 1.54A6 6 0 0150 41.42l1.75 5.32a13.71 13.71 0 005.67 7.29l23.81 15.06a13.36 13.36 0 005.28 2l14.67 2.12a5.732 5.732 0 011.69 10.74L96 87.4a5.46 5.46 0 01-2.47.6H23.58A5.65 5.65 0 0118 82.33V71.46c.003-.417.046-.832.13-1.24l5.65-25.73a5.64 5.64 0 013.92-4.23l14-4.05a5.631 5.631 0 011.52-.21h-.01zm.01-4c-.89 0-1.775.124-2.63.37l-14 4.05a9.64 9.64 0 00-6.72 7.21l-5.64 25.7a9.854 9.854 0 00-.23 2.1v10.9a9.64 9.64 0 009.58 9.7h69.94a9.41 9.41 0 004.28-1l6.91-3.49a9.727 9.727 0 002.429-15.549 9.727 9.727 0 00-5.359-2.721l-14.66-2.12a9.47 9.47 0 01-3.73-1.38l-23.8-15.06a9.67 9.67 0 01-4-5.16l-1.75-5.32a9.77 9.77 0 00-2.32-3.79L50 34.84A9.482 9.482 0 0043.23 32h-.01z"></path>
                    <path d="M38 86.33a2 2 0 01-2-1.88l-.33-5.74c-1.18-4.6-2.69-5.28-8.08-7.07l-10.67-3.56a2 2 0 111.27-3.75l10.66 3.55c5.9 2 9.06 3.31 10.75 10.08.015.123.015.247 0 .37l.35 5.92a2 2 0 01-1.83 2.08H38zM52 56.89a2 2 0 01-1.41-3.42l3.55-3.55A2.008 2.008 0 0157 52.74l-3.59 3.59a2 2 0 01-1.41.56zM57 61.33a2 2 0 01-1.41-3.41l3.55-3.59A2.021 2.021 0 1162 57.19l-3.56 3.55a2 2 0 01-1.44.59zM62.71 65.57a2 2 0 01-1.6-3.2l3-4a2 2 0 113.2 2.4l-3 4a2 2 0 01-1.6.8zM77.42 71.45a2 2 0 01-2-1.83l-.43-5a2.007 2.007 0 114-.34l.43 5a2 2 0 01-1.82 2.16l-.18.01zM69.41 69.1a2 2 0 01-1.31-.485 2 2 0 01-.59-2.145l1.59-4.77a2.002 2.002 0 013.8 1.26l-1.59 4.77a2 2 0 01-1.9 1.37zM41.35 43.4a.66.66 0 01.4 1.17l-12 9.62a.63.63 0 01-.41.14.62.62 0 01-.39-.13l-4.54-3.41a.65.65 0 01.16-1.13l16.57-6.22a.852.852 0 01.23 0l-.02-.04zm.02-3.96a4.701 4.701 0 00-1.64.3l-16.57 6.21A4.65 4.65 0 0022 53.99l4.54 3.41a4.66 4.66 0 005.7-.09l12-9.62a4.65 4.65 0 00-2.9-8.29l.03.04zM85.11 78.33a2 2 0 01-2-2v-6a2 2 0 114 0v6a2 2 0 01-2 2z"></path>
                    <path d="M92.45 79a155.69 155.69 0 01-42-5.74A156.178 156.178 0 0118 60.09a2.025 2.025 0 012-3.52A151.312 151.312 0 0051.58 69.4a152.409 152.409 0 0055.24 4.93 2.01 2.01 0 012.18 1.82 2.014 2.014 0 01-1.068 1.959c-.234.122-.49.197-.752.22-4.92.45-9.84.67-14.73.67zM77 82.33H17.66a2.08 2.08 0 00-2.08 1.66 2 2 0 002 2.34H77a2 2 0 100-4zM105.89 82.33H89a2 2 0 000 4h17a2 2 0 002-2.34 2.072 2.072 0 00-2.11-1.66z"></path>
                  </g>
                  <defs>
                    <clipPath id="Sneakers_svg__clip0_5148_74450">
                      <path fill="#fff" transform="translate(14 32)" d="M0 0h96v60H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <span>스니커즈리셀</span>
              </li>
              <li>
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M90 38.01a9 9 0 10-17.999 0 9 9 0 0017.999 0zm-14 0a4.999 4.999 0 119.998 0 4.999 4.999 0 01-9.998 0zM43 85.7a9 9 0 100-18 9 9 0 000 18zm0-14a5 5 0 110 10 5 5 0 010-10z"
                    fill="#4C5D5E"
                  ></path>
                  <path
                    d="M101.24 22.39a29.9 29.9 0 00-41.53 0 26.82 26.82 0 00-8.39 19.38 30.12 30.12 0 008.35 21.24c4.54 4.59 7.29 11.81 7.2 18.84A23.68 23.68 0 0162 96.14a24.888 24.888 0 00-18.8-8.87c-6.08 0-11.91 3.32-12.55 3.7a2 2 0 102 3.45c3.21-1.87 6.82-2.95 10.53-3.15a20.998 20.998 0 0116.07 7.83c-9.66 8.94-22.82 9.15-32.65.64.34-.44.69-.86 1.06-1.26a2.015 2.015 0 00-3-2.69c-.32.36-.63.74-.94 1.12a24.94 24.94 0 011.81-33.9 2.002 2.002 0 00-2.77-2.89 28.919 28.919 0 000 41.47 28.618 28.618 0 0019.86 8.42 28.618 28.618 0 0019.86-8.42c.29-.28.57-.57.84-.86a1.52 1.52 0 00.22-.22 27.4 27.4 0 007.33-18.65A31.18 31.18 0 0064 61.91a20.299 20.299 0 011.68-2.12 2.015 2.015 0 00-3-2.69c-.51.56-1 1.15-1.44 1.76a26.24 26.24 0 01-6-17 22.89 22.89 0 017.16-16.55 25.9 25.9 0 0136 0 23.91 23.91 0 012 32.69 24.999 24.999 0 00-19.25-9.39c-6.08 0-11.91 3.32-12.55 3.7a1.998 1.998 0 00-.319 3.416 1.999 1.999 0 002.319.034c3.21-1.87 6.82-2.95 10.53-3.15a21.158 21.158 0 0116.67 8.57 2 2 0 001.94 2.46 2.001 2.001 0 001.5-.63 28 28 0 000-40.66v.04z"
                    fill="#4C5D5E"
                  ></path>
                </svg>
                조각투자
              </li>
              <li>
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#4C5D5E">
                    <path d="M34 65a2 2 0 002-2V36h27a2 2 0 000-4H34a2 2 0 00-2 2v29a2 2 0 002 2z"></path>
                    <path d="M14 70.33A10 10 0 0024 81h8v27a2 2 0 002 2h29a2 2 0 002-2v-9.75A6.17 6.17 0 0170.82 92H71a6 6 0 016 6v10a2 2 0 002 2h29a2 2 0 002-2V79a2 2 0 00-2-2H98a6 6 0 01-6-6.18A6.17 6.17 0 0198.25 65H108a2 2 0 002-2V34a2 2 0 00-2-2H81v-7.66A10.24 10.24 0 0071.67 14H71a10 10 0 00-9.71 7.6 2 2 0 002 2.4 2 2 0 001.93-1.52 6.142 6.142 0 013-3.82A5.78 5.78 0 0171 18h.41A6.21 6.21 0 0177 24.34V36h29v25h-7.75A10.21 10.21 0 0088 70.7a9.932 9.932 0 003.1 7.53A10.38 10.38 0 0098.32 81H106v25H81v-8a10 10 0 00-10-10h-.3A10.21 10.21 0 0061 98.25V106H36V77H24.22A6.25 6.25 0 0120 75.46a6 6 0 01-2-4.87 6.08 6.08 0 014.52-5.34A2 2 0 0024 63.34a2 2 0 00-2.56-1.92A10.06 10.06 0 0014 70.33z"></path>
                  </g>
                  <defs>
                    <clipPath id="Pieces_svg__clip0_5148_74411">
                      <path fill="#fff" transform="translate(14 14)" d="M0 0h96v96H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <span>P2P 투자</span>
              </li>
              <li>
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#4C5D5E">
                    <path d="M81.018 40.737a22.23 22.23 0 01-10.18-2.39 1.86 1.86 0 01-1-1.73c.37-7.69 5.08-15.06 12.26-19.21s15.92-4.54 22.77-1a1.852 1.852 0 011 1.73c-.37 7.69-5.07 15.06-12.26 19.2a25.2 25.2 0 01-12.59 3.4zm-7-5.35a20.27 20.27 0 0017.63-1.52 20.27 20.27 0 0010.09-14.51 20.262 20.262 0 00-17.64 1.52 20.27 20.27 0 00-10.13 14.51h.05z"></path>
                    <path d="M71.211 37.296a2 2 0 01-1.93-1.45 2.06 2.06 0 011-2.34 134.34 134.34 0 0116.93-7.75 2 2 0 111.45 3.72 130.56 130.56 0 00-16.51 7.57 2 2 0 01-.94.25z"></path>
                    <path d="M64.873 53.097a2.049 2.049 0 01-1.34-2v-9.27a10.07 10.07 0 012.88-5.67 11.051 11.051 0 014.26-2.78 2 2 0 011.16 3.83 7.541 7.541 0 00-2.62 1.78 6.15 6.15 0 00-1.68 3.29v8.93a2 2 0 01-2.66 1.89zM50.04 40.737a25.21 25.21 0 01-12.63-3.41c-7.14-4.14-11.85-11.51-12.22-19.2a1.85 1.85 0 011-1.73c6.85-3.53 15.59-3.13 22.77 1s11.88 11.53 12.25 19.22a1.85 1.85 0 01-1 1.73 22.23 22.23 0 01-10.17 2.39zm-20.73-21.38a20.27 20.27 0 0010.1 14.51 20.29 20.29 0 0017.68 1.52 20.25 20.25 0 00-10.14-14.51 20.26 20.26 0 00-17.64-1.52z"></path>
                    <path d="M59.848 37.297a2 2 0 01-1-.25 131.319 131.319 0 00-16.42-7.53 2.06 2.06 0 01-1.39-2.12 2.002 2.002 0 012.68-1.67 134.526 134.526 0 0117 7.78 2.06 2.06 0 011 2.34 2 2 0 01-1.87 1.45z"></path>
                    <path d="M64.87 53.097a2.05 2.05 0 01-1.34-2v-8.83a6.151 6.151 0 00-1.69-3.28 7.35 7.35 0 00-2.59-1.77 2 2 0 01-1.3-2.5 2 2 0 012.46-1.34 11.13 11.13 0 014.25 2.78 10.13 10.13 0 012.84 5.68v9.36a2 2 0 01-2.63 1.9zM37.564 82.867v2.36h-2.78v-2.36h-2.37a2.23 2.23 0 01-2.25-2.24v-2.93h2.68v2.41a.36.36 0 00.37.37h6.2a.36.36 0 00.35-.37v-3.57a.342.342 0 00-.35-.35h-7a2.249 2.249 0 01-2.25-2.27v-4.09a2.23 2.23 0 012.25-2.25h2.37v-1.59h2.78v1.64h2.42a2.25 2.25 0 012.27 2.25v2.51h-2.68v-2a.35.35 0 00-.35-.35h-6a.35.35 0 00-.35.35v3.09a.35.35 0 00.35.35h7a2.23 2.23 0 012.19 2.16v4.61a2.231 2.231 0 01-2.25 2.24l-2.6.03z"></path>
                    <path d="M36 61.987a13 13 0 110 26 13 13 0 010-26zm0-4a17 17 0 100 34 17 17 0 000-34z"></path>
                    <path d="M96.19 69.637H83.41v-5.08h7.1a2 2 0 002-2v-9.09a2 2 0 00-2-2H45.08a2 2 0 00-2 2v6.1a17.059 17.059 0 016.32 5h9a2 2 0 000-4H47.08v-5.1h41.43v5.09h-18.1a2 2 0 000 4h9v5.08H52.14c.436 1.295.711 2.638.82 4h41.23v5.09H79.41a2 2 0 000 4h9.1v5.09H47.25a16.93 16.93 0 01-8.31 4h40.47v5.08h-18a2 2 0 000 4h27.1v5.09H47.08v-5.09h2.33a1.996 1.996 0 002-2 2 2 0 00-2-2H38v-4.91c-.663.084-1.331.127-2 .13a16.39 16.39 0 01-2-.13v6.94a1.998 1.998 0 002 2h7.08v7.06a2.002 2.002 0 002 2h45.43a2 2 0 002-2v-9.09a2 2 0 00-2-2h-7.1v-5.08h7.1a2 2 0 002-2v-7.09h3.68a2 2 0 002-2v-9.09a2 2 0 00-2-2z"></path>
                    <path d="M51.188 82.727h16.22a2 2 0 000-4h-14.65v-.74a17 17 0 01-1.57 4.74z"></path>
                  </g>
                  <defs>
                    <clipPath id="startUps_svg__clip0_5148_74418">
                      <path fill="#fff" d="M0 0h124v124H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <span>스타트업 펀딩</span>
              </li>
              <li>
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M32 78.61a4 4 0 110 8 4 4 0 010-8zm0-4a8 8 0 100 16 8 8 0 000-16zM52 53.61a4 4 0 110 8 4 4 0 010-8zm0-4a8 8 0 100 16 8 8 0 000-16zM72 70.61a4 4 0 110 8 4 4 0 010-8zm0-4a8 8 0 100 16 8 8 0 000-16zM92 44.61a4 4 0 110 8 4 4 0 010-8zm0-4a8 8 0 100 16 8 8 0 000-16zM32.82 36.9H21.47A7.23 7.23 0 0114 29.95 7.23 7.23 0 0121.47 23h60.18a2 2 0 010 4H21.47A3.25 3.25 0 0018 29.95a3.25 3.25 0 003.47 2.95h11.35a2 2 0 010 4z"
                    fill="#4C5D5E"
                  ></path>
                  <path
                    d="M103.53 36.9H42.71a2 2 0 010-4h60.82a3.25 3.25 0 003.47-2.95 3.248 3.248 0 00-3.47-2.95H91.19a2 2 0 010-4h12.34a7.231 7.231 0 017.47 7 7.23 7.23 0 01-7.47 6.9z"
                    fill="#4C5D5E"
                  ></path>
                  <path
                    d="M81.299 27h-59.83a2 2 0 010-4h59.83a2 2 0 010 4zM100.59 100.22H24.41A7.49 7.49 0 0117 92.71V34.9a2 2 0 014 0v57.81a3.48 3.48 0 003.44 3.51h76.15a3.479 3.479 0 003.41-3.51V34.9a2 2 0 014 0v57.81a7.49 7.49 0 01-7.41 7.51z"
                    fill="#4C5D5E"
                  ></path>
                  <path
                    d="M37 79.61a2 2 0 01-1.57-3.24l11-14a2 2 0 013.14 2.48l-11 14a2 2 0 01-1.57.76zM77 70.61a2 2 0 01-1.57-3.24l11-14a2 2 0 013.14 2.48l-11 14a2 2 0 01-1.57.76zM66.997 71.61a2 2 0 01-1.33-.5l-9-8a2.005 2.005 0 112.66-3l9 8a2 2 0 01-1.33 3.5z"
                    fill="#4C5D5E"
                  ></path>
                </svg>
                <span>비상장 주식</span>
              </li>
            </Select>
          </span>
        </h3>
        <RecommendList>
          <div>
            {data &&
              data.map((item: any, idx: number) => {
                return (
                  <RecommendItem key={idx}>
                    <div className="bookMark"></div>
                    <ImageContainer>
                      <Image alt="테이스터스" src={item.img_src} />
                    </ImageContainer>
                    <RecommendDesc>
                      <Tag>{item.tag}</Tag>
                      <DescContainer>
                        <div>
                          <Data>
                            <DataTitle>{item.content}</DataTitle>
                            {item.isDiscount && item.isDiscount ? (
                              <span>
                                <svg width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5 6L0 0h10L5 6z" fill="#5378FB"></path>
                                </svg>
                                0%
                              </span>
                            ) : null}
                          </Data>
                          {item.isOpen ? (
                            <DataTable>
                              {item.stock &&
                                item.stock.map((col: any, idx: number) => {
                                  const isEnd = item.stock.length - 1 === idx ? true : false;

                                  return (
                                    <DataCol isEnd={isEnd} key={idx}>
                                      <span className="DataSplit">{col.label !== null ? `${col.label}주` : '-'}</span>
                                      <span className="DataValue">{col.value !== null ? `${col.value.toLocaleString()}원` : '-'}</span>
                                    </DataCol>
                                  );
                                })}
                            </DataTable>
                          ) : (
                            <OpenDateText>{item.OpenDate} 오픈</OpenDateText>
                          )}
                        </div>
                      </DescContainer>
                    </RecommendDesc>
                  </RecommendItem>
                );
              })}
          </div>
        </RecommendList>
      </RecommendContainer>
    </>
  );
};

export default Home;
export async function getServerSideProps(context: any) {
  const result = await API.all();
  if (result.status === 200) {
    const data = result.data.data;
    return {
      props: { data }, // will be passed to the page component as props
    };
  }
}

const RecommendContainer = styled.div`
  /* padding: 0px 120px; */
  max-width: 1440px;
  margin: 0px auto;
  & > h3 {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 28px;
    line-height: 42px;
    font-weight: 700;
    margin: 96px 0px 24px;
    & > span {
      cursor: pointer;
    }
    svg {
      margin-left: 18px;
    }
  }
`;
const RecommendList = styled.div`
  display: initial;
  & > div {
    width: 100%;
    display: flex;
    gap: 24px;
  }
`;

const RecommendItem = styled.div`
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
  transition: transform 0.2s;
  :hover {
    transform: translateY(-20px);
  }
`;
const ImageContainer = styled.div`
  text-align: center;
  padding: 78px;
  background-color: rgb(244, 244, 244);
  border-radius: 4px;
`;
const Image = styled.img`
  position: relative;
  width: 100%;
  min-height: 141px;
  height: 141px;
  object-fit: contain;
  transition: all 0.5s ease 0s;
  border-radius: 4px;
`;
const RecommendDesc = styled.div`
  width: 100%;
  padding-top: 16px;
`;
const Tag = styled.div`
  color: #3fa078;
  background-color: #c4f5e2;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 55px;
  font-size: 14px;
  width: fit-content;
`;
const DescContainer = styled.div`
  box-sizing: border-box;
`;
const Data = styled.div`
  display: flex;
  margin: 0px;
  font-size: 16px;
  line-height: 24px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: rgb(179, 180, 183);
  & > span {
    color: #5879ec;
  }
`;
const DataTitle = styled.h3`
  overflow-x: hidden;
  text-overflow: ellipsis;
  margin: 8px 0px 0px;
  word-break: keep-all;
  font-style: normal;
  font-weight: 500;
  /* font-size: 18px; */
  line-height: 27px;
  color: rgb(33, 34, 35);
`;

const DataTable = styled.div``;
const DataCol = styled.div<{ isEnd: boolean }>`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  min-height: 36px;
  .DataSplit {
    color: rgb(179, 180, 183);
    font-size: 16px;
    line-height: 24px;
  }
  .DataValue {
    color: rgb(33, 34, 35);
    font-size: 24px;
    line-height: 36px;
  }
  border-bottom: ${(props) => (props.isEnd ? null : '1px solid #EFF0F3')};
`;
const ColorText = styled.span`
  color: rgb(63, 160, 120);
`;

const OpenDateText = styled.span`
  color: rgb(95, 206, 163);
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  margin: 0px auto;
`;
const Select = styled.ul<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: relative;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px 0px;
  li {
    display: flex;
    align-items: center;
    & > * {
      font-size: 20px;
    }
  }
`;
