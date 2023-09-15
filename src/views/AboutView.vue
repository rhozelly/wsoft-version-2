<script setup lang="ts">
</script>
<template>
  <main id="content" class="primary-content about">
    <div class="about__banner container">
      <div class="about__banner-content">
        <h1 data-aos="slide-down" data-aos-easing="ease-in-out" data-aos-delay="50">OUR COMPANY IS AN IT FIRM THAT
          SPECIALIZES IN CREATING SOLUTIONS AND PASSIONATE ABOUT
          <span class="highlight"> PROVIDING EXCEPTIONAL TECHNOLOGY SOLUTIONS</span> TO OUR CLIENTS.
        </h1>
        <p class="about__text" data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="60">
          {{ $t('about.page-banner-description') }}
        </p>
      </div>
      <div class="about__banner-image">
        <img src="../assets/images/about-us-banner-image.jpg" alt="company">
      </div>

    </div>

    <div class="container about__banner-two">
      <div class="about__banner-two-content" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-mirror="true"
        data-aos-once="false" data-aos-delay="60">
        {{ $t('about.page-bubble-one') }}
      </div>
      <div class="about__banner-two-content" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="80">
        {{ $t('about.page-bubble-two') }}
      </div>
      <div class="about__banner-two-content" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="100">
        {{ $t('about.page-bubble-three') }}
      </div>
    </div>

    <div class="container value">
      <div class="value__wrapper">
        <h2 data-aos="fade-down" data-aos-easing="ease-in-out">{{ $t('core') }}</h2>
        <div class="value__box-wrapper">
          <div class="value__box" v-for="(item, key, index) in 5" :key="item" data-aos="fade-down"
            data-aos-easing="ease-in-out" data-aos-delay={{index*100}}>
            <img v-bind:src="$t('cores.' + key + '.img')" width="45" alt="">
            <h3>{{ $t('cores.' + key + '.title') }}</h3>
            <span>{{ $t('cores.' + key + '.content') }}</span>
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
            <h2 data-aos="fade-down">{{ $t('mission') }}</h2>
            <div data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="80">
              <span>
                {{ $t('mission-description') }}
              </span>
            </div>
          </div>
          <div class="mission__content-box">
            <h2 data-aos="fade-down">
              {{ $t('vision') }}
            </h2>
            <div data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="80">
              <span>
                {{ $t('vision-description') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>