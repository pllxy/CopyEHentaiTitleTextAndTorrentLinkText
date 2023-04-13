//装填剪切板
function FillClipboard(data,popText) {
    //data.magnetLinks = magnetLinks;
    // 将数据转换为JSON字符串
    var jsonData = JSON.stringify(data);

    // 复制JSON字符串到剪贴板
    navigator.clipboard.writeText(jsonData).then(function () {
        // 文本复制成功，显示弹窗
        CreatePop(popText)
    }, function () {
        // 复制失败，显示弹窗
        CreatePop("磁链文本复制失败，请重试")
    });
}