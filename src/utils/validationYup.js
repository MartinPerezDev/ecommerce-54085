import { number, object, string } from "yup"

let userSchema = object({
  name: string("El campo nombre debe ser de tipo texto")
        .required("El campo nombre es requerido"),
  phone: number("El campo telefono debe contener solo numeros")
        .positive("El campo telefono debe contener solo numeros positivos")
        .integer("El campo telefono debe contener solo numeros enteros")
        .required("El telefono email es requerido"),
  email: string("El campo email debe ser de tipo texto")
        .email("El campo email debe tener formato email")
        .required("El campo email es requerido")
})

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm)
    return { status: "success" }
  } catch (error) {
    return { status: "error", error: error.message }
  }
}

export default validateForm