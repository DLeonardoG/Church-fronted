import { gsap } from "@/shared/lib/gsap"

let lastScroll = window.scrollY

export default function scrollToSection(id: string, opts: { duration?: number } = {}) {
  const { duration = 1.2 } = opts
  const target = document.getElementById(id)
  if (!target) return

  const goingDown = window.scrollY >= lastScroll
  lastScroll = window.scrollY

  const offsetPercent = goingDown ? 1 : 0.15

  const y =
    target.getBoundingClientRect().top +
    window.scrollY -
    window.innerHeight * offsetPercent

  gsap.to(window, {
    duration,
    scrollTo: { y },
    ease: "power2.inOut",
  })
}
