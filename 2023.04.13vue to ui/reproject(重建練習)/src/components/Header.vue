<template>
  <div class="header">
    <div class="logo">
      <RouterLink to="/"><img class="logo-img" src="/LOGO.png" alt="Logo" /></RouterLink>
    </div>
    <!--
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
          <MenuItem name="3-2">
          <RouterLink to="/PageOrder">我的訂單</RouterLink>
          </MenuItem>
          <MenuItem name="3-3">登出</MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>
    -->
    <div @click="listBtn()" id="listBtn">
      <!-- <Icon type="md-funnel" size="25" color="grey"/> -->
      <Icon type="ios-arrow-down" size="25" color="grey" />
    </div>
    <Uploadimgs ref="zanImg" v-if="showUploadimgs == true">
      <Menu ref="menu" id="HidAndShow" :mode="mode" theme="dark" :collapse="collapse" width="180px"
        :style="{ border: 'none' }">
        <RouterLink to="/PageBuy">
          <MenuItem name="1" class="menu-item">
          購買頁
          </MenuItem>
        </RouterLink>
        <RouterLink to="/PageOrder">
          <MenuItem name="2" class="menu-item">
          我的訂單
          </MenuItem>
        </RouterLink>
        <Submenu name="3" class="menu-item">
          <template #title>
            <Icon type="md-person" />
            Hi ruby
          </template>
          <!-- <MenuGroup title="用戶"> -->
            <MenuItem name="3-1">帳戶資料</MenuItem>
            <RouterLink to="/PageOrder">
              <MenuItem name="3-2">
              我的訂單紀錄
              </MenuItem>
            </RouterLink>
            <MenuItem name="3-3">登出</MenuItem>
          <!-- </MenuGroup> -->
        </Submenu>
      </Menu>
    </Uploadimgs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: 'horizontal',
      collapse: false,
      screenWidth: window.innerWidth,
      showUploadimgs: true,
    };
  },
  watch: {
    screenWidth(val) {
      var listBtn = document.getElementById('listBtn');
      var textlistn = document.getElementById('HidAndShow');
      //判斷開關選單的按鈕是否要出現-str------
      if (val >= 576) {
        console.log("window.onresize IN11");
        listBtn.style.display = "none";
        //textlistn.style.display = "block";
        //this.handleResize();        
      } else {
        console.log("window.onresize IN22");
        listBtn.style.display = "block";
        //textlistn.style.display = "none";
        // this.mode = 'vertical';
      }
      ////判斷開關選單的按鈕是否要出現--end------------
      console.log("mode=" + this.mode);
      this.handleResize();//刷新Menu的horizontal vertical 水平垂直

      //重新load v-if來讓Menu進行刷新動作
      this.showUploadimgs = false;
      this.$nextTick(() => {
        this.showUploadimgs = true;
      })
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
    });
  },

  methods: {
    handleResize() {
      this.collapse = window.innerWidth >= 576;
      this.mode = this.collapse ? 'horizontal' : 'vertical';
      console.log("mode=" + this.mode);
    },
    listBtn() {//上方菜單顯示與隱藏的按鈕↓↓
      //var listBtn = document.getElementById('listBtn');
      var textlistn = document.getElementById('HidAndShow');
      if (textlistn.style.display == "block") {
        textlistn.style.display = "none";
      } else {
        textlistn.style.display = "block";
      }
    },
    fetchData() {//一載入就處理選單隱藏與垂直水平排列↓
      this.handleResize();
      var listBtn = document.getElementById('listBtn');
      var textlistn = document.getElementById('HidAndShow');
      if (document.body.scrollWidth >= 576) {
        listBtn.style.display = "none";
        textlistn.style.display = "block";
      } else {
        listBtn.style.display = "block";
        textlistn.style.display = "none";
      }
    },
  },
  mounted() {
    this.fetchData();
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};

//螢幕變更時執行菜單顯示與隱藏以及水平垂直顯示↓↓
/*
window.onresize = function () {  //每次視窗改變都會載入下列事件

  var textlistn = document.getElementById('HidAndShow');
  var listBtn = document.getElementById('listBtn');

  // textlistn.style.collapse = window.innerWidth < 576;
  // textlistn.style.mode =  textlistn.style.collapse ? 'vertical' : 'horizontal';

  if (document.body.scrollWidth >= 576) {
    // console.log("window.onresize IN11");
    listBtn.style.display = "none";
    HidAndShow.style.display = "block";
  } else {
    // console.log("window.onresize IN22");
    listBtn.style.display = "block";
    HidAndShow.style.display = "none";
  }
};*/

//上方菜單顯示與隱藏的按鈕↑↑-----------------------------
</script>

<style scoped>
.logo-img {
  height: 140px;
}

#listBtn {
  position: fixed; 
  right:10px; 
  top:15px; 
  z-index: 999;
}

@media screen and (max-width: 576px) {
  .logo-img {
    height: 100px;
  }

  #HidAndShow {
    margin-right: 30px;
  }

  .ivu-menu {
    display: none;
  }

  .active-link {
    color: #e8eaec;
  }

}

.ivu-menu-dark {
  background-color: #000000;
}

.menu-item {
  /* 選單文字大小*/
  font-size: 18px;
  /*color: white;*/
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
}</style>
