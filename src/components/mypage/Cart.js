import React from 'react';
import styled from 'styled-components';
import Logo from '../header/Logo.js';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const CartS = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  height: 40%;
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
  width: 22.5%;
  height: 0px;
  margin-top: ${(props) => props.margintop};
`;

const BlockS = styled.input`
  padding: 1% 0px;
  width: 60%;
  border: 2px solid #bbb;
  border-radius: 6px;
  font-size: 2vh;
  text-align: center;
  margin-top: ${(props) => props.margintop};
  margin-left: ${(props) => props.marginleft};
`;

const ButtonS = styled.button`
  padding: 0.3% 0px;
  cursor: pointer;
  width: 20%;
  border: 2px solid #bbb;
  border-radius: 6px;
  font-size: ${(props) => props.fontsize || '100%'};
  text-align: center;
  margin-top: ${(props) => props.margintop};
  margin-left: ${(props) => props.marginleft};
  font-family:'bitbit';
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
  border: ${(props) => props.border || '2px solid #bbb'};
  box-sizing: border-box;
`;

function Cart({ children }) {

  return <CartS>
      <TitleS>????????????</TitleS>
      <BlankS width='100%'></BlankS>
      <UnderLineS margintop='0.9%'></UnderLineS>
      <BlankS width='100%' margintop='1%'></BlankS>

      <BlankS display='flex' width='40%' height='12vh' background=''>
        <IconBoxS width='15%' src='https://img.icons8.com/external-justicon-flat-justicon/256/external-octopus-animal-justicon-flat-justicon.png'></IconBoxS>
        <BlankS width='30%'>
          <BlankS marginleft='5%' fontsize='150%' textalign='left'>??????, ??????, ?????? ??????</BlankS>
          <BlankS marginleft='5%' textalign='left'>???????????????</BlankS>
          <BlankS marginleft='5%' margintop='20%' textalign='left'>100 ???</BlankS>
        </BlankS>
        <IconBoxS width='5%' src='https://img.icons8.com/ios-glyphs/256/checked.png' border='0'></IconBoxS>
      </BlankS>

      <BlankS width='100%' margintop='1%'></BlankS>

      <BlankS display='flex' width='40%' height='12vh' background=''>
        <IconBoxS width='15%' src='https://img.icons8.com/office/256/sword.png'></IconBoxS>
        <BlankS width='30%'>
          <BlankS marginleft='5%' fontsize='150%' textalign='left'>?????? ????????? ??????</BlankS>
          <BlankS marginleft='5%' textalign='left'>??????????????????</BlankS>
          <BlankS marginleft='5%' margintop='20%' textalign='left'>1000 ???</BlankS>
        </BlankS>
        <IconBoxS width='5%' src='https://img.icons8.com/ios-glyphs/256/checked.png' border='0'></IconBoxS>
      </BlankS>      

      <BlankS width='100%' margintop='1%'></BlankS>

      <BlankS display='flex' width='40%' height='12vh' background=''>
        <IconBoxS width='15%' src='https://img.icons8.com/external-filled-outline-lima-studio/256/external-ui-user-experience-filled-outline-lima-studio.png'></IconBoxS>
        <BlankS width='30%'>
          <BlankS marginleft='5%' fontsize='150%' textalign='left'>UI ??????</BlankS>
          <BlankS marginleft='5%' textalign='left'>UI?????????</BlankS>
          <BlankS marginleft='5%' margintop='20%' textalign='left'>5000 ???</BlankS>
        </BlankS>
        <IconBoxS width='5%' src='https://img.icons8.com/material-outlined/256/checked.png' border='0'></IconBoxS>
      </BlankS>

      <BlankS width='100%'></BlankS>
      <UnderLineS margintop='0.9%'></UnderLineS>
      <BlankS width='100%'></BlankS>

      <BlankS margintop='1%' fontsize='200%'>?????? ?????? : 1100 ???</BlankS>
      <BlankS width='100%' margintop='1%'></BlankS>
      <ButtonS width='30%' fontsize='150%'>??????</ButtonS>
    </CartS>

}

export default Cart;
