module.exports = {
    devServer:{
        proxy:{ 
            '/api':{//代理接口api
                target:'http://39.97.33.178', //反向代理的目标
                changeOrigin:true //是否改变反向地址
            }
        }
    }
}