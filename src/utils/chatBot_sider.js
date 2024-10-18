//返回上一个界面的js
function goBack() {
    window.history.back();
}

//颜色输入框的js
document.addEventListener("DOMContentLoaded", function() {  
    const sidebar = document.querySelector(".sidebar");  
    const settingsButton = document.getElementById("settings-btn");  

    // 初始背景色设置为黑色  
    const initialColor = "white"; // 默认为白色  
    document.body.style.backgroundColor = initialColor;  

    // 设置颜色输入框的默认值为黑色  
    const colorInput = document.querySelector('input[name="settings_colorbox"]');  
    colorInput.value = initialColor; // 设置颜色选择器初始值为白色  

    // 切换侧边栏状态  
    settingsButton.addEventListener("click", function() {  
        sidebar.classList.toggle("active");  
    });  

    // 处理颜色输入框变化  
    colorInput.addEventListener("input", function() {  
        document.body.style.backgroundColor = this.value; // 根据选中的颜色改变背景色  
    });  
});

//创建对话的js
document.getElementById('send-btn').addEventListener('click', function() {  
    const messageInput = document.querySelector('.input-area textarea');  
    const chatMessages = document.querySelector('.chat-messages');  

    const userMessage = messageInput.value.trim();  
    if (userMessage) {  
        // 将用户消息添加到消息列表  
        chatMessages.innerHTML += `<div class="message user-message">${userMessage}</div>`;  
        
        // 清空输入框  
        messageInput.value = '';  

        // 假设这里是AI的回应  
        const aiMessage = `AI 消息（模拟）: ${userMessage}`;  
        chatMessages.innerHTML += `<div class="message ai-message">${aiMessage}</div>`;  

        // 滚动到最新消息  
        chatMessages.scrollTop = chatMessages.scrollHeight;  
    }  
});
