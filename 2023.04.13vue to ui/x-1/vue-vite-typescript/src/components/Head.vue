<script setup>

</script>
<template>
  <div class="header">
    <div class="logo">      
      <RouterLink to="/"><img src="/LOGO.png" alt="Logo" height="150" /></RouterLink>
    </div>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <MenuItem name="1">
        <router-link to="/PageBuy" class="menu-item">購買頁</router-link>
      </MenuItem>
      <MenuItem name="2" class="menu-item">
        <router-link to="/PageOrder" class="menu-item">我的訂單</router-link>
      </MenuItem>
      <Submenu name="3" class="menu-item">
        <template #title>
          <Icon type="md-person" />
          hi ruby
        </template>
        <MenuGroup title="">
          <MenuItem name="3-1">選項1</MenuItem>
          <MenuItem name="3-2">選項2</MenuItem>
          <MenuItem name="3-3">選項3</MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>
  </div>
</template>

<style scoped>
/* 將 Menu 的主題設置為黑色 */
.ivu-menu-dark {
  background-color: #00000000;
}

.menu-item {
  /* 選單文字大小*/
  font-size: 18px;
  color: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  /* Set header height */
  background-color: #001529;
  color: #fff;
  padding: 0 20px;

  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
}

.logo {
  height: 50px;
  /* Set logo height to match header */
}
</style>
