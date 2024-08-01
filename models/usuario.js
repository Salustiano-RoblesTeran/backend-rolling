const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, "Este dato es obligatorio!"],
  },
  correo: {
    type: String,
    required: [true, "Este dato es obligatorio!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Este dato es obligatorio!"],
  },
  rol: {
    type: String,
    //!VER
    required: [true, "Este dato es obligatorio!"],
    // ----
    // enum: ["USER_ROLE", "ADMIN_ROLE"],
    default: "USER_ROLE",
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

//Quitar datos de la respuesta
UsuarioSchema.methods.toJSON = function () {
  const { password, __v, ...usuario } = this.toObject();

  return usuario;
};

module.exports = model("Usuario", UsuarioSchema);
