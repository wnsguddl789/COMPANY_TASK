import React, { useEffect, useState, useRef } from 'react';
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { API } from './api';
const Home: NextPage = ({ data }: any) => {
  const [list, setList] = useState(['모든투자상품', 'NFT', '스니커즈리셀', '조각투자', 'P2P 투자', '스타트업 펀딩', '비상장 주식']);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const selectRef = useRef<HTMLUListElement>(null);
  const [popularList, setPopularList] = useState(data);

  const FetchAll = async () => {
    const result = await API.all();
    setPopularList(result.data.data);
  };
  const FetchNft = async () => {
    const result = await API.nft();
    setPopularList(result.data.data);
  };
  const FetchShooes = async () => {
    const result = await API.shooes();
    setPopularList(result.data.data);
  };
  const FetchPiece = async () => {
    const result = await API.piece();
    setPopularList(result.data.data);
  };
  const FetchP2P = async () => {
    const result = await API.p2p();
    setPopularList(result.data.data);
  };
  const FetchStartUp = async () => {
    const result = await API.startup();
    setPopularList(result.data.data);
  };
  const FetchInvest = async () => {
    const result = await API.invest();
    setPopularList(result.data.data);
  };

  useEffect(() => {});

  useEffect(() => {
    if (selectRef.current) {
      [...selectRef.current.children].map((node) => {
        node.addEventListener('click', function () {
          list.map((item, idx) => {
            if (item === node.children[1].innerHTML) {
              setIndex(idx);
            }
          });
        });
      });
    }
  });
  return (
    <>
      <RecommendContainer>
        <h3>이 상품은 어떤가요?</h3>
        <RecommendList>
          <div>
            <RecommendItem>
              <div className="bookMark">
                <div className="bookMark">
                  <svg width="14" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 3v14.55l-4-2.29-1-.56-1 .56-4 2.29V3h10zm.83-2H1.17A1.09 1.09 0 000 2v19l7-4 7 4V2a1.09 1.09 0 00-1.17-1z"
                      fill="#FEFEFE"
                    ></path>
                  </svg>
                </div>
              </div>
              <ImageContainer>
                <Image alt="테이스터스" src="https://msr-assets.s3.ap-northeast-2.amazonaws.com/unlisted-default.png" />
              </ImageContainer>
              <RecommendDesc>
                <Tag isEnd={false}>비상장주식</Tag>
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
              <div className="bookMark">
                <div className="bookMark">
                  <svg width="14" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 3v14.55l-4-2.29-1-.56-1 .56-4 2.29V3h10zm.83-2H1.17A1.09 1.09 0 000 2v19l7-4 7 4V2a1.09 1.09 0 00-1.17-1z"
                      fill="#FEFEFE"
                    ></path>
                  </svg>
                </div>
              </div>
              <ImageContainer>
                <Image alt="퀼슨" src="https://msr-assets.s3.ap-northeast-2.amazonaws.com/unlisted-default.png" />
              </ImageContainer>
              <RecommendDesc>
                <Tag isEnd={false}>비상장주식</Tag>
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
              <div className="bookMark">
                <div className="bookMark">
                  <svg width="14" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 3v14.55l-4-2.29-1-.56-1 .56-4 2.29V3h10zm.83-2H1.17A1.09 1.09 0 000 2v19l7-4 7 4V2a1.09 1.09 0 00-1.17-1z"
                      fill="#FEFEFE"
                    ></path>
                  </svg>
                </div>
              </div>
              <ImageContainer>
                <Image alt="한국신용데이터" src="https://msr-assets.s3.ap-northeast-2.amazonaws.com/unlisted-default.png" />
              </ImageContainer>
              <RecommendDesc>
                <Tag isEnd={false}>비상장주식</Tag>
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
            <ColorText onClick={() => setVisible(!visible)}>
              {list[index]}
              <Select ref={selectRef} visible={visible}>
                <SelectItem isSelected={list[index] === list[0]} onClick={() => FetchAll()}>
                  <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="10 0 200 150">
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
                </SelectItem>
                <SelectItem isSelected={list[index] === list[1]} onClick={() => FetchNft()}>
                  <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="10 0 200 150">
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
                </SelectItem>
                <SelectItem isSelected={list[index] === list[2]} onClick={() => FetchShooes()}>
                  <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="10 0 200 150">
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
                </SelectItem>
                <SelectItem isSelected={list[index] === list[3]} onClick={() => FetchPiece()}>
                  <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="10 0 200 150">
                    <path
                      d="M90 38.01a9 9 0 10-17.999 0 9 9 0 0017.999 0zm-14 0a4.999 4.999 0 119.998 0 4.999 4.999 0 01-9.998 0zM43 85.7a9 9 0 100-18 9 9 0 000 18zm0-14a5 5 0 110 10 5 5 0 010-10z"
                      fill="#4C5D5E"
                    ></path>
                    <path
                      d="M101.24 22.39a29.9 29.9 0 00-41.53 0 26.82 26.82 0 00-8.39 19.38 30.12 30.12 0 008.35 21.24c4.54 4.59 7.29 11.81 7.2 18.84A23.68 23.68 0 0162 96.14a24.888 24.888 0 00-18.8-8.87c-6.08 0-11.91 3.32-12.55 3.7a2 2 0 102 3.45c3.21-1.87 6.82-2.95 10.53-3.15a20.998 20.998 0 0116.07 7.83c-9.66 8.94-22.82 9.15-32.65.64.34-.44.69-.86 1.06-1.26a2.015 2.015 0 00-3-2.69c-.32.36-.63.74-.94 1.12a24.94 24.94 0 011.81-33.9 2.002 2.002 0 00-2.77-2.89 28.919 28.919 0 000 41.47 28.618 28.618 0 0019.86 8.42 28.618 28.618 0 0019.86-8.42c.29-.28.57-.57.84-.86a1.52 1.52 0 00.22-.22 27.4 27.4 0 007.33-18.65A31.18 31.18 0 0064 61.91a20.299 20.299 0 011.68-2.12 2.015 2.015 0 00-3-2.69c-.51.56-1 1.15-1.44 1.76a26.24 26.24 0 01-6-17 22.89 22.89 0 017.16-16.55 25.9 25.9 0 0136 0 23.91 23.91 0 012 32.69 24.999 24.999 0 00-19.25-9.39c-6.08 0-11.91 3.32-12.55 3.7a1.998 1.998 0 00-.319 3.416 1.999 1.999 0 002.319.034c3.21-1.87 6.82-2.95 10.53-3.15a21.158 21.158 0 0116.67 8.57 2 2 0 001.94 2.46 2.001 2.001 0 001.5-.63 28 28 0 000-40.66v.04z"
                      fill="#4C5D5E"
                    ></path>
                  </svg>
                  <span>조각투자</span>
                </SelectItem>
                <SelectItem isSelected={list[index] === list[4]} onClick={() => FetchP2P()}>
                  <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="10 0 200 150">
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
                </SelectItem>
                <SelectItem isSelected={list[index] === list[5]} onClick={() => FetchStartUp()}>
                  <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="10 0 200 150">
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
                </SelectItem>
                <SelectItem isSelected={list[index] === list[6]} onClick={() => FetchInvest()}>
                  <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="10 0 200 150">
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
                </SelectItem>
              </Select>
            </ColorText>
            <svg width="14" height="8" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setVisible(!visible)}>
              <path d="M1.68.22L.5 1.4 7.1 8l6.6-6.6L12.52.22 7.1 5.64 1.68.22z" fill="#B3B4B7"></path>
            </svg>
          </span>
        </h3>
        <RecommendList>
          <div>
            {popularList &&
              popularList.map((item: any, idx: number) => {
                return (
                  <RecommendItem key={idx}>
                    <div className="bookMark">
                      <svg width="14" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 3v14.55l-4-2.29-1-.56-1 .56-4 2.29V3h10zm.83-2H1.17A1.09 1.09 0 000 2v19l7-4 7 4V2a1.09 1.09 0 00-1.17-1z"
                          fill="#FEFEFE"
                        ></path>
                      </svg>
                    </div>
                    <ImageContainer>
                      <Image alt="테이스터스" src={item.img_src} />
                      <ImageLogo src={item.comp_src} />
                    </ImageContainer>
                    <RecommendDesc>
                      <TagWrapper>
                        {item.tag.map((tag: string, idx: number) => {
                          return (
                            <Tag key={idx} isEnd={idx !== 0 ? true : false}>
                              {tag}
                            </Tag>
                          );
                        })}
                      </TagWrapper>
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
                            item.isInvest ? (
                              <InvetTable>
                                <InvestLabel>{item.comp_name}</InvestLabel>
                                {index === 4 ? (
                                  <InvestAmount>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g fill="#68696B">
                                        <path d="M4.55.684c2.499 0 3.85.849 3.85 1.198S7.049 3.079 4.55 3.079.7 2.231.7 1.882C.7 1.532 2.051.684 4.55.684zm0-.684C2.037 0 0 .842 0 1.882s2.037 1.881 4.55 1.881S9.1 2.922 9.1 1.882 7.063 0 4.55 0zM9.1 4.29c.793 0 1.569.23 2.229.66a3.941 3.941 0 011.477 1.76c.304.716.383 1.505.228 2.265a3.893 3.893 0 01-1.098 2.008 4.04 4.04 0 01-2.053 1.073 4.098 4.098 0 01-2.318-.223 3.993 3.993 0 01-1.8-1.444A3.858 3.858 0 015.09 8.21a3.883 3.883 0 011.177-2.77A4.065 4.065 0 019.1 4.29zm0-.87c-.969 0-1.916.282-2.722.808a4.815 4.815 0 00-1.805 2.15 4.69 4.69 0 00-.279 2.767c.19.929.656 1.782 1.341 2.452a4.935 4.935 0 002.51 1.31c.95.186 1.935.09 2.83-.272a4.878 4.878 0 002.2-1.764A4.713 4.713 0 0014 8.211c0-1.27-.516-2.49-1.435-3.387A4.958 4.958 0 009.1 3.42z"></path>
                                        <path d="M9.485 10.386v.685h-.847v-.685h-.7a.708.708 0 01-.495-.2.676.676 0 01-.205-.484V8.84h.812v.739c0 .03.012.058.033.08a.12.12 0 00.08.036h1.89a.12.12 0 00.079-.036.115.115 0 00.032-.08V8.491a.109.109 0 00-.035-.073.113.113 0 00-.077-.03h-2.1a.708.708 0 01-.495-.2.676.676 0 01-.205-.484v-1.21c0-.182.074-.356.205-.485.132-.128.31-.2.495-.2h.7v-.472H9.5v.486h.721c.186 0 .364.072.495.2a.677.677 0 01.205.484v.753h-.819v-.603a.109.109 0 00-.035-.073.113.113 0 00-.077-.03H8.155a.107.107 0 00-.079.028.103.103 0 00-.033.075v.924a.108.108 0 00.035.073c.021.02.049.03.077.03h2.1c.186 0 .364.072.495.2a.677.677 0 01.205.484v1.368a.677.677 0 01-.205.484.709.709 0 01-.495.2l-.77-.034z"></path>
                                        <path d="M4.9 10.66h-.343C2.023 10.674.7 9.86.7 9.579v-.684a8.636 8.636 0 003.724.773 3.692 3.692 0 01-.161-.684A6.754 6.754 0 01.7 8.06V6.842a8.563 8.563 0 003.549.773 4.4 4.4 0 01.14-.684A6.877 6.877 0 01.7 6.007V4.79a8.803 8.803 0 003.85.753h.497a4.23 4.23 0 01.63-.753c-.357.035-.7.062-1.127.062A7.001 7.001 0 01.7 3.955V1.779C.7 1.499 2.023.684 4.55.684S8.4 1.498 8.4 1.78v1.704c.231-.038.465-.059.7-.062V1.78C9.1.794 7.063 0 4.55 0S0 .794 0 1.779v7.8c0 .978 2.037 1.779 4.55 1.779.28 0 .56 0 .826-.034a4.497 4.497 0 01-.476-.664z"></path>
                                      </g>
                                      <defs>
                                        <clipPath id="income_svg__clip0_5980_84531">
                                          <path fill="#fff" d="M0 0h14v13H0z"></path>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    <span>{item.interestRate}%</span>
                                    <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g fill="#68696B">
                                        <path d="M.61 4.55l.44-.77.441.77H.61z"></path>
                                        <path d="M1.05 3.08l-.525.91L0 4.9h2.1l-.525-.91-.525-.91z"></path>
                                        <path d="M5.25 0a4.543 4.543 0 00-4.088 2.569l.413.7v.042A3.836 3.836 0 111.4 4.55a2.85 2.85 0 010-.35H.7a2.933 2.933 0 000 .35A4.55 4.55 0 105.25 0z"></path>
                                        <path d="M13.3 2.8v.7a1.4 1.4 0 11-2.8 0v-.7H9.45a4.55 4.55 0 010 3.5H14V2.8h-.7z"></path>
                                        <path d="M12.6 2.1a.7.7 0 10-1.4 0v1.4a.7.7 0 101.4 0V2.1zM13.3 5.6v7.7H3.5V8.75A4.55 4.55 0 009.674 5.6H13.3zm.7-.7H9.1a3.843 3.843 0 01-6.3 2.618V14H14V4.9zM6.765 2.106l-1.863 2.09.523.466 1.863-2.09-.523-.466z"></path>
                                        <path d="M5.6 4.2h-.7V7h.7V4.2z"></path>
                                      </g>
                                      <defs>
                                        <clipPath id="calendar_svg__clip0_5980_84521">
                                          <path fill="#fff" d="M0 0h14v14H0z"></path>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    <span>{item.month}개월</span>
                                  </InvestAmount>
                                ) : null}
                                <InvestDesc>
                                  <span>누적투자금액</span>
                                  <span>{item.investPrice.toLocaleString()}원</span>
                                </InvestDesc>
                                <InvestDetail>
                                  <ProgressContainer>
                                    <Background />
                                    <Progress
                                      percent={
                                        Math.floor((item.investPrice / item.goalPrice) * 100) > 100
                                          ? 100
                                          : Math.floor((item.investPrice / item.goalPrice) * 100)
                                      }
                                    />
                                  </ProgressContainer>
                                  <div>
                                    <span>{Math.floor((item.investPrice / item.goalPrice) * 100)}%</span>
                                    <span>목표금액 {item.goalPrice.toLocaleString()}원</span>
                                  </div>
                                </InvestDetail>
                              </InvetTable>
                            ) : (
                              <DataTable>
                                {item.stock &&
                                  item.stock.map((col: any, idx: number) => {
                                    const isEnd = item.stock.length - 1 === idx ? true : false;

                                    return (
                                      <DataCol isEnd={isEnd} key={idx}>
                                        <DataRow isValue={false}>{col.label !== null ? `${col.label}주` : '-'}</DataRow>
                                        <DataRow isValue={idx === 0 ? true : false}>
                                          {col.value !== null ? `${col.value.toLocaleString()}원` : '-'}
                                        </DataRow>
                                      </DataCol>
                                    );
                                  })}
                              </DataTable>
                            )
                          ) : (
                            <OpenContainer>
                              <InvestLabel>{item.comp_name}</InvestLabel>
                              <OpenDateText>{item.OpenDate} 오픈</OpenDateText>
                            </OpenContainer>
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
const ImageLogo = styled.img`
  height: 18px;
  position: absolute;
  left: 20px;
  top: 20px;
`;
const RecommendDesc = styled.div`
  width: 100%;
  padding-top: 16px;
`;
const TagWrapper = styled.div`
  display: flex;
`;
const Tag = styled.div<{
  isEnd: boolean;
}>`
  color: ${(props) => (props.isEnd ? 'white' : '#3fa078')};
  background-color: ${(props) => (props.isEnd ? '#5FCEA3' : '#c4f5e2')};
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 55px;
  font-size: 14px;
  width: fit-content;
  margin-right: 5px;
`;
const DescContainer = styled.div`
  box-sizing: border-box;
`;
const Data = styled.div`
  width: 100%;
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
  overflow: hidden;
  margin: 8px 0px 0px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: rgb(33, 34, 35);
`;
const InvetTable = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
const InvestLabel = styled.p`
  position: relative;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 0px 32px;
  color: rgb(179, 180, 183);
  font-weight: 400;
`;
const InvestAmount = styled.div`
  position: absolute;
  /* top: 0; */
  & > span {
    font-size: 11px;
    color: rgb(104, 105, 107);
    margin-bottom: 8px;
    margin-right: 10px;
  }
`;
const InvestDesc = styled.div`
  display: flex;
  justify-content: space-between;
  span:first-child {
    font-size: 12px;
    color: rgb(179, 180, 183);
  }
  span:last-child {
    font-size: 16px;
  }
`;
const InvestDetail = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 12px;
      color: rgb(179, 180, 183);
    }
  }
`;
const ProgressContainer = styled.div`
  height: 7px;
  width: 100%;
  position: relative;
  margin: 10px 0;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: #eff0f3;
  width: 100%;
`;

const Progress = styled(BaseBox)<{
  percent: number;
}>`
  background: #6be5b6;
  width: ${({ percent }) => percent}%;
`;
const InvestProgress = styled.progress`
  background-color: #6be5b6;
  width: 100%;
`;
const DataTable = styled.div``;
const DataCol = styled.div<{ isEnd: boolean }>`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  min-height: 36px;
  border-bottom: ${(props) => (props.isEnd ? null : '1px solid #EFF0F3')};
`;
const DataRow = styled.span<{ isValue: boolean }>`
  color: ${(props) => (props.isValue ? 'rgb(33, 34, 35)' : 'rgb(179, 180, 183)')};
  font-size: ${(props) => (props.isValue ? '24px' : '12px')};
  line-height: ${(props) => (props.isValue ? '36px' : '24px')};
`;
const ColorText = styled.span`
  color: rgb(63, 160, 120);
  margin-right: 20px;
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
  color: black;
  width: auto;
  position: absolute;
  z-index: 999;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px 0px;
  background-color: white;
`;
const SelectItem = styled.li<{
  isSelected: boolean;
}>`
  padding: 0 10px;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? '#F3F4F5' : 'inherit')};
  & > * {
    font-size: 10px;
  }
`;
const OpenContainer = styled.div`
  margin-top: 20px;
`;
