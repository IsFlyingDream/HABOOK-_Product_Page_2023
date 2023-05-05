<!--
<template>
  <Row justify="center">
     <Col :xs="24" :md="22" :xl="19">
     <Content :style="{ padding: '0 30px' }">
       <div class="page-title"><b>您選擇的方案和定價</b></div>
       <Card style=" padding:10px;">
         <p class="In-title">HiTeach Mobile 3 Teacher Personal Subscription Edition (Home) Web
           IRS 30 -
           Person/Year</p>
         <div class="infoBox">
           <div class="infoBox-left">
             <p>小計</p>
           </div>
           <div>
             <p>NTD 1,590</p>
           </div>
         </div>
         <hr>
         <div class="infoBox">
           <div class="infoBox-left">
             <p style="font-weight:bold; ">應付金額</p>
           </div>
           <div style="font-size: 30px; color:#ed4014">
             <p>NTD 1,590</p>
         </div>
       </div>
       <div class="ivu-text-right">
         <div class="gayBox">
             <div style="margin-bottom: 10px;">
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
-->

<template lang="pug">
Row(justify="center")
  Col(:xs="24" :md="22" :xl="19")
  Content(:style="{ padding: '0 30px' }")
    .page-title
      b 您選擇的方案和定價
    Card(style="padding:10px;")
      p.In-title  HiTeach Mobile 3 Teacher Personal 
        | Subscription Edition 
        | (Home) Web IRS 30 - Person/Year
      .infoBox
        .infoBox-left
          p 小計
        div
          p NTD 1,590
      hr
      .infoBox
        .infoBox-left
          p(style="font-weight:bold;") 應付金額
        div(style="font-size: 30px; color:#ed4014")
          p NTD 1,590
    .ivu-text-right
      .gayBox
        div(style="margin-bottom: 10px;")
          p 訂閱人：李子 (用戶編號 1681089795)
        Form(ref="formValidate" @submit.native.prevent 
          :model="formValidate" :rules="ruleValidate" :label-width="80")
          FormItem(label="E-mail" prop="mail")
            Input(v-model="formValidate.mail" 
              @keyup.enter.native="handleSubmit('formValidate')" 
              placeholder="請輸入您的電子郵件，如name@example.com"
            )
          FormItem
            Button(@click="handleReset('formValidate')") 重寫
            Button(type="primary" @click="handleSubmit('formValidate')" 
              style="margin-left: 8px") 送出
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

<style scoped>
hr{
  background-color:#c5c8ce; 
  border: none; 
  height: 1px;
}
.In-title{
  font-size: 20px; 
  font-weight:bold;
}
.infoBox{
  display: flex; 
  margin:20px auto 30px;
  display: flex;
  align-items: center;
  font-size: 18px;
}
.infoBox-left{
  margin-right: 10px; 
  flex: 1;
}
.gayBox{
  background-color: rgb(230, 230, 230); 
  padding:10px 10px 3px 0px
}

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
