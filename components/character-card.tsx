import Image from 'next/image'
import { Star, Eye, MessageCircle } from 'lucide-react'

interface CharacterCardProps {
  name: string
  image: string
  stars: number
  views: string
  comments: number
  description: string
}

export function CharacterCard({ name, image, stars, views, comments, description }: CharacterCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-[#2A2A2A]">
      <div className="aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={300}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <div className="mt-2 flex items-center gap-4 text-sm text-gray-300">
          <span className="flex items-center gap-1">
            <Star size={16} />
            {stars}
          </span>
          <span className="flex items-center gap-1">
            <Eye size={16} />
            {views}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={16} />
            {comments}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

