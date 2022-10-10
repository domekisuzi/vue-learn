import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import  path from 'path'
// const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  //中专服务器，通过代理实现跨域
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
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src'),
    }
  }
})
