import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header/Header.js';
import Loginpage from './components/login/LoginPage.js';
import SignUpPage from './components/signin/SignUpPage.js';
import MyPage from './components/mypage/MyPage.js';
import MainPage from './components/main/MainPage.js';
import UploadPage from './components/item/UploadPage.js'
import Itemdetail from './components/item/ItemDetail.js';
import Cart from './components/mypage/Cart.js';
import ShoppingList from './components/mypage/ShoppingList.js';
import Like from './components/mypage/Like.js';

function App() {    
  const pageNum = 1;

  if(pageNum == 1) {
    return <>
      <Header></Header>
      <MainPage></MainPage>
    </>
  } else if(pageNum == 2) {
    return <>
      <Header></Header>
      <Loginpage></Loginpage>
    </>
  } else if(pageNum == 3) {
    return <>
      <Header></Header>
      <SignUpPage></SignUpPage>
    </>
  } else if(pageNum == 4) {
    return <>
      <Header></Header>
      <MyPage></MyPage>
    </>
  } else if(pageNum == 5) {
    return <>
      <Header></Header>
      <UploadPage></UploadPage>
    </>
  } else if(pageNum == 6) {
    return <>
      <Header></Header>
      <Itemdetail></Itemdetail>
    </>
  } else if(pageNum == 7) {
    return <>
      <Header></Header>
      <Cart></Cart>
    </>
  } else if(pageNum == 8) {
    return <>
      <Header></Header>
      <ShoppingList></ShoppingList>
    </>
  } else if(pageNum == 9) {
    return <>
      <Header></Header>
      <Like></Like>
    </>
  }

}

export default App;