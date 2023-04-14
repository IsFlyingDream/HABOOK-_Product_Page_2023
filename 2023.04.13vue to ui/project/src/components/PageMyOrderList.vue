<template>
  <div>
    <div>
      <Card :bordered="false" style="background:#eee; padding:5px; margin: 10px 20px 10px">
        <template #title>
          <div style="display: flex; align-items: center;">
            <div style="margin-right: 10px; flex: 1;  align-items: center;">
              <p style="font-size: 20px;">訂單編號 MyNumber1</p>
            </div>
            <div style=" display: flex; text-align: right;">
              <Icon type="ios-checkmark-circle" />
              <p>已付款</p>
            </div>
          </div>
        </template>
        <div style="color: #808695;  line-height: 1.5;">
          <p>付款時間2020/06/30 15:37:49</p>
          <p>實付金額NT 4330</p>
          <p>付款方式 信用卡 繳費</p>
          <hr style="margin: 10px 0px;">
          <p style="color: black; ">購買項目</p>

          <div style="display: flex; align-items: center;">
            <div style="margin-right: 10px; flex: 1;  align-items: center;">
              <p>醍摩豆雲平台IES 5</p>
            </div>
            <div style=" display: flex; text-align: right;">
              <p>序號oweiuopwef</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.card-p-15 {
  line-height: 1.5;
}
</style>
