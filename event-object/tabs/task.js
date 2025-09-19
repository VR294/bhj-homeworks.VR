const tabsContainers = document.getElementsByClassName("tabs");

for (let container of tabsContainers) {
    const tabs = container.querySelectorAll(".tab"); // все вкладки
    const contents = container.querySelectorAll(".tab__content"); // все контенты

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function() {
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove("tab_active");
                contents[j].classList.remove("tab__content_active");
            }

            tabs[i].classList.add("tab_active");
            contents[i].classList.add("tab__content_active");
        });
    }
}