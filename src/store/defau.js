import axios from 'axios'
const state={
   name : window.localStorage.getItem('name') || '傻逼'
}
const actions={
    // editfrom(context,n){
    //     context.commit('increment',n)
    // }
    _getList(context,option){
        return axios.get('https://gank.io/api/v2/data/category/GanHuo/type/Android/page/1/count/10').then((res)=>{
            return res
        })
    }
}
const mutations={
    increment(state,n){
        console.log(n)
        state.name = n
    }
}
export default{
    state,
    actions,
    mutations,
}