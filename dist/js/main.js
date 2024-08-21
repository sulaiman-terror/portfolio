const menu_btn = document.querySelector('.menu-btn');
const burger =document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menu_nav = document.querySelector('.menu-nav');
const social_icons = document.querySelectorAll('.social');
const menu_nav_item = document.querySelectorAll('.menu-nav_item');
var i,length;
let show_menu = false;


menu_btn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!show_menu){
        burger.classList.add('open');
        show_menu = true;
        nav.classList.add('open');
        menu_nav.classList.add('open');
        for(i=0, length=social_icons.length; i<length; i++){
            social_icons[i].classList.add('open');
        }
        for(i=0, length=menu_nav_item.length; i<length;i++){
            menu_nav_item[i].classList.add('open');
        }
    }
    else{
        burger.classList.remove('open');
        nav.classList.remove('open');
        menu_nav.classList.remove('open');
        show_menu=false;
        for(i = 0, length = social_icons.length; i < length; i++) {
            social_icons[i].classList.remove('open');
        }
        for(i=0, length=menu_nav_item.length; i<length;i++){
            menu_nav_item[i].classList.remove('open');
        }
        
    }
}