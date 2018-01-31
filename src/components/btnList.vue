<template>
    <div class="btn" @click="getKeyboardValue">{{ computerval }}</div>
</template>
<script>
  export default{
    props: ['computerval'],
    data(){
      return{

      }
    },
    methods:{
       //点击事件处理函数
      getKeyboardValue(event){
         //获取当前的按键的值
         let value = event.target.innerHTML
         //通过commit提交mutation
         this.$store.commit('calculate',value)
       }
    }
  }
</script>

<style scoped>
  .btn{
    float: left;
  }
</style>
