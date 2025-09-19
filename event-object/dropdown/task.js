function toggleList(e) {
    const dropdown = this.closest(".dropdown");
    const list = dropdown.querySelector(".dropdown__list");
    list.classList.toggle("dropdown__list_active");
}

function chooseItem(e) {
    e.preventDefault();
    const item = this;
    const dropdown = item.closest(".dropdown");
    const value = dropdown.querySelector(".dropdown__value");
    const list = dropdown.querySelector(".dropdown__list");

    value.textContent = item.textContent;

    list.classList.remove("dropdown__list_active");
}

const values = document.getElementsByClassName("dropdown__value");
for (let value of values) {
    value.addEventListener("click", toggleList);
}

const links = document.getElementsByClassName("dropdown__link");
for (let link of links) {
    link.addEventListener("click", chooseItem);
}