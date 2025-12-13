"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function WorldMapChurch() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-foreground dark:text-white"
          >
            Contactanos, Escribenos.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
          >
            Iglesia Adventista del Séptimo Día – Norte de Bucaramanga
          </motion.p>

          <div className="mt-6 flex justify-center items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>
              Carrera 20 #6-47 · Bucaramanga, Santander · Colombia
            </span>
          </div>
        </div>

        {/* Google Map */}
        <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-border dark:border-white/10 bg-card dark:bg-neutral-900 shadow-lg">
          <iframe
            title="Iglesia Adventista Norte de Bucaramanga"
            src="https://www.google.com/maps?q=7.139538,-73.127435&z=16&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Label flotante */}
          <div className="absolute bottom-6 left-15 max-w-sm rounded-xl border border-border dark:border-white/10 bg-card/95 dark:bg-black/80 backdrop-blur px-4 py-3 shadow-lg">
            <h3 className="font-semibold text-foreground dark:text-white">
              Iglesia Adventista del Séptimo Día
            </h3>
            <p className="text-sm text-muted-foreground">
              Norte de Bucaramanga
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
