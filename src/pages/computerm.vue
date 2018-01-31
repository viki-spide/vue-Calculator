<template>
  <div class="bg" :style="{ height: heightval + 'px',backgroundImage: 'url(' + imgval + ')'  }">
     <bg-list></bg-list>
     <div class="result" :style="{ width: widthval + 'px' }">
        <span>
          <!--绑定计算属性result-->
          {{ !result ? 0 : result}}
        </span>
     </div>
     <div class="enter">
        <!--绑定计算属性enter-->
        {{ calval }}
     </div>
    <div class="btn-list">
       <div class="glasses"></div>
       <btn-list ref="btn" v-for="item in keys" :computerval="item"></btn-list>
    </div>
  </div>
</template>

<script>
import btnList from '../components/btnList'
import bgList from '../components/bgList'
import store from  '../store/store.js'
export default {
  components:{
    btnList,
    bgList
  },
  data () {
    return {
      keys: [
        'clear', '+', '-', '*',
          '7', '8', '9', '/',
          '4', '5', '6', '0',
          '1', '2', '3', '=',
      ],
      heightval: ''
    }
  },
  computed:{
    result(){
      //通过this.$store获取仓库的数据result
      return store.state.result;
    },
    calval(){
     //通过this.$store获取仓库的数据result
      return store.state.enter;
    },
    imgval(){
      return store.state.bgsrc || require('../assets/1.jpg');
    }
  },
  created(){
　　  this.heightval = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
　　  this.widthval = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }
}
</script>
<style scoped>
  .bg{
    background-size: auto 100%;
    background-position: center;
    transition: ease 0.6s;
    background-repeat: no-repeat;
  }
  .btn-list{
    width: 100%;
    height: 280px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .glasses{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(255,255,255,.8);
    filter: blur();
  }
  .btn-list .btn{
    width: 25%;
    text-align: center;
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    z-index: 1;
  }
  .result{
    position: absolute;
    bottom: 360px;
    font-size: 46px;
    word-break: break-all;
    text-align: right;
  }
  .result span{
    display: block;
    width: calc(100% - 1rem);
  }
  .enter{
    position: absolute;
    right: 1.3rem;
    bottom: 280px;
    height: 40px;
    font-size: 20px;
  }
</style>
