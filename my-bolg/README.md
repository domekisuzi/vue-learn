# 快速搭建一个vue3+Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

你需要配置以下内容：

创建新项目：npm init vite [project-name]

自动导入插件

npm install unplugin-auto-import -S

并在你的代码vite.config 文件中配置



    export default defineConfig({
    plugins: [vue(),
    AutoImport({
    resolvers: [ElementPlusResolver()],
    //配置自动导入,可以不手动引用ref之类的
    imports: ['vue', 'vue-router']
    }),
      Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
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


引入element-plus:爆好康UI

npm install element-plus --save

下载element-plus 按需引入插件

npm install -D unplugin-vue-components

下载pinia插件

npm i -S pinia

以及

npm i -S pinia-plugin-persist

下载 router

npm install vue-router

引入markdown插件（必须） 注意：这个不知包含了markdown解析，同样包含了markdown的编辑器等等

npm i @kangc/v-md-editor@next -S  xx

在app中使用： 

        import Vue from 'vue';
        import VueMarkdownEditor from '@kangc/v-md-editor';
        import '@kangc/v-md-editor/lib/style/base-editor.css';
        import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
        
        VueMarkdownEditor.use(vuepressTheme);
        
        Vue.use(VueMarkdownEditor);

真正的引入显示markdown的插件：
