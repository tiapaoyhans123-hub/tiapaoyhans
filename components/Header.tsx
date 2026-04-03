export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="
          text-2xl font-serif text-yellow-300
          drop-shadow-[0_0_6px_rgba(255,0,0,0.6)]
          [text-shadow:0_0_10px_rgba(255,0,0,0.7)]
        ">
          Tía Pao & Hans
        </h1>

        {/* NAV */}
        <nav className="flex gap-8 text-sm md:text-base font-medium">

          <a
            href="#catalogo"
            className="
              text-yellow-300 transition 
  tracking-wide
  drop-shadow-[0_0_6px_rgba(255,0,0,0.7)]
  [text-shadow:0_0_10px_rgba(255,0,0,0.9),0_0_20px_rgba(255,0,0,0.6)]
            "
          >
            Catálogo
          </a>

          <a
            href="#pedido"
            className="
              text-yellow-300 transition 
  tracking-wide
  drop-shadow-[0_0_6px_rgba(255,0,0,0.7)]
  [text-shadow:0_0_10px_rgba(255,0,0,0.9),0_0_20px_rgba(255,0,0,0.6)]
            "
          >
            Pedido
          </a>

          <a
            href="#contacto"
            className="
              text-yellow-300 transition 
  tracking-wide
  drop-shadow-[0_0_6px_rgba(255,0,0,0.7)]
  [text-shadow:0_0_10px_rgba(255,0,0,0.9),0_0_20px_rgba(255,0,0,0.6)]
            "
          >
            Contacto
          </a>

        </nav>
      </div>
    </header>
  )
}