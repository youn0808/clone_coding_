const tab_items = document.querySelectorAll(".tab");
const tab_shows = document.querySelectorAll(".tab_show");
// tab_shows put contents 1 2 3 div

function selectItem(e) {
  removeShow();
  removeInfo();
  this.classList.add("show");

  //tab_show = tab-1-content tab-2-content tab-3-content

  const tab_show = document.querySelector(`#${this.id}-content`);
  tab_show.classList.add("show_detail");
}

function removeShow() {
  tab_items.forEach((item) => {
    item.classList.remove("show");
  });
}

function removeInfo() {
  tab_shows.forEach((item) => {
    item.classList.remove("show_detail");
  });
}

tab_items.forEach((item) => {
  item.addEventListener("click", selectItem);
});
