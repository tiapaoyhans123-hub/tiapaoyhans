'use client'

interface Props {
  message?: string
}

export default function WhatsAppButton({ message }: Props) {
  return (
    <a
      href={`https://wa.me/56989043383?text=${message || ''}`}
      target="_blank"
      className="
        fixed bottom-6 right-6
        bg-green-500 hover:bg-green-600
        text-white px-6 py-3
        rounded-full shadow-2xl
        z-50 font-semibold
      "
    >
      WhatsApp
    </a>
  )
}