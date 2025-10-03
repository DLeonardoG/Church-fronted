import { useEffect } from "react"
import { gsap, ScrollTrigger } from "@/shared/lib/gsap" 

type Options = {
  panelSelector?: string
  pinSelector?: string // opcional: un trigger extra que quieras pinear (ej: "#sectionD")
  snapDuration?: number
  snapEase?: string
  markers?: boolean
  disableOnMobile?: boolean
}

export function useScrollHomeTrigger({
  panelSelector = ".panel",
  pinSelector,
  snapDuration = 0.6,
  snapEase = "power1.out",
  markers = false,
  //disableOnMobile = true,
}: Options = {}) {
  useEffect(() => {
    // evita inicializar en pantallas muy pequeñas (opcional)
    //if (disableOnMobile && window.matchMedia("(max-width:640px)").matches) return

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(panelSelector)
      if (!panels.length) return

      // asegúrate que cada panel tenga al menos 100vh (si no lo controlas desde Tailwind)
      panels.forEach((p) => {
        if (!p.style.minHeight) p.style.minHeight = "100vh"
      })

      // Creamos ScrollTriggers para calcular los "starts" dinámicamente
      const tops = panels.map((panel) =>
        ScrollTrigger.create({ trigger: panel, start: "top top", markers: false })
      )

      // Pin para cada panel (pinSpacing false para que se "superpongan" como en el CodePen)
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: () => (panel.offsetHeight < window.innerHeight ? "top top" : "top top"),
          pin: true,
          pinSpacing: false,
          markers,
        })
      })

      // Snap que calcula la posición más cercana con los "starts"
      const snapTrigger = ScrollTrigger.create({
        snap: {
          snapTo: (progress, self) => {
            // recalculamos starts dinámicamente
            const panelStarts = tops.map((st) => st.start)
            const snapScroll = gsap.utils.snap(panelStarts, self.scroll())
            return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll)
          },
          duration: snapDuration,
          ease: snapEase,
        },
        markers,
      })

      // Si el usuario pidió pinear otro selector (ej: #sectionD) durante una distancia fija:
      if (pinSelector) {
        ScrollTrigger.create({
          trigger: pinSelector,
          start: "top top",
          end: "+=300px", // ajusta duración del pin si quieres más/menos
          pin: true,
          pinSpacing: false,
          markers,
        })
      }

      // refresh en resize (recalcula todo)
      const onResize = () => ScrollTrigger.refresh()
      window.addEventListener("resize", onResize)

      // cleanup explícito (aunque ctx.revert() hace la mayor parte)
      // devolvemos cleanup desde el contexto no desde aquí, porque devolver algo dentro de gsap.context no hace cleanup reactivo; lo hacemos en el return del useEffect.
    })

    return () => {
      ctx.revert() // quita animaciones / ScrollTriggers creados dentro del contexto
      window.removeEventListener("resize", () => ScrollTrigger.refresh())
    }
    // si cambias selector/pinSelector en caliente, el hook se reiniciará
  }, [panelSelector, pinSelector, snapDuration, snapEase, markers]) //disableOnMobile
}
