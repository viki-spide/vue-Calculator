<template>
  <div>
    <div class="bg-group" @click="show"></div>
    <div class="choice-area" v-if="isshow">
        <img v-for="(item,index) in imgsrc" @click="change" :src="item.src" :index="index+1" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isshow: false,
        imgsrc:[
            {src: require('../assets/1.jpg')},
            {src: require('../assets/2.jpg')},
            {src: require('../assets/3.jpg')}
        ]
      }
    },
    methods:{
      change(){
        let src = event.target.attributes.index.value
        this.$store.commit('changebg', src)
        this.isshow = !this.isshow
      },
      show(){
        this.isshow = !this.isshow
      }
    }
  }
</script>

<style scoped>
  .bg-group{
    width: 1rem;
    height: 1.2rem;
    position: absolute;
    left: 12px;
    top: 12px;
    background: url(../assets/icon.png) no-repeat;
    background-size: contain;
  }
  .choice-area{
    display: block;
    width: 80%;
    height: 300px;
    margin: auto;
    overflow: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-80%);
    background-color: #fff;
    z-index: 99;
    border-radius: 10px;
  }
  .choice-area img{
    justify-content: space-between;
    flex-wrap: wrap;
    width: 33.33%;
    height: 140px;
  }
</style>
