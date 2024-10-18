// vision_selection.js  

export function initVisionSelection() {  
    document.querySelectorAll('.vision_section').forEach(sector => {  
        sector.addEventListener('click', function() {  
            // 移除所有内容的 active 类  
            document.querySelectorAll('.vision_content').forEach(content => {  
                content.classList.remove('active');  
            });  

            // 获取点击的索引  
            const index = this.getAttribute('data-index');  
            // 切换对应内容的 active 类  
            document.querySelectorAll('.vision_content')[index].classList.toggle('active');  
        });  
    });  
}