import React from 'react';
import styled from 'styled-components';
import Logo from '../header/Logo.js';
import Thumbnail from './Thumbnail.js';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const MainPageS = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  margin-top: 8%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TitleS = styled.div`
  display: flex;
  font-family: 'bitbit';
  vertical-align: bottom;
  align-items:center;
  width : ${(props) => props.width};
  height: 36px;
  cursor: pointer;
  margin-left: ${(props) => props.marginleft};
  text-align: center;
  font-weight: 1;
  font-size: 300%;
  color: ${(props) => props.color};
`;

const UnderLineS = styled.div`
  border-bottom: dashed;
  width: 80%;
  height: 0px;
  margin-top: ${(props) => props.margintop};
`;

const AreaS = styled.div`

`;

const BlockS = styled.input`
  width: ${(props) => props.width || '90%'};
  height: ${(props) => props.height};
  border: 2px solid #bbb;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 2vh;
  text-align: center;
  margin-top: ${(props) => props.margintop};
  margin-left: ${(props) => props.marginleft};
`;

const ButtonS = styled.button`
  padding:  ${(props) => props.padding || '2% 0px'};
  cursor: pointer;
  width: ${(props) => props.width || '80%'};
  height: ${(props) => props.height};
  border: 2px solid #bbb;
  border-radius: 6px; 
  text-align: center;
  margin-top: ${(props) => props.margintop};
  margin-left: ${(props) => props.marginleft};
`;

const BlankS = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.margintop};
  background: ${(props) => props.background};
  display: ${(props) => props.display};
  justify-content: center;
  flex-direction: ${(props) => props.fd};
  font-size: ${(props) => props.fontsize};
  line-height: ${(props) => props.lineheight || '100%'};
  text-align: ${(props) => props.textalign || 'center'};  
  font-family:'bitbit';
`;

const NavButtonS = styled.div`
  cursor: pointer;
  text-align : center;
  width: 10%;
  height: 5%;
  font-size: 16px;
  text-align: center;
  font-family:'bitbit';
  font-weight: 1;
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright};
  margin-top: ${(props) => props.margintop};
  color: ${(props) => props.color};
`;

const IconBoxS = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright};
  margin-top: ${(props) => props.margintop};
  border: 2px solid #bbb;
  box-sizing: border-box;
`;

function repeatThumbnail() {
  let array = [];

  for (let i=0; i<5; i++){
    array.push(<Thumbnail marginleft='1%'></Thumbnail>)
  }

  return array;
}

function Uploadpage({ children }) {

  return <MainPageS>
      <TitleS>Upload</TitleS>
      <BlankS width='100%'></BlankS>
      <UnderLineS margintop='0.9%'></UnderLineS>

      <BlankS width='50%' height='70vh' background=''>
        <BlockS placeholder='Title' height='4vh' margintop='1vh' marginleft=''/>
        <BlankS width='100%'></BlankS>
        <BlockS placeholder='Detail' height='60vh' margintop='1vh' marginleft=''/>
      </BlankS>

      <BlankS width='30%' height='70vh' background=''>
        <BlankS display='flex' width='90%' height='22vh' margintop='1vh' background=''>
          <IconBoxS src='https://cdn-icons-png.flaticon.com/512/4478/4478115.png' width='40%' height='100%'></IconBoxS>
          <BlankS display='flex' width='60%' height='22vh' margintop='1%' background='' fd='column'>
            <BlankS display='flex' width='100%' height='5vh' background='' fontsize='150%'>Image Upload</BlankS>
            <BlankS display='flex' width='100%' height='3vh' background='' fontsize='100%'>png 파일만 등록 가능합니다.</BlankS>
            <BlankS display='flex' width='100%' height='2vh' background='' fontsize='100%'>첫 이미지가 썸네일</BlankS>
            <BlankS display='flex' width='100%' height='2vh' background='' fontsize='100%'>이미지로 사용됩니다.</BlankS>
            <ButtonS margintop='6%' marginleft='10%'>이미지 등록</ButtonS>
          </BlankS>
        </BlankS>

        <BlankS display='flex' width='90%' height='6vh' margintop='1vh' background=''>
          <IconBoxS src='https://cdn-icons-png.flaticon.com/512/4478/4478115.png' width='11%' height='100%'></IconBoxS>
          <IconBoxS src='https://cdn-icons-png.flaticon.com/512/9466/9466852.png' width='11%' height='100%' marginleft='3%'></IconBoxS>
          <IconBoxS src='https://cdn-icons-png.flaticon.com/512/4478/4478450.png' width='11%' height='100%' marginleft='3%'></IconBoxS>
          <IconBoxS width='11%' height='100%' marginleft='3%'></IconBoxS>
          <IconBoxS width='11%' height='100%' marginleft='3%'></IconBoxS>
          <IconBoxS width='11%' height='100%' marginleft='3%'></IconBoxS>
        </BlankS>

        <BlankS display='flex' width='90%' height='5vh' margintop='2vh' background=''>
          <BlankS width='20%' height='4vh' margintop='1%' background='' fontsize='150%' lineheight='4vh'>카테고리</BlankS>
          <BlockS width='60%' placeholder='Category' height='4vh' margintop='1%' marginleft=''/>
          <ButtonS width='20%' height='4vh' padding='0' margintop='1%' marginleft='1%'>등록</ButtonS>
        </BlankS>

        <BlankS display='flex' width='90%' height='5vh' margintop='1vh' background=''>
          <BlankS width='20%' height='4vh' margintop='1%' background='' fontsize='150%' lineheight='4vh'>태그</BlankS>
          <BlockS width='60%' placeholder='Tag' height='4vh' margintop='1%' marginleft=''/>
          <ButtonS width='20%' height='4vh' padding='0' margintop='1%' marginleft='1%'>등록</ButtonS>
        </BlankS>

        <BlankS display='flex' width='90%' height='5vh' margintop='1vh' background=''>
          <BlankS width='20%'></BlankS>
          <BlankS width='80%'height='4vh' textalign='left'>#사과 #나무 #토끼</BlankS>
        </BlankS>

        <BlankS display='flex' width='90%' height='5vh' margintop='1vh' background=''>
          <BlankS width='20%' height='4vh' margintop='1%' background='' fontsize='150%' lineheight='4vh'>파일</BlankS>
          <BlankS width='60%' placeholder='Tag' height='4vh' margintop='1%' marginleft=''fontsize='150%' lineheight='4vh'>사과나무토끼그림.jpg</BlankS>
          <ButtonS width='20%' height='4vh' padding='0' margintop='1%' marginleft='1%'>등록</ButtonS>
        </BlankS>

        <BlankS display='flex' width='90%' height='5vh' margintop='1vh' background=''>
          <BlankS width='20%' height='4vh' margintop='1%' background='' fontsize='150%' lineheight='4vh'>가격</BlankS>
          <BlockS width='70%' placeholder='Price' height='4vh' margintop='1%' marginleft=''/>
          <BlankS width='10%' height='4vh' padding='0' margintop='1%' marginleft='1%' fontsize='150%' lineheight='4vh'>원</BlankS>
        </BlankS>

        <BlankS display='flex' width='90%' height='5vh' margintop='1vh' background=''>
          <ButtonS width='100%' height='4vh' padding='0' margintop='0%' marginleft='1%'>등록 완료</ButtonS>
        </BlankS>


      </BlankS>

      

    </MainPageS>

}

export default Uploadpage;
