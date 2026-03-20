"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";

const initialState = { error: "", success: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  return (
    <section className="bg-gray-900 text-white px-5 py-10">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Contacto</h2>
        <form action={formAction} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre:</label>
            <input name="nombre" type="text"
              className="w-full border border-gray-600 bg-gray-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Asunto:</label>
            <input name="asunto" type="text"
              className="w-full border border-gray-600 bg-gray-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Asunto" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input name="email" type="email"
              className="w-full border border-gray-600 bg-gray-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mensaje:</label>
            <textarea name="mensaje" rows={4}
              className="w-full border border-gray-600 bg-gray-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu mensaje" />
          </div>

          {state?.error && <p className="text-red-400 text-sm">{state.error}</p>}
          {state?.success && <p className="text-green-400 text-sm">{state.success}</p>}

          <button type="submit" disabled={isPending}
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 disabled:opacity-50">
            {isPending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
}