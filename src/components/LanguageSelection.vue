<template>
  <button class="translator-btn" @click="dropdown">
    <div class="flag-wrapper">
      <img v-bind:src="currentLanguage === 'en' ? usFlag : koreanFlag" alt="flag">
    </div>
    {{ currentLanguage }}
  </button>
  <ul class="translator-list" :class="[show ? 'show-list' : '']">
    <li v-for="(option, index) in options" :key="index" @click="clicked(option, index)"
      :class="[option.active ? 'selected' : '']">
      <div class="language-info">
        <div class="language-flag">
          <img v-bind:src=option.icon alt="flag">
        </div>
        <span class="lang-name">{{ option.label }}</span>
      </div>
    </li>
  </ul>
</template>
  
<script>

import usFlag from "@/assets/flag/en-flag.png";
import koreanFlag from "@/assets/flag/kr-flag.png";
export default {
  data() {
    return {
      currentLanguage: this.$i18n.locale,
      show: false,
      options: [
        { label: 'English', icon: usFlag, value: 'en', active: false },
        { label: 'Korean', icon: koreanFlag, value: 'kr', active: true },
      ],
      usFlag,
      koreanFlag,      
      currentFlagIcon: this.$i18n.locale === 'en' ? usFlag : koreanFlag,
    };
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'kr' : 'en';
      this.currentFlagIcon = this.currentLanguage === 'en' ? usFlag : koreanFlag;
      this.$i18n.locale = this.currentLanguage;
    },
    dropdown() {
      this.show = !this.show;
    },
    clicked(option, i) {
      this.falseActive();
      this.options[i].active = true;
      this.show = false;
      this.currentLanguage = option.value;
      this.$i18n.locale = this.currentLanguage;
      // this.options = this.options.filter(item => item.value !== this.currentLanguage);
    },
    falseActive() {
      this.options.forEach(el => {
        el.active = false
      });
    }
  }
}
</script>

<style scoped>

.translator-btn {
  display: flex;
  border: 0 none;
  background: transparent;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  float: right;
}
.translator-list {
  display: none;
}
.translator-list li {
  cursor: pointer;
}

.show-list {
  display: block;
  list-style: none;
  padding: 0;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 1px 2px 3px 2px rgba(0,0,0,0.2);
  border-radius: 5px;
  top: 50px;
  right: 0;
  z-index: 999;
}

.selected .language-info {
  background-color: rgba(94,86,105,.1);
}
.language-info {
  display: flex;
  align-items: center;
  padding: 7px 20px;
  gap: 10px;
  justify-content: space-between;
}

.language-flag {
  max-width: 25px;
}
.lang-name {
  display: block;
    font-weight: 300;
    color: #999;
    width: 100%;
}


.flag-wrapper {
  max-width: 30px;
}
</style>