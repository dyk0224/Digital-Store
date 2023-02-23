import React from 'react';
import styled from 'styled-components';
import Logo from '../header/Logo.js';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const ThumbnailS = styled.div`
  width: 20vh;
  height: 27vh;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright};
`;

const ImageBoxS = styled.img`
  width: 100%;
  height: 75%;
  text-align: center;
  border: 1px solid;
  line-height: 1200%;
`;

const TextBoxS = styled.div`
  width: 100%;
  height: 25%;
  text-align: center;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  display: flex;
  flex-wrap: wrap;
`;

const BlankS=styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

function Thumbnail({ children }) {

  return <ThumbnailS marginleft='0.5%'>
      <ImageBoxS src='https://img.icons8.com/external-justicon-flat-justicon/256/external-octopus-animal-justicon-flat-justicon.png'></ImageBoxS>
      <TextBoxS>
        <div>문어 그림</div>
        <BlankS width='100%'></BlankS>
        <div>그림파는샵</div>
        <BlankS width='100%'></BlankS>
        <div>100 원</div>
        <BlankS width='65%'></BlankS>
        <div>999</div>
      </TextBoxS>
    </ThumbnailS>

}

export default Thumbnail;
