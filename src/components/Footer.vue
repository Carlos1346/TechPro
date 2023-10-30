<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="../assets/Logo.png" alt="Logo de TechPro" />
        </div>
        <div class="footer-links">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Acerca de nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <a href="https://www.facebook.com/?locale=es_LA" class="social-icon">Facebook</a>
          <a href="https://twitter.com/?lang=es" class="social-icon">Twitter</a>
          <a href="https://www.instagram.com/" class="social-icon">Instagram</a>
        </div>
      </div>
      <div class="footer-copyright">
        &copy; 2023 TechPro - Todos los derechos reservados
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    // Componente de pie de página
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    margin-top: 50px;
    float: left;
    width: 100%;
    
  }
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer-logo {
    flex: 1;
  }
  
  .footer-logo img {
    width: 250px;
    height: 75px;
  }
  
  .footer-links {
    flex: 2;
  }
  
  .footer-links ul {
    margin-left: 150px;
    list-style: none;
    padding: 0;
    font-size: 15px;
    
    
  }
  
  .footer-links li {
    margin-bottom: 10px;
    
  }
  
  .footer-links a {
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    margin: 30px;
  }
  
  .footer-social {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }
  
  .social-icon {
    text-decoration: none;
    color: #fff;
  }
  
  .footer-copyright {
    text-align: center;
    margin-top: 20px;
  }
  </style>