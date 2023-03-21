import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      //配置自动导入,可以不手动引用ref之类的
      imports: ['vue', 'vue-router']
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  server: {
    proxy: {
      //path，随便写，分为本地及远程模式
      '/path': {
        target: 'http://domekisuzi.fun:7776',
        // target: 'http://127.0.0.1:7777',
        changeOrigin: true, //开启代理允许跨域
        rewrite: path => {
          // console.log(path + "替换前");
          return path.replace(/^\/path/, '')//设置重写的路径}
        }
      }
    }
  },
  //配置别名

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  base:'/bigdata/'
})
