import { createGlobalStyle } from 'styled-components';

import DNFBit from '../font/DNFBitBit.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'DNFBit';
        src: local('DNFBit'), local('DNFBit');
        font-style: normal;
        src: url(${DNFBit}) format('truetype');
  }
`;