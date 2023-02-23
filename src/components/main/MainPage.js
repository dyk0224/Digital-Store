import React from 'react';
import styled from 'styled-components';
import Logo from '../header/Logo.js';
import Thumbnail from './Thumbnail.js';

const MainPageS = styled.div`
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
  padding: 2% 0px;
  cursor: pointer;
  width: 67.5%;
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
  margin-top: ${(props) => props.margintop};
  background: black;
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

function repeatThumbnail() {
  let array = [];

  for (let i=0; i<5; i++){
    array.push(<Thumbnail marginleft='1%'></Thumbnail>)
  }

  return array;
}

function Mainpage({ children }) {

  return <MainPageS>
      <TitleS>Today Best</TitleS>
      <BlankS width='100%'></BlankS>
      <UnderLineS margintop='0.9%'></UnderLineS>
      <BlankS width='100%' margintop='1%'></BlankS>
      {repeatThumbnail()}

      <BlankS width='100%' margintop='4%'></BlankS>

      <TitleS>Subscribe Store</TitleS>
      <BlankS width='100%'></BlankS>
      <UnderLineS margintop='0.9%'></UnderLineS>
      <BlankS width='100%' margintop='1%'></BlankS>
      {repeatThumbnail()}
    </MainPageS>

}

export default Mainpage;
