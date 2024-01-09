const addEventListeners = () => {
  const sections = document.querySelectorAll("section");
  const list = document.querySelectorAll(".list");

  function activateMenuItem(index) {
    list.forEach((item) => item.classList.remove("active"));
    list[index].classList.add("active");
  }

  list.forEach((item, index) => {
    item.addEventListener("click", () => activateMenuItem(index));
  });

  function handleScroll() {
    let currentSection = "";
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        currentSection = index;
      }
    });
    activateMenuItem(currentSection);
  }

  window.addEventListener("scroll", handleScroll);

  return () => {
    list.forEach((item) => item.removeEventListener("click", activateMenuItem));
    window.removeEventListener("scroll", handleScroll);
  };
};

export default addEventListeners;
