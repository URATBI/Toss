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

window.onload=function(){
    document.getElementById('myvid_1').play();
    document.getElementById('myvid_2').play();
    document.getElementById('myvid_3').play();
    document.getElementById('myvid_4').play();
    document.getElementById('myvid_5').play();
    document.getElementById('myvid_6').play();
    document.getElementById('myvid_7').play();
};

