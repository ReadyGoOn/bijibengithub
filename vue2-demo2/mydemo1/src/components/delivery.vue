<template>
    <div class="shaw" @click='shdowa'>
        <div class="content" @click.stop='content'>
            <goodsenterstore></goodsenterstore>
            <button @click='close' class='close'>确定</button>
        </div>
    </div>
</template>

<script>
import goodsenterstore from './goodsenterstore.vue'
    export default{
        methods:{
            close(){
                var shaw = document.getElementsByClassName('shaw')[0];
                shaw.style.display = 'none';
            },
            shdowa(){
                var shaw = document.getElementsByClassName('shaw')[0];
                shaw.style.display = 'none';
            },
            content(){}
        },
        components:{
            goodsenterstore
        }
    }
</script>

<style scoped>
*{
    padding:0;
    margin:0;
}

.content{
    width:100%;
    height:15rem;
    background-color:#eee;
    position:absolute;
    bottom:0;
    left:0;
}
.close{
    width:100%;
    height:2rem;
    line-height:2rem;
    color:#fff;
    background-color:red;
    text-align:center;
    position:absolute;
    bottom:0;
    left:0;
    font-size:1rem;
    font-weight:800;
}
</style>