function CreatePop(text) {
    var popup = document.createElement('div');

    // 添加弹窗文本
    popup.innerHTML = text;

    // 设置弹窗样式
    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.backgroundColor = "#fff";
    popup.style.color = "#000";
    popup.style.fontSize = "16px";
    popup.style.padding = "10px";
    popup.style.border = "1px solid #000";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
    popup.style.transition = "opacity 1s ease-in-out";

    // 将弹窗添加到body元素中
    document.body.appendChild(popup);

    // 设置一个定时器，在1秒后关闭弹窗
    setTimeout(function () {
        popup.style.opacity = "0";
        setTimeout(function () {
            document.body.removeChild(popup);
        }, 1000);
    }, 1000);
}