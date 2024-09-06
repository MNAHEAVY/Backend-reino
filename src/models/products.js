const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productsSchema = new Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true, min: 0 },
  descripcion: { type: String, required: true },
  marca: { type: String, required: true },
  edad: { type: String, required: true },
  categoria: { type: String, required: true },
  disponibilidad: { type: Boolean, required: true },
  stock: {
    type: Number,
    required: true,
    min: [0, "El stock no puede ser negativo"],
  },
  material: { type: String },
  dimensiones: { type: String },
  peso: { type: String }, 
  codigoProducto: { type: String }, 
  imagen: [{ type: String, required: true }], 
});

productsSchema.pre("save", function (next) {
  this.disponibilidad = this.stock > 0;
  next();
});

const Products = model("Products", productsSchema);

module.exports = Products;
