# OpenJT	前端学习记录



### Day 1 	2024.9.29

-----

#### 前言

为什么想学前端？其实是打比赛估计很缺前端（笑）。抱着解决万一哪天我真去打比赛我们组没有一个人会前端的的尴尬问题的想法(要是能跟工作室的各位组队就更好了)，我决定去挑战这次的技术马拉松。

还有一个原因，我之前了解过一点 html + css，我想真正学到一些技术，而不是浪费前面的学习成果。最后，祝我好运！



#### 网站设计

我现在脑子里没有任何的 idea 。于是我打算看看各个网站的布局设计（指路[Siteinspire | Cobble Hill Towers](https://www.siteinspire.com/websites/1664-cobble-hill-towers>)），使用webflow网站探索布局(<[Webflow: Create a custom website | Visual website builder](https://webflow.com/?utm_source=siteinspire&utm_medium=referral&utm_campaign=partnerships)>)。其实我觉得webflow的布局就不错...

但是好多控件的布局代码超出了我的知识储备，看不太懂，还是慢慢学吧。今日开始构建导航栏，按照openAi的网页结构大致分成了三个区域：header(nav),main,footer，并构建了基本形状。编写了nav.css以及body.css文件。



#### 声明

由于我的知识体系有些混乱，所以暂时不会从头做学习笔记，而是先一步步尝试搭建框架，并对遇到的问题进行解决，一些学习笔记在文件夹下面的Learning Css子目录下面，不时更新。







### Day  2 	2024.9.30

---

#### 昨日总结

昨天进行了导航条的初步布局工作，并拟定了两个区块：logo 区和导航栏目区，但是在实现的过程中遇到了几个难题：

1） logo 的大小和位置不好调整。我的logo原尺寸很大，直接加载会超出导航栏 nav ，于是我在 img 外面包裹了一层 wrapper ，以限制图片的展示区域，height 加上 max-height : 80%  的限制，确保 img_wrapper 高度与周围的文字比例协调。还有一点，如果对 img_wrapper 父 div ( nav )  直接使用 align-item ，会导致图片的左上角与导航栏的垂直中心线对齐。我使用 translate 将图片向左上平移了 50% ，解决问题。

2）导航栏目区布局方式。原来我打算使用一个 wrapper 包裹下面的子项目 div，但是需要合理调整他们的整体样式，分别编写 css ，比较难以管理。我借鉴了 webflow 导航栏的布局模式，使用无序列表 + css 完成了布局，好处是可以一劳永逸，只需编写 li 元素的 css，便可以直接应用于后面添加的栏目，同时对网页的尺寸变化响应更合理。



#### 今日进度

今天给导航栏新加入了一个搜索栏。作为 nav 的第二个子元素，其内部由 input 表单和一个放大镜 svg 组成。为了整体看起来比较和谐，我的 navbar_search （即搜索栏）设置了border_radius，同时把 border-width 设置成 1px 。图片按照前面的处理方式处理，高度缩小为 30px 。之后考虑做导航栏的悬停伪类效果。 



### Day 3    2024.10.2

---

#### 今日进度

由于在旅游期间抽空写的代码，所以今天只是完成了轮播图的 html 结构的设计，以及图片的居中处理。至于轮播，我现在考虑使用 css + javascript 完成。好像图片的高度出了问题，下一次再修理。今天先到这。

 

### Day 4    2024.10.3

---

#### 今日进度

今天还在旅游。抽空完成了轮播图的主界面，具体情况我回学校再记录。我将 slider_wrapper 的高度改为定高 500px 而不是 30% ，成功解决无法调整高度的问题。我还给轮播图图片加上了 :hover 的指针悬停效果，本来想用 animation 来完成的，看网上还有使用 transition 解决问题的方法，于是使用了 transition 解决问题。今天还加入了两个 aside ，用来显示上一个和下一个图片（学习OpenAi），至于轮播，就要 javascript 解决了。 今天发现 aside 的 imgwrapper 大小不正确，明天再修改。



### Day 5    2024.10.4

---

#### 今日进度

今日是旅游的最后一天。完成了轮播图的界面，但是轮播图下面的页面提示圆点没有完成。我现在在思考，到底是使用 aside-main-aside 的方法实现界面（静态布局方便），还是改为一个整体（方便做动画）。这几天我尝试做做。



### Day 6    2024.10.5

---

#### 今日进度

其实这一篇是第二天早上才上传的，因为我昨天忘记了......

完成了轮播图下方的小圆点。我一开始以为是使用圆 svg 完成的，在我查看 OpenAi 的官网后才发现他们使用了 button 完成，这样做方便了绑定事件，妙啊！

同时，还打下了下一个区域的框架，我使用不同的背景颜色表明了区域结构。



### Day 7	2024.10.6

---

#### 今日进度

跟着教程，制作了一个点击展开式的栏目（本来想学 webflow 的，但是发现没这个技术），实际上使用了 active 类和 javascript 来决定栏目是否被展开。感觉里完成不远了......





### Day8	2024.10.7

---

#### 今日进度

今天完成了页脚的搭建，并加上了一些简单的效果。说实话，我开始有点怀疑我能不能做得完。昨天说完成不远了，那是搭建静态的网页， javascript 都没有用上。今天看 mdn 文档，看个 promise 有点晕了，发现自己的知识储备还是太少了。不过我还是会尽力完成，就算不过也是进步，谁不需要一个过程呢？当然，希望 "JT" 真对我 "Open" （笑）。



### Day 9   2024.10.10

---

#### 今日进度

这几天在写作业和学习 js Dom API. 尝试实现轮播图，但是有 bug : 目前采用对 slider 区采用了对中心区域显示的部分使用 active 类显示，其他 remove active 来隐藏 ，同时在两侧加载之前和之后的图片。就是不太流畅，没有加上过渡动画。加油了！ 



### Day 10	2024.10.13

---

#### 今日进度

这几天在设计对话界面。对话界面的大体思路是：

#### 1. **总体布局**

**顶部导航栏**：

Logo（OpenJT）

“关于我们”链接

“帮助中心”链接

用户个人设置按钮（如：主题、输出长度等）

**主对话区域**：

左侧：会话列表（可选、显示最近的多个会话）

右侧：当前会话窗口（显示多轮对话）

**底部输入框**：

文本输入框

发送按钮

可选的插入表情/文件的图标

#### 2. **功能模块**

**会话管理**：

用户可以随时创建新会话、切换会话、删除会话

会话历史保存在本地，方便用户再次访问

**自定义选项**：

**网页配色**：用户可以选择主题（如浅色、深色或自定义颜色）。

**AI输出长度**：_slider_来选择短、中、长回复，实时预览效果。

保存自定义设置到本地存储，用户下次访问时保持设置。

**多轮对话**：

对话气泡区分用户与AI（不同颜色/样式）

可折叠的历史记录，用户可以轻松查看和回溯之前的对话。

#### 3. **UI设计细节**

**对话气泡**：

用户消息为右侧对齐，气泡背景较为醒目。

AI消息为左侧对齐，气泡背景与主题色一致。

**互动元素**：

发送按钮可使用动效，点击时有反馈。

输入框可支持Markdown格式，让用户可以格式化输入内容（如加粗、斜体）。

**帮助提示**：

在输入框下方添加提示文本，例如“输入您的问题…”或“按Enter发送消息”。

#### 4. **技术实现**

**前端**：

使用HTML、CSS和JavaScript构建界面，可采用React或Vue.js等框架实现动态效果。

使用CSS变量实现主题色的动态切换。

**后端**：使用API与AI模型交互，处理用户请求。

利用浏览器的本地存储（localStorage）实现用户数据的持久化。

**多会话管理**：

会话状态保存在本地存储中，以便在页面刷新后仍然可用



今天设计好了样式。这几天看看修改样式和js框架。



### Day 11	2024.10.16

---

#### 今日进度

第一次这么早更新。

这几天我基本完成了网页界面的一些修改，比如对话框的调整，随对话生成对话框并调整，虽然很多细节还是没有完成，因为时间比较赶。关键性功能--即 GPT API 还没有引入，不过也已经获得了阿里云通义千问的 api ，考虑怎么构建应用（目前是考虑将用户的提问通过ajax 发送至专门处理回答的程序，然后由这个程序向通义千问发送问题，返回的回答发送给网页）。为什么急着记录，是因为我已经将网页部署到 vercel 上了，链接 [在这里](https://vercel.live/link/open-jt-recruitment-best-initiators-projects.vercel.app?via=project-dashboard-alias-list&p=1) ，离主线任务介绍差的不远了。还有一些任务：

1）对话的存储，对话界面多分支的创建与切换；

2）主界面轮播图的优化；

3）电子图表的创建与展示。

继续加油！



### Day 12    2024.10.19

---

#### 今日进度

今天成功在本地测试端把阿里云通义千问接入了网页，但是又导致了网页样式问题......

为了引入通义千问，我使用 flask 构建了一个连接网页与通义千问回答的 python 程序。在本地测试环境是成功的，现在下一步就是把这个后端程序导入我的阿里云服务器了，这样可以方便地调用 api。



### Day 13    2024.10.21

---

#### 今日进度

这几天我被部署后端程序搞火了，尝试了一个又一个解决办法，只为了把 Qwen 的自定义应用调用的 python 中转程序上线（还不是自定义应用只支持 python java curl 方式的调用）。我来总结一下过程：

1、我把程序部署到我的阿里云服务器，启动程序，结果请求返回 502 ，我查看了控制台，发现是我的 flask 应用只支持 http 请求，但 vercel 部署的网页服务器出于安全考虑，只允许发送 https 请求。

2、于是我尝试把这个程序指定的 websocket 地址在证书注册的平台 Let`s Encrypt 注册一个证书以使用 SSL 方法，但是它们不支持 ip 域名认证。

3、根据 gpt 的推荐，我使用 ngrok ，进行内网穿透，开放了 https 的 5000 端口，这样就可以成功发送请求了。

4、但是如果断开 SSH 连接，程序就会关闭，无法持续运行。解决这个问题的方法我在我们张翔老师那里学过：制作 docker 镜像并在服务器上运行容器。我的 Dockerfile 长这样：

```dockerfile
FROM python:3.9-slim  

WORKDIR /app  

COPY . /app  

RUN apt-get update && \
    apt-get install -y wget unzip && \
    rm -rf /var/lib/apt/lists/*  

RUN wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz && \
    tar -xvzf ngrok-v3-stable-linux-amd64.tgz && \
    mv ngrok /usr/local/bin && \
    rm ngrok-v3-stable-linux-amd64.tgz  

RUN ngrok config add-authtoken 2ni9cdJ7kRIHFqucjTxTuNpCMuI_7MRBgWrszfuH1jMdcxUKV  

RUN pip install --no-cache-dir -r requirements.txt  

CMD ["sh", "-c", "ngrok http 5000 & python app.py"]
```

 

关于后端部分的小程序，此事在[后端仓库]([flowmmon/OpenJT_backend](https://github.com/flowmmon/OpenJT_backend))中亦有记载。

接下来一个大任务就是搞定多轮对话和 localstorage 。



### Day 14    2024.10.22

---

#### 今日进度

完成了localstorage存储多轮对话。情况是这样的：

localstorage以键值对管理数据。一个很自然的想法是，对于以下的 vue 结构 --

```vue
<div class="chat-messages" ref="chatMessages">  
                        <div v-for="(message, index) in messages" :key="index" class="message-container">  
                            <p class="user-message">{{ message.user }}</p>  
                            <p class="ai-message" v-html="convertMarkdownToHtml(message.ai)"></p>   
                        </div>  
                    </div> 
```

我们想加入对话，就可以通过一个 message 对象数组储存对话信息， v-for 会解析出对应的内容，然后呈现对话框。同理，对增加和删除按钮也是一样的。

```vue
<div class="scrollable-list">  
                            <div v-for="(dialog, index) in dialogs" :key="index" class="dialog-item">  
                                <input type="button" :value="dialog" @click="selectDialog(index)" />  
                                <button @click="removeDialog(index)">删除</button>  
                            </div>  
                            <button @click="addDialog" :disabled="dialogs.length >= 10">添加对话</button>  
                        </div>  
```

然后，在创建多个对话的情况下，我逐一删除了除第一个与最后一个的其他对话，删除最后一个对话后发现 localstorage 里无法正常删除。尝试后发现，按逆序从最后一个对话往前删除不会出现问题，但只要不按顺序删除，就一定出现问题。于是我发现了漏洞：我的 localstorage 的 key 按照创建的顺序从 1 到 10 排列 （限制最大对话数 10 个），删除了后剩下的 index 还是从 0 开始到 (9 - 删除个数)

连续排列，可是对应的 localstorage 的 key 不会自动调整，导致无法正确删除指定的 localstorage。

我的解决方法是，把原来的（dialog <->  index <-> localstorage）结构改为 （dialog <->  dialogName <-> index <-> dialogName<->localstorage）。对话名才是与对话具有强对应关系的属性，而对于不同自然语言，可以采用 id 字段（贪省事我没搞）查找。



这个方案也带来了不少 bug .比如刷新或重进页面时无法自动加载对话，本地存储的不同对话在设置的对话控制面板中不显示。为了应对这种情况，我加入了储存当前对话 index 的 localstorage ---  currDialogIndex ， 储存当前消息的 localstorage --- message ，储存当前对话列表的 localstorage --- dialogs ，方便及时记录，支持随时刷新。

```vue
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
```

总之，总算解决这个烦人的问题了。明天最后一天，解决一些素材问题。



### Day 15	2024.10.23

---

_”那美好的仗我已经打过了，当跑的路我已经跑尽了，所信的道我已经守住了。 从此以后，有**公义的冠冕为我存留**。“_

​																																																--提摩太后书 4:6-8

虽然直接把《圣经》里的语句拿来断章取义不太好，但是在某种意义上，这也是我现在脑子想法的一种侧面说法。那复杂的知识我已经领略了，当完成的功能我已经实现了，所造成的 bug 我已经修复了。从此以后，会有焦糖的席位为我存留吗？我不知道。在进行最后的总结前，我的内心是激动的、澎湃的，但这股心流，纯粹的、此生无二的心流，是会如钱塘江大潮般响彻世间，还是像大多数情况一样，撞上礁石，无影无踪呢？此时，我微微颤抖的手，正要按下 Enter 键，向你们铺开我的旅程。



#### 第一个页面：OpenJT

​		看到招新题目的时候，我其实最初考虑的不是前端方向，而是数据库方向。因为我这个星期有一门 OracleDatabase 的课，所教的内容与招新题出奇的重合。我本来就要选择这个了，但是我又想：工作室不是想进就能进的，如果我没有进呢？**对我而言，我所学的知识是否才是最大的财富呢？**如果本来就要学会，不如去挑战一个未知的领域。于是，如所有读者所见，我在 2024.9.29 写下了这个文档的第一个 h1 标题。我清点了我的技能包，只找到了基础的 html 标签和 简单的 css 写法。于是我就边学边写，搞出了一个基本结构。

​		这个结构其实有过度包装的嫌疑，导致我的 css 的名字都写了好几层。当时最大的问题就是把包装好的 div 放到我想放的地方，反复折腾 position, display ，最后得出除了导航栏，其他地方不需要刻意使用 position。就这样，慢慢地，我分好了 nav , slider , vision , footer, 几乎只使用 css + html 度过了第一个阶段。



#### 第二个页面：chatbot

​		其实我做第二个页面的时候，只剩下 2 周的时间了。如果再像第一个页面这么搭建，我现在都不知道我能不能完成第二个任务。既然不反对使用 ai ，我就使用了 ai 帮我设计了一个基本的 html + css 页面，后面的功能我来完成。也在此时，我决定给项目转入 vue 框架。花了 2 天基本了解了怎么用，没时间做更多的停留，先得完成第二个任务。

​		我根本没有想过模拟 gpt ，因为我打算一步到位，先做第三个。只要引入一个大模型 ，不就省事了吗？很快地，我在阿里云百炼创建好了应用，但麻烦的来了：如果要创造应用，可以自行训练 ai ，真正的构造一个 自我认知为 JoTangLM 的 ai ，但是它不支持对应用进行 http request 调用，只有官方的通义千问可以。诚然，直接调用通义千问比较简单，但我就要做到完美。于是我自己写了 python 的简易后端 flask 程序，作为中转程序。但是下一个问题接踵而至：怎么持续让这个程序持续运行？我想到我们张翔老师教的课程里让我们使用 docker 创建容器，这样就可以让持续程序运行了。可是制作镜像，部署容器后，前端报错 502 ，我排查了 1 天才发现是前端只能发送 https 请求，而后端只接受 http 请求。为了解决这个问题，我曾经尝试找证书授权网站授权我的 ip ，但是正规的网站不接受 ip 地址认证（只接受域名认证）。好在后来我找到了使用 ngrok 进行内网穿透，打开服务器的 https 5000 端口的方法，这才解决。这段时间，我的空闲时间都给了网课，学习 Ajax 和 vue 。

​		此时距离最终期限只有不到 5 天。我必须马上搞定 localstorage 问题。但是麻烦接踵而至，localstorage 消息体的构造，会话的读取，突然退出时的数据保存。我一直 debug 到今天，具体的情况，昨天也说了。今天，我更新了网页的一些文字说明，更改了一下样式，此后若有时间，我再来管理这个网站吧。



#### TO DO LIST

已经实现的功能：

**1.在 vercel 网站部署[网页]([open-jt-recruitment-88km.vercel.app](https://open-jt-recruitment-88km.vercel.app/)) **

**2.主界面**

​	1.导航栏

​	2.跳转 JoTangLM （导航栏--JTGpt对话）

​	3.轮播图 (虽然实现一个不一样的轮播图，但是偏离预期)

​	4.页脚 (footer)

​	5.宣传图 (虽然在 bulid 模式下放不出来，尝试过网上的解决方法没有成功)

**3.JoTangLM**

   1.对话界面

   2.制作后端程序并部署在自己的阿里云服务器上

   3.接入通义千问

   4.完成数据的本地存储

   5.多对话并行

   6.对话管理

   7.背景界面设置



待实现的功能：

   1.加载部分静态资源 (图片)

2. 调整 ai 回答长度
3. 增加图表



该说的话都说了，我在这一个月很开心，找到了一个继续进步的契机，希望焦糖可以给我一个加入你们的机会，相信焦糖也乐于提携后辈吧！



