import React from 'react';
import styled from 'styled-components';
import './Logo.js';

const NavButtonS = styled.div`
  cursor: pointer;
  text-align : center;
  line-height : 36px;
  width: ${(props) => props.width};
  height: 36px;
  font-size: 16px;
  text-align: center;
  font-family:'bitbit';
  font-weight: 1;
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  color: ${(props) => props.color};
`;

function NavButton() {
  return <>
    <>
      <NavButtonS marginLeft="10px" color='rgb(0,0,0)'>New</NavButtonS>
      <NavButtonS marginLeft="20px" color='rgb(0,0,0)'>Best</NavButtonS>
      <NavButtonS marginLeft="20px" color='rgb(0,0,0)'>Sale</NavButtonS>
    </>
  </>;
}

export default NavButton;