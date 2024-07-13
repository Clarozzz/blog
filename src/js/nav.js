const navLinks = document.querySelectorAll("[name=navLink]");

navLinks.forEach((link) => {
    if(link.getAttribute("href") === window.location.pathname) {
        link.setAttribute("aria-current", "page");
        link.classList.add("bg-slate-200");
    }
})