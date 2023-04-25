<template>
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
          <div style="margin-top: 10px;" v-for="(order, index) in orders">
            <!-- <OrderPart :number='order.number' :paytime="order.paytime" :pay="order.pay" :way="order.way"
              :item="order.item" :mykey="order.mykey" />      -->
           
          </div>
          <order_part />
        </Card>
      </Content>
      </Col>
    </Row>
  </main>
</template>


<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import { defineComponent } from "vue";
import order_part from '../components/order_part.vue';

export default defineComponent({
  name: 'app',
  setup() {
    type Order = {
      number: string;
      paytime: String;
      pay: number;
      way: string;
      item: string;
      mykey: string;
    };
    const orders = [
      { number: "1", paytime: "2023-04-23", pay: 100, way: "Credit Card", item: "Product 1", mykey: "A001" },
      { number: "2", paytime: "2023-04-24", pay: 200, way: "PayPal", item: "Product 2", mykey: "A002" },
      { number: "3", paytime: "2023-04-25", pay: 300, way: "Apple Pay", item: "Product 3", mykey: "A003" }
    ];

    console.log("orders=" + orders[0].way);
    return {
      orders,
    };
  }
});
</script>


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
</style>
