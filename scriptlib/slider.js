const images = [  
    "/srclib/slider/slider_0.png",  
    "/srclib/slider/slider_1.png",  
    "/srclib/slider/slider_2.png",  
    "/srclib/slider/slider_3.png",  
];  

let currentIndex = 0;  
const totalImages = images.length;  

function updateImages() {  
    const items = document.querySelectorAll('.slider_item');  
    const leftImage = document.querySelector('.slider_leftsider img');  
    const rightImage = document.querySelector('.slider_rightsider img');
    
    const buttonList = document.querySelectorAll('.indicator'); 
    buttonList[(currentIndex-1+totalImages)%4].setAttribute('style', 'background-color: rgb(165,165,165);');   
    buttonList[currentIndex].setAttribute('style', 'background-color: black;');  

    items.forEach((item, index) => {  
        item.classList.remove('active'); // 隐藏所有图片  
        if (index === currentIndex) {  
            item.classList.add('active'); // 仅显示当前图片  
            leftImage.src = images[(currentIndex - 1 + totalImages) % totalImages]; // 更新左侧图片  
            rightImage.src = images[(currentIndex + 1) % totalImages]; // 更新右侧图片  
        }  
    });  
}  

// 切换到指定的图片索引  
function goToSlide(index) {  
    // 更新当前图片索引  
    currentIndex = index;  
    updateImages();  

    // 设置当前按钮的背景颜色  
    
}

// 自动切换  
function startAutoSlide() {  
    setInterval(() => {  
        currentIndex = (currentIndex + 1) % totalImages; // 计算下一个索引  
        updateImages();  
    }, 15000); // 每15秒切换一次  
}  

// 初始化图片显示  
updateImages();   
startAutoSlide(); // 启动自动切换