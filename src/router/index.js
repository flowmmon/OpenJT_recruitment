import { createRouter, createWebHistory } from 'vue-router';  
import ChatBot from '../views/chatBot.vue'; // 确保路径正确  
import APP from '../APP.vue';

const routes = [  
    {
        path:'/',
        name:'Home',
        component:APP,
    },

    {  
        path: '/Jt',  
        name: 'Jt',  
        component: ChatBot,  
    },  
 
];  

const router = createRouter({  
    history: createWebHistory(),  
    routes,  
});  

export default router;