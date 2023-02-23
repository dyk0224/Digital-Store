import 'C:/Users/USER/Desktop/react/digital_store/src/App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { useState } from 'react';
import styled from "styled-components";

const Logo = styled.div`
  textDecorationLine: 'none';
  color: 'black';
`;

function Logo({title}) {
  return <Logo><Link to="/">{title}</Link></Logo>
}

function Header(props) {

  const header_button_size = styled(Header)`
    width="300px"
  `;

  const [state_login, set_State_Login] = useState('FALSE');
  let content_header = null;

  if(state_login === 'FALSE') {

    content_header = 
    <Router>
      <div style={{header_button_size, marginLeft:'auto'}} onClick={(event)=>{set_State_Login('TRUE');}}>
          <Link to="/" style={{textDecorationLine:'none', color: 'black'}}>로그인</Link>
      </div>     

      <div style={{header_button_size, marginRight:'50px'}}>
        <Link to="/signup" style={{textDecorationLine:'none', color: 'black'}}>회원가입</Link>
      </div> 
    </Router>

  } else {

    content_header = 
    <Router>
      <div style={{header_button_size, marginLeft:'800px'}}>
        <Link to="/mypage" style={{textDecorationLine:'none', color: 'black'}}>마이페이지</Link>
      </div>

      <div style={{header_button_size, marginRight:'auto'}}>
        <Link to="/like" style={{textDecorationLine:'none', color: 'black'}}>좋아요</Link>
      </div>

      <div style={{header_button_size, marginRight:'auto'}}>
        <Link to="/shoppingcart" style={{textDecorationLine:'none', color: 'black'}}>장바구니</Link>
      </div>

      <div style={{header_button_size, marginRight:'50px'}} onClick={(event)=>{set_State_Login('FALSE');}}>
        <Link to="/" style={{textDecorationLine:'none', color: 'black'}}>로그아웃</Link>
      </div>
    </Router>
  }

  return <header_button_size><header>
    <Router>
      <Logo>Digital</Logo>
    </Router>

    <div class="search" style={{marginLeft:'20px'}}>
      <img class="icon_filter" src="https://cdn-icons-png.flaticon.com/512/4502/4502383.png"/>
      <input class="header_searchbar" type="text" placeholder="검색어 입력"/>
      <img class="icon_search" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"/>
    </div>
    
    <Router>
      <div style={{header_button_size, marginLeft:'-10px'}}>
        <Link to="/new" style={{textDecorationLine:'none', color: 'black'}}>New</Link>
      </div>
      <div style={{header_button_size, marginLeft:'-20px'}}>
        <Link to="/best" style={{textDecorationLine:'none', color: 'black'}}>Best</Link>
      </div>
      <div style={{header_button_size, marginLeft:'-20px'}}>
        <Link to="/sale" style={{textDecorationLine:'none', color: 'black'}}>Sale</Link>
      </div>
    </Router>
    
    {content_header}
  </header>

    </header_button_size>
}

export default Header;