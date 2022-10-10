import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//vue 高版本的写法
import  path from 'path'
//vue3.0 的写法
// const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
      vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      //配置自动导入,可以不手动引用ref之类的
      imports:['vue','vue-router']
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  //中转服务器，通过代理实现跨域
  server:{
    proxy: {
      //path，随便写
      '/path': {
        target: 'http://domekisuzi.fun:7777',
        changeOrigin: true, //开启代理允许跨域
        rewrite: path => {
          // console.log(path + "替换前");
          const s = path.replace(/^\/path/, '')//设置重写的路径}
          // console.log(s)
          return s
        }
      }
    }
  },
  //配置别名
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src'),
    }
  }
})
