<template>
  <Card :bordered="false" style="background:#eee; padding:5px;">
    <div style=" margin-bottom: 10px;" class="OneLine">
      <div style=" flex: 1;">
        <p style="font-size: 20px;">訂單編號 {{ number }}</p>
      </div>
      <div class="OneLine">
      <!-- <Space align="baseline"> -->
        <Icon type="ios-checkmark-circle" />
        <p>已付款</p>
      <!-- </Space> -->
      </div>
    </div>
    <div style="color: #808695;  line-height: 1.5;">
      <p>付款時間 {{ paytime }}</p>
      <p>發票號碼 {{ InvoiceNumber }}</p>
      <p>實付金額NT {{ pay }}</p>
      <p>付款方式 {{ way }} 繳費</p>
      <hr style="margin: 10px 0px;">
      <p style="color: black; ">購買項目</p>

      <div class="OneLine">
        <div style=" flex: 1; ">
          <p>{{ item }}</p>
        </div>
        <div >
          <p>序號 {{ mykey }}</p>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  props: {
    //{訂單編號number:'',付款時間paytime:'',付款金額pay:'',付款方式way:'',購買項目item:'',序號與型號key:''},		
    number: String,
    paytime: Date,
    InvoiceNumber: Number,
    pay: Number,
    way: String,
    item: String,
    mykey: String,
  }
};
</script>

<style scoped>
.OneLine{
  display: flex; 
  align-items: center;
}
.card-p-15 {
  line-height: 1.5;
}
</style>
