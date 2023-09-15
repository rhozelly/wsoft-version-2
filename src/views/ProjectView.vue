<script>
import BannerProject from '@/components/BannerProject.vue';
import BannerDisplay from '@/components/BannerDisplay.vue';
import BannerDescription from '@/components/BannerDescription.vue';
import BannerOverview from '@/components/BannerOverview.vue';
import { PROJECTS } from '@/contants/projectContants.tsx'

const categories = [
  { id: '0', title: 'all', img: 'src/assets/images/all.svg', isActive: true },
  { id: '1', title: 'software', img: 'src/assets/images/soft.svg', isActive: false },
  { id: '2', title: 'landing page', img: 'src/assets/images/landing.svg', isActive: false },
  { id: '3', title: 'content', img: 'src/assets/images/content.svg', isActive: false },
]
let selectedData = '';
export default {
  components: {
    BannerProject,
    BannerDisplay,
    BannerDescription,
    BannerOverview,
  },
  data() {
    return {
      titleData: 'Projects',
      subheadingData: 'Innovating for Impact',
      imageData: 'project-banner-image.png',
      categories,
      projects: PROJECTS,
      filterProjects: [],
      selectedData,
    };
  },
  methods: {
    selectActive(clickedItem) {
      categories.forEach(item => item.isActive = false);
      clickedItem.isActive = true;
      this.filterProjects = [];
      this.projects.forEach(el =>{
        if(clickedItem.title === el.cat){
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
      <BannerProject :title=titleData :subtitle=subheadingData :imageurl=imageData></BannerProject>
    </div>
    <div class="project-overview">
      <div class="container">
        <div class="categories">
          <div class="categories__title" data-aos="slide-down" data-aos-easing="ease-in-out" data-aos-delay="50">
            Explore Our <span class="highlight-text">Projects</span>
          </div>
          <div class="categories__selections" data-aos="slide-down" data-aos-easing="ease-in-out" data-aos-delay="50">
            <div class="categories__button" v-for="item in categories" :key="item.id" @click="selectActive(item)"
              :class="{ 'active-category': item.isActive }">
              <img :src=item.img alt="icons">
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
            :style="{ backgroundImage: 'url(/src/assets/screenshots/' + item.project_image + ')' }">
          </div>
        </div>
        <div class="projects__boxes" v-else>
          <div v-for="item in projects" :key="item.id" class="projects__box" @click="selectedProject(item)"
            :style="{ backgroundImage: 'url(/src/assets/screenshots/' + item.project_image + ')' }">
          </div>
        </div>
      </div>

      <!-- End Conditional -->
    </div>
  </main>
</template>
