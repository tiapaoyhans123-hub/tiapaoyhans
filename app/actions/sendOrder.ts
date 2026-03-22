// app/actions/sendOrder.ts
'use server';

import { revalidatePath } from 'next/cache';
// Aquí definir tu tipo de pedido
export interface OrderData {
  name: string;
  phone: string;
  address: string;
  items: { id: string; name: string; qty: number; price: number }[];
  notes?: string;
  total: number;
  timestamp: string;
}

// Buzón en memoria simple (para prototipo). 
// Para producción, deberías usar BD.
let inbox: OrderData[] = [];

// Función para obtener pedidos (podrías exportarla)
export function getInbox() {
  return inbox;
}

export async function sendOrder(formData: FormData) {
  // Obtener campos
  const name = formData.get('name')?.toString() ?? '';
  const phone = formData.get('phone')?.toString() ?? '';
  const address = formData.get('address')?.toString() ?? '';
  const notes = formData.get('notes')?.toString() ?? '';
  // Items vendrían como JSON en un input hidden
  const itemsJson = formData.get('items')?.toString() ?? '[]';
  const items = JSON.parse(itemsJson) as OrderData['items'];

  const total = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  const timestamp = new Date().toISOString();

  const order: OrderData = {
    name,
    phone,
    address,
    items,
    notes,
    total,
    timestamp,
  };

  // 1) Guardar en buzón interno
  inbox.unshift(order); // agrega al frente

  // 2) Enviar WhatsApp - abrir link o usar API? 
  // Para abrir link, lo más sencillo es que el usuario confirme desde UI,
  // pero como Server Action no abre link directo, aquí solo preparamos.
  // Podrías enviar un email con la info y usar el link en el correo.
  // O bien, podrías usar algún servicio para enviar mensaje WhatsApp vía API
  // pero eso requiere cuenta y token. Para prototipo, basta con email y buzón.

  // 3) Enviar email
  // Ejemplo con nodemailer (si lo agregas en tu proyecto). Es solo un ejemplo; 
  // debes instalar nodemailer y configurar SMTP.
  /*
  import nodemailer from 'nodemailer';
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  const orderText = buildOrderText(order);
  await transporter.sendMail({
    from: '"Tía Pao y Hans" <no-reply@tupagina.cl>',
    to: 'proyectosmarce0623@gmail.com', // tu email
    subject: `Nuevo pedido de ${order.name}`,
    text: orderText,
  });
  */
  // Si no tienes SMTP listo, puedes dejar comentarios y más adelante integrarlo.

  // 4) Revalidar ruta del buzón para que la página se actualice
  revalidatePath('/inbox');

  // Devuelve algo para el cliente
  return { success: true };
}
