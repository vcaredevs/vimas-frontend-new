<template>
  <section class="header"  id="myHeader">
    <div class="head-start">
    
    </div>
   <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container">
          <a class="navbar-brand fs-3 fw-bold" href="./"><img src="../assets/images/logo.png" height="50"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
          <li class="nav-item">
  <router-link to="/" class="nav-link">Home</router-link>
</li>
        <li class="nav-item">
  <router-link to="/product" class="nav-link">Shop by Concern</router-link>
</li>
 <li class="nav-item">
  <router-link to="/faq" class="nav-link">FAQs</router-link>
</li>
 <li class="nav-item">
  <router-link to="/contact" class="nav-link">Contact Us</router-link>
</li>
              
              </ul>
           
              <p class="menu-icon"><a><i class="fas fa-search"></i></a></p>
           
              <p class="menu-icon"><router-link to="/cart" class="menu-icon">
  <i class="fas fa-shopping-cart"></i>
</router-link></p>
          </div>
      </div>
  </nav>
  </section>
</template>