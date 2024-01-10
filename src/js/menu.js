const addEventListeners = () => {
  const list = document.querySelectorAll(".list");

  function activateMenuItem(index) {
    list.forEach((item) => item.classList.remove("active"));
    list[index].classList.add("active");
  }

  list.forEach((item, index) => {
    item.addEventListener("click", () => activateMenuItem(index));
  });

};

export default addEventListeners;
