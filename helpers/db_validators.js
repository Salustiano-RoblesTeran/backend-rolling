const Usuario = require("../models/usuario");
const Rol = require("../models/rol");

const esMailValido = async (correo) => {
  const exiteCorreo = await Usuario.findOne({ correo });

  if (exiteCorreo) {
    throw new Error(`El correo ${correo} ya existe en la base de datos!`);
  }
};

const esRolValido = async (rol) => {
  const exiteRol = await Rol.findOne({ rol });

  if (!exiteRol) {
    throw new Error(`El rol ${rol} no existe!`);
  }
};

const esIdValido = async (id) => {
  const exiteUsuario = await Usuario.findById(id);

  if (!exiteUsuario) {
    throw new Error(`El ${id} no se encuentra en la base de datos!`);
  }
};

module.exports = {
  esMailValido,
  esRolValido,
  esIdValido,
};
