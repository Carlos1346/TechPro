<template>
    <div class="BarraMenu">
      <div class="logo">
        <img src="../assets/Logo.png" alt="TechPro" />
      </div>
      <p>Busqueda</p>
      <div class="search-bar">        
        <input type="text" placeholder="Buscar productos..." />
      </div>      
      <div>
        <ul id="Lista">            
            <li><a href="">Contactanos</a></li>
            <li><a href="">Carrito de compras</a></li>
            <li><a href="">Iniciar sesion</a></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BarraMenu',
  }
  </script>
  
  <style scoped>
  #Lista, a{
    text-decoration: none;
    list-style: none;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;  
    color: #fff; 
    margin-right: 25px;

  }
  p{
    text-decoration: none;
    list-style: none;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    font-weight: 600;  
    color: #fff; 
    margin-right: 0px;

  }
  
  .BarraMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 20px;    
    width: 100%;
    font-size: 18px;
    margin-bottom: 20px;
    
  }
  
  .logo img {
    width: 150px;
    height: 40px;
  }
  
  .search-bar input {
    width: 500px;
    padding: 10px;
    border-radius: 10px;
  }
  
  .login-icon {
    font-size: 20px;
    cursor: pointer;
  }
  </style>
  