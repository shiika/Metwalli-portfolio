const mainSections = document.querySelectorAll("main");
const navLinks = document.querySelectorAll(".navbar__nav li a");

navLinks.forEach((item) => {
    item.addEventListener("click", navigate);
})

function navigate() {
    if (!this.classList.contains("active")) {
        const activeBtn = document.querySelector(".navbar__nav li a.active");
        activeBtn.classList.remove("active");
        this.classList.add("active");
        switchPages(this.dataset.id);
    }

}

function switchPages(id) {
    mainSections.forEach((item) => {
        item.classList.toggle("d-none");
    });
    document.querySelector(id).classList.add("d-block");
}