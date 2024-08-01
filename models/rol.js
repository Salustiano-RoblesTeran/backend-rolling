const { Schema, model } = require("mongoose");

const RolSchema = Schema({
  rol: {
    type: String,
    //!VER
    required: [true, "El rol es obligatorio"],
  },
});

module.exports = model("Rol", RolSchema);
