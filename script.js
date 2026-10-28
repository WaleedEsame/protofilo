const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const navMenu = document.getElementById("navMenu");

menuOpen.addEventListener("click", () => {
  navMenu.classList.add("active");
});

menuClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
});
// ====================================================

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) return;


    const subject = encodeURIComponent("رسالة جديدة من: " + name);
    const body = encodeURIComponent(`الاسم: ${name}\nالإيميل: ${email}\n\nالرسالة:\n${message}`);

    window.location.href = `mailto:ws163786@gmail.com?subject=${subject}&body=${body}`;
});