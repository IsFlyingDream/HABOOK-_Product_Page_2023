<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <Row justify="center">
    <Col :xs="24" :md="22" :xl="19">
     
      <div class="page-title"><b>首頁Page</b></div>
    
    </Col>
  </Row>
    
</template>

<style scoped>
.page-title {
  text-align: center;
  font-size: 30px;
  margin: 100px auto 20px;
  text-decoration: underline;
  color: black;
}
</style>