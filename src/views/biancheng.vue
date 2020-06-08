<template>
    <div>
        <div v-for="(item,index) in b" :key="index">
            <div v-if="c" :class='c?red:blue'>
                {{item.name}}
            </div>
        </div>
        <button @click='c?t():s()'>
            按钮
        </button>
        {{$store.state.defau.name}}
        {{d}}
        <!-- <router-link :to='d'><button>回退</button></router-link> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            a:'',
            b:[
                {name:'123'},
                {name:'123'},
                {name:'123'},
                {name:'123'}
            ],
            c:false,
            red : 'red',
            blue : 'blue',
            d:''
        }
    },
    mounted(){
       this.a = this.$route.params.a
        this.d = this.$route.query.a
       if (window.history && window.history.pushState) {
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.goBack, false);
        }
    },
    destroyed () {
      window.removeEventListener('popstate', this.goBack, false);
    },
    beforeUpdate(){
        console.log('data被修改')
    },
    updated(){
        console.log('重新渲染')
    },
    methods:{
        t(){
            this.c = !this.c
            console.log(1)
        },
        s(){
            this.c = !this.c
            console.log(2)
        },
         goBack: function(){
            this.$router.push(this.d)
        }
    },
    
}
</script>
<style scoped>
    .red{
        color: red;
    }
    .blue{
        color:blue;
    }
</style>