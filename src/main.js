// main.js  
import { createApp } from 'vue';  
import App from './APP.vue';  
import router from './router'; // 导入 router  

const app = createApp(App); // 创建 Vue 应用实例   
app.use(router); // 使用路由   
app.mount('#app'); // 挂载到 DOM