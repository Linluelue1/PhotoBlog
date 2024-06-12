function exitClick(){
    window.location.href = 'MainPage.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // 获取所有的图片容器
    const photoContainers = document.querySelectorAll('.photo');

    photoContainers.forEach((container, index) => {
        // 为每个图片容器设置图片数组
        const photos = Array.from(container.querySelectorAll('img'));
        let currentPhotoIndex = 0; // 每个容器有自己的当前图片索引

        // 显示初始图片
        showPhoto(photos, currentPhotoIndex);

        // 为每个容器的上一张按钮添加事件监听器
        container.querySelector('.prev').addEventListener('click', function() {
            changePhoto(-1, photos, index);
        });

        // 为每个容器的下一张按钮添加事件监听器
        container.querySelector('.next').addEventListener('click', function() {
            changePhoto(1, photos, index);
        });

        // 定义切换图片的函数
        function showPhoto(photos, index) {
            photos.forEach((photo, idx) => {
                photo.style.display = idx === index ? 'block' : 'none';
                photo.style.opacity = idx === index ? 1 : 0;
            });
        }

        // 定义改变当前图片的函数
        function changePhoto(step, photos, index) {
            let newIndex = (currentPhotoIndex + step + photos.length) % photos.length;
            showPhoto(photos, newIndex);
            currentPhotoIndex = newIndex; // 更新当前图片索引
        }
    });
});