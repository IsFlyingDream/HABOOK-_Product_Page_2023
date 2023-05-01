<template>
   <Row justify="center">
      <Col :xs="24" :md="22" :xl="19">
      <Content :style="{ padding: '0 30px' }">
        <div class="page-title"><b>您選擇的方案和定價</b></div>
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
          <div style="background-color: rgb(230, 230, 230); padding:10px 10px 3px 0px">
              <div style="margin: 0px auto 10px;">
                <p>訂閱人：李子 (用戶編號 1681089795)</p>
              </div>
              <Form ref="formValidate" @submit.native.prevent :model="formValidate" :rules="ruleValidate" :label-width="80"  >
                <FormItem label="E-mail" prop="mail">
                  <Input v-model="formValidate.mail" @keyup.enter.native="handleSubmit('formValidate')" placeholder="請輸入您的電子郵件，如name@example.com"></Input>
                </FormItem>
                <FormItem>
                  <Button @click="handleReset('formValidate')" >重寫</Button>
                  <Button type="primary" @click="handleSubmit('formValidate')"   style="margin-left: 8px">送出</Button>                  
                </FormItem>
              </Form>
            </div>
          </div>
        </Card>
      </Content>
      </Col>
    </Row>
</template>

<script>
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
          this.$router.push('/PageCheck'); // 表單提交成功後跳轉到另一個路由
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

<style>

.ivu-form-item{
  margin-bottom:10px;
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
