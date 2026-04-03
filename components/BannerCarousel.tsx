'use client'

import { useEffect, useState } from 'react'

export default function BannerCarousel() {
  const images = [
    '/banner.jpg',
    '/banner1.jpg',
    '/banner2.jpg',
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-2xl">

      {/* Imagen */}
      <img
        src={images[current]}
        className="w-full h-full object-cover transition-all duration-1000"
      />

      {/* Overlay oscuro luxury */}
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">

<h1 className="
  text-7xl md:text-7xl 
  font-serif 
  tracking-widest 
  text-yellow-300
  drop-shadow-[0_0_6px_rgba(255,0,0,0.6)]
  [text-shadow:0_0_10px_rgba(255,0,0,0.7)]
">
  Tía Pao & Hans
</h1>

       <p className="
  mt-4 
  text-xl md:text-2xl
  max-w-xl 
  font-medium
  text-yellow-300
  drop-shadow-[0_0_6px_rgba(255,0,0,0.6)]
  [text-shadow:0_0_10px_rgba(255,0,0,0.7),0_0_20px_rgba(255,0,0,0.5)]
">
  Experiencia gastronómica casera con estilo premium 🍽️
</p>

        <a
          href="/order"
          className="mt-6 bg-[hsl(var(--danger))] text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg drop-shadow-[0_0_4px_rgba(255,215,0,0.4)]
  [text-shadow:0_0_8px_rgba(255,215,0,0.5)]"
        >
          Pedir ahora
        </a>
      </div>
    </div>
  )
}