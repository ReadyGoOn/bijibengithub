<template>
	<div class="goods">
		<goodsheader></goodsheader>
		<button @click='dick'>点击</button>
		<goodspriceinfo></goodspriceinfo>
		<goodsenterstore></goodsenterstore>
		<div class="tabcontent">
			<div class="tab">
				<router-link to="/goods/shuxing" tag="div" :class="['tabitem',{' active':'/goods/shuxing' == routeurl ? true : false}]">属性</router-link>
				<router-link to="/goods/guige" tag="div" :class="['tabitem', 'tabitemm',{' active':'/goods/guige' == routeurl ? true : false}]">规格</router-link>
				<router-link to="/goods/pingjia" tag="div" :class="['tabitem',{' active':'/goods/pingjia' == routeurl ? true : false}]">评价</router-link>
			</div>
			<router-view></router-view>
		</div>
		<delivery class='delivery'></delivery>
		<div class="footer">
			<span>联系客服</span>
			<span>进入店铺</span>
			<span>加入购物车</span>
			<span>立即购买</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	import goodsheader from '../../components/goodsheaderimg.vue';
	import goodspriceinfo from '../../components/goodspriceinfo.vue';
	import goodsenterstore from '../../components/goodsenterstore.vue';
	import goodstab from '../../components/goodstab.vue';
	import delivery from '../../components/delivery.vue';
	import md5 from 'md5';
	export default {
		data(){
			return {
				tabflag:false
			}
		},
		components:{
			goodsheader,
			goodspriceinfo,
			goodsenterstore,
			goodstab,
			delivery
		},
		computed:{
			routeurl(){
				// console.log(11111,this.$route.path);
				return this.$route.path;
			}
		},
		methods:{
			dick(){
				// this.routeurl = this.$route.path
				// axios.get('http://p.3.cn/prices/mgets?skuIds=11544050480&type=1').then(res=>{
				// 	console.log(res.data.title);
				// })

				// this.$ajax.get('/apis/aaa').then(res=>{
				// 	console.log(res);
				// }).catch(res=>{
				// 	console.log(res);
				// })

				var dvt = 2,
					ver = 1.0,
					goodsid = 18799,
					userid = '',
					key = 'sdl#^kfj83*&(247D*()!@KutePaoebw',
					headers = { 'Content-Type': 'application/x-www-form-urlencoded' },
					// headers = { 'Content-Type': 'text/plain' },
					// headers = { 'Content-Type': 'multipart/form-data' },
					goodsDetailKey = md5(dvt + '' + goodsid + '' + userid + ''+ ver + '' + key);
                var post_data = {
                    'goodsid': goodsid,
                    'userid':userid,
                    'ver': ver,
                    'dvt': dvt,
                    'key': goodsDetailKey
                };

				this.$ajax({	method:'post',
						url: 'http://uatapi.wolianw.com/v2/index.php/home/Product/getGoodsDetail',
						data: post_data,
						headers: headers,
						timeout: 30000
				}).then(res=>{
					console.log(res);
				}).catch(res =>{
					console.log(111,res)
				})
			}
		}
	}
</script>
<style scoped>
  *{
        padding:0;
        margin:0;
    }
	.shaw{
		display:none;
		position:fixed;
		width:100%;
		height:100%;
		background:rgba(0,0,0,.6);
		top:0;
		left:0;
		z-index:3;
	}
	.tabcontent{
		margin-bottom:3rem;
	}
	.tab{
		display:flex;
		flex-flow:row nowrap;
		justify-content:space-between;
		border-top:1px solid #999;
	}
	.tabitemm{
		border-left:1px solid #999;
		border-right:1px solid #999;
	}
	.tabitem{
		padding:0.5rem;
		font-size:.7rem;
		color:#000;
		text-align:center;
		flex-basis:1;
		flex-grow:1;
		border-bottom:1px solid #999;
	}
	.active{
		color:red;
		border-bottom:1px solid #fff;
	}
    .footer{
		position:fixed;
		left:0;
		bottom:0;
        width:100%;
        display:flex;
        flex-flow:row nowrap;
        justify-content:space-between;
        border-top:1px solid #111;
		background-color:#fff;
		z-index:2
    }
    .footer span{
        font-size:0.65rem;
        padding:0.5rem 0.2rem;
        color:#fff;
        background-color:red;
    }
</style>