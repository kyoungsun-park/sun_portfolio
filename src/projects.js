"use strict";

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectContainer = document.querySelector(".projects");

categories.addEventListener("click", (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }
  // 프로젝트 active를  handleActiveSeclection 함수로 변경
  // const active = document.querySelector('.category__select');
  // active.classList.remove('category__select');
  // event.target.classList.add('category__select');

  handleActiveSeclection(event.target);
  filterProject(filter) 
  

  function handleActiveSeclection(target) {
    const active = document.querySelector(".category__select");
    active.classList.remove("category__select");
    target.classList.add("category__select");
  }

  function filterProject(filter) {
	projectContainer.classList.add("anim-out");
	projects.forEach((project) => {
	  if (filter === "all" || filter === project.dataset.type) {
		project.style.display = "block";
	  } else {
		project.style.display = "none";
	  }
	});
	setTimeout(() => {
	  projectContainer.classList.remove("anim-out");
	}, 250); // 애니메이션이 250ms 로 돌아가고 있기때문에 250초 있다가 클래스 삭제
  }

  // Intersection Observer
  



});


  // 프로젝트 active를  handleActiveSeclection 함수로 변경
  // const active = document.querySelector('.category__select');
  // active.classList.remove('category__select');
  // event.target.classList.add('category__select');


  // 프로젝트 필터핑- filterProject함수로 변경
//   projectContainer.classList.add("anim-out");
//   projects.forEach((project) => {
//     if (filter === "all" || filter === project.dataset.type) {
//       project.style.display = "block";
//     } else {
//       project.style.display = "none";
//     }
//   });
//   setTimeout(() => {
//     projectContainer.classList.remove("anim-out");
//   }, 250);



