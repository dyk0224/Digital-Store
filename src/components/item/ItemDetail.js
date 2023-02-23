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
  min-width: 1920px;
  height: 100vh;
  min-height: 900px;
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
  box-sizing: border-box;
  text-align: center;
  margin-top: ${(props) => props.margintop};
  margin-left: ${(props) => props.marginleft};
  font-size: ${(props) => props.fontsize || '100%'};
  line-height: ${(props) => props.lineheight};
  display: ${(props) => props.display};
`;

const BlankS = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.margintop};
  margin-left: ${(props) => props.marginleft};
  background: ${(props) => props.background};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.jc || 'center'};  
  flex-direction: ${(props) => props.fd};
  font-size: ${(props) => props.fontsize || '100%'};
  line-height: ${(props) => props.lineheight};
  text-align: ${(props) => props.textalign || 'center'};  
  align-items: center;
  font-family:'bitbit';
`;

const IconBoxS = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright};
  margin-top: ${(props) => props.margintop};
  border: ${(props) => props.border || '2px solid #bbb'};
  box-sizing: border-box;
`;

function Itemdetail({ children }) {

  return <MainPageS>
      <TitleS>그림파는샵</TitleS>
      <BlankS width='100%'></BlankS>
      <UnderLineS margintop='0.9%'></UnderLineS>

      <BlankS width='24%' height='100%' margintop='1vh' background='' >
        <BlankS display='flex' width='100%' height='48%' background=''>
          <IconBoxS src='https://img.icons8.com/external-justicon-flat-justicon/256/external-octopus-animal-justicon-flat-justicon.png' width='100%' height='100%'></IconBoxS>
        </BlankS>

        <BlankS display='flex' width='100%' height='8%' margintop='1vh' background=''>
          <IconBoxS src='https://cdn-icons-png.flaticon.com/512/4478/4478115.png' width='20%' height='100%'></IconBoxS>
          <IconBoxS src='https://cdn-icons-png.flaticon.com/512/9466/9466852.png' width='20%' height='100%' marginleft='3%'></IconBoxS>
          <IconBoxS src='https://img.icons8.com/external-justicon-flat-justicon/256/external-octopus-animal-justicon-flat-justicon.png' width='20%' height='100%' marginleft='3%'></IconBoxS>
          <IconBoxS width='20%' height='100%' marginleft='3%'></IconBoxS>
          <IconBoxS width='20%' height='100%' marginleft='3%'></IconBoxS>
        </BlankS>

        <BlankS display='flex' width='20%' height='2%' marginleft='2%' margintop='5vh' fontsize='150%' background='' textalign='left'>상품설명</BlankS>
        <BlankS width='96%' height='24%' marginleft='2%' margintop='1.5vh' background='' textalign='left'>
          나는 문어 꿈을 꾸는 문어
          꿈속에서는 무엇이든지 될 수 있어
          나는 문어 잠을 자는 문어
          잠에 드는 순간 여행이 시작되는 거야

          높은 산에 올라가면 나는 초록색 문어
          장미 꽃밭 숨어들면 나는 빨간색 문어
          횡단보도 건너가면 나는 줄무늬 문어
          밤하늘을 날아가면 나는
          오색찬란한 문어가 되는 거

          야 아아아 아아 야 아아아 아아
          깊은 바닷속은 너무 외로워
          춥고 어둡고 차갑고 때로는 무섭기도
          해 애애애 애애 야 아아아 아아
          그래서 나는 매일 꿈을 꿔 이곳은 참 우울해

          단풍놀이 구경 가면 나는 노란색 문어
          커피 한 잔 마셔주면 나는 진갈색 문어
          주근깨의 꼬마와 놀면 나는 점박이 문어
          밤하늘을 날아가면 나는
          오색찬란한 문어가 되는 거

          야 아아아 아아 야 아아아 아아
          깊은 바닷속은 너무 외로워
          춥고 어둡고 차갑고 때로는 무섭기도
          해 애애애 애애 야 아아아 아아
          그래서 나는 매일 꿈을 꿔 이곳은

          야 아아아 아아 야 아아아 아아
          깊은 바닷속은 너무 외로워
          춥고 어둡고 차갑고 때로는 무섭기도
          해 애애애 애애 야 아아아 아아
          그래서 나는 매일 꿈을 꿔 이곳은 참 우울해
        </BlankS>
        <BlankS width='96%' height='2%' marginleft='2%' margintop='1.5vh' background='' textalign='left'>#사과</BlankS>
        <BlankS width='96%' height='2%' marginleft='2%' margintop='' background='' textalign='left'>#나무</BlankS>
        <BlankS width='96%' height='2%' marginleft='2%' margintop='' background='' textalign='left'>#문어</BlankS>

      </BlankS>

      <BlankS width='30%' height='100%' margintop='1vh' background=''>
        <BlankS display='flex' width='100%' height='5vh' background=''>
          <BlankS width='60%' marginleft='2%' background='' lineheight='2vh' textalign='left'>카테고리 : 디자인 > 이미지</BlankS>
          <BlankS display='flex' width='40%' marginleft='2%' margintop='' background='' textalign='left'>
            <ButtonS display='flex' width='50%' height='4vh'>
              <BlankS width='24%' marginleft='6%' background='' textalign='center'>
                <IconBoxS src='https://img.icons8.com/office/256/filled-like.png' lineheight='3vh' width='100%' border='0' fontsize='150%'></IconBoxS>
              </BlankS>
              <BlankS width='70%' marginleft='-1%' background='' lineheight='3vh' textalign='center'>9999</BlankS>
            </ButtonS>
            
            <ButtonS display='flex' marginleft='3%' width='50%' height='4vh'>
              <BlankS width='24%' marginleft='6%' background='' textalign='center'>
                <IconBoxS src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-emergency-siren-light-to-be-used-in-ambulance-hospital-shadow-tal-revivo.png' width='100%' border='0' fontsize='150%'></IconBoxS>
              </BlankS>
              <BlankS width='70%' marginleft='-1%' background='' lineheight='3vh' textalign='center'>신고하기</BlankS>
            </ButtonS>

          </BlankS>
        </BlankS>

        <BlankS display='flex' width='98%' height='3vh' marginleft='2%' margintop='1%' background=''>
          <BlankS width='100%' background='' fontsize='150%' lineheight='3vh' textalign='left'>사과, 나무, 문어 그림</BlankS>
        </BlankS>

        <BlankS display='flex' width='98%' height='3vh' marginleft='2%' background=''>
          <BlankS width='100%' background='' fontsize='150%' lineheight='3vh' textalign='left'>100 원</BlankS>
        </BlankS>

        <BlankS display='flex' width='98%' marginleft='2%' margintop='3%' background=''>
          <ButtonS display='flex' width='50%' height='70%'>
            <BlankS width='24%' background='' textalign='center'>
              <IconBoxS src='https://img.icons8.com/office/256/coins.png' width='50%' border='0'></IconBoxS>
            </BlankS>
            <BlankS width='70%' marginleft='-1%' fontsize='180%' background='' textalign='center' lineheight='125%'>구매</BlankS>
          </ButtonS>

          <ButtonS marginleft='2%' display='flex' width='50%' height='70%'>
            <BlankS width='24%' background='' textalign='center'>
              <IconBoxS src='https://img.icons8.com/dusk/256/shopping-cart.png' width='50%' border='0'></IconBoxS>
            </BlankS>
            <BlankS width='70%' marginleft='-1%' fontsize='180%' background='' textalign='center' lineheight='125%'>장바구니</BlankS>
          </ButtonS>
        </BlankS>

        <BlankS display='flex' width='98%' marginleft='2%' margintop='5%' background='' jc='left'>
          <BlankS width='15%' background='' fontsize='150%' textalign='left' background=''>구매 후기</BlankS>
          <BlankS display='flex' width='15%' background='' fontsize='150%' textalign='left'>
            <BlankS width='64%' background='' textalign='center'>
              <IconBoxS src='https://img.icons8.com/fluency/256/star.png' width='50%' border='0'></IconBoxS>
            </BlankS>
            <BlankS width='40%' marginleft='-8%' background='' textalign='left'>3.5</BlankS>
          </BlankS>          
        </BlankS>

        <BlankS display='flex' width='96%' marginleft='2%' margintop='2%' background='' jc='left'>
          <BlankS display='flex' width='25%' background='' fontsize='150%' textalign='left' jc='left'>
            <BlankS width='100%' background='' textalign='center'>
              <IconBoxS src='https://img.icons8.com/fluency/256/star.png' width='16%' border='0'></IconBoxS>
              <IconBoxS src='https://img.icons8.com/fluency/256/star.png' width='16%' border='0'></IconBoxS>
              <IconBoxS src='https://img.icons8.com/fluency/256/star.png' width='16%' border='0'></IconBoxS>
              <IconBoxS src='https://img.icons8.com/fluency/256/star.png' width='16%' border='0'></IconBoxS>
              <IconBoxS src='https://img.icons8.com/fluency/256/star.png' width='16%' border='0'></IconBoxS>
            </BlankS>
          </BlankS>         
            <BlankS width='40%' marginleft='5%' background='' fontsize='150%' textalign='center'>귀여워요</BlankS> 
            <BlankS width='25%' marginleft='5%' background='' fontsize='150%' textalign='center'>구매자1</BlankS> 
        </BlankS>
        
        <BlankS display='flex' width='96%' marginleft='2%' margintop='%' background='' jc='left'>
          <BlankS display='flex' width='25%' background='' fontsize='150%' textalign='left' jc='left'>
            <BlankS width='100%' background='' textalign='center'>
              <IconBoxS src='https://img.icons8.com/fluency/256/star.png' width='16%' border='0'></IconBoxS>
              <IconBoxS src='https://img.icons8.com/fluency/256/star.png' width='16%' border='0'></IconBoxS>
              <IconBoxS src='https://img.icons8.com/fluency/256/star.png' width='16%' border='0'></IconBoxS>
              <IconBoxS src='https://img.icons8.com/officexs/256/star.png' width='16%' border='0'></IconBoxS>
              <IconBoxS src='https://img.icons8.com/officexs/256/star.png' width='16%' border='0'></IconBoxS>
            </BlankS>
          </BlankS>         
            <BlankS width='40%' marginleft='5%' background='' fontsize='150%' textalign='center'>못생겼어요</BlankS> 
            <BlankS width='25%' marginleft='5%' background='' fontsize='150%' textalign='center'>구매자2</BlankS> 
        </BlankS>
        
        <BlankS display='flex' width='96%' marginleft='2%' margintop='%' background='' jc='left'>
          <BlankS display='flex' width='25%' background='' fontsize='150%' textalign='left' jc='left'>
            <BlankS width='100%' background='' textalign='center'>
              <IconBoxS src='https://img.icons8.com/fluency/256/star.png' width='16%' border='0'></IconBoxS>
              <IconBoxS src='https://img.icons8.com/officexs/256/star.png' width='16%' border='0'></IconBoxS>
              <IconBoxS src='https://img.icons8.com/officexs/256/star.png' width='16%' border='0'></IconBoxS>
              <IconBoxS src='https://img.icons8.com/officexs/256/star.png' width='16%' border='0'></IconBoxS>
              <IconBoxS src='https://img.icons8.com/officexs/256/star.png' width='16%' border='0'></IconBoxS>
            </BlankS>
          </BlankS>         
            <BlankS width='40%' marginleft='5%' background='' fontsize='150%' textalign='center'>화나요</BlankS> 
            <BlankS width='25%' marginleft='5%' background='' fontsize='150%' textalign='center'>구매자3</BlankS> 
        </BlankS>

        
      </BlankS>

    </MainPageS>

}

export default Itemdetail;