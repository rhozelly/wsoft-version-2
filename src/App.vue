<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive } from 'vue'

import LanguageSelector from './components/LanguageSelection.vue';
const mobile = reactive({
  isActive: 'close'
})
function openMobileMenu() {
  mobile.isActive = 'active'
}
function closeMobileMenu() {
  mobile.isActive = 'close';
  window.scrollTo(0, 0);
}
function scrollToTop() {
  window.scrollTo(0, 0);
}
</script>

<template>
  <header class="header">
    <div class="container container__flex align-center">
      <div class="header__logo">
        <a href="/">
          <img alt="WSFOFT" src="@/assets/images/wsoft-logo.png" />
        </a>
      </div><!-- .header__logo -->
      <nav class="header__navigation" :class="{ menuOpen: mobile.isActive == 'active' }">
        <div class="header__navigation-menu-toggle-wrapper">
          <div class="header__navigation-menu-toggle-inner">
            <div class="header__translate-mobile">
              <LanguageSelector></LanguageSelector>
            </div>
            <button class="header__navigation-menu-toggle-btn" @click="openMobileMenu" v-if="mobile.isActive == 'close'">
              <i class="fas fa-bars"></i>
            </button>
            <button class="header__navigation-menu-toggle-btn" @click="closeMobileMenu" v-if="mobile.isActive == 'active'">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="header__navigation-menu-container">
          <div class="header__logo-mobile">
            <a href="/">
              <img alt="WSFOFT" src="@/assets/images/wsoft-logo.png" />
            </a>
          </div><!-- .header__logo -->
          <ul class="header__navigation-menu-list">
            <li class="header__navigation-menu-list-item">
              <RouterLink @click="closeMobileMenu" to="/">Home</RouterLink>
            </li>
            <li class="header__navigation-menu-list-item">
              <RouterLink @click="closeMobileMenu" to="/about">About</RouterLink>
            </li>
            <li class="header__navigation-menu-list-item">
              <RouterLink @click="closeMobileMenu" to="/projects">Projects</RouterLink>
            </li>
            <li class="header__navigation-menu-list-item">
              <RouterLink @click="closeMobileMenu" to="/contact">Contact Us</RouterLink>
            </li>
            <li class="translate">
              <LanguageSelector></LanguageSelector>
            </li>
          </ul>
        </div>
      </nav><!-- .header__navigation -->
    </div>
  </header><!-- .header -->

  <RouterView />

  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__widgets">
        <div class="container container__flex">
          <div class="footer__widget footer__widget-1">
            <div class="footer__logo">
              <img src="./assets/images/wsoft-logo.png" alt="logo">
            </div><!-- .footer__logo -->
          </div><!-- .footer__widget -->
          <div class="footer__widget footer__widget-2">
            <div class="footer__company-details">
              <div class="footer__company-detail-item">
                <h5>Company Address</h5>
                <span>경기 수원시 권선구 세권로 219 3층</span>
              </div><!-- .footer__company-detail-item -->
              <div class="footer__company-detail-item">
                <h5>대표</h5>
                <span>정원석 (Matt Jung)</span>
              </div><!-- .footer__company-detail-item -->
              <div class="footer__company-detail-item">
                <h5>Email</h5>
                <span>uedu.dev@gmail.com</span>
              </div><!-- .footer__company-detail-item -->
            </div><!-- .footer__company-details -->
          </div><!-- .footer__widget -->
          <div class="footer__widget footer__widget-3">
            <div class="footer__links">
              <h4 class="footer__widget-title">Links</h4>
              <ul class="footer__menu-links">
                <li class="footer__menu-link-item">
                  <a href="#">
                    <RouterLink @click="scrollToTop" to="/">Home</RouterLink>
                  </a>
                </li>
                <li class="footer__menu-link-item">
                  <a href="#">
                    <RouterLink @click="scrollToTop" to="/about">Our Company</RouterLink>
                  </a>
                </li>
                <li class="footer__menu-link-item">
                  <a href="#">
                    <RouterLink @click="scrollToTop" to="/contact">Contact Us</RouterLink>
                  </a>
                </li>
              </ul>
            </div><!-- .footer__links -->
          </div><!-- .footer__widget -->
          <div class="footer__widget footer__widget-4">
            <div class="footer__social">
              <h4 class="footer__widget-title">Follow Us</h4>
              <ul class="footer__social-links">
                <li class="footer__social-link-item">
                  <a href="#"><i class="fab fa-facebook"></i></a>
                </li>
                <li class="footer__social-link-item">
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
                <li class="footer__social-link-item">
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                </li>
              </ul>
            </div><!-- .footer__widget-->
          </div><!-- .footer__widget -->
        </div><!-- .container -->
      </div><!-- .footer__widgets -->
      <div class="footer__bottom">
        <div class="container">
          <p class="footer__copyright">Copyright &copy; 2023. <a href="#">WSOFT</a>. All rights reserved.</p>
        </div><!-- .container -->
      </div><!-- .footer__bottom -->
    </div>
  </footer><!-- .footer -->
</template>