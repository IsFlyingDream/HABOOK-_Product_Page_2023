<template>
  <div>
    <div>
      <Card :bordered="false" style="background:#eee; padding:5px; margin: 10px 20px 10px">
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <div style="margin-right: 10px; flex: 1;  align-items: center;">
            <p style="font-size: 20px;">訂單編號 {{ number }}</p>
          </div>
          <div style=" display: flex; text-align: right;">
            <Icon type="ios-checkmark-circle" />
            <p>已付款</p>
          </div>
        </div>
        <div style="color: #808695;  line-height: 1.5;">
          <p>付款時間 {{ paytime }}</p>
          <p>實付金額NT {{ pay }}</p>
          <p>付款方式 {{ way }} 繳費</p>
          <hr style="margin: 10px 0px;">
          <p style="color: black; ">購買項目</p>

          <div style="display: flex; align-items: center;">
            <div style="margin-right: 10px; flex: 1;  align-items: center;">
              <p>{{ item }}</p>
            </div>
            <div style=" display: flex; text-align: right;">
              <p>序號 {{ mykey }}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      //{訂單編號number:'',付款時間paytime:'',付款金額pay:'',付款方式way:'',購買項目item:'',序號與型號key:''},		
      number: String, 
      paytime: Date, 
      pay: Number, 
      way: String, 
      item: String, 
      mykey: String,
  }
};
</script>


<style scoped>
.card-p-15 {
  line-height: 1.5;
}
</style>
