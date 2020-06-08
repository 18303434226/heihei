<template>
    <div>
        <h2 @click='bbb'>{{eig}}{{$attrs}}</h2>
        <age v-bind="$attrs" v-on='$listeners' />
    </div>
</template>
<script>
import age from '@/components/age.vue'
export default {
    props:{
        eig:String
    },
    inject:['test'],
    components:{
        age
    },
    methods:{
        bbb(){
            this.$emit('bbb','组件b')
            this.test.b='B'
        }
    }
}
</script>
<style scoped>

</style>