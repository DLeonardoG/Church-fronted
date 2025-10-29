import { Card, CardContent } from "@/core/components/ui/card"
import { Badge } from "@/core/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/core/components/ui/button"

interface NewsCardProps {
  title: string
  description: string
  date: string
  category: string
  imageUrl: string
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  date,
  category,
  imageUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <Card className="relative overflow-hidden rounded-2xl shadow-xl border-none text-white h-full">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.55] hover:brightness-[0.75] transition-all duration-500"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {/* Contenido */}
        <CardContent className="relative z-10 p-6 flex flex-col justify-end h-80">
          <div className="flex justify-between items-center mb-3">
            <Badge
              variant="secondary"
              className="bg-red-600/80 text-white px-3 py-1 text-xs uppercase tracking-wider"
            >
              {category}
            </Badge>
            <div className="flex items-center gap-2 text-xs text-gray-200">
              <Calendar className="w-3 h-3" />
              {date}
            </div>
          </div>

          <h2 className="text-2xl font-extrabold leading-snug mb-2 drop-shadow-md">
            {title}
          </h2>

          <p className="text-sm text-gray-200/90 line-clamp-2 mb-4">
            {description}
          </p>

          <Button
            variant="secondary"
            className="bg-white/90 h-6 text-black hover:bg-white flex items-center gap-1 w-fit"
          >
            Mas...
            <ArrowRight></ArrowRight>
          </Button>
        </CardContent>

        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-[5]" />
      </Card>
    </motion.div>
  )
}
