<script setup>
import order_part from '../components/order_part.vue'
import axios from 'axios'
</script>
<!--
<template>
  <Row justify="center">
    <Col :xs="23" :sm="22" :md="19">
      <Content>
        <div class="page-title"><b>我的訂單紀錄</b></div>
        <Card style="margin-bottom:50px;padding:10px;">
          <div class="title-word">
            <span class="card-title">已付款訂單</span>
            <hr style="flex: 1; border-color: #2d8cf0;" />
          </div>
          <Row justify="center" align="middle">
            <Col :xs="24" :sm="22">
            <div style="margin-top: 10px;" v-for="order in orders">
              <order_part :number='order.number' :paytime="order.paytime" :InvoiceNumber="order.InvoiceNumber"
                :pay="order.pay" :way="order.way" :item="order.item" :mykey="order.mykey" />
            </div>
            </Col>
          </Row>
        </Card>
      </Content>
    </Col>
  </Row>
</template>
-->

<template lang="pug">
Row(justify="center")
  Col(:xs="23" :sm="22" :md="19")
    Content
      .page-title
        b 我的訂單紀錄
      Card(style="margin-bottom:50px;padding:10px;")
        .title-word
          span.card-title 已付款訂單
          hr(style="flex: 1; border-color: #2d8cf0;")
        Row(justify="center" align="middle")
          Col(:xs="24" :sm="22")
            div(style="margin-top: 10px;" v-for="order in orders")
              order_part(:number='order.number' 
                :paytime="order.paytime" 
                :InvoiceNumber="order.InvoiceNumber"
                :pay="order.pay" :way="order.way" 
                :item="order.item" :mykey="order.mykey" )
</template>

<script>
export default {
  components: {
    order_part,
  },
  data() {
    return {
      orders: [
        //{訂單編號number:'',付款時間paytime:'',付款金額pay:'',付款方式way:'',購買項目item:'',序號與型號key:''},		
        //{ number: 'number1024', paytime: '2024/02/31 00:00:01', pay: 1000, way: '信用卡', item: '醍摩豆雲平台IES 5', key:'mykey123'},
      ],
    }
  },
  methods: {
    fetchData() {
      axios.get('https://raw.githubusercontent.com/IsFlyingDream/HABOOK-_Product_Page_2023/main/2023.04.12%E4%BD%9C%E5%BB%A2%EF%BC%8C%E4%BD%BF%E7%94%A8bootstrap5_vue/json_test/jsonTest.json')
        .then(response => {
          console.log("fetchData2 in");
          this.orders = response.data.orders;
        })
        .catch(error => {
          console.log(error)
        });
    },
  },
  mounted() {
    this.fetchData();
  },
}
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
  margin: 100px auto 20px;
  text-decoration: underline;
  color: black;
}
</style>
