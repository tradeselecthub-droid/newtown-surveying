const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("open");
  });
}

const contactForms = document.querySelectorAll("[data-contact-form]");

contactForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector('[name="name"]')?.value?.trim() || "";
    const email = form.querySelector('[name="email"]')?.value?.trim() || "";
    const phone = form.querySelector('[name="phone"]')?.value?.trim() || "";
    const service = form.querySelector('[name="service"]')?.value?.trim() || "";
    const message = form.querySelector('[name="message"]')?.value?.trim() || "";

    const subject = encodeURIComponent("TradeSelectHub Consultation Request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:hello@tradeselecthub.ie?subject=${subject}&body=${body}`;
  });
});
