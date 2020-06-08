<template>
    <div>
        {{a}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            a:''
        }
    },
    mounted(){
    //    this.a = this.$route.params.a
    //    console.log(this.a)
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            // console.log(vm.a)
            if(vm.a){
                next()
            }else{
                // console.log()
                let type = from.path
                console.log(type)
                next({path:'/biancheng',query:{
                    a : type
                }})
            }
        })
    // if(){
    //     next(vm=>{
            
    //     })
    //     }else{
    //         next('/')
    //     }
    // }

    }
}
</script>
<style scoped>



</style>