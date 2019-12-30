<template>
  <div class="container home">
    <div class="row profile" v-bind:style="{ height: height }">
      <img src="@/assets/kevin.jpg" />
      <div class="vue-typer__container--home">
        <vue-typer 
          class="vue-typer--large"
          :text="typer" 
          erase-style="backspace"
          :erase-delay=50
        ></vue-typer>
      </div>
      <div class="follow unicon">
        <a href="https://github.com/kevinbooth" target="_blank"><unicon name="github" width="35" height="35"></unicon></a>
        <a href="https://www.linkedin.com/in/kevbooth" target="_blank"><unicon name="linkedin" width="35" height="35"></unicon></a>
        <a href="https://www.instagram.com/kevinbooth/" target="_blank"><unicon name="instagram" width="35" height="35"></unicon></a>
        <a href="https://www.facebook.com/KevinBoothh" target="_blank"><unicon name="facebook" width="35" height="35"></unicon></a>
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
      typer: ["hey, i'm kevin..", "and i code!"],
      height: (window.innerHeight - 30) + "px"
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
