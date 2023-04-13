// 获取磁力链接文本
// 通过onclick获取带有archiever的链接
function GetTorrentLink() {
  var gd5 = document.getElementById("gd5");
  var p = gd5.querySelector("p.g2");
  var torrentLinkElem = p.querySelector("a");
  var onclickAttribute = torrentLinkElem.getAttribute("onclick");
  var regex = /https:\/\/exhentai\.org\/archiver\.php\?gid=\d+&token=[a-z0-9]+/i;
  var match = onclickAttribute.match(regex);
  var torrentArchiverLink = match[0];
  // 匹配 gid 和 token，组成带有gallerytorrents的链接
  match = torrentArchiverLink.match(/gid=(\d+)&token=([a-z0-9]+)/i);

  if (match) {
    var gid = match[1];
    var token = match[2];

    // 构建 torrent link
    var torrentLink = 'https://exhentai.org/gallerytorrents.php?gid=' + gid + '&t=' + token;
    return torrentLink;

    console.log(torrentLink);
  } else {
    console.log('No match found');
  }
}