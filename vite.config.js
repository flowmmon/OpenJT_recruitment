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
    },
    outDir: 'dist',  // 生产构建输出目录  
    assetsDir: 'assets',  // 静态资源存放目录  
    sourcemap: true,  // 是否生成 Source Map  
  },
  resolve: {  
    alias: {  
      '@': '/src',  // 设置路径别名  
    },  
  }

});