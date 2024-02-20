<script setup lang="ts">
import router from '@/router';
import AOS from 'aos';
import { PROJECTS } from '@/contants/projectContants';
import { SERVICES_ICON } from '@/contants/iconServicesConstants';
import video from '@/assets/video/video-banner.mp4';

function navigateTo(data: any) {
  router.push({ path: `${data}`, replace: true });
  window.scrollTo(0, 0);
}
let projects = PROJECTS.slice(0, 6);
let services_icon = SERVICES_ICON.slice(0, 6);

const additionalServices = [
  {
    title: '디자인',
    order: 1,
    content: `템플릿 디자인사용\n발주자의 디자인사용\n디자인 시안제작`,
  },
  {
    title: '관리자기능',
    order: 2,
    content: `기본조회, 편집기능\n재고관리\n배송관리\n일간/주간 통계\n정산`,
  },
  {
    title: '편집 및 업로드기능',
    order: 3,
    content: `
            이지웍 에디터 \n이미지, 파일 업로드기능 \n유튜브영상 임베드기능 \n음성, 영상 업로드 재생 \n태그자동완성\n(자주입력하는 순으로 해시태그) \n그래프표시
    `,
  },
  {
    title: '커뮤니티기능',
    order: 4,
    content: `
            견적산출 \n구인/구직\n( 양방향 의뢰요청) \n단계별 의뢰, 설문 \n질문, 답변기능\n(등급, 포인트 없는경우) \n판매자,업체 대시보드\n(상품등록, 구매확인) \n그룹웨어\n(작업자설정, 진행상태변경, 태스크등록) \n초대기능\n(초대시 리워드지급기능)     
    `,
  },
  {
    title: '고급기능',
    order: 5,
    content: `
            캘린더 UI \n지도위에 팝업\n(요약정보 지도위에 팝업) \n지도위의 핀과 결과목록 연동 \n리캡차\n(검색봇, 매크로등을 걸러내는 인증기능)`,
  },
  {
    title: '서비스 플랫폼',
    order: 6,
    content: '카페24, 아마존등 서비스 플랫폼에 세팅',
  },
  {
    title: '회원가입/로그인',
    order: 7,
    content: `이메일가입/로그인 \n휴대폰인증 \n실명인증 \nSNS웹로그인 \nSNS모바일로그인 \n비로그인 구매 \n아이디, 비밀번호 찾기`,
  },
  {
    title: '아이템목록, 상세',
    order: 8,
    content: `아이템목록, 상세 \n찜하기 \n리뷰,별점`,
  },
  {
    title: '알림관련기능',
    order: 9,
    content: `개별푸시알림 \n국내 SMS알림 \n국제 SMS알림\n이메일알림\n카카오톡알림 \n가상번호\n(수신자전화번호 숨기기, 050서비스) \n내 알림 내역\n(친구초대, 내글좋아요, 댓글등알림)`,
  },
  {
    title: '소셜기능   ',
    order: 10,
    content: `1:1문의\n채팅\n(기능이나 복잡도에 따라 차이남)\n팔로잉\n웹공유기능 \n(페북, 트위터등 공유)\n앱공유기능\n(앱에서 페북,\n카톡공유.\n네이티브 SDK연동)\n권한 및 등급관리`
  },
]
let src = video;
let type = 'video/mp4';
let width = '100%';
window.addEventListener('load', function () { AOS.init(); });

</script>

<template>
  <main id="content" class="primary-content home">
    <div class="banner">
      <div class="banner__wrapper">
        <div class="video-background">
          <video autoplay muted loop id="video-bg">
            <source :src="src" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="content">
            <!-- Your other content goes here -->
          </div>
        </div>
        <!-- <h1 class="banner__heading" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="50">{{
          $t('banner-title') }}<span class="highlight"></span></h1>
        <h2 class="banner__subheading" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="80"> {{
          $t('banner-sub-title') }}</h2>
        <p class="banner__text" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="110">{{
          $t('banner-description') }}</p>
        <RouterLink to="/contact" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="1140"
          class="banner__btn default-btn btn-center"> {{ $t('inquire-now') }}</RouterLink>
        <div class="banner__img">
          <img src="../assets/images/banner-bg-image.jpg" alt="banner">
        </div> -->
      </div>
    </div><!-- .banner -->
    <div class="service">
      <div class="service-container">
        <div class="service-headings">
          <span>{{ $t('service-title') }}</span>
          <p>{{ $t('service-description') }}</p>
        </div>
        <div class="services__wrapper">
          <div class="services__box" v-for="(item, key, index) in 5" :key="item" data-aos="fade-in"
            data-aos-easing="ease-in-out" data-aos-once="false">
            <img class="services__img" v-bind:src="services_icon[key].img" width="90"
              v-alt="$t('services.' + key + '.title')">
            <span class="services__title">{{ $t('services.' + key + '.title') }}</span>
            <span class="services__content">{{ $t('services.' + key + '.content') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="additional">
      <div class="additional__title-wrapper">
        <span data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="false">{{ $t('service-sub-title')
        }}</span>
        <h2 data-aos="fade-down" data-aos-delay="70" data-aos-easing="ease-in-out" data-aos-once="false">
          {{ $t('additionally') }}
        </h2>
      </div>
      <div class="additional__wrapper">
        <div class="additional__box" v-for="service in additionalServices" data-aos="fade-down"
          data-aos-easing="ease-in-out" data-aos-once="false">
          <span class="additional__order">{{ service.order }}</span>
          <div class="additional__box-col">
            <span class="additional__title">{{ service.title }}</span>
            <span class="additional__content" v-html="service.content"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="about-us">
      <div class="about-us__wrapper">
        <div class="about-us__image"><img src="../assets/images/about-us-bg-image.jpg" alt="about-us"></div>
        <div class="about-us__content">
          <span data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="50">
            {{ $t('about-title') }}
          </span>
          <h2 class="about__heading" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="false"
            data-aos-delay="70">
            {{ $t('about-description') }}
          </h2>
          <p class="about__text" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="false"
            data-aos-delay="120">
            {{ $t('about-sub-description') }}
          </p>
          <button class="inquire-button margin-not-center default-btn" v-on:click="navigateTo('about')" data-aos="zoom-in"
            data-aos-easing="ease-in-out" data-aos-once="false" data-aos-delay="150">
            {{ $t('view-more') }}
          </button>
        </div>
      </div>
    </div>
    <div class="projects container">
      <div class="projects__wrapper">
        <div class="project__title">
          <h2 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="50"> {{ $t('project-title') }}</h2>
          <button data-aos="fade-down" data-aos-easing="ease-in-out" class="project__explore"
            v-on:click="navigateTo('projects')">
            <span> {{ $t('explore') }}</span>
            <img src="/src/assets/images/explore.svg" alt="explore">
          </button>
        </div>
        <div class="project__content">
          <div class="projects__boxes">
            <div data-aos="zoom-out-down" data-aos-easing="ease-in-out" data-aos-delay="50" v-for="item in projects"
              :key="item.id" class="projects__box" v-on:click="navigateTo('projects')"
              :style="{ 'background-image': 'url(' + item.project_image + ')' }">
              <!-- + item.project_image +  -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="objectives">
      <div class="objectives__wrapper">
        <h2 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="50">
          {{ $t('cta-title') }}
        </h2>
        <span data-aos="fade" data-aos-delay="70">
          {{ $t('cta-description') }}
        </span>
        <div class="objective__button-wrapper" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="120">
          <div class="objective__image"></div>
          <button class="objective__btn" v-on:click="navigateTo('contact')"> {{ $t('inquire-now') }}</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.video-background {
  position: relative;
  width: 100%;
  height: 100vh;
  /* Adjust the height as needed */
  overflow: hidden;
}

#video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>