<template>
    <main id="content" class="primary-content contact">
      <div class="contact__wrapper container">
        <div class="contact-us__left">
          <img src="../assets/images/contact-us-banner.jpg" alt="contact">
        </div>
        <div class="contact-us__right">
            <h2>Contact Us</h2>
            <div class="contact-us__form-wrapper">
            <form method="post" v-on:submit.prevent="submit()">
              <div class="contact-form__group">
                <input type="text" name="" class="contact-form__field" placeholder="Full Name*" v-model="form.name">
              </div>
              <div class="form-row">
                <div class="contact-form__group">
                  <input type="email" name="" class="contact-form__field" placeholder="Email Address*"  v-model="form.email">
                </div>
                <div class="contact-form__group">
                  <input type="number" name="" class="contact-form__field" placeholder="Contact Number*"  v-model="form.contact"  pattern="[0-9]-{4}-[0-9]-{6}">
                </div>
              </div>
              <div class="contact-form__group">
                <textarea  name="" class="contact-form__textarea" placeholder="Message*"  v-model="form.message"></textarea>
              </div>
              <div class="contact-form__group cfg-flex">
                <span class="contact-us__text">*Personal information including name and phone numbers provided in this form will be used only for responding to the inquiries submitted. Please refer to Wsoft Privacy Policy regarding the handling of Personal Information.</span>
                <button type="submit" class="default-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </template>
  
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        contact: '',
        message: '',
      }
    }
  },
  methods: {
      submit(){
        // console.log(this.form);
      }
    }
};
</script>