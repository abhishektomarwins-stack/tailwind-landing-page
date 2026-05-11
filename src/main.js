import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./variables.css";

const mobileMenuButton = document.querySelector("#mobileMenuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileMenuIcon = mobileMenuButton?.querySelector("i");

mobileMenuButton?.addEventListener("click", () => {
  const isOpen = mobileMenuButton.getAttribute("aria-expanded") === "true";

  mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
  mobileMenuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  mobileMenu?.classList.toggle("hidden", isOpen);

  mobileMenuIcon?.classList.toggle("fa-bars", isOpen);
  mobileMenuIcon?.classList.toggle("fa-xmark", !isOpen);
});
