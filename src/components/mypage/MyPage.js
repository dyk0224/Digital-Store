import React from 'react';
import styled from 'styled-components';
import Logo from '../header/Logo.js';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const MyPageS = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 30%;
  margin-top: 15%;
  margin-left: 35%;
  display: flex;
  justify-content: center;
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
  width: 75%;
  height: 0px;
  margin-top: ${(props) => props.margintop};
`;

const BlockS = styled.input`
  padding: ${(props) => props.padding || '1% 0px'};
  width: ${(props) => props.width || '40%'};
  border: 2px solid #bbb;
  border-radius: 6px;
  font-size: 2vh;
  text-align: center;
  margin-top: ${(props) => props.margintop};
  margin-left: ${(props) => props.marginleft};
`;

const ButtonS = styled.button`
  padding: 2% 0px;
  cursor: pointer;
  width: 30%;
  border: 2px solid #bbb;
  border-radius: 6px;
  font-size: 16px;
  font-family: 'bitbit';
  color: rgb(50,50,50);
  text-align: center;
  margin-top: ${(props) => props.margintop};
  margin-left: ${(props) => props.marginleft};
`;

const BlankS = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.margintop};
  margin-left: ${(props) => props.marginleft};
  font-family: 'bitbit';
  align-items:center;
  text-align: center;
  line-height: 150%;
  font-weight: 1;
  font-size: 150%;
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
  width: 6.5%;
  height: 6.5%;
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright};
  margin-top: ${(props) => props.margintop};
`;

function Signuppage({ children }) {

  return <MyPageS>
      <TitleS>My Page</TitleS>
      <UnderLineS margintop='3%'></UnderLineS>

      <BlankS width='100%'></BlankS>
      <BlankS width='25%' height='6.5%' margintop='3%'>닉네임</BlankS>
      <BlockS placeholder='Nickname' margintop='3%' marginleft=''></BlockS>
      <IconBoxS src='https://img.icons8.com/color/256/checkmark.png' marginleft='0.5%' margintop='3%'/>

      <BlankS width='100%'></BlankS>
      <BlankS width='25%' height='6.5%' margintop='1%'>비밀번호</BlankS>
      <BlockS placeholder='Password' margintop='1%'></BlockS>
      <IconBoxS src='https://img.icons8.com/color/256/checkmark.png' marginleft='0.5%' margintop='1%'/>

      <BlankS width='100%'></BlankS>
      <BlankS width='25%' height='6.5%' margintop='1%'>비밀번호 확인</BlankS>
      <BlockS placeholder='Password Check' margintop='1%'></BlockS>
      <IconBoxS src='https://img.icons8.com/color/256/delete-sign.png' marginleft='0.5%' margintop='1%'/>

      <BlankS width='100%'></BlankS>
      <BlankS width='25%' height='6.5%' margintop='3%'>스토어 소개</BlankS>
      <BlankS width='100%'></BlankS>
      <BlockS width='70%' padding='10% 0px' placeholder='Introduce' margintop='1%'></BlockS>
      <BlankS width='100%' height='0px'></BlankS>

      <ButtonS margintop='3%'>수정</ButtonS>
      <ButtonS marginleft='1%' margintop='3%'>초기화</ButtonS>
    </MyPageS>

}

export default Signuppage;
