"use client"

import * as React from "react"
import { Card, CardContent } from "@/core/components/ui/card"

interface CountdownTimerProps {
  targetDate: string // Ejemplo: "2025-12-31T23:59:59"
  title?: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = new Date(targetDate).getTime() - now

      if (distance <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <Card className="w-1/2 h-2/3 text-center justify-center bg-white">
      <CardContent className="flex justify-center gap-4 text-2xl font-mono text-black">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-xs text-muted-foreground">Días</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <span className="text-xs text-muted-foreground">Horas</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <span className="text-xs text-muted-foreground">Min</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          <span className="text-xs text-muted-foreground">Seg</span>
        </div>
      </CardContent>
    </Card>
  )
}
