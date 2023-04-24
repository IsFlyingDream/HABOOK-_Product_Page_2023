<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import order_part from '../components/order_part.vue'
import axios from 'axios'

</script>

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
          <div style="margin-top: 10px;" v-for="order in orders">
            <order_part :number='order.number' :paytime="order.paytime" :pay="order.pay" :way="order.way"
              :item="order.item" :mykey="order.mykey" />
          </div>
        </Card>
      </Content>
      </Col>
    </Row>
  </main>
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
          //this.agentPassStat_passed = response.data.results.agentPassStat.passed;
          //console.log("orders="+this.orders);
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
