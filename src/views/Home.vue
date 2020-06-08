<template>
  <div>
    <!-- <keep-alive> -->
    <HelloWorld msg='HelloWorld' name='world' eig='18' @aaa='aaa' @bbb='bbb' @ccc='ccc' />
    {{a}}
    {{b}}
    <a href="https://ae01.alicdn.com/kf/U6de089ce45ff468a8f06c50e19ad7379N.jpg">下载</a>
    <span @click="router">跳转</span>
    {{$store.state.defau.name}}
    <button @click="setName">更改</button>
     <button @click="getName">更改</button>
     <components :is='test'></components>
     <!-- </keep-alive> -->
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  data(){
    return{
      a:'',
      b:1,
      f:true,
      test:''
    }
  },
  mounted(){
    // if(window.localStorage.getItem('name')){
    //     this.$store.state.defau.name = window.localStorage.getItem('name')
    //   }
    // (async ()=>{
      
    //   let m = await this.$store.dispatch('_getList')
    //   console.log(m.data.data)
    // })()

    // this.$http = axios
    // console.log(this.$http.jsonp)
    // http://39.97.33.178/getLocation'
    axios.get('https://gank.io/api/v2/banners').then((res)=>{
      console.log(res)
    })
  },
  watch:{
    a(newb,oldb){
      // return newb = '我是你爹'
      console.log(newb)
    }
  },
  components: {
    HelloWorld
  },
  provide(){
    return{
      test:this
    }
  },
  methods:{
    router(){
      // var a = 123
      // console.log(1)
    
      this.$router.push({name:'biancheng',params:{
        a : this.b
      }})
    },
    getName(){
      this.$router.push({name:'cmd',params:{
        a : this.b
      }})
    },
    aaa(a){
      this.a = a
    },
    bbb(b){
      this.a =  b
    },
    ccc(c){
      this.a = c
    },
    setName(){
      var a = '张三'
      this.f = !this.f
      console.log(this.f)
      // else{
        this.$store.getters.dontodos
        window.localStorage.setItem('name',a)
      // }
    }
  }
}
</script>