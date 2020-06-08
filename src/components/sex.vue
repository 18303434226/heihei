<template>
    <div>
        {{name}}{{ahe}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            a:''
        }
    },
    props:{
        name:{
            type:String,
            default:200
        },
        ahe:{
            type:String,
            default:300
        }
    },
    methods:{

    }
}
</script>
