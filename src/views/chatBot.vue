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
                            <div v-for="(dialog, index) in dialogs" :key="index" class="dialog-item">  
                                <input type="button" :value="dialog" @click="selectDialog(index)" />  
                                <button @click="removeDialog(index)">删除</button>  
                            </div>  
                            <button @click="addDialog" :disabled="dialogs.length >= 10">添加对话</button>  
                        </div>  
                    </div>  
                    <div class="settings-item">  
                        <p>背景颜色：</p>  
                        <input type="color" v-model="backgroundColor" @input="changeBackgroundColor" />  
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
                        <div v-for="(message, index) in messages" :key="index" class="message-container">  
                            <p class="user-message">{{ message.user }}</p>  
                            <p class="ai-message" v-html="convertMarkdownToHtml(message.ai)"></p>   
                        </div>  
                    </div>  
                    <div class="input-area">  
                        <textarea v-model="newMessage" placeholder="输入消息..." rows="3"></textarea>  
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
import { marked } from 'marked';

export default {  
    data() {  
        return {  
            sidebarActive: false,  
            dialogs: ["对话 1"],  
            backgroundColor: "#ffffff",  
            shortAnswer: false,  
            messages: [],  
            newMessage: '',  
            currDialogIndex: 0,  
        };  
    },  
    mounted() {  
        // 在组件加载时从 localStorage 恢复数据  
        const storedDialogs = localStorage.getItem('dialogs');  
        const storedMessages = localStorage.getItem('messages');  
        const storedCurrDialogIndex = localStorage.getItem('currDialogIndex');  

        if (storedDialogs) {  
            this.dialogs = JSON.parse(storedDialogs); // 恢复对话列表  
        } else{
            localStorage.setItem(this.dialogs[this.currDialogIndex], JSON.stringify(this.messages));  
        } 

        if (storedMessages) {  
            this.messages = JSON.parse(storedMessages); // 恢复当前对话的消息  
        }  

        if (storedCurrDialogIndex !== null) {  
            this.currDialogIndex = parseInt(storedCurrDialogIndex, 10); // 恢复当前对话索引  
        }  

        // 设置初始背景色  
        document.body.style.backgroundColor = this.backgroundColor; 

        this.selectDialog(this.dialogs[this.currDialogIndex]);
    },  
    beforeUnmount() {  
        // 当组件卸载时保存数据到 localStorage  
        localStorage.setItem('dialogs', JSON.stringify(this.dialogs));  
        localStorage.setItem('messages', JSON.stringify(this.messages)); 
        localStorage.setItem('currDialogIndex', this.currDialogIndex);  
    },
    methods: {
        convertMarkdownToHtml(markdown) {  
            return marked(markdown);
        },    
        goBack() {  
            window.history.back();  
        },  
        toggleSidebar() {  
            this.sidebarActive = !this.sidebarActive; // 切换侧边栏状态  
        },  
        changeBackgroundColor() {  
            document.body.style.backgroundColor = this.backgroundColor; // 改变背景色  
        },  
        addDialog() {  
            if (this.dialogs.length < 10) {  
                const newDialogName = `对话 ${this.dialogs.length + 1}`;  
                this.dialogs.push(newDialogName);  
                this.selectDialog(this.dialogs.length - 1);   
            }  
        },  

        removeDialog(index) {  
            if (this.dialogs.length > 0) {  
                if (index < 0 || index >= this.dialogs.length) {  
                    console.error("Index out of bounds");  
                    return;  
                }  
 
                const dialogName = this.dialogs[index];  
                this.dialogs.splice(index, 1);  
                if (index === this.currDialogIndex) {  
                    this.messages = []; 
                    if (this.dialogs.length > 0) {  
                        // 选择下一个对话  
                        this.selectDialog(index < this.dialogs.length ? index : this.dialogs.length - 1);  
                    } else {  
                        // 如果没有对话，重置到初始状态  
                        this.currDialogIndex = -1; // 或者其他适合的默认状态  
                    }  
                } else if (index < this.currDialogIndex) {  
                    // 如果删除的对话在当前对话之前，更新 currDialogIndex  
                    this.currDialogIndex--;  
                }  

                // 从 localStorage 中移除对应对话的数据  
                window.localStorage.removeItem(dialogName);  
        
                // 如果没有剩余对话时清空 localStorage  
                if (this.dialogs.length === 0) {  
                    window.localStorage.clear();  
                }  
            }  
        },  

        async selectDialog(index) {  
            // 检查 index 的有效性  
            if (index < 0 || index >= this.dialogs.length) {  
                console.error("Invalid dialog index");  
                return;  
            }  

            // 保存当前对话到 localStorage  
            localStorage.setItem(this.dialogs[this.currDialogIndex], JSON.stringify(this.messages));   
            this.messages = []; // 清空之前的消息  
            this.currDialogIndex = index;  

            // 从 localStorage 中获取新对话的消息  
            const storedMessages = localStorage.getItem(this.dialogs[this.currDialogIndex]);  
            this.messages = storedMessages ? JSON.parse(storedMessages) : [];  
                },  

        async sendMessage() {  
            const userMessage = this.newMessage.trim();  
            if (userMessage) {  
                this.messages.push({ user: userMessage, ai: '发送中...' }); // 添加用户消息  
                this.newMessage = ''; // 清空输入框  

                // 滚动到最新消息  
                this.$nextTick(() => {  
                    const chatMessages = this.$refs.chatMessages;  
                    chatMessages.scrollTop = chatMessages.scrollHeight;  
                });  

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
                    localStorage.setItem(this.dialogs[this.currDialogIndex], JSON.stringify(this.messages)); // 保存到 localStorage  
                } catch (error) {  
                    console.error('请求失败:', error);  
                    this.messages[this.messages.length - 1].ai = '请求失败: ' + error.message; // 显示错误信息  
                }  
            }  
        }
    }  
};  
</script> 

<style scoped>  
@import '../assets/chatbot.css';  
.dialog-item {  
    display: flex;  
    align-items: center;  
    margin-bottom: 5px;  
}  
.dialog-item input[type="button"] {  
    margin-right: 10px;  
}  
</style>