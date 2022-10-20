'use strict';
const loginForm=document.querySelector('form')
const userId=loginForm.querySelector('#userId')
const userPw=loginForm.querySelector('#userPw')
const loginBtn=loginForm.querySelector('#formBtn')

loginBtn.addEventListener('click', ()=>{
  if(userId.value==''||userId.value.length<=0){
    alert('아이디를 입력하세요')
    userId.focus();
    return false;
  }
  if(userPw.value==''||userPw.value.length<=0){
    alert('비밀번호를 입력하세요')
    userPw.focus();
    return false;
  }
  alert('어서오세요')
  loginForm.submit();
})