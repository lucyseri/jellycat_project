'use strict';

const cjBtn=document.querySelector('span.cj')
const tvBtn=document.querySelector('span.tv')

const form=document.querySelector('form')
const userId=document.querySelector('#userId')


cjBtn.addEventListener('click', ()=>{
  form.setAttribute('action', 'cjOkay.do')
  userId.setAttribute('placeholder', 'CJ ONE 아이디')
})
tvBtn.addEventListener('click', ()=>{
  form.setAttribute('action', 'tvingOkay.do')
  userId.setAttribute('placeholder', 'TVING 아이디')
})