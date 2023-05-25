<script setup lang="ts">
import router from '@/router';

// import TheWelcome from '../components/TheWelcome.vue'
function navigateTo(data: any) {
  router.push({ path: `${data}`, replace: true });
  window.scrollTo(0, 0);

}
const services = [
  {
    img: 'images/wd-icon.png',
    title: '웹사이트 개발',
    content: 'Expert web development services for businesses of all sizes',
  },
  {
    img: 'images/wad-icon.png',
    title: '웹 애플리케이션 개발',
    content: 'Innovative web app solutions to power your business',
  },
  {
    img: 'images/ui-icon.png',
    title: 'UI 디자인',
    content: 'Crafting intuitive, user-friendly interfaces for a better digital world',
  },
  {
    img: '/images/ai-icon.png',
    title: '인공지능 활용 서비스',
    content: 'Reduce customer service costs, improve response times, and increase customer satisfaction',
  },
  {
    img: 'images/m-icon.png',
    title: '유지보수',
    content: 'We make website maintenance easy and hassle-free',
  },
]

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

</script>

<template>
  <main id="content" class="primary-content home">
    <div class="banner">
      <div class="banner__wrapper">
        <h1 class="banner__heading">디지털 세상. 귀사의 미래에 힘이 되겠습니다.<span class="highlight"></span></h1>
        <h2 class="banner__subheading">Your partner in digital growth</h2>
        <p class="banner__text">우리의 미션은 귀사의 비즈니스가 디지털 세계에서 성장하기 위해 필요한 도구와 전문성을 제공하는 것입니다.</p>
        <RouterLink to="/contact" class="banner__btn default-btn btn-center">Inquire Now</RouterLink>
        <div class="banner__img">
          <img src="../assets/images/banner-bg-image.jpg" alt="">
        </div>
      </div><!-- .banner__wrapper-->
    </div><!-- .banner -->
    <div class="service">
      <h2>저의가 제공하는 서비스는</h2>
      <div class="services__wrapper">
        <div class="services__box" v-for="service in services">
          <img class="services__img" v-bind:src="`${service.img}`" width="60">
          <span class="services__title">{{ service.title }}</span>
          <span class="services__content">{{ service.content }}</span>
        </div>
      </div>
    </div>
    <div class="additional">
      <div class="additional__title-wrapper">
        <span>services we offer</span>
        <h2>Additionally, We offers</h2>
      </div>
      <div  class="additional__wrapper">
        <div class="additional__box" v-for="service in additionalServices">
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
          <span>About Us</span>
          <h2 class="about__heading">WSOFT는 최첨단 IT 기술을 바탕으로, 비즈니스의 운영 최적화와 목표 달성을 위한 혁신적인 솔루션을 제공하기 위해 노력하는 회사입니다.우리는
            비즈니스의 성장을 위해 최선을 다하며, 함께 성공을 이루어 나갈 수 있도록 끊임없이 노력합니다</h2>
          <h2 class="about__heading">WSOFT IS A CUTTING-EDGE IT COMPANY DEDICATED TO DELIVERING INNOVATIVE SOLUTIONS TO
            HELP BUSINESSES OPTIMIZE THEIR OPERATIONS AND ACHIEVE THEIR GOALS.</h2>
          <p class="about__text">With a team of highly skilled and experienced professionals, provides a comprehensive
            suite of services, including software development, cloud computing, cybersecurity, and digital marketing. We
            leverage the latest technologies and best practices to deliver customized solutions that meet the unique needs
            of our clients.</p>
          <button class="inquire-button margin-not-center default-btn" v-on:click="navigateTo('about')">Explore
            Now</button>
        </div>
      </div>
    </div>
    <div class="objectives">
      <div class="objectives__wrapper">
        <h2>We help business to achieve their <br> objectives</h2>
        <span>We are committed to providing excellent customer service and building <br> long-term partnerships with our
          clients.</span>
        <div class="objective__button-wrapper">
          <div class="objective__image"></div>
        <button class="objective__btn" v-on:click="navigateTo('contact')">Inquire Now</button>
      </div>
    </div>
  </div>
</main></template>