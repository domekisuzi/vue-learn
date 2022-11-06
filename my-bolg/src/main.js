import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';
import Element  from 'element-plus'
import {createPinia} from "pinia";

VMdPreview.use(githubTheme, {
    Hljs: hljs,
});
const  pinia = createPinia()
const app = createApp(App);

app.use(router)
app.use(VMdPreview)
app.use(pinia)
app.use(Element)
app.mount('#app')