// 定义打开模态框的函数
function openModal(element) {
    const modal = document.getElementById("imageModal"); // 获取模态框元素
    const modalImg = document.getElementById("modalImage"); // 获取模态框中的图片元素
    const downloadBtn = document.getElementById("downloadBtn"); // 获取下载按钮元素

    // 创建一个新的图片对象
    const img = new Image();
    img.src = element.src; // 设置图片源为点击的图片
    img.onload = function() {
        // 创建一个canvas元素
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // 设置canvas的尺寸与图片相同
        canvas.width = img.width;
        canvas.height = img.height;

        // 将图片绘制到canvas上
        ctx.drawImage(img, 0, 0);

        // 设置水印属性
        const watermarkText = "@略略"; // 自定义水印文本
        ctx.font = "90px Arial"; // 设置字体大小和类型
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"; // 设置水印颜色及透明度（白色半透明）
        ctx.textAlign = "right"; // 设置文本对齐方式为右对齐
        ctx.textBaseline = "bottom"; // 设置文本基线为底部对齐

        // 在canvas上绘制水印文本
        ctx.fillText(watermarkText, canvas.width - 20, canvas.height - 20); // 在右下角留20px边距

        // 将canvas转换为图片数据URL
        const watermarkedImageSrc = canvas.toDataURL("image/jpeg");

        // 设置模态框中的图片源为添加水印后的图片
        modalImg.src = watermarkedImageSrc;
        downloadBtn.href = watermarkedImageSrc; // 设置下载按钮的链接地址为水印图片
    };

    modal.style.display = "block"; // 显示模态框
    document.body.classList.add("modal-open"); // 为body添加类，以便应用背景模糊效果
}

// 定义关闭模态框的函数
function closeModal() {
    const modal = document.getElementById("imageModal"); // 获取模态框元素
    modal.style.display = "none"; // 隐藏模态框
    document.body.classList.remove("modal-open"); // 移除body的类，取消背景模糊效果
}