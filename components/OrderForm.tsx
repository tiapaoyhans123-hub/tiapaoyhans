'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';

interface MenuItemShort {
  id: string;
  name: string;
  price: number;
}

interface Props {
  menuItems: MenuItemShort[];
}

export default function OrderForm({ menuItems }: Props) {

  // Estado local: por simplicidad, guardar un array de items seleccionados
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const handleQtyChange = (id: string, qty: number) => {
    setSelected((prev) => ({
      ...prev,
      [id]: qty,
    }));
  };

  const itemsSelected = menuItems
    .filter((it) => selected[it.id] && selected[it.id] > 0)
    .map((it) => ({
      id: it.id,
      name: it.name,
      price: it.price,
      qty: selected[it.id] ?? 0,
    }));

  const total = itemsSelected.reduce((acc, it) => acc + it.price * it.qty, 0);

  // El formulario en sí
  return (
    <form
    onSubmit={async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const res = await fetch('/api/send-order', {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();

toast.success(data.message);
}}

      className="space-y-6"
    >
      {/* Campos básicos */}
      <div>
        <label className="block font-medium">Nombre</label>
        <input
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label className="block font-medium">Teléfono</label>
        <input
          name="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label className="block font-medium">Dirección</label>
        <input
          name="address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 block w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Selección de items */}
      <div>
        <h3 className="font-semibold">Tu pedido</h3>
        <ul className="space-y-2 mt-2">
          {menuItems.map((it) => (
            <li key={it.id} className="flex items-center justify-between">
              <span>{it.name}</span>
            <input
  type="number"
  min={0}
  value={selected[it.id] ?? 0}
  onChange={(e) => handleQtyChange(it.id, Number(e.target.value))}
  className="w-16 rounded-lg bg-black border border-yellow-500/20 text-yellow-400 font-semibold text-center px-2 py-1 shadow-inner focus:ring-2 focus:ring-yellow-400"
/>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label className="block font-medium">Notas</label>
        <textarea
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-1 block w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Inputs ocultos para pasar items y total */}
      <input
        type="hidden"
        name="items"
        value={JSON.stringify(itemsSelected)}
      />
      <input
        type="hidden"
        name="total"
        value={total.toString()}
      />

      <div className="flex justify-between items-center">
        <span className="font-semibold">
          Total: ${total.toLocaleString('es-CL')}
        </span>
        <button
          type="submit"
          disabled={itemsSelected.length === 0}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-md disabled:opacity-50"
        >
          Enviar pedido
        </button>
      </div>
    </form>
  );
}
