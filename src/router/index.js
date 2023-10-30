import { createRouter, createWebHistory } from 'vue-router';
import Principal from '../views/Principal.vue';
import Item from '../views/Item.vue'; // Importa tu otra vista aquí

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Principal',
      name: 'Principal',
      component: Principal,
    },
    {
      path: '/Item',
      name: 'Item',
      component: Item, // Asigna el componente de la otra vista
    },
    // Puedes seguir agregando más rutas según sea necesario
  ],
});

export default router;