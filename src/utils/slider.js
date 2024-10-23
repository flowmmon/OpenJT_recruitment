// src/utils/slider.js  

const images = [  
    "/src/assets/slider_0.jpg",  
    "/src/assets/slider_1.jpg",  
    "/src/assets/slider_2.jpg",  
    "/src/assets/slider_3.jpg",  
];  

let currentIndex = 0;  
const totalImages = images.length;  

function updateImages() {  
    const items = document.querySelectorAll('.slider_item');  
    const leftImage = document.querySelector('.slider_leftsider img');  
    const rightImage = document.querySelector('.slider_rightsider img');  
    
    const buttonList = document.querySelectorAll('.indicator');   
    buttonList[(currentIndex - 1 + totalImages) % totalImages].style.backgroundColor = 'rgb(165, 165, 165)';   
    buttonList[currentIndex].style.backgroundColor = 'black';  

    items.forEach((item, index) => {  
        item.classList.remove('active'); // 隐藏所有图片  
        if (index === currentIndex) {  
            item.classList.add('active'); // 仅显示当前图片  
            leftImage.src = images[(currentIndex - 1 + totalImages) % totalImages]; // 更新左侧图片  
            rightImage.src = images[(currentIndex + 1) % totalImages]; // 更新右侧图片  
        }  
    });  
}  

function goToSlide(index) {  
    currentIndex = index;  
    updateImages();  
}  

function startAutoSlide() {  
    setInterval(() => {  
        currentIndex = (currentIndex + 1) % totalImages; // 计算下一个索引  
        updateImages(); // 更新显示  
    }, 15000); // 每15秒切换一次  
}  

// 提供一个初始化函数，供外部调用  
function initSlider() {  
    updateImages(); // 初始化显示  
    startAutoSlide(); // 启动自动切换  
}  

// 导出函数  
export { goToSlide, initSlider };