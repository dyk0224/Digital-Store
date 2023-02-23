import React from 'react';
import styled from 'styled-components';
import Logo from '../header/Logo.js';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const LoginPageS = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 30%;
  height: 40%;
  margin-top: 15%;
  margin-left: 35%;
  display: flex;
  justify-content: center;
`;

const UnderLineS = styled.div`
  border-bottom: dashed;
  width: 75%;
  height: 0px;
  margin-top: ${(props) => props.margintop};
`;

const BlockS = styled.input`
padding: 1% 0px;
  width: 52%;
  height: 10%;
  border: 2px solid #bbb;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  margin-top: ${(props) => props.margintop};
  margin-left: ${(props) => props.marginleft};
`;

const ButtonS = styled.button`
  padding: 2% 0px;
  cursor: pointer;
  width: 20%;
  border: 2px solid #bbb;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  margin-top: ${(props) => props.margintop};
  margin-left: ${(props) => props.marginleft};
`;

const BlankS=styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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

function Loginpage({ children }) {

  return <LoginPageS>
      <Logo>300%</Logo>
      <UnderLineS margintop='3%'></UnderLineS>
      <BlockS placeholder='ID' margintop='3%' marginleft='-21%'></BlockS>
      <BlankS width='100%' height='0px'></BlankS>
      <BlockS placeholder='Password' margintop='1%'></BlockS>
      <ButtonS margintop='-6%' marginleft='1%'>로그인</ButtonS>
      <BlankS width='100%' height='0px'></BlankS>
      <NavButtonS marginleft='64%' margintop='1%'>회원가입</NavButtonS>
    </LoginPageS>

}

export default Loginpage;

