// vite.config.js  
import { defineConfig } from 'vite';  
import vue from '@vitejs/plugin-vue';  

export default defineConfig({  
  plugins: [vue()],  
  build: {  
    rollupOptions: {  
      input: {  
        main: 'index.html',  
        chat: 'chat.html', // 添加一个新的入口  
      }  
    }  
  }  
});