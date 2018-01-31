import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
  state:{
      result:"",//运算结果
      enter:"",  //输入的值
      prevval:"",
      bgsrc: ""
  },
  mutations:{
    calculate(state,value){
        if (state.enter === '') {
          if(value === '=' || value === '-' || value === '+' || value === '*' || value === '/') return;
        }
        if(value === '=' || value === '-' || value === '+' || value === '*' || value === '/'){
          if(state.prevval === '=' || state.prevval === '-' || state.prevval === '+' || state.prevval === '*' || state.prevval === '/') return
        }
        state.prevval = value;
        if(value === '='){
          //按键的值为=，进行结果计算
          state.result = eval(state.enter);
          state.enter += value;
          state.enter = '';
        }else if(value === 'clear'){
          //按键的值为clear，清空数据
          state.result = state.enter = "";
        }else{
          //输入结果enter进行拼接
          state.enter += value;
        }
    },
    changebg(state,value){
       state.bgsrc = require('../assets/'+value+'.jpg')
    }
  }
});
