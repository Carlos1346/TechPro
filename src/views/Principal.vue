<template>
  <div class="cuerpo">


    <BarraMenu />
    <h2>¡Nuestros Mejores Productos!</h2>
    <div class="ProductosCont">


      <Producto nombre="Tarjeta de video Nvidia Zotac Gaming GeForce RTX 4080Series RTX 4080 ZT-D40810J-10P OC Edition 16GB"
        descripcion="Descripción: Series RTX 4080 ZT-D40810J-10P OC Edition 16GB" precio="29.99"
        imagen="https://www.zotac.com/es/system/files/styles/org/private/product_main_image/graphics_cards/zt-d40810d-10p-image01_0.jpg?itok=CoPek6li"
        link="/Item" @agregarAlCarrito="agregarProductoAlCarrito" />


      <Producto nombre="Producto 2" descripcion="Descripción del producto 2" precio="29.99"
        imagen="https://www.zotac.com/es/system/files/styles/org/private/product_main_image/graphics_cards/zt-d40810d-10p-image01_0.jpg?itok=CoPek6li"
        @agregarAlCarrito="agregarProductoAlCarrito" />
      <Producto nombre="Producto 2" descripcion="Descripción del producto 2" precio="29.99"
        imagen="https://www.zotac.com/es/system/files/styles/org/private/product_main_image/graphics_cards/zt-d40810d-10p-image01_0.jpg?itok=CoPek6li"
        @agregarAlCarrito="agregarProductoAlCarrito" />
      <Producto nombre="Producto 2" descripcion="Descripción del producto 2" precio="29.99"
        imagen="https://www.zotac.com/es/system/files/styles/org/private/product_main_image/graphics_cards/zt-d40810d-10p-image01_0.jpg?itok=CoPek6li"
        @agregarAlCarrito="agregarProductoAlCarrito" />
      <Producto nombre="Producto 2" descripcion="Descripción del producto 2" precio="29.99"
        imagen="https://www.zotac.com/es/system/files/styles/org/private/product_main_image/graphics_cards/zt-d40810d-10p-image01_0.jpg?itok=CoPek6li"
        @agregarAlCarrito="agregarProductoAlCarrito" />
      <Producto nombre="Producto 2" descripcion="Descripción del producto 2" precio="29.99"
        imagen="https://www.zotac.com/es/system/files/styles/org/private/product_main_image/graphics_cards/zt-d40810d-10p-image01_0.jpg?itok=CoPek6li"
        @agregarAlCarrito="agregarProductoAlCarrito" />
      <Producto nombre="Producto 2" descripcion="Descripción del producto 2" precio="29.99"
        imagen="https://www.zotac.com/es/system/files/styles/org/private/product_main_image/graphics_cards/zt-d40810d-10p-image01_0.jpg?itok=CoPek6li"
        @agregarAlCarrito="agregarProductoAlCarrito" />
      <Producto nombre="Producto 2" descripcion="Descripción del producto 2" precio="29.99"
        imagen="https://www.zotac.com/es/system/files/styles/org/private/product_main_image/graphics_cards/zt-d40810d-10p-image01_0.jpg?itok=CoPek6li"
        @agregarAlCarrito="agregarProductoAlCarrito" />
      <Producto nombre="Producto 2" descripcion="Descripción del producto 2" precio="29.99"
        imagen="https://www.zotac.com/es/system/files/styles/org/private/product_main_image/graphics_cards/zt-d40810d-10p-image01_0.jpg?itok=CoPek6li"
        @agregarAlCarrito="agregarProductoAlCarrito" />
      <Producto nombre="Producto 2" descripcion="Descripción del producto 2" precio="29.99"
        imagen="https://www.zotac.com/es/system/files/styles/org/private/product_main_image/graphics_cards/zt-d40810d-10p-image01_0.jpg?itok=CoPek6li"
        @agregarAlCarrito="agregarProductoAlCarrito" />
      <Producto nombre="Producto 2" descripcion="Descripción del producto 2" precio="29.99"
        imagen="https://www.zotac.com/es/system/files/styles/org/private/product_main_image/graphics_cards/zt-d40810d-10p-image01_0.jpg?itok=CoPek6li"
        @agregarAlCarrito="agregarProductoAlCarrito" />
      <Producto nombre="Producto 2" descripcion="Descripción del producto 2" precio="29.99"
        imagen="https://www.zotac.com/es/system/files/styles/org/private/product_main_image/graphics_cards/zt-d40810d-10p-image01_0.jpg?itok=CoPek6li"
        @agregarAlCarrito="agregarProductoAlCarrito" />


      <!-- Agrega más tarjetas de productos según sea necesario -->
    </div>
    <Footer />
  </div>
</template>
  
<script>
import BarraMenu from '../components/BarraMenu.vue';
import Footer from '../components/Footer.vue';
import Producto from '../components/Producto.vue';

export default {
  components: {
    BarraMenu,
    Producto,
    Footer
  },
  methods: {
    agregarProductoAlCarrito(nombre, precio) {
      // Implementa la lógica para agregar el producto al carrito aquí
      console.log(`Agregado al carrito: ${nombre} - Precio: $${precio}`);
    },
  },
}
</script>
  
  
<style scoped>
.ProductosCont {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* Muestra 4 columnas por fila */
  gap: 20px;
  /* Espaciado entre las tarjetas */
  /* Otros estilos de la galería */
}
</style>
  