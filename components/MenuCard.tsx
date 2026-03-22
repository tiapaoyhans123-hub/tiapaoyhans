'use client'

import { MenuItem, formatPrice } from "@/lib/menu-data"

interface Props {
  item: MenuItem
}

export default function MenuCard({ item }: Props) {
  return (
    <div className="group relative bg-gradient-to-b from-[#1a1a1a] to-black border border-yellow-700/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-yellow-500/20 transition duration-500">

      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Glow dorado */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="p-5 space-y-3">

        <h3 className="text-xl font-serif text-yellow-400 tracking-wide">
          {item.name}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed">
          {item.description}
        </p>

        <div className="flex justify-between items-center pt-2">

          <span className="text-lg font-bold text-yellow-300">
            {formatPrice(item.price)}
          </span>

          <a
            href={`https://wa.me/56989043383?text=Hola quiero pedir ${item.name}`}
            target="_blank"
            className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm hover:bg-yellow-400 transition"
          >
            Pedir
          </a>

        </div>
      </div>

      {/* Glow borde luxury */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-yellow-500/40 transition" />

    </div>
  )
}