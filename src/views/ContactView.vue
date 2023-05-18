<template>
    <main id="content" class="primary-content contact">
      <div class="contact__wrapper container">
        <div class="contact-us__left">
          <img src="../assets/images/contact-us-banner.jpg" alt="contact">
        </div>
        <div class="contact-us__right">
            <h2>Contact Us</h2>
            <font color="green" size="2">{{successMsg}}</font>
            <div class="contact-us__form-wrapper">
            <form method="post" v-on:submit.prevent="submit()">
              <div class="contact-form__group">
                <input type="text" v-model="name"  class="contact-form__field" placeholder="Full Name*" >
                <font color="red" size="2">{{errorName}}</font>
              </div>
              <div class="form-row">
                <div class="contact-form__group">
                  <input v-model="email" type="email" name="" class="contact-form__field" placeholder="Email Address*">
                <font color="red" size="2">{{errorEmail}}</font>
                </div>
                <div class="contact-form__group">
                  <input type="text" v-model="contact" name="" class="contact-form__field" placeholder="Contact Number*">
                  <font color="red" size="2">{{errorContact}}</font>
                </div>
              </div>
              <div class="contact-form__group">
                <textarea v-model="message"  name="" class="contact-form__textarea" placeholder="Message*" ></textarea>
                <font color="red" size="2">{{errorMsg}}</font>
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
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
  data() {
    return {
      
        name: '',
        email: '',
        contact: '',
        message: '',
        errorCount:0,
        errorEmail:'',
        errorName:'',
        errorContact:'',
        errorMsg:'',
        successMsg:'',
    }
  },
  computed:{

post(){
    return {
       email:this.email,
       name:this.name,
       contact:this.contact,
       message:this.message
    }
}

},
  methods: {
      submit(){
        this.errorCount=0;
        this.errorEmail="";
        this.errorName="";
        this.errorContact="";
        this.errorMsg="";

        if(this.email==""){
          this.errorCount +=1
          this.errorEmail ="Email Address should not be empty!"
        }
        if(this.name==""){
          this.errorCount +=1
          this.errorName ="Name should not be empty!"
        }
        if(this.contact==""){
          this.errorCount +=1
          this.errorContact="Contact Number should not be empty!"
        }
        if(this.message==""){
          this.errorCount +=1
          this.errorMsg ="Contact Number should not be empty!"
        }

        // check if there is no error
        if(this.errorCount==0){
          // insert PHP api
          axios.post('http://wsoft.space/api/phpmailVue.php',this.post).then(
            response=>{
             if(response.data=="Message sent successfully..."){
              this.errorCount=0;
              this.errorEmail="";
              this.errorName="";
              this.errorContact="";
              this.errorMsg="";
              this.name="";
              this.email="";
              this.contact="";
              this.message="";
              this.successMsg = "Your message are successfully delivered"
             }
            }).catch(error=>console.log('this is the error '+error))
        }
      }
    }
};
</script>