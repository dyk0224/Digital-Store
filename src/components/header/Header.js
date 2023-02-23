import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.js';
import Searchbar from './Searchbar';
import NavButton from './NavButton';
import NowLogout from './NowLogout.js';
import NowLogin from './NowLogin.js';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const HeaderS = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  
  width: 100%;
  min-width: 1920px;
  height: 6%;
  padding: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  background-color: white;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
`;

function Header({ children }) {

  return <HeaderS>
    <Logo>32px</Logo>
    <Searchbar></Searchbar>
    <NavButton></NavButton>
    <NowLogin></NowLogin>
  </HeaderS>;
}

export default Header;