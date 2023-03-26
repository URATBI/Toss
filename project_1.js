const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const register=document.querySelector('.register-link');
const btnpopup=document.querySelector('.action_btn');
const btnpopupp=document.querySelector('.action_btnn');
const icon=document.querySelector('.icon-close');

register.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
btnpopupp.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
icon.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});