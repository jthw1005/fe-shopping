function setSearchCategoryEvent() {
  const categoryBtn = document.querySelector(".search__category");
  const categoryBtnItem = document.querySelector(".search__category-list");

  categoryBtn.addEventListener("click", handleDropDownMenu);
  categoryBtnItem.addEventListener("mouseleave", handleDropDownMenuOff);
  categoryBtnItem.addEventListener("click", handleCategorySelection);
}

function handleDropDownMenu(event) {
  const currentTarget = event.currentTarget;

  const toggleBtn = currentTarget.querySelector("i");
  toggleBtn.classList.toggle("fa-caret-down");
  toggleBtn.classList.toggle("fa-caret-up");

  const hiddenMenuList = currentTarget.nextElementSibling;
  hiddenMenuList.classList.toggle("hidden");
}

function handleDropDownMenuOff(event) {
  event.target.classList.add("hidden");
}

function handleCategorySelection(event) {
  event.currentTarget.classList.add("hidden");
  document.querySelector(".category__title").innerHTML = event.target.innerHTML;
}

export default setSearchCategoryEvent;
