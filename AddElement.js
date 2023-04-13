//添加元素与监听事件
function AddElement() {
    // 获取id为"gd5"的<div>元素
    var targetDiv = document.getElementById('gd5');

    // 创建一个新的button元素
    var newButton = document.createElement('button');
    var img = document.createElement("img");
    img.src = "https://exhentai.org/img/mr.gif";

    // 将按钮添加到目标<div>元素中
    targetDiv.appendChild(newButton);
    targetDiv.insertBefore(img, newButton);

    // 添加按钮文本
    newButton.innerHTML = "复制标题";

    // 添加按钮点击事件处理程序
    newButton.addEventListener("click", function () {
        // 获取标题文本
        var h1_1 = document.querySelector("#gd2 #gn");
        var h1_2 = document.querySelector("#gd2 #gj");

        // 创建一个包含<h1>元素内容的对象
        const data = {
            "h1_1": h1_1.innerText,
            "h1_2": h1_2.innerText,
            "magnetLinks": []
        };
        FillClipboard(data,"标题文本已复制")
        // Create a new Promise object
        var torrentLink = GetTorrentLink();
        const fetchData = new Promise((resolve, reject) => {
            fetch(torrentLink)
                .then(response => response.text())
                .then(htmlString => {
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(htmlString, 'text/html');
                    var torrentLinks = doc.querySelectorAll('tbody a[href*="/torrent/"]');
                    const magnetLinks = [];
                    torrentLinks.forEach(link => {
                        var torrentFileName = link.textContent;
                        magnetLinks.push(torrentFileName);
                    });
                    // Resolve the Promise with the magnetLinks array
                    resolve(magnetLinks);
                })
                .catch(error => reject(error));
        });

        // Call the fetchData Promise and wait for it to resolve
        fetchData.then(magnetLinks => {
            // Your code that uses the magnetLinks array goes here
            data.magnetLinks = magnetLinks;
            FillClipboard(data,"标题文本与磁链文本已复制")
        }, function () {
            FillClipboard(data,"磁链文本复制失败")
        }).catch(error => console.error(error));
        CreatePop("复制中，请稍等")
    });
}