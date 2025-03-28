export function initAccordion() {

    const accordionItems = document.querySelectorAll(".accordion__item");

    accordionItems.forEach((item) => {
        const header = item.querySelector(".accordion__item-inner");
        const icon = item.querySelector(".bx");
        const content = item.querySelector(".content");

        header.addEventListener("click", () => {
            item.classList.toggle("active");

            if (item.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = "rotate(180deg)";
            } else {
                content.style.maxHeight = null;
                icon.style.transform = "rotate(0deg)";
            }
        });
    });
}
