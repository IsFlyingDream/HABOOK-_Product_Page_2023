const { createApp, onBeforeMount } = Vue;
createApp({
	data() {
		return {
			orders: [
				//{訂單編號number:'',付款時間paytime:'',付款金額pay:'',付款方式way:'',購買項目item:'',序號與型號key:''},		
				//{ number: '123456', paytime: '2024/02/31 00:00:00', pay: 1000, way: '轉帳', item: '醍摩豆雲平台IES 5', key: 'mykey' },
			],
		}
	},
	methods: {
		listBtn() {//上方菜單顯示與隱藏的按鈕↓↓
			var listBtn = document.getElementById('listBtn');
			var textlistn = document.getElementById('HidAndShow');
			var menu = document.getElementById('menu');
			if (textlistn.style.display === "block") {
				HidAndShow.style.display = "none";
				menu.style['height'] = "80px";
			} else {
				HidAndShow.style.display = "block";
				menu.style['height'] = "auto";
			}
		},
		fetchData() {
			axios.get('https://raw.githubusercontent.com/IsFlyingDream/HABOOK-_Product_Page_2023/main/json_test/jsonTest.json')
				.then(response => {
					console.log("fetchData2 in");
					this.orders = response.data.orders;
					//this.agentPassStat_passed = response.data.results.agentPassStat.passed;
					console.log("orders="+this.orders);

				})
				.catch(error => {
					console.log(error)
				});
		},
		mouseOver() {//滑鼠移入上方菜單↓↓
			var mouseFunction = document.getElementById('mouseFunction');
			mouseFunction.style['background-color'] = "rgba(0, 0, 0, .6)";
			mouseFunction.style['transition'] = "background-color 0.4s";
		},
		mouseOut() {
			var mouseFunction = document.getElementById('mouseFunction');
			mouseFunction.style['background-color'] = "";
		},
	},
	mounted() {
		this.fetchData();
	}
}).mount('#VueApp');


//上方菜單顯示與隱藏的按鈕↓↓
window.onresize = function () {  //每次視窗改變都會載入下列事件
	var listBtn = document.getElementById('listBtn');
	// var textlistn = document.getElementById('HidAndShow');
	if (document.body.scrollWidth >= 610) {
		listBtn.style.display = "none";
		HidAndShow.style.display = "block";
	} else {
		listBtn.style.display = "block";
		HidAndShow.style.display = "none";
	}
};

//上方菜單顯示與隱藏的按鈕↑↑-----------------------------


