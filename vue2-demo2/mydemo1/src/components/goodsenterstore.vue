<template>
	<div class="goodsenterstore">
		<div class="content">
			<div class="left">
				<div class="top">支持的配送方式</div>
				<div class="bottom">
					<span  v-for='(item, index) in goodsShippings' key='index'>{{item.shipping}}</span>
				</div>
			</div>
			<div class="rightshow" @click='show'> > </div>
		</div>
		<div class="wrap content">
			<div class="main1">
				<div class="mainin">
					<div>{{info.s_name}}</div>
					<div class="mbottom">{{star}} {{info.s_score}}分</div>
				</div>
			</div>
			<div class="left1">
				<img :src='info.s_logo'/>
			</div>
			<div class="right1" @click='enterstore'>进入店铺></div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		computed:{
			goodsShippings(){
				return this.$store.state.goodsShippings
			},
			info(){
				return this.$store.state.info
			},
			star(){
				var str = '★★★★★☆☆☆☆☆',
                    stars = Math.floor(this.$store.state.info.s_score / 2),
                    starNum = str.substring(5 - stars, 10 - stars);
					return starNum;
			}
		},
		methods:{
			enterstore(){
				this.$router.push('/store')
			},
			show(){
				var shaw = document.getElementsByClassName('shaw')[0];
				shaw.style.display = 'block';
				console.log(shaw.style);
			}
		}
	
	}
</script>
<style scoped>
.goodsenterstore{
    width:96%;
	padding:0 0.2%;
}
img{
	width:100%;
	height:100%;
}
.mainin div{line-height:1rem;margin-top:0.25rem;}
.mainin{margin:0 3.2rem;font-size:0.6rem;color:#000;}
.right1 { width:3rem;margin-left:-3rem;
line-height:3rem;text-align:right;font-size:0.6rem;color:#999; }
.left1 { width:3rem; margin-left:-100%; }
.main1 { width:100%; }
.main1,.left1,.right1 { float:left;  height:3rem; }
.wrap{
	padding:0.35rem 0;
}
.rightshow{
	float:right;
	width:10%;
	text-align:right;
	font-size:0.6rem;
	color:#999;
	line-height:2.2rem;
}
.bottom span{
	margin-right:0.6rem;
 	background:url('./../assets/images/goods/icon_pre.png') no-repeat 0 center;
	background-size:0.65rem 0.65rem;
	padding-left:0.7rem;
}
.bottom{
	color:#666;
	padding:0.3rem 0;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}
.top{
	color:#999;
	padding:0.3rem 0 0.1rem 0;
}
.content .left{
	float:left;
	font-size:0.6rem;
	width:90%
}
.content{
	margin-top:0.5rem;
	border-top:1px solid #eee;
	border-bottom:1px solid #eee;
	overflow:hidden;
}
</style>