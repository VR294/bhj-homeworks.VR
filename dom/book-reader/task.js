const book = document.getElementById("book");
const fontSizeControls = document.querySelectorAll(".font-size");

for (const control of fontSizeControls) {
    control.addEventListener("click", function(event) {
        event.preventDefault();

        for (const item of fontSizeControls) {
            item.classList.remove("font-size_active");
        }

        control.classList.add("font-size_active");

        book.classList.remove("book_fs-small", "book_fs-big");

        if (control.dataset.size === "small") {
            book.classList.add("book_fs-small");
        } else if (control.dataset.size === "big") {
            book.classList.add("book_fs-big");
        }
    });
}
