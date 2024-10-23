<template>  
    <div id="app"> 
        <header class="nav_class">
            <nav class="nav">  
                <div class="nav_logo" id="company_logo">  
                    <div id="nav_logo_img"></div>  
                    <img id="nav_logo" alt="openJT_logo" src="/src/assets/stable-diffusion-OpenJT_logo_blcwt-ai.png">  
                </div>  
                <div class="nav_header">  
                    <p>OpenJT</p>  
                </div>  
                <div class="nav_searchbar">  
                    <input name="searchbar" type="search" placeholder="探索OpenJT">  
                    <img alt="search" src="/src/assets/search.svg">  
                </div>  
                <div class="nav_content_wrapper">  
                    <ul>  
                        <li class="navbar_item">产品功能</li>  
                        <li class="navbar_item">API</li>  
                        <li class="navbar_item"><a href="../chat.html">JTGpt对话</a></li>  
                    </ul>  
                    <div class="navbar_login">  
                        <input class="nav_login_btn" type="button" value="登录">  
                    </div>  
                </div>  
            </nav>  
        </header>
        <main id="main">  
            <div class="slider_wrapper">  
                <aside class="slider_leftsider">  
                    <div class="leftslider_imgwrapper">  
                        <img class="slider_leftsiderimg" alt="slider_last_pic" :src="images[(currentIndex - 1 + images.length) % images.length]" >
                    </div>
                </aside>  
                <div class="slider_banner">  
                    <ul class="slider_list">  
                        <li v-for="(image, index) in images" :key="index" class="slider_item" :class="{ active: currentIndex === index }">  
                            <img :alt="'slider_' + index" :src="image">  
                        </li>  
                    </ul>  
                    <div class="slider_indicators_wrapper">  
                        <button   
                            v-for="(image, index) in images"   
                            :key="index"   
                            type="button"   
                            aria-label="slider-indicator"   
                            class="indicator"   
                            :class="{ active: currentIndex === index }"  
                            @click="goToSlide(index)">  
                        </button>  
                    </div>  
                </div>  
                <aside class="slider_rightsider">  
                    <div class="rightslider_imgwrapper">  
                        <img class="slider_rightsiderimg" alt="slider_next_pic" :src="images[(currentIndex + 1) % images.length]">  
                    </div>  
                </aside>  
            </div>  
            <div class="content_vision_wrapper">  
                <div class="vision_headerwrapper">  
                    <div class="vision_header">  
                        <h1 class="vHeader">选择我们，大有可为</h1>  
                    </div>  
                </div>  
                <div class="vision_main">  
                    <div class="vision_selector">  
                        <div class="vision_section" v-for="(section, index) in sections" :key="index" :data-index="index" @click="toggleContent(index)">  
                            {{ section.title }}  
                        </div>  
                        <div v-for="(content, index) in sections" :key="index" class="vision_content" :class="{ active: currentSection === index }">  
                            {{ content.text }}  
                        </div>  
                    </div>  
                    <div class="vision_imgwrapper">  
                        <img :src="visionImages[currentSection]" alt="Vision Image" />  
                    </div>  
                </div>   
            </div>  
        </main>  
        <footer>  
            <div class="footer_wrapper">  
                <div class="footer_content">  
                    <div class="footer_options">  
                        <div class="footer_detail_wrapper">
                        <div class="footer_series_wrapper">产品</div>
                        <div class="series_content_wrapper">
                            <p class="smartChat_A1_preview"><a>JoTangLM o1</a></p>
                            <p class="smartChat_v4"><a>JoTangLM 4</a></p>
                            <p class="smartChat_lagacy"><a>其他版本JoTangLM</a></p>
                        </div>
                    </div>
                    <div class="footer_detail_wrapper">
                        <div class="footer_series_wrapper">公司</div>
                        <div class="series_content_wrapper">
                            <p class="about_us"><a>关于我们</a></p>
                            <p class="privacy_policy"><a>隐私政策</a></p>
                            <p class="cookie_policy"><a>cookie政策</a></p>
                        </div>
                    </div>
                    <div class="footer_detail_wrapper">
                        <div class="footer_series_wrapper">开发者社区</div>
                        <div class="series_content_wrapper">
                            <p class="discover_community"><a>探索社区</a></p>
                            <p class="cetified_partners"><a>合作者认证</a></p>
                        </div> 
                    </div>
                    <div class="footer_detail_lastwrapper">
                        <div class="footer_series_wrapper">帮助</div>
                        <div class="series_content_wrapper">
                            <p class="api_document"><a>API文档</a></p>
                            <p class="pricing"><a>价格</a></p>
                        </div>
                    </div>
                    </div>  
                    <div class="footer_copyright">  
                        <div class="footer_logo_wrapper">  
                            <img alt="OpenJT Logo" src="/src/assets/stable-diffusion-OpenJT_logo_blcwt-ai.png">  
                        </div>  
                        <div class="footer_copyright_declaration">  
                            <p>© 2024 OpenJT, Inc. All rights reserved.</p>  
                        </div>  
                        <div class="footer_share_logo">  
                            <ul class="logo_list">  
                                <li class="logo_item"><img alt="weibo" src="/src/assets/icons8-weibo.svg"></li>  
                                <li class="logo_item"><img alt="wechat" src="/src/assets/icons8-wechat.svg"></li>  
                                <li class="logo_item"><img alt="tiktok" src="/src/assets/icons8-tik-tok.svg"></li>  
                                <li class="logo_item"><img alt="bilibili" src="/src/assets/icons8-bilibili.svg"></li>  
                            </ul>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </footer>  
    </div> 
  </template>  
  
  <script>  
import { goToSlide, initSlider } from './utils/slider';   
import { initVisionSelection } from './utils/vision_selector';   

export default {  
    data() {  
        return {  
            images: [  
                "/src/assets/slider_0.jpg",  
                "/src/assets/slider_1.jpg",  
                "/src/assets/slider_2.jpg",  
                "/src/assets/slider_3.jpg"  
            ],   
            visionImages: [  
                "/src/assets/vision_0.jpg",  
                "/src/assets/vision_1.jpg",  
                "/src/assets/vision_2.jpg"  
            ],   
            currentIndex: 0,   
            sections: [  
                { title: "智能对话，畅享未来", text: "在 OpenJT，我们的聊天机器人 JoTangLM 让沟通变得简单而高效。无论是客户服务还是日常交流，JoTangLM 都能与您无缝对接，提升互动体验。" },  
                { title: "让每一次对话都充满价值", text: "JoTangLM 不仅仅是一个聊天机器人，它是您业务增长的助推器。通过智能分析和深度学习，它能够理解您的需求，提供个性化的建议和解决方案。" },  
                { title: "开启智能沟通的新篇章", text: "加入 OpenJT，体验 JoTangLM 带来的革新。我们的技术让每一次对话都成为提升效率和创造价值的机会，助您在竞争中脱颖而出。" },  
            ],  
            currentSection: 0  
        };  
    },  
    mounted() {  
        initSlider(); // 初始化滑块功能   
        initVisionSelection();    
    },  
    methods: {  
        goToSlide(index) {  
            this.currentIndex = index;  
            goToSlide(index); // 调用外部函数以更新状态  
        },  
        toggleContent(index) {  
            this.currentSection = this.currentSection === index ? this.currentSection : index;  
        },     
    }  
};  
</script>  

<style scoped>  
@import './assets/body.css';  
@import './assets/nav.css';  
@import './assets/slider.css';  
@import './assets/vision.css';  
@import './assets/footer.css';  
</style> 