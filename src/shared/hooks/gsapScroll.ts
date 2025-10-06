import { gsap } from "@/shared/lib/gsap";

let lastScroll = window.scrollY;

// IDs de secciones permitidas para el scroll animado
const allowedSections = ["sectionD", "Anuncios", "section2", "section3"];

export default function scrollToSection(id: string, opts: { duration?: number } = {}) {
  const { duration = 1.2 } = opts;
  const target = document.getElementById(id);
  if (!target) return;

  // 🚫 Si la sección no está en la lista permitida, no hace scroll animado
  if (!allowedSections.includes(id)) return;

  const goingDown = window.scrollY >= lastScroll;
  lastScroll = window.scrollY;

  const offsetDown = 350;
  const offsetUp = 200;

  const y =
    target.getBoundingClientRect().top +
    window.scrollY -
    (goingDown ? offsetDown : offsetUp);

  gsap.to(window, {
    duration,
    scrollTo: { y },
    ease: "power2.inOut",
  });
}
