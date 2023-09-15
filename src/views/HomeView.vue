<script setup lang="ts">
import router from '@/router';
import AOS from 'aos';
import { PROJECTS } from '@/contants/projectContants.tsx';

import { useI18n } from 'vue-i18n';

function navigateTo(data: any) {
  router.push({ path: `${data}`, replace: true });
  window.scrollTo(0, 0);
}
let projects = PROJECTS.slice(0, 6);

const additionalServices = [
  {
    title: '디자인',
    order: 1,
    content: `템플릿 디자인사용 <br/>
              발주자의 디자인사용 <br/>
              디자인 시안제작`,
  },
  {
    title: '관리자기능',
    order: 2,
    content: `기본조회, 편집기능 <br/>
              재고관리<br/>
              배송관리<br/
              일간/주간 통계<br/>
              정산`,
  },
  {
    title: '편집 및 업로드기능',
    order: 3,
    content: `
            이지웍 에디터 <br/>
            이미지, 파일 업로드기능 <br/>
            유튜브영상 임베드기능 <br/>
            음성, 영상 업로드 재생 <br/>
            태그자동완성(자주입력하는 순으로 해시태그) <br/>
            그래프표시
    `,
  },
  {
    title: '커뮤니티기능',
    order: 4,
    content: `
            견적산출 <br/>
            구인/구직 ( 양방향 의뢰요청) <br/>
            단계별 의뢰, 설문 <br/>
            질문, 답변기능 (등급, 포인트 없는경우) <br/>
            판매자,업체 대시보드 (상품등록, 구매확인) <br/>
            그룹웨어 (작업자설정, 진행상태변경, 태스크등록) <br/>
            초대기능(초대시 리워드지급기능)     
    `,
  },
  {
    title: '고급기능',
    order: 5,
    content: `
            캘린더 UI <br/>
            지도위에 팝업(요약정보 지도위에 팝업) <br/>
            지도위의 핀과 결과목록 연동 <br/>
            리캡차( 검색봇, 매크로등을 걸러내는 인증기능)`,
  },
  {
    title: '서비스 플랫폼',
    order: 6,
    content: '카페24, 아마존등 서비스 플랫폼에 세팅',
  },
  {
    title: '회원가입/로그인',
    order: 7,
    content: `이메일가입/로그인 <br/>
              휴대폰인증 <br/>
              실명인증 <br/>
              SNS웹로그인 <br/>
              SNS모바일로그인 <br/>
              비로그인 구매 <br/>
              아이디, 비밀번호 찾기`,
  },
  {
    title: '아이템목록, 상세',
    order: 8,
    content: `아이템목록, 상세 <br/>
              찜하기 <br/>
              리뷰,별점`,
  },
  {
    title: '알림관련기능',
    order: 9,
    content: `개별푸시알림 <br/>
              국내 SMS알림 <br/>
              국제 SMS알림  <br/>
              이메일알림  <br/>
              카카오톡알림 <br/>
              가상번호(수신자전화번호 숨기기, 050서비스) <br/>
              내 알림 내역 (친구초대, 내글좋아요, 댓글등알림)`,
  },
  {
    title: '소셜기능   ',
    order: 10,
    content: `1:1문의 <br>
              채팅(기능이나 복잡도에 따라 차이남) <br>
              팔로잉 <br>
              웹공유기능 (페북, 트위터등 공유) <br>
              앱공유기능 (앱에서 페북, 카톡공유. 네이티브 SDK연동 <br>
              권한 및 등급관리`
  },
]

window.addEventListener('load', function () { AOS.init(); });

</script>

<template>
  <main id="content" class="primary-content home">
    <div class="banner">
      <div class="banner__wrapper">
        <h1 class="banner__heading" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="50">{{
          $t('banner-title') }}<span class="highlight"></span></h1>
        <h2 class="banner__subheading" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="80"> {{
          $t('banner-sub-title') }}</h2>
        <p class="banner__text" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="110">{{
          $t('banner-description') }}</p>
        <RouterLink to="/contact" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="1140"
          class="banner__btn default-btn btn-center"> {{ $t('inquire-now') }}</RouterLink>
        <div class="banner__img">
          <img src="../assets/images/banner-bg-image.jpg" alt="banner">
        </div>
      </div><!-- .banner__wrapper-->
    </div><!-- .banner -->
    <div class="service">
      <h2 data-aos="slide-down">{{ $t('service-title') }}</h2>
      <div class="services__wrapper">
        <div class="services__box" v-for="(item, key, index) in 5" :key="item" data-aos="fade-in"
          data-aos-easing="ease-in-out" data-aos-once="false">
          <img class="services__img" v-bind:src="$t('services.' + key + '.img')" width="60">
          <span class="services__title">{{ $t('services.' + key + '.title') }}</span>
          <span class="services__content">{{ $t('services.' + key + '.content') }}</span>
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
          <!-- <h2 class="about__heading" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="false"
            data-aos-delay="90">{{ $t('about-description-two') }}</h2> -->
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
          <button class="project__explore" v-on:click="navigateTo('projects')">
            <span> {{ $t('explore') }}</span>
            <img src="/src/assets/images/explore.svg" alt="explore">
          </button>
        </div>
        <div class="project__content">
          <div class="projects__boxes" data-aos-easing="ease-in-out" data-aos-delay="50">
            <div v-for="item in projects" :key="item.id" class="projects__box" v-on:click="navigateTo('projects')"
              :style="{ backgroundImage: 'url(/src/assets/screenshots/' + item.project_image + ')' }">
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