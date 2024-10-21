<template>  
    <div>  
        <header class="header">  
            <div class="navbar">  
                <h1>聊天应用</h1>  
                <div class="nav_button">  
                    <button @click="goBack">返回</button>  
                    <button @click="toggleSidebar">设置</button>  
                </div>  
            </div>  
        </header>  
        <main>  
            <div class="sidebar" :class="{ active: sidebarActive }">  
                <h2>设置</h2>  
                <div class="settings">  
                    <div class="settings-item">  
                        <label>选择对话：</label>  
                        <div class="scrollable-list">  
                            <label v-for="(dialog, index) in dialogs" :key="index">  
                                <input type="checkbox" v-model="selectedDialogs[index]" /> {{ dialog }}  
                            </label>  
                        </div>  
                    </div>  
                    <div class="settings-item">  
                        <p>背景颜色：</p>  
                        <input type="color" v-model="backgroundColor" @input="changeBackgroundColor"/>  
                    </div>  
                    <div class="settings-item">  
                        <label>AI回答长度：</label>  
                        <label class="switch">  
                            <input type="checkbox" v-model="shortAnswer" />  
                            <span class="slider"></span>  
                        </label>  
                        <span>短</span>  
                    </div>  
                </div>  
            </div>  
            <div class="main-content">  
                <div class="chat-window">  
                    <div class="chat-messages" ref="chatMessages">  
                        <div v-for="(message, index) in messages" :key="index">  
                            <p class="user-message">{{ message.user }}</p>  
                            <p class="ai-message">{{ message.ai }}</p>  
                        </div>  
                    </div>  
                    <div class="input-area">  
                        <textarea v-model="newMessage" placeholder="输入消息..."></textarea>  
                        <button @click="sendMessage">发送</button>  
                    </div>  
                </div>  
            </div>  
        </main>  
        <footer>  
            &copy; 2024 OpenJT  
        </footer>  
    </div>  
</template>  

<script>  
export default {  
    data() {  
        return {  
            sidebarActive: false,  
            dialogs: ["对话 1", "对话 2", "对话 3", "对话 4", "对话 5"],  
            selectedDialogs: Array(5).fill(false),  
            backgroundColor: "#ffffff",  
            shortAnswer: false,  
            messages: [],  
            newMessage: '',
        };  
    },  
    mounted() {  
        // 设置初始背景色  
        document.body.style.backgroundColor = this.backgroundColor;  
    },  
    methods: {  
        goBack() {  
            window.history.back();  
        },  
        toggleSidebar() {  
            this.sidebarActive = !this.sidebarActive;  // 切换侧边栏状态  
        },  
        changeBackgroundColor() {  
            document.body.style.backgroundColor = this.backgroundColor; // 根据选中的颜色改变背景色  
        },  
        async sendMessage() {  
            const userMessage = this.newMessage.trim();  

            if (userMessage) {  
                this.messages.push({ user: userMessage, ai: '发送中...' }); // 将用户消息添加到消息列表中  
                this.newMessage = ''; // 清空输入框  

                // 滚动到最新消息  
                this.$nextTick(() => {  
                    const chatMessages = this.$refs.chatMessages;  
                    chatMessages.scrollTop = chatMessages.scrollHeight;  
                });  

                // 发送请求到 Flask 后端  
                try {  
                    const response = await fetch('https://232d-47-109-131-189.ngrok-free.app//call_agent', {  
                        method: 'POST',  
                        headers: {  
                            'Content-Type': 'application/json'  
                        },  
                        body: JSON.stringify({ prompt: userMessage })  
                    });  

                if (!response.ok) {  
                    throw new Error('网络响应不合法');  
                 }  

                    const data = await response.json();  
                    this.messages[this.messages.length - 1].ai = data.output.text; 
                } catch (error) {  
                    console.error('请求失败:', error);  
                 // 显示请求失败信息  
                    this.messages[this.messages.length - 1].ai = '请求失败: ' + error.message; // 直接赋值  
                }  
            }  
        }
    }  
};  
</script>  

<style scoped>  
@import '../assets/chatbot.css';  
</style>