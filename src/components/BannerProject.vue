

<template>
    <div class="project-banner">
        <div class="project-banner__titles">
            <span class="project-banner__title" data-aos="slide-down" data-aos-easing="ease-in-out" data-aos-delay="50">
                {{ $t('project') }}
            </span>
            <p class="about__text" data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="60">
                {{ $t('project-description') }}
            </p>
        </div>
        <div class="project-banner__image" data-aos="slide-down" data-aos-easing="ease-in-out" >
            <img v-bind:src=imageurl alt="projects">
        </div>
    </div>
</template>

<script>
export default {
    props: ['imageurl']
}
</script>