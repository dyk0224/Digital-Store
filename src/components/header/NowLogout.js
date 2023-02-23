import React from 'react';
import styled from 'styled-components';

const NowLogoutS = styled.div`
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

function NowLogout() {
  return <>
      <NowLogoutS marginLeft="auto" color='rgb(0,0,0)'>로그인</NowLogoutS>
      <NowLogoutS marginLeft="20px" marginRight='2%' color='rgb(0,0,0)'>회원가입</NowLogoutS>
  </>;
}

export default NowLogout;