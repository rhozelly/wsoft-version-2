<script setup lang="ts">
const cores = [
  {
    img: 'images/1.png',
    title: 'Innovation',
    content: 'We embrace creativity and innovation in everything we do, and constantly seek new and better ways to solve problems and improve progress.',
  },
  {
    img: 'images/2.png',
    title: 'Collaboration',
    content: 'We value teamwork and collaboration, and believe that working together with educators, students, and partners is the key to achieving success.',
  },
  {
    img: 'images/3.png',
    title: 'Integrity',
    content: 'We operate with integrity and honesty, and maintain the highest ethical standards in all our interactions.',
  },
  {
    img: 'images/4.png',
    title: 'Customer Focus',
    content: 'We are dedicated to understanding and meeting the needs of our customers, and providing them with exceptional service and support.',
  },
  {
    img: 'images/5.png',
    title: 'Quality',
    content: `We are committed to delivering high-quality solutions and services that exceed our customers' expectations, and to continuously improving our products to better serve their needs.`,
  },

]
</script>
<template>
  <main id="content" class="primary-content about">
    <div class="about__banner container">
      <div class="about__banner-content">
        <h1 data-aos="slide-down" data-aos-easing="ease-in-out" data-aos-delay="50">OUR COMPANY IS AN IT FIRM THAT
          SPECIALIZES IN CREATING SOLUTIONS AND PASSIONATE ABOUT
          <span class="highlight"> PROVIDING EXCEPTIONAL TECHNOLOGY SOLUTIONS</span> TO OUR CLIENTS.
        </h1>
        <p class="about__text" data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="60">We leverage our deep
          understanding of technology and pedagogy to develop innovative tools and platforms that empower users and
          learners to connect, collaborate, and learn in new and meaningful ways.</p>
      </div>
      <div class="about__banner-image">
        <img src="../assets/images/about-us-banner-image.jpg" alt="company">
      </div>

    </div>

    <div class="container about__banner-two">
      <div class="about__banner-two-content" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-mirror="true"
        data-aos-once="false" data-aos-delay="60">At our core, we value collaboration, creativity, and customer
        satisfaction.
      </div>
      <div class="about__banner-two-content" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="80">We
        believe that by working closely with our clients and understanding their
        unique needs, we can create tailored solutions that are both effective and efficient.</div>
      <div class="about__banner-two-content" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="100">Our
        team of experts is skilled in a wide range of technologies and platforms,
        allowing us to provide comprehensive solutions that meet the diverse needs of our clients.</div>
    </div>

    <div class="container value">
      <div class="value__wrapper">
        <h2 data-aos="fade-down" data-aos-easing="ease-in-out">Our Core Value</h2>
        <div class="value__box-wrapper">
          <div class="value__box" v-for="(core, index) in cores" data-aos="fade-down" data-aos-easing="ease-in-out"
            data-aos-delay={{index*100}}>
            <img v-bind:src="`${core.img}`" width="45" alt="">
            <h3>{{ core.title }}</h3>
            <span>{{ core.content }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container mission">
      <div class="mission__wrapper">
        <div class="mission__image-wrapper">
          <img src="../assets/images/mission-image.jpg" alt="">
        </div>
        <div class="mission__content-wrapper">
          <div class="mission__content-box">
            <h2 data-aos="fade-down">Mission</h2>
            <div data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="80"><span>We are committed to providing
                educators and learners with the tools they need to succeed, and to
                constantly pushing the boundaries of what is possible through technology.</span></div>
          </div>
          <div class="mission__content-box">
            <h2 data-aos="fade-down">Vision</h2>
            <div data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="80"><span>Our vision is to be a global
                leader in providing cutting-edge technology solutions that transform the
                way businesses operate. We will achieve this by investing in the latest technologies, nurturing a culture
                of
              innovation, and continuously delivering exceptional value to our clients.</span></div>
        </div>
      </div>
    </div>
  </div>
</main></template>