<template>
  <div class="producto-card">
    <img :src="imagen" alt="Imagen del producto" class="producto-imagen" />
    <h2 class="producto-nombre">{{ nombre }}</h2>
    <p class="producto-descripcion">{{ descripcion }}</p>
    <div class="producto-precio">Precio: ${{ precio }}</div>
    <a :href="link" class="producto-link">Ver detalles</a>
    <button @click="agregarAlCarrito">Agregar al carrito</button>
  </div>
</template>
  
<script>
export default {
  props: {
    nombre: String,
    descripcion: String,
    precio: Number,
    imagen: String,
    link: String,
  },
  methods: {
    agregarAlCarrito() {
      // Aquí puedes implementar la lógica para agregar el producto al carrito
      // Por ejemplo, puedes emitir un evento para notificar al componente principal
      this.$emit('agregarAlCarrito', this.nombre, this.precio);
    },
  },
};
</script>
  
<style scoped>
.producto-card {
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  margin: 10px;
  width: 300px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}

.producto-card:hover {
  transform: scale(1.05);
}

.producto-imagen {
  max-width: 250px;

}

.producto-nombre {
  font-size: 1.2rem;
  margin: 10px 0;
}

.producto-descripcion {
  margin: 10px 0;
}

.producto-precio {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 10px 0;
  
}

button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.producto-link {
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: #007BFF;
}
</style>