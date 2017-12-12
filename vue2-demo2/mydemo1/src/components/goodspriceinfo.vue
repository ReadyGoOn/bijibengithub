<template>
    <div class="goodsprice">
        <div class="info">{{info.goodsname}}</div>
        <p class="price">
            <span class="red">￥{{info.gdiscount}}</span>
            <span class="gray">/{{info.unit}}</span>
            <span class="character">会员价</span>
        </p>
        <p class="oldprice gray" v-if='info.price > info.gdiscount ? true : false'>
            <s>￥{{info.price}}</s>
            <span class="gray">/{{info.unit}}</span>
        </p>
        <p class="point">
            <span>代金券可抵现：{{info.coupons}}元</span>
        </p>
        <div class="content">
            <div><span>库存：{{info.inventory}}</span></div>
            <div><span>销量：{{info.sales}}</span></div>
            <div><span>货源：{{info.s_area}}</span></div>
        </div>
        <div class="selecter">
            <div class="left">
                <span class="num">数量</span>
                <div class="leftbuttom">
                    <span :class="['lef','left1', 'repu',{'active':leftflag1}]" @click='reduce'>-</span>
                    <span class="left2 lef">{{num}}</span>
                    <span class="left3 repu lef active" @click='plus'>+</span>
                </div>
            </div>
            <div class="right">
                <span class="conprice">合计：</span>
                <span class="conmun">{{total}}</span>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
	export default {
        data(){
            return { 
                num:1,
                leftflag1:false,
                }
        },
        computed:{
            info(){
                return this.$store.state.info
            },
            total(){
                return this.info.gdiscount*this.num;
            }
        },
        methods:{
            reduce(){
                this.num--;
                if(this.num <= 1){
                    this.leftflag1 = false;
                    this.num = 1;
                }
            },
            plus(){
                this.num++;
                if(this.num > 1){
                     this.leftflag1 = true;     
                }
            }
        },
        watch:{

        }
	}
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
    }
    
    .selecter{
        overflow:hidden;
        font-size:.65rem;
        color:#999;
        padding-bottom:.5rem;
    }
    .left{
        float:left;
        
    }
    .leftbuttom{
        display:inline-block;
    }
    .lef{
        display:inline-block;
        color:#fff;
        background-color:#ccc;
        border-radius:1.3rem;
        line-height:1.3rem;
        font-size:0.8rem;
        height:1.3rem;
        text-align:center;
    }
    .active{
        background-color:#68cb78;
    }
    .left2{
        padding:0 1rem;
        color:#666;
    }
    .repu{
        width:1.3rem;
    }
    .right{
        float:right;
        line-height:1.3rem;
        height:1.3rem;
    }

    .goodsprice{
        width:96%;
        padding:0 2%;
        border-bottom:1px solid #eee;
    }
    .info{
        font-size:0.75rem;
        line-height:0.9rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin:0.35rem 0;
    }
    p{
        padding:0.15rem 0;
    }
    .price{
        font-size:0.7rem;
    }
    .price .red{
        font-size:0.8rem;
        color:red;
    }
    .gray{
        color:#999;
    }
    .price .character{
        color:#fff;
        font-size:0.45rem;
        background-color:red;
        padding:2px 4px;
        border-radius:3px;
    }
    .oldprice{
        font-size:0.6rem;
    }
    .point{
        font-size:0.6rem;
        color:#666;
        background:url('./../assets/images/goods/icon_pre.png') no-repeat 0 center;
        background-size:0.65rem 0.65rem;
    }
    .point span{
        margin-left:0.7rem;
    }
    .content{
        display:flex;
        flex-flow:row nowrap;
        justify-content:space-between;
        font-size:0.6rem;
        color:#999;
        padding:0.5rem 0;
        margin-top:0.2rem;
        border-top:1px solid #eee;
    }
    .content div:nth-child(1){
        background:url('./../assets/images/goods/icon_pre.png') no-repeat 0 center;
        background-size:0.65rem 0.65rem;
    }
    .content div:nth-child(2){
        background:url('./../assets/images/goods/icon_pre.png') no-repeat 0 center;
        background-size:0.65rem 0.65rem;
    }
    .content div:nth-child(3){
        background:url('./../assets/images/goods/icon_pre.png') no-repeat 0 center;
        background-size:0.65rem 0.65rem;
    }
    .content span{
        margin-left:0.7rem;
    }
</style>

