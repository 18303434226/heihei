<template>
  <div class="hello">
    <h1 @click='aaa'>{{msg}}{{$attrs}}</h1>
    <name v-bind="$attrs" v-on='$listeners' />
    <!-- <h2>{{$attrs}}</h2> -->
  </div>
</template>

<script>
import name from '@/components/name.vue'
export default {
  data(){
    return{
      f:true
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components:{
    name
  },
  inject:['test'],
  methods:{
    abc(){
      var abc = '跳转'
      
      // this.$router.push({path:`/biancheng`,query:{
      //   abc
      // }})
    },
    aaa(){
      this.$emit('aaa','组件a')
      console.log(this.test.aaa)
      this.test.b='A'
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
