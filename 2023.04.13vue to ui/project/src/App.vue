<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import PageHead from './components/PageHead.vue'
import PageMyOrderList from './components/PageMyOrderList.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <PageHead class="page-head" />
    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
    </div>
  </header>
  <main>
    <!-- <TheWelcome /> -->
    <Row justify="center">
      <Col span="23">
      <Content :style="{ padding: '0 100px' }">
        <div class="page-title">我的訂單紀錄</div>
        <Card style="margin: 0px 0px 50px; padding:10px;">
          <div class="title-word">
            <span class="card-title">已付款訂單</span>
            <hr style="flex: 1; border-color: #2d8cf0;" />
          </div>
          <div style="margin-top: 10px;">
            <PageMyOrderList />
            <PageMyOrderList />
            <PageMyOrderList />
            <PageMyOrderList />
          </div>
        </Card>
      </Content>
      </Col>
    </Row>
  </main>
  <PageFooter />
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
