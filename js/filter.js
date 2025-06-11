//filter and sort

const brandFilter = document.getElementById("brandFilter");
const sortSelect = document.getElementById("sortSelect");
const brandSections = document.querySelectorAll(".brand-section");

brandFilter.addEventListener("change", () => {
  const selectedBrand = brandFilter.value;
  brandSections.forEach((section) => {
    const brandName = section.querySelector("h2").innerText;
    section.style.display =
      selectedBrand === "all" || brandName.includes(selectedBrand)
        ? "block"
        : "none";
  });
});

sortSelect.addEventListener("change", () => {
  const sortType = sortSelect.value;
  brandSections.forEach((section) => {
    const grid = section.querySelector(".products-grid");
    const cards = Array.from(grid.querySelectorAll(".product-card"));

    let sortedCards = [...cards];
    if (sortType === "name-asc") {
      sortedCards.sort((a, b) =>
        a
          .querySelector("h3")
          .innerText.localeCompare(b.querySelector("h3").innerText)
      );
    } else if (sortType === "name-desc") {
      sortedCards.sort((a, b) =>
        b
          .querySelector("h3")
          .innerText.localeCompare(a.querySelector("h3").innerText)
      );
    }

    grid.innerHTML = "";
    sortedCards.forEach((card) => grid.appendChild(card));
  });
});
