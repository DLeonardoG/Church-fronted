'use client'

import { useState } from "react"
import { cn } from "@/shared/lib/utils"
import {
  CHURCH_BELIEFS,
  BELIEFS_SECTION_TEXTS,
  BELIEF_SECTION_IDS
} from "../constants/aboutConfig"

const CARDS_PER_PAGE = 8

export function BeliefsSection() {
  const [page, setPage] = useState(0)

  const start = page * CARDS_PER_PAGE
  const end = start + CARDS_PER_PAGE
  const visibleCards = CHURCH_BELIEFS.slice(start, end)

  const totalPages = Math.ceil(CHURCH_BELIEFS.length / CARDS_PER_PAGE)

  return (
    <section
      id={BELIEF_SECTION_IDS.CONTENT}
      className={cn(
        "w-full py-20 bg-background"
      )}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-6 w-full text-center lg:text-left items-center lg:items-start lg:justify-between">
        <div className="flex flex-col gap-6 w-full lg:w-auto items-center lg:items-start">
          <h2
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-extrabold",
              "text-foreground tracking-tight"
            )}
          >
            {BELIEFS_SECTION_TEXTS.SECTION_TITLE}
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full" />
        </div>

        <p className="text-foreground text-lg max-w-lg leading-relaxed">
          {BELIEFS_SECTION_TEXTS.SECTION_SUBTITLE}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16 gap-4 px-10">
        {visibleCards.map((card, i) => (
          <div
            key={i}
            className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer w-full h-[420px]"
          >
            {/* Imagen */}
            <img
              src={card.img}
              alt={card.TITLE}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0 bg-black/70 flex flex-col justify-end
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500 p-6
              "
            >
              <h3 className="text-2xl font-semibold text-white">
                {card.TITLE}
              </h3>

              <p className="text-gray-200 text-sm leading-relaxed mt-2">
                {card.DESCRIPTION}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() => setPage(p => Math.max(p - 1, 0))}
            disabled={page === 0}
            className={cn(
              "px-6 py-2 rounded-full font-semibold transition",
              page === 0
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-primary text-primary-foreground hover:opacity-90"
            )}
          >
            Anterior
          </button>

          <span className="text-sm text-muted-foreground">
            Página {page + 1} de {totalPages}
          </span>

          <button
            onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className={cn(
              "px-6 py-2 rounded-full font-semibold transition",
              page === totalPages - 1
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-primary text-primary-foreground hover:opacity-90"
            )}
          >
            Siguiente
          </button>
        </div>
      )}
    </section>
  )
}
