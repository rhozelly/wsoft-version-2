<script>
import BannerProject from '@/components/BannerProject.vue';
import BannerDisplay from '@/components/BannerDisplay.vue';
import BannerDescription from '@/components/BannerDescription.vue';
import BannerOverview from '@/components/BannerOverview.vue';
import allSvg from  '@/assets/images/all.svg';
import softSvg from  '@/assets/images/soft.svg';
import landingSvg from  '@/assets/images/landing.svg';
import contentSvg from  '@/assets/images/content.svg';
import projectBannerImage from  '@/assets/images/project-banner-image.png';
import { PROJECTS } from '@/contants/projectContants.tsx'

// const categories = [
//   { id: '0', title: 'all', img: '@/assets/images/all.svg', isActive: true },
//   { id: '1', title: 'software', img: '@/assets/images/soft.svg', isActive: false },
//   { id: '2', title: 'landing page', img: '@/assets/images/landing.svg', isActive: false },
//   { id: '3', title: 'content', img: '@/assets/images/content.svg', isActive: false },
// ]
let selectedData = '';
export default {
  components: {
    BannerProject,
    BannerDisplay,
    BannerDescription,
    BannerOverview,
    allSvg,
    softSvg,
    landingSvg,
    contentSvg,
    projectBannerImage
  },
  data() {
    return {
      imageData: projectBannerImage,
      categories: [
        { id: '0', title: 'all', img: allSvg, isActive: true },
        { id: '1', title: 'software', img: softSvg, isActive: false },
        { id: '2', title: 'landing page', img: landingSvg, isActive: false },
        { id: '3', title: 'content', img: contentSvg, isActive: false },
      ],
      projects: PROJECTS,
      filterProjects: [],
      selectedData,
    };
  },
  methods: {
    selectActive(clickedItem) {
      this.categories.forEach(item => item.isActive = false);
      clickedItem.isActive = true;
      this.filterProjects = [];
      this.projects.forEach(el => {
        if (clickedItem.title === el.cat) {
          this.filterProjects.push(el)
        }
      })
      this.selectedData = ''
    },
    selectedProject(item) {
      this.selectedData = item;
    }
  }
}
</script>
<template>
  <main id="content" class="primary-content about">

    <div class="container">
      <BannerProject :imageurl=imageData></BannerProject>
    </div>
    <div class="project-overview">
      <div class="container">
        <div class="categories">
          <div class="categories__title" data-aos="slide-down" data-aos-easing="ease-in-out" data-aos-delay="50">
           {{ $t('explore-our-project') }} <span class="highlight-text"> {{ $t('explore-our-project-highlighted') }}</span>
          </div>
          <div class="categories__selections" data-aos="slide-down" data-aos-easing="ease-in-out" data-aos-delay="50">
            <div class="categories__button" v-for="item in categories" :key="item.id" @click="selectActive(item)"
              :class="{ 'active-category': item.isActive }">
              <img v-bind:src=item.img alt="icons">
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Conditional -->
      <div class="project-details" v-if="!!this.selectedData">

        <div class="featured">
          <button class="featured__btn" @click="this.selectedData = ''">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <BannerDisplay :heading="this.selectedData.project_name" :subheading="this.selectedData.cat"
            :img="this.selectedData.project_image"></BannerDisplay>
        </div>

        <div class="description">
          <BannerDescription :imgDescption="this.selectedData.project_description_image"
            :content="this.selectedData.project_description_content" :cat="this.selectedData.cat"
            :subContent="this.selectedData.project_description_sub_content"></BannerDescription>
        </div>

        <div class="overview">
          <BannerOverview :imgOverview="this.selectedData.project_overview_image" :cat="this.selectedData.cat"
            :content="this.selectedData.project_overview_content"></BannerOverview>
        </div>

      </div>

      <div class="container projects" v-else>
        <div class="projects__boxes" v-if="filterProjects.length > 0">
          <div v-for="item in filterProjects" :key="item.id" class="projects__box" @click="selectedProject(item)"
            :style="{ backgroundImage: 'url(' + item.project_image + ')' }">
          </div>
        </div>
        <div class="projects__boxes" v-else>
          <div v-for="item in projects" :key="item.id" class="projects__box" @click="selectedProject(item)"
            :style="{ backgroundImage: 'url(' + item.project_image + ')' }">
          </div>
        </div>
      </div>

      <!-- End Conditional -->
    </div>
  </main>
</template>
