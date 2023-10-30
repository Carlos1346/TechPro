<template>
    <div class="cuerpo">
      <BarraMenu />
      <div>
        <h1>Detalles del Producto</h1>
        <product-images :images="productImages" />
      </div>
      <div>
        <!-- Otras partes de tu vista -->
  
        <DetallesProducto
          :titulo="tituloDelProducto"
          :descripcion="descripcionDelProducto"
          :precio="precioDelProducto"
          @agregar-al-carrito="agregarProductoAlCarrito"
          @comprar-ahora="comprarProductoAhora"
        />
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import BarraMenu from '../components/BarraMenu.vue';
  import Footer from '../components/Footer.vue';
  import ProductImages from '../components/ProductImages.vue';
  import DetallesProducto from '../components/DetallesProducto.vue'; // Importa el componente correcto
  
  export default {
    components: {
      BarraMenu,
      ProductImages,
      Footer,
      DetallesProducto,
    },
    methods: {
      agregarProductoAlCarrito(nombre, precio) {
        // Implementa la lógica para agregar el producto al carrito aquí
        console.log(`Agregado al carrito: ${nombre} - Precio: $${precio}`);
      },
    },
    data() {
      return {
        productImages: [
          'https://www.zotac.com/es/system/files/styles/w1024/private/product_gallery/graphics_cards/zt-d40810d-10p-image02_0.jpg?itok=a0MB6Ra4',
          'https://m.media-amazon.com/images/I/813HqB8pmeL.jpg',
          'https://static.tweaktown.com/content/1/0/10277_628_zotac-gaming-geforce-rtx-4080-amp-extreme-airo-review_full.jpg',
        ],
        tituloDelProducto: 'DETALLES DEL PRODUCTO',
        descripcionDelProducto: "Aprovechando un nuevo diseño inspirado en la aerodinámica, la ZOTAC GAMING GeForce RTX 4080 16GB Trinity OC utiliza la GPU para juegos más avanzada del mundo impulsada por la arquitectura NVIDIA Ada Lovelace. Esta tarjeta gráfica ofrece un rendimiento excepcional y es ideal para jugadores y creadores de contenido que buscan la máxima potencia en sus sistemas. Sus características incluyen:\n- 16 GB de memoria GDDR6 para un rendimiento fluido en aplicaciones y juegos.\n- Tecnología de trazado de rayos para gráficos realistas.\n- Múltiples puertos de pantalla para una conectividad versátil.\n- Enfriamiento avanzado para un funcionamiento silencioso y eficiente.\n- Compatibilidad con las últimas tecnologías de juegos.\nYa sea que estés interesado en juegos de alta gama, edición de video o diseño 3D, la ZOTAC GAMING GeForce RTX 4080 16GB Trinity OC tiene todo lo que necesitas para una experiencia excepcional. ¡Lleva tu sistema al siguiente nivel con esta potente tarjeta gráfica!",
        precioDelProducto: 25817.00,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos específicos si es necesario */
  </style>
  
