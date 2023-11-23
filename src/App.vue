<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { reactive } from 'vue'
import LanguageSelector from './components/LanguageSelection.vue';
const mobile = reactive({
  isActive: 'close'
})

const location = useRoute();
const router = useRouter();

const navs = [
  { active: false, to: '/', label: 'Home', key: 1 },
  { active: false, to: '/about', label: 'About', key: 2 },
  { active: false, to: '/projects', label: 'Projects', key: 3 },
  { active: false, to: '/contact', label: 'Contact Us', key: 4 }
]

//console.log(window.scrollY);

// console.log(router?.currentRoute.params);

// navs.forEach(el => {
//   if (el.to == current.path.toString()) {
//     el.active = true;
//   }
// });
function openMobileMenu() {
  mobile.isActive = 'active'
}
function closeMobileMenu(x: any) {
  navs.forEach(item => item.active = false);
  navs[x].active = true;
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
            <button class="header__navigation-menu-toggle-btn" @click="closeMobileMenu"
              v-if="mobile.isActive == 'active'">
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
            <li class="header__navigation-menu-list-item" v-for="(nav, index) of navs" :key="index">
              <RouterLink @click="closeMobileMenu(index)" :to=nav.to>
                <span class="nav-link-text" :class="nav.active ? 'nav-active' : ''">
                  {{ nav.label }}
                </span>
              </RouterLink>
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
                <h5>COMPANY ADDRESS</h5>
                <span>경기 수원시 권선구 세권로 219 3층</span>
              </div>
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

          <div class="column">
            <div class="row">
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
                      <a href="https://www.facebook.com/wsoft.kr"><i class="fab fa-facebook"></i></a>
                    </li>
                    <li class="footer__social-link-item">
                      <a href="https://www.instagram.com/wsoft.space"><i class="fab fa-instagram"></i></a>
                    </li>
                    <!-- <li class="footer__social-link-item">
                  <a href="#"><i class="fab fa-tiktok"></i></a>
                </li> -->
                  </ul>
                </div>
                <!-- .footer__widget-->


              </div><!-- .footer__widget -->
            </div>
            <div class="footer__company-detail-item">
              <h5>Company</h5>
              <span>(주) 유에듀케이션 | 사업자등록번호 : 124-87-33297</span>
            </div><!-- .footer__company-detail-item -->

          </div>


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