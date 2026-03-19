"use server";

export type ContactState = {
  error?: string;
  success?: string;
};

export async function submitContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const asunto = formData.get("asunto") as string;
  const mensaje = formData.get("mensaje") as string;

  if (!nombre || !email || !asunto || !mensaje) {
    return { error: "Todos los campos son obligatorios" };
  }

  if (!email.includes("@")) {
    return { error: "El email no es válido" };
  }

  return { success: "Formulario enviado correctamente" };
}