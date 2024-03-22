"use strict";
// 구현계획
// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다
// 2. 인터섹션 옵저버를 사용해서 모든 섹션을 관찰해야한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다
// 4. 보여지는 섹션 :
//  다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션을 선택
//  마지막 컨텍 섹션이 보여진다면 그러면 가장 마지막 섹션을 선택

const sectionIds = ["#home", "#about", "#skills", "#work", "#testimonial", "#contact"];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItemts = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));
const visibleSections = sectionIds.map(() => false);
let activeNavItem = navItemts[0];

// console.log(activeNavItem);

const option = {
  rootMargin: "-20% 0px 0px 0px",
  threshold: [0, 0.98],
};
const observar = new IntersectionObserver(observerCallback, option);
sections.forEach((section) => observar.observe(section));

function observerCallback(entries) {
  let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.95;
  });

  const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstIntersecting(visibleSections);
  console.log(sectionIds[navIndex]);
 
  selectNavItem(navIndex);
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(index) {
  const navItem = navItemts[index];
  if (!navItem) return;
  activeNavItem.classList.remove("active");
  activeNavItem = navItem;
  activeNavItem.classList.add("active");
}
