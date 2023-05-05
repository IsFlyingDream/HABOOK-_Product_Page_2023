<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>



<template  lang="pug">
header
  Header 
  main
    RouterView
  Footer 
</template>



<style scoped>

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

header {
  line-height: 1.5;
  width: 100%;

}
</style>
