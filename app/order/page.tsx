// app/order/page.tsx
import React from 'react';
import OrderForm from '../../components/OrderForm';
import { menuItems } from '../../lib/menu-data';

export default function OrderPage() {
  // Convertir a tipo reducido
  const menuShort = menuItems.map(({ id, name, price }) => ({
    id, name, price
  }));

  return (
    <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-bold">Tu pedido</h1>
      <OrderForm menuItems={menuShort} />
    </main>
  );
}
