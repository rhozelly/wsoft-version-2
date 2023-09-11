

<template>
    <div class="overview-banner" :style="{background: cat === 'landing page' ? 'white' :  '#F6F8FF'}">
        <div class="overview-banner__wrapper container">
            <div class="overview-banner-image__wrapper">
                <img :src=imgOverview alt="overview">
            </div>
            <div class="overview-banner-content__wrapper" v-if="cat !== 'landing page'">
                <span class="overview-banner-content">{{ content }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['content', 'imgOverview', 'cat'],
}
</script>


<style scoped>
.overview-banner {
    background: #F6F8FF;
    padding: 86px 0;
}
.overview-banner__wrapper {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
}
.overview-banner-content__wrapper{
    text-align: center;
    margin: 0 auto;
    padding-top: 23px;
}
.overview-banner-content {
    color: #6E6E6E;
    text-align: center;
    font-family: Plus Jakarta Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 170.5%;
}
</style>