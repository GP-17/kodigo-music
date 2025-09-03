import React from "react"
import { useForm } from "react-hook-form"

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data)
    alert("Formulario válido, revisa la consola 🚀")
  }

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Contacto 📩</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-md bg-gray-800 p-6 rounded-lg"
      >
        <div>
          <label className="block mb-1">Nombre:</label>
          <input
            type="text"
            {...register("nombre", { required: "El nombre es obligatorio" })}
            className="w-full p-2 rounded-md text-black"
          />
          {errors.nombre && (
            <p className="text-red-400 text-sm">{errors.nombre.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Formato de email inválido",
              },
            })}
            className="w-full p-2 rounded-md text-black"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Mensaje:</label>
          <textarea
            {...register("mensaje", {
              required: "El mensaje es obligatorio",
              minLength: {
                value: 10,
                message: "El mensaje debe tener al menos 10 caracteres",
              },
            })}
            className="w-full p-2 rounded-md text-black"
          />
          {errors.mensaje && (
            <p className="text-red-400 text-sm">{errors.mensaje.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
