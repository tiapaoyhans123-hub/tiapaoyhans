export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-serif text-primary">
          Tía Pao & Hans
        </h1>

        <nav className="flex gap-6 text-sm font-medium">
          <a href="#catalogo" className="hover:text-primary">
            Catálogo
          </a>

          <a href="#pedido" className="hover:text-primary">
            Pedido
          </a>

          <a href="#contacto" className="hover:text-primary">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}