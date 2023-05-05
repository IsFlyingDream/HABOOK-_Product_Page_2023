<!--
<template>
  <Row justify="center">
    <Col :xs="24" :md="19">
    <Content :style="{ padding: '0 30px' }">
      <div class="page-title">您的訂單明細</div>
      <Card  class="CardStyle">
        <p style="font-size: 20px; font-weight:bold; ">HiTeach Mobile 3 Teacher Personal
          Subscription Edition (Home) Web
          IRS 30 -
          Person/Year</p>
        <div class="fontSize">
          <div style="margin-top:20px;" class="textStyle">
            <div class="textStyle-right">
              <p>付款時間</p>
            </div>
            <div>
              <p>2020/06/30 15:37:49</p>
            </div>
          </div>
          <div class="textStyle">
            <div class="textStyle-right">
              <p>訂單編號</p>
            </div>
            <div>
              <p>20230427559139</p>
            </div>
          </div>
          <div class="textStyle">
            <div class="textStyle-right">
              <p>訂單狀態</p>
            </div>
            <div style="align-items: center;  display: flex; ">
              <Icon type="ios-checkmark-circle" />
              <p>付款完成</p>
            </div>
          </div>
          <div class="textStyle">
            <div class="textStyle-right">
              <p>付款金額</p>
            </div>
            <div>
              <p>NTD 1,590</p>
            </div>
          </div>
        </div>
         <div style=" margin-top:10px;" class="textStyle">
          <div style="flex: 1;" class="fontSize">
            <p style="font-weight:bold; ">序號</p>
          </div>
          <div class="redWord">
            <p>abcabc</p>
          </div>
        </div>

        <div class="billBox">
          <div style="display: flex;" class="fontSize">
            <div style=" flex: 1; " >
              <p style="font-weight:bold;">發票號碼</p>
            </div>
            <p>66882140</p>
          </div>

        </div>
        <div class="ivu-text-right">
          <div style="margin-bottom:10px; color:gray;">
            <p>＊若付款完成但未出現發票號碼或序號時，請重整頁面</p>
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
  Col(:xs="24" :md="19")
  Content(:style="{ padding:'0 30px'}")
    .page-title 您的訂單明細
    Card.CardStyle
      p(style="font-size: 20px; font-weight:bold;")
        | HiTeach Mobile 3 Teacher Personal
        | Subscription Edition (Home) Web
        | IRS 30 -
        | Person/Year
      .fontSize
      .textStyle(style="margin-top:20px;")
        .textStyle-right
          p 付款時間
        div
          p 2020/06/30 15:37:49
      .textStyle
        .textStyle-right
          p 訂單編號
        div
          p 20230427559139
      .textStyle
        .textStyle-right
          p 訂單狀態
        div(style="align-items: center;  display: flex;")
          Icon(type="ios-checkmark-circle")
          p 付款完成
      .textStyle
        .textStyle-right
          p 付款金額
        div 
          p NTD 1,590
      .textStyle(style=" margin-top:10px;")
        .fontSize(style="flex: 1;")
          p(style="font-weight:bold;") 序號
        .redWord
          p abcabc
      .billBox
        .fontSize(style="display: flex;")
          div(style=" flex: 1;")
            p(style="font-weight:bold;") 發票號碼
          p 66882140
      .ivu-text-right
        div(style="margin-bottom:10px; color:gray;")
          p ＊若付款完成但未出現發票號碼或序號時，請重整頁面

</template>

<script>

</script>

<style scoped>
.textStyle{
  display: flex;  
  margin-bottom:5px;
}
.textStyle-right{
  margin-right: 10px;
}
.redWord{
  font-size: 30px; 
  display: flex; 
  text-align: right; 
  color:#ed4014; 
  padding-right: 5px;
}
.billBox{
  background-color: rgb(230, 230, 230); 
  padding:10px
}
.ivu-card {
  /* 讓card保持有陰影*/
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
.fontSize{
  font-size: 16px;
}
.CardStyle{
  margin: 0px 0px 50px; 
  padding:10px 10px 0px 10px;
}

.page-title {
  text-align: center;
  font-size: 30px;
  margin: 100px auto 20px;
  text-decoration: underline;
  color: black;
}
</style>
