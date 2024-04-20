const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe (el));

function scrollArrow() {
    document.getElementsByClassName("arrow")[0].style.opacity = 0;
}

window.addEventListener("scroll", scrollArrow);