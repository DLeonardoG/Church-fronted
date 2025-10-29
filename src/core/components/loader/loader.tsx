import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SplittingText } from "@/core/components/ui/splitting-text"

export default function LoaderOverlay() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] w-full h-screen flex flex-col items-center justify-center"
        >

          <div className="w-full h-1/2 bg-black flex items-center justify-center">
            <SplittingText
            className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-wide text-white"
            text="Comunicaciones"
          />
          </div>
          <div className="w-full h-1/2 bg-black flex flex-col items-center justify-center">
            <SplittingText
            className="text-5xl md:text-8xl lg:text-9xlXC font-extrabold tracking-wide text-white"
            text="Norte"
          />
          <SplittingText
            className="text-lg text-gray-400 mt-4"
            text="Cargando tu experiencia..."
            delay={1000}
            type="words"
          />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
