<template>  
    <div>  
        <header class="header">  
            <div class="navbar">  
                <h1>JoTangLM</h1>  
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
        // 从 localStorage 中恢复数据  
        this.loadFromLocalStorage();  

        // 设置初始背景色  
        document.body.style.backgroundColor = this.backgroundColor;  

        // 选择当前对话  
        this.selectDialog(this.currDialogIndex);  
    },  
    methods: {  
        loadFromLocalStorage() {  
            const storedDialogs = localStorage.getItem('dialogs');  
            const storedMessages = localStorage.getItem(this.dialogs[this.currDialogIndex]); // 根据当前对话索引加载消息  
            const storedCurrDialogIndex = localStorage.getItem('currDialogIndex');  

            // 恢复对话列表  
            if (storedDialogs) {  
                this.dialogs = JSON.parse(storedDialogs);  
            } else {  
                // 如果没有存储的对话，则初始化一个对话  
                this.dialogs = ["对话 1"];  
                localStorage.setItem('dialogs', JSON.stringify(this.dialogs));  
            }  

            // 恢复当前对话索引  
            if (storedCurrDialogIndex !== null) {  
                this.currDialogIndex = parseInt(storedCurrDialogIndex, 10);  
            } else {  
                this.currDialogIndex = 0;  
                localStorage.setItem('currDialogIndex', this.currDialogIndex);  
            }  

            // 恢复当前对话的消息  
            if (storedMessages) {  
                this.messages = JSON.parse(storedMessages);  
            } else {  
                this.messages = []; // 如果没有消息，则初始化为空  
            }  
        },  

        convertMarkdownToHtml(markdown) {  
            return marked(markdown);  
        },  
        goBack() {  
            window.history.back();  
        },  
        toggleSidebar() {  
            this.sidebarActive = !this.sidebarActive;  
        },  
        changeBackgroundColor() {  
            document.body.style.backgroundColor = this.backgroundColor;  
        },  
        addDialog() {  
            if (this.dialogs.length < 10) {  
                const newDialogName = `对话 ${this.dialogs.length + 1}`;  
                this.dialogs.push(newDialogName);  
                this.selectDialog(this.dialogs.length - 1);  
                localStorage.setItem('dialogs', JSON.stringify(this.dialogs));  
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
                    // 如果对话被删除，选择下一个对话  
                    if (this.dialogs.length > 0) {  
                        this.selectDialog(index < this.dialogs.length ? index : this.dialogs.length - 1);  
                    } else {  
                        this.currDialogIndex = -1; // 或者其他适合的默认状态  
                    }  
                } else if (index < this.currDialogIndex) {  
                    // 更新当前对话索引  
                    this.currDialogIndex--;  
                }  

                // 清除对应对话的消息存储  
                localStorage.removeItem(dialogName);  
                localStorage.setItem('dialogs', JSON.stringify(this.dialogs));  

                // 如果没有剩余对话时清空 localStorage  
                if (this.dialogs.length === 0) {  
                    localStorage.clear();  
                }  
            }  
        },  

        async selectDialog(index) {  
            // 检查 index 的有效性  
            if (index < 0 || index >= this.dialogs.length) {  
                console.error("Invalid dialog index");  
                return;  
            }  

            // 保存当前对话的消息到 localStorage  
            localStorage.setItem(this.dialogs[this.currDialogIndex], JSON.stringify(this.messages));  
            this.messages = []; // 清空之前的消息  
            this.currDialogIndex = index;  
            localStorage.setItem('currDialogIndex', this.currDialogIndex);  

            // 获取新对话的消息  
            const storedMessages = localStorage.getItem(this.dialogs[this.currDialogIndex]);  
            this.messages = storedMessages ? JSON.parse(storedMessages) : [];  

            this.$nextTick(() => {  
                const chatMessages = this.$refs.chatMessages;  
                chatMessages.scrollTop = chatMessages.scrollHeight;  
            });  
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

                    // 保存到 localStorage   
                    localStorage.setItem(this.dialogs[this.currDialogIndex], JSON.stringify(this.messages));  
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