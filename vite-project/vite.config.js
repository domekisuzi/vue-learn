import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import AutoImport from 'unplugin-auto-import/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            //配置自动导入,可以不手动引用ref之类的
            imports: ['vue', 'vue-router']
        }),],

    server: {
        proxy: {
            //path，随便写
            '/path': {
                target: 'http://domekisuzi.fun:7777',
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
    }
})
