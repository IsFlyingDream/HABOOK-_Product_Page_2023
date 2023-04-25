<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import Head from './components/Head.vue'
import Footer from './components/Footer.vue'


</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <Head class="page-head"/>
    <!-- <div class="wrapper"> -->
      <!-- <HelloWorld msg="You did it!" /> -->

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    <!-- </div> -->
  </header>
  <main>
    <router-view />
  </main>
  <!-- <RouterView /> -->
  <Footer />
</template>

<style scoped>
.card-title {
  margin-right: 16px;
  display: inline-block;
  white-space: nowrap;
  color: #2d8cf0;
  font-size: 20px;
}

.ivu-card {
  /* 讓card保持有陰影*/
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.page-title {
  text-align: center;
  font-size: 30px;
  margin: 120px auto 20px;
  text-decoration: underline;
  color: black;
}

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

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.page-head {
  z-index: 999;
}
</style>
