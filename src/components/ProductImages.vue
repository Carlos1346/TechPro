<template>
  <div class="product-images">
    <div class="image-container">
      <img :src="currentImage" alt="Producto" />
    </div>
    <div class="thumbnail-container">
      <div v-for="(image, index) in images" :key="index" class="thumbnail" @click="setCurrentImage(index)">
        <img id="Imagenes" :src="image" alt="Producto Thumbnail" />
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    images: Array, // Un arreglo de URLs de imágenes de productos
  },
  data() {
    return {
      currentImage: this.images[0], // Inicialmente, muestra la primera imagen
    };
  },
  methods: {
    setCurrentImage(index) {
      this.currentImage = this.images[index];
    },
  },
};
</script>
  
<style scoped>
.product-images {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 40%;
  float: left;
}

.image-container {
  margin-bottom: 10px;

  width: 400px;
}

.thumbnail-container {
  display: flex;
  max-height: 600px;
  width: 100px;


}

.thumbnail {
  margin-right: 10px;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
}

.image-container img {
  max-height: 600px;
  width: 600px;
  border-radius: 10px;
  /* Ajusta la altura máxima según tus necesidades */
}

#Imagenes {
  max-height: 80px;
  width: 80px;
  
}

/* Puedes agregar estilos adicionales según tus necesidades */
</style>
  