<template>
    <div>
        <h3 @click='ccc'>{{name}}{{$attrs}}</h3>
        <sex name='123' ahe=20 />
    </div>
</template>
<script>
import sex from '@/components/sex.vue'
export default {
    props:{
        name:String
    },
    inject:['test'],
    components:{
        sex
    },
    methods:{
        ccc(){
            console.log(this.$store.state.name)
            this.$emit('ccc','组件c')

            this.test.b='C'
        }
    }
}
</script>
<style scoped>

</style>