document.querySelectorAll('.vision_section').forEach(sector => {
    sector.addEventListener('click',function() {
        document.querySelectorAll('.vision_content').forEach(content => {
            content.classList.remove('active');
        });

        const index=this.getAttribute('data-index');
        document.querySelectorAll('.vision_content')[index].classList.toggle('active');
    });
});