<template>
  <div id="app">
    <glowbar></glowbar>
    <router-view/>
  </div>
</template>

<script>
import Glowbar from '@/components/Glowbar.vue'

export default {
  components: {
    Glowbar
  }
}
</script>
