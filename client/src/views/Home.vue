<template>
  <div class="container home">
    <div class="row profile" v-bind:style="{ height: height }">
      <img src="@/assets/monica.jpg" />
      <div class="vue-typer__container--home">
        <vue-typer 
          class="vue-typer--large"
          :text="typer" 
          erase-style="backspace"
          :erase-delay=50
        ></vue-typer>
      </div>
      <div class="profile__bio"> 
        <p>
          I’m currently a Senior at Southern New Hampshire University pursuing a B.S in Accounting. 
          In May 2019, I earned an A.S. in Accounting with a 4.0 GPA at NHTI. During my time there, 
          I received 3 academic achievement awards. I've developed a strong work ethic balancing school 
          and work. In addition to my work experiences, tutoring students in accounting and business 
          courses have strengthened my communication and problem-solving skills. I’m looking forward 
          to interning at Baker Newman Noyes in January 2020 to further develop myself professionally 
          and expand my tax knowledge and skills. My goal is to become eligible to sit for the CPA exam 
          shortly after graduating in December 2020.
        </p>
      </div>
      <div class="follow unicon">
        <a href="https://www.linkedin.com/in/monica-lofgren" target="_blank"><unicon name="linkedin" width="35" height="35"></unicon></a>
        <a href="mailto:monlofgren@gmail.com"><unicon name="envelope" width="35" height="35"></unicon></a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { VueTyper } from 'vue-typer'
import ContactForm from '@/components/ContactForm.vue'
import { SITE_NAME } from '@/variables.js'

export default {
  name: 'home',
  components: {
    VueTyper,
    ContactForm
  },
  data() {
    return {
      typer: ["hi, i'm monica,", "and i can do your taxes!"],
      height: (window.innerHeight - 10) + "px"
    }
  },
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s - ' + SITE_NAME,
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
}
</script>

<style lang="scss">
.visible {
  max-height: 50rem !important;
}
</style>
