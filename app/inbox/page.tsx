// app/inbox/page.tsx
import React from 'react';
import { getInbox, OrderData } from '../../actions/sendOrder';

export default async function InboxPage() {
  // SERVER COMPONENT: obtener pedidos
  const inbox = getInbox(); // aquí devuelve el arreglo en memoria

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold">Buzón de pedidos</h1>
      {inbox.length === 0 ? (
        <p>No hay pedidos nuevos.</p>
      ) : (
        <ul className="space-y-4">
          {inbox.map((order, index) => (
            <li key={index} className="border rounded-md p-4 bg-card">
              <div className="flex justify-between">
                <strong>{order.name}</strong>
                <span>{new Date(order.timestamp).toLocaleString('es-CL')}</span>
              </div>
              <p>Tel: {order.phone}</p>
              <p>Dir: {order.address}</p>
              <ul className="mt-2 space-y-1">
                {order.items.map((it) => (
                  <li key={it.id}>
                    {it.qty} × {it.name} = ${ (it.price * it.qty).toLocaleString('es-CL') }
                  </li>
                ))}
              </ul>
              {order.notes && <p className="mt-2">Notas: {order.notes}</p>}
              <p className="mt-2 font-semibold">
                Total: ${order.total.toLocaleString('es-CL')}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
