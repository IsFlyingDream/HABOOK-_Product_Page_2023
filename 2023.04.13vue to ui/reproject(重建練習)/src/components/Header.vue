<template>
  <div class="header">
    <div class="logo">
      <RouterLink to="/" ><img src="/LOGO.png" alt="Logo" height="150" /></RouterLink>      
    </div>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <MenuItem name="1">
      <RouterLink to="/PageBuy" class="menu-item">購買頁</RouterLink>
      </MenuItem>
      <MenuItem name="2">
      <RouterLink to="/PageOrder" class="menu-item">我的訂單</RouterLink>
      </MenuItem>
        <Submenu name="3" class="menu-item">
          <template #title>
            <Icon type="md-person" />
            Hi ruby
          </template>
          <MenuGroup title="用戶">
            <MenuItem name="3-1">帳戶資料</MenuItem>
            <MenuItem name="3-2"><RouterLink to="/PageOrder">我的訂單</RouterLink></MenuItem>
            <MenuItem name="3-3">登出</MenuItem>
          </MenuGroup>
        </Submenu>
    </Menu>
  </div>
</template>

<style scoped>
.ivu-menu-dark {
  background-color: #000000;
}

.menu-item {
  /* 選單文字大小*/
  font-size: 18px;
  color: white;
}

.header {
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 100%;
  background-color: black;
  padding: 0 20px;
  position: fixed;
  z-index: 999;
}

.logo {
  height: 50px;
  /* Set logo height to match header */
}


.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
