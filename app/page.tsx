import Header from "@/components/Header"
import BannerCarousel from "@/components/BannerCarousel"
import WhatsAppButton from "@/components/WhatsAppButton"
import MenuCard from "@/components/MenuCard"
import { menuItems } from "@/lib/menu-data"

export default function Page() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-10 space-y-24">

        {/* 🔥 BANNER */}
        <BannerCarousel />

        {/* 💎 MENÚ */}
        <section id="catalogo">
         <h2 className="
  text-4xl md:text-5xl 
  font-serif 
  mb-12 
  text-center 
  text-red-500 
  tracking-wide
  drop-shadow-[0_0_6px_rgba(255,0,0,0.7)]
  [text-shadow:0_0_10px_rgba(255,0,0,0.9),0_0_20px_rgba(255,0,0,0.6)]
">
  Nuestro Menú
</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {menuItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* 🚀 PEDIDO PREMIUM */}
        <section
          id="pedido"
          className="relative bg-gradient-to-r from-black via-neutral-900 to-black border border-yellow-500/20 rounded-3xl p-12 text-center shadow-2xl overflow-hidden"
        >
          {/* Glow efecto */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10" />

          <h2 className="relative text-4xl md:text-5xl font-serif text-red-500 mb-6">
            Haz tu pedido
          </h2>

          <p className="relative text-gray-300 mb-8 max-w-xl mx-auto">
            Elige tus platos favoritos y envía tu pedido directamente.
            Rápido, fácil y sin complicaciones.
          </p>

          <div className="relative flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/56989043383"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Pedir por WhatsApp
            </a>

            <a
              href="/order"
              className="bg-red-600 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Formulario de Pedido
            </a>
          </div>
        </section>

        {/* 📍 CONTACTO */}
        <section
          id="contacto"
          className="bg-gradient-to-b from-black to-neutral-900 border border-yellow-500/20 rounded-3xl p-12 text-center shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-red-500 mb-6">
            Contacto
          </h2>

          <p className="text-gray-400">
            📍 Reverendo Aldo Giachi 1207, Maipú
          </p>
          <div className="mt-10 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg">
  <iframe
    src="https://www.google.com/maps?q=Reverendo+Aldo+Giachi+1207,+Maipú,+Chile&output=embed"
    width="100%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>

          <p className="mt-2 text-gray-300">
            📞 +56 9 8904 3383
          </p>

          <p className="mt-2 text-gray-300">
            ✉️ contacto@tiapaoyhans.cl
          </p>

          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://wa.me/56989043383"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition"
            >
              WhatsApp
            </a>

            <a
              href="mailto:contacto@tiapaoyhans.cl"
              className="bg-red-600 hover:bg-yellow-500 text-black px-6 py-2 rounded-full shadow-md hover:scale-105 transition"
            >
              Email
            </a>
          </div>
        </section>

      </main>

      <WhatsAppButton />
    </>
  )
}
