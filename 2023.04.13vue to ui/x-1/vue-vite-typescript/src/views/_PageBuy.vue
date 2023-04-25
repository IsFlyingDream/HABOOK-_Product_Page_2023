<template>
   <main>
    <!-- <TheWelcome /> -->
    <Row justify="center">
      <Col span="22">
      <Content :style="{ padding: '0 100px' }">
        <div class="page-title">您選擇的方案和定價</div>
        <Card style="margin: 0px 0px 50px; padding:10px;">
          <p style="font-size: 20px; font-weight:bold;">HiTeach Mobile 3 Teacher Personal Subscription Edition (Home) Web
            IRS 30 -
            Person/Year</p>
          <div style="display: flex; align-items: center; margin:20px auto 30px;">
            <div style="margin-right: 10px; flex: 1;  align-items: center;">
              <p style="font-size: 18px;">小計</p>
            </div>
            <div style="font-size: 18px; display: flex; text-align: right;">
              <p>NTD 1,590</p>
            </div>
          </div>
          <hr style="background-color:#c5c8ce; border: none; height: 1px;">
          <div style="display: flex; align-items: center; margin:20px auto 30px;">
            <div style="margin-right: 10px; flex: 1;  align-items: center;">
              <p style="font-weight:bold; font-size: 17px;">應付金額</p>
            </div>
            <div style="font-size: 30px; display: flex; text-align: right; color:#ed4014">
              <p>NTD 1,590</p>
          </div>
        </div>
        <div class="ivu-text-right">
          <div style="background-color: rgb(230, 230, 230); padding:10px 10px">
              <div style="margin: 0px auto 10px;">
                <p>訂閱人：李子 (用戶編號 1681089795)</p>
              </div>
              <!-- <Form :model="formItem" :label-width="80">
                              <FormItem prop="email"  style="margin: 0;">
                                <Input placeholder="請輸入您的電子郵件，如name@example.com"></Input>
                              </FormItem>
                            </Form> -->
              <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="E-mail" prop="mail">
                  <Input v-model="formValidate.mail" placeholder="請輸入您的電子郵件，如name@example.com"></Input>
                </FormItem>
                <FormItem>
                  <Button type="primary" @click="handleSubmit('formValidate')">送出</Button>
                  <Button @click="handleReset('formValidate')" style="margin-left: 8px">重寫</Button>
                </FormItem>
              </Form>
            </div>
          </div>
        </Card>
      </Content>
      </Col>
    </Row>
  </main>
</template>

<script  setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import order_part from '../components/order_part.vue'
import axios from 'axios'

export default {
  data() {
    return {
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      ruleValidate: {
        mail: [
          { required: true, message: '信箱不能為空', trigger: 'blur' },
          { type: 'email', message: '電子郵件格式不正確', trigger: 'blur' }
        ],
      },
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('資料送出成功!');
        } else {
          this.$Message.error('資料格式錯誤');
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>

<style scoped>
.margin-card {
  margin: 10px;
}

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
