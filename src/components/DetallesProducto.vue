<template>
    <div class="product-details">
      <h1 class="product-title">{{ titulo }}</h1>
      <p class="product-description">{{ descripcion }}</p>
      <div class="product-actions">
        <div class="product-price">Precio: ${{ precio }}</div>
        <button @click="agregarAlCarrito">Agregar al carrito</button>
        <button @click="comprarAhora">Comprar ahora</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      titulo: String,
      descripcion: String,
      precio: Number,
    },
    methods: {
      agregarAlCarrito() {
        // Aquí puedes implementar la lógica para agregar el producto al carrito
        this.$emit('agregar-al-carrito', this.titulo, this.precio);
      },
      comprarAhora() {
        // Aquí puedes implementar la lógica para comprar el producto de inmediato
        // Esto es solo un ejemplo, puedes personalizarlo según tus necesidades
        this.$emit('comprar-ahora', this.titulo, this.precio);
      },
    },
  };
  </script>
  
  <style scoped>
  .product-details {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    float: right;
    width: 45%;
  }
  
  .product-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .product-description {
    margin-bottom: 20px;
  }
  
  .product-actions {
    display: flex;
    align-items: center;
  }
  
  .product-price {
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 20px;
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
    margin: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>