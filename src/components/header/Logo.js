import React from 'react';
import styled from 'styled-components';
import '../../App.css';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const LogoS = styled.div`
  display: flex;
  font-family: 'bitbit';
  vertical-align: bottom;
  align-items:center;
  width : ${(props) => props.width};
  height: 60%;
  cursor: pointer;
  margin-left: ${(props) => props.marginleft};
  text-align: center;
  font-weight: 1;
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
`;

function Logo({ children }) {

  return <>
    <LogoS fontsize={children} color='rgb(0,0,0)'>Digital Store</LogoS>
  </>;
}

export default Logo;