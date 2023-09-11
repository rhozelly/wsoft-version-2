

<template>
    <div class="description-banner container">
        <div class="description-banner__wrapper ">
            <div class="description-banner-image__wrapper">
                <img :src=imgDescption alt="project laptop">
            </div>
            <div class="description-banner-content__wrapper">
                <ul class="description-banner-content" v-if="cat === 'software'">
                    <li v-for="list of content">{{ list }}</li>
                </ul>
                <div class="description-banner-content" v-else>
                    <span>{{ content }}</span>
                </div>
            </div>
        </div>
        <div class="description-banner-sub-content__wrapper" v-if="cat === 'software'">
            <span class="description-banner-sub-content">{{ subContent }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['subContent', 'content', 'imgDescption', 'cat'],
}
</script>


<style scoped>
.description-banner__wrapper {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-top: 140px;
    padding-bottom: 140px;
}

.description-banner-image__wrapper {
    width: 547px;
    height: 318px;
    flex-shrink: 0;
}

.description-banner-image__wrapper img {
    width: 100%;
    height: auto;
}

.description-banner-content {
    list-style: none;
    width: 100%;
}

.description-banner-content li {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    color: #6E6E6E;
    text-align: center;
    font-family: Plus Jakarta Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.description-banner-content span {
    color: #6E6E6E;
    font-family: Plus Jakarta Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 185%
}

.description-banner-content__wrapper ul li:before {
    content: url('@/assets/checkmark.png');
    margin-right: 8px;
    display: block;
}

.description-banner-sub-content__wrapper {
    margin: 0 auto;
    text-align: center;
    min-width: 882px;
    padding-bottom: 102px
}

.description-banner-sub-content {
    color: #6E6E6E;
    text-align: center;
    font-family: Plus Jakarta Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 170.5%
}
</style>