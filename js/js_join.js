'use strict';

const joinBtn=document.querySelector('#joinBtn');
const joinForm=document.querySelector('#joinForm');

const userName=joinForm.querySelector('#userName');
const userPhone=joinForm.querySelector('#userPhone');
const userEmail=joinForm.querySelector('#userEmail');
const userId=joinForm.querySelector('#userId');
const userPw=joinForm.querySelector('#userPw');
const userPw2=joinForm.querySelector('#userPw2');

const pChecked=document.querySelector('p.checked');

userPw2.addEventListener('keyup', (e)=>{
  const pwVal=userPw.value;
  const pw2Val=e.target.value;

  if(userPw.value===userPw2.value){
    pChecked.innerText='비밀번호가 일치합니다';
    pChecked.style.color='#00f';
  }else{
    pChecked.innerText='비밀번호가 일치하지 않습니다' ;
    pChecked.style.color='#f00';
  }
})

joinBtn.addEventListener('click', ()=>{
  if(userName.value == '' || userName.value.length<=0){
    alert('이름을 입력하세요')
    userName.focus();
    return false;
  }
  if(userPhone.value == '' || userPhone.value.length<=0){
    alert('전화번호를 입력하세요')
    userPhone.focus();
    return false;
  }
  if(userEmail.value == '' || userEmail.value.length<=0){
    alert('이메일 주소를 입력하세요')
    userEmail.focus();
    return false;
  }
  if(userId.value == '' || userId.value.length<=0){
    alert('아이디를 입력하세요')
    userId.focus();
    return false;
  }
  if(userPw.value === '' || userPw.value.length<=0){
    alert('비밀번호를 입력하세요')
    userPw.focus();
    return false;
  }
  if(userPw.value!==userPw2.value){
    alert('비밀번호를 확인해주세요')
    userPw2.focus();
    return false;
  }
  alert('환영합니다')
  joinForm.submit();
});