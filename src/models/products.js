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
  material: { type: String, required: true },
  dimensiones: { type: String, required: true },
  peso: { type: String, required: true },
  codigo_products: { type: String, required: true, unique: true },
  imagen: [{ type: String, required: true }],
});

// Middleware para verificar stock y ajustar disponibilidad
productsSchema.pre("save", function (next) {
  this.disponibilidad = this.stock > 0;
  next();
});

const Products = model("Products", productsSchema);

module.exports = Products;
