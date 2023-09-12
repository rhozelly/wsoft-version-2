

<template>
    <div class="display-banner" :style="{ backgroundImage: 'url(/src/assets/screenshots/' + img + ')' }">
        <div class="display-banner__titles">
            <span data-aos="slide-down" data-aos-easing="ease-in-out" >{{ subheading }}</span>
            <h2>{{ heading }}</h2>
        </div>
    </div>
</template>

<script>

export default {
    props: ['heading', 'subheading', 'img'],}
</script>


<style scoped>
.display-banner {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 960px;
}
.display-banner__titles {
    padding-top: 93px;
    margin: 0 auto;
    text-align: center;
}

.display-banner__titles span {
    color: #2B61EF;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Plus Jakarta Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0.99px;
    text-transform: capitalize;
}

.display-banner__titles h2 {
    margin-top: -2px;
    color: #000;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Plus Jakarta Sans;
    font-size: 42px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}
</style>