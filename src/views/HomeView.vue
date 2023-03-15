<script setup lang="ts">import router from '@/router';

// import TheWelcome from '../components/TheWelcome.vue'
function navigateTo(data: any){
    router.push({ path: `${data}`, replace: true })
}
const services = [
  {
    img: '/src/assets/images/wd-icon.png',
    title: 'Website Development',
    content: 'Expert web development services for businesses of all sizes',
  },
  {
    img: '/src/assets/images/wad-icon.png',
    title: 'WEB APPLICATION development',
    content: 'Innovative web app solutions to power your business',
  },
  {
    img: '/src/assets/images/ui-icon.png',
    title: 'UI DESIGN',
    content: 'Crafting intuitive, user-friendly interfaces for a better digital world',
  },
  {
    img: '/src/assets/images//ai-icon.png',
    title: 'AI Development',
    content: 'Reduce customer service costs, improve response times, and increase customer satisfaction',
  },
  {
    img: '/src/assets/images/m-icon.png',
    title: 'MAINTENANCE',
    content: 'We make website maintenance easy and hassle-free',
  },
]

</script>

<template>
  <main id="content" class="primary-content home">
    <div class="banner">
      <div class="banner__wrapper">
        <h1 class="banner__heading">Empowering your digital <span class="highlight">future.</span></h1>
        <h2 class="banner__subheading">Your partner in digital growth</h2>
        <p class="banner__text">Our mission is to empower businesses to thrive in a digital world by providing them with the tools and expertise they need to succeed.</p>
        <RouterLink to="/contact" class="banner__btn default-btn btn-center">Inquire Now</RouterLink>
        <div class="banner__img">
          <img src="../assets/images/banner-bg-image.jpg" alt="">
        </div>
      </div><!-- .banner__wrapper-->
    </div><!-- .banner -->
    <div class="service">
      <h2>Servives we Offer</h2>
      <div class="services__wrapper">
        <div class="services__box" v-for="service in services">
          <img  class="services__img" v-bind:src="`${service.img}`" width="60">
          <span class="services__title">{{service.title}}</span>
          <span class="services__content">{{service.content}}</span>
        </div>
      </div>
    </div>
    <div class="about-us">
      <div class="about-us__wrapper">
        <div class="about-us__image"><img src="../assets/images/about-us-bg-image.jpg" alt="about-us"></div>
        <div class="about-us__content">
          <span>About Us</span>
          <h2 class="about__heading">WSOFT  is a cutting-edge IT company dedicated to delivering innovative solutions to help businesses optimize their operations and achieve their goals.</h2>
          <p class="about__text">With a team of highly skilled and experienced professionals, provides a comprehensive suite of services, including software development, cloud computing, cybersecurity, and digital marketing. We leverage the latest technologies and best practices to deliver customized solutions that meet the unique needs of our clients.</p>
          <button class="inquire-button margin-not-center default-btn" v-on:click="navigateTo('about')">Explore Now</button>
        </div>
      </div>
    </div>
    <div class="objectives">
      <div class="objectives__wrapper">
        <h2>We help business to achieve their <br> objectives</h2>
        <span>We are committed to providing excellent customer service and building <br> long-term partnerships with our clients.</span>
        <div class="objective__button-wrapper">
          <div class="objective__image"></div>
          <button class="objective__btn default-btn btn-center" v-on:click="navigateTo('contact')">Inquire Now</button>
        </div>
      </div>
    </div>
  </main>
</template>