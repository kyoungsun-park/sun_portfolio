"use strict";

// 페이지 스크롤시 다크스타일 적용
const header = document.querySelector(".header");
// getBoundingClientRect()는 소숫점 까지 표출 offsetHeight 정수로 표출
// const headerHeight = header.getBoundingClientRect().height;
const headerHeight = header.offsetHeight;


document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }

});

// 홈섹션 스크롤시 텍스트 투명하게
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
// console.log(homeHeight);
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 상단위로 올라가는 top버튼
const topBtn = document.querySelector('.arrow-up');
document.addEventListener('scroll', () =>{
    if( window.scrollY > homeHeight/2){
         topBtn.style.opacity = 1  
    }else{
        topBtn.style.opacity = 0  
    }
});

//naver 모바일 처리
const navMenu = document.querySelector('.header__menu');
const navToggle = document.querySelector('.header__toggle');


navToggle.addEventListener('click', ()=> {
  header.classList.toggle('menu__open');
})

// nav 메뉴 클릭시  버블링 때문에 부모에게 클릭이벤트를 걸어도 자식메뉴에게 클릭이벤트가 전달됨
navMenu.addEventListener('click', () =>{
  header.classList.remove('menu__open')
});








