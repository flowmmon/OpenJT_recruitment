// main.js  
import { createApp } from 'vue';  
import Chat from './views/chatBot.vue'
import router from './router'; // 导入 router  

const chat = createApp(Chat); // 创建 Vue 应用实例   
chat.use(router); // 使用路由   
chat.mount('#chat'); // 挂载到 DOM