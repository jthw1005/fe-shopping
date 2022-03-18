function setSearchCategoryEvent() {
  const categoryBtn = document.querySelector(".search__category");
  categoryBtn.addEventListener("click", handleDropDownMenu);
}

function handleDropDownMenu(event) {
  const eventTarget = event.target;
  const toggleBtn = eventTarget.querySelector("i");

  toggleBtn.classList.toggle("fa-caret-down");
  toggleBtn.classList.toggle("fa-caret-up");

  const hiddenMenuList = eventTarget.parentNode.querySelector(".search__category-list");
  hiddenMenuList.classList.toggle("hidden");
}

export default setSearchCategoryEvent;
