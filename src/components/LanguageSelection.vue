<template>
  <button class="translator-btn" @click="dropdown">
    <div class="flag-wrapper">
      <img :src="`/src/assets/flag/${currentLanguage}-flag.png`" alt="flag">
    </div>
    {{ currentLanguage }}
  </button>
  <ul class="translator-list" :class="[show ? 'show-list' : '']">
    <li v-for="(option, index) in options" :key="index" @click="clicked(option, index)"
      :class="[option.active ? 'selected' : '']">
      <div class="language-info">
        <div class="language-flag">
          <img :src="`/src/assets/flag/${option.icon}`" alt="flag">
        </div>
        <span class="lang-name">{{ option.label }}</span>
      </div>
    </li>
  </ul>
</template>
  
<script>
export default {
  data() {
    return {
      currentLanguage: this.$i18n.locale,
      show: false,
      options: [
        { label: 'English', icon: 'en-flag.png', value: 'en', active: true },
        { label: 'Korean', icon: 'kr-flag.png', value: 'kr', active: false },
      ]
    };
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'kr' : 'en';
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