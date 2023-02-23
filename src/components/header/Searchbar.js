import React from 'react';
import styled from 'styled-components';
import './Logo.js';

const SearchbarS = styled.div`
  position: relative;
  width: 300px;
  height: 36px;
  text-align: center;
  margin-left:20px;
  margin-right:8px;
`;

const InputbarS = styled.input`
  width: 75%;
  border: 1px solid #bbb;
  border-radius: 8px;
  padding: 9px 36px;
  font-size: 14px;
  text-align: center;
`;

const Icon_FilterS = styled.img`
  position : absolute;
  width: 17px;
  top: 10px;
  right: 270px;
  margin: 0;
  display: flex;
`;

const Icon_SearchS = styled.img`
  position : absolute;
  width: 17px;
  top: 10px;
  right: 12px;
  margin: 0;
`;

function Searchbar({ children }) {

  return <SearchbarS>
    <Icon_FilterS src="https://cdn-icons-png.flaticon.com/512/4502/4502383.png"/>
    <InputbarS type="text" placeholder="검색어 입력"/>
    <Icon_SearchS src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"/>
  </SearchbarS>;
}

export default Searchbar;

