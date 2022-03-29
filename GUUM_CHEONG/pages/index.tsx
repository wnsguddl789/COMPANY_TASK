import type { NextPage } from "next";
import { ListData } from "../data/data";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import GroupSvg from "../public/group.svg";
import FoldSvg from "../public/fold.svg";
import UnFoldSvg from "../public/unfold.svg";
const Container = styled.div`
  position: absolute;
  left: 111px;
  right: 20.04%;
  top: 28px;
  bottom: 9.89%;
  background: #ffffff;
`;
const GroupList = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding-left: 0;
`;
const GroupItemWrapper = styled.div`
  display: flex;
  :hover {
    background-color: #ffe7e7;
    color: #333333;
    cursor: pointer;
  }
`;
const GroupItem = styled.li`
  font-family: Noto Sans CJK KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: #757575;
  margin-left: 9px;
`;
const ItemList = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding-left: 0;
`;
const Item = styled.li`
  font-family: Noto Sans CJK KR;
  padding-left: 30px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: #757575;
  :hover {
    background-color: #ffe7e7;
    color: #333333;
    cursor: pointer;
  }
`;
const SVG = styled(Image)`
  display: block;
  margin-right: 20px;
`;
const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <Container>
      <GroupList isOpen={isOpen}>
        {ListData &&
          ListData.map((list: any) => {
            list.isToggle = false;
            return (
              <>
                <GroupItemWrapper
                  onClick={() => (list.isToggle = !list.isToggle)}
                >
                  {list.isToggle ? (
                    <SVG
                      src={UnFoldSvg}
                      width={"5px"}
                      height={"9px"}
                      key={`${list.groupUid}-1`}
                    />
                  ) : (
                    <SVG
                      src={FoldSvg}
                      width={"9px"}
                      height={"5px"}
                      key={`${list.groupUid}-2`}
                    />
                  )}
                  <SVG
                    src={GroupSvg}
                    width={"16px"}
                    height={"14px"}
                    key={`${list.groupUid}-3`}
                  />
                  <GroupItem key={list.groupUid}>{list.name}</GroupItem>
                </GroupItemWrapper>
                <ItemList isOpen>
                  {list.items.map((item: any) => {
                    return <Item key={item.itemUid}>{item.name}</Item>;
                  })}
                </ItemList>
              </>
            );
          })}
      </GroupList>
    </Container>
  );
};

export default Home;
