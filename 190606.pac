// update: 2019.6.6
// 鉴于《刑法》、《网络安全法》等法律的有关条款，规则中加入了黑名单，请谅解
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// blacklist
if (
// google plus
  shExpMatch(url, "https://plus.google.com/*")
) return "DIRECT";
// goproxy
if (
// google
  shExpMatch(url, "*://*.google.*/*") ||
  dnsDomainIs(host, "gstatic.com") ||
  dnsDomainIs(host, "googleapis.com") ||
  dnsDomainIs(host, "googleusercontent.com") ||
  dnsDomainIs(host, "ggpht.com") ||
  dnsDomainIs(host, "gmail.com") ||
  dnsDomainIs(host, "googlesource.com") ||
  dnsDomainIs(host, "gvt1.com") ||
  dnsDomainIs(host, "goo.gl") ||
  dnsDomainIs(host, "accounts.youtube.com") ||
  dnsDomainIs(host, "img.youtube.com") ||
// art
  shExpMatch(url, "*://*.pinterest.*/*") ||
  dnsDomainIs(host, "pinimg.com") ||
  dnsDomainIs(host, "cedexis") ||
  dnsDomainIs(host, "cedexis-radar.net") ||
  dnsDomainIs(host, "accountkit.com") ||
  dnsDomainIs(host, "deviantart.com") ||
  dnsDomainIs(host, "deviantart.net") ||
  dnsDomainIs(host, "behance.net") ||
  dnsDomainIs(host, "shutterstock.com") ||
  dnsDomainIs(host, "sketchappsources.com") ||
  dnsDomainIs(host, "flickr.com") ||
  dnsDomainIs(host, "s.yimg.com") ||
  dnsDomainIs(host, "proko.com") ||
  dnsDomainIs(host, "tineye.com") ||
  dnsDomainIs(host, "depositphotos.com") ||
  dnsDomainIs(host, "istockphoto.com") ||
  dnsDomainIs(host, "artstation.com") ||
// coding
  dnsDomainIs(host, "github.com") ||
  dnsDomainIs(host, "githubusercontent.com") ||
  dnsDomainIs(host, "githubapp.com") ||
  dnsDomainIs(host, "github.io") ||
  dnsDomainIs(host, "sourceforge.net") ||
  dnsDomainIs(host, "fsdn.com") ||
  dnsDomainIs(host, "w3schools.com") ||
  dnsDomainIs(host, "android.com") ||
  dnsDomainIs(host, "golang.org") ||
  dnsDomainIs(host, "python.org") ||
  dnsDomainIs(host, "gitbook.com") ||
  dnsDomainIs(host, "gitbooks.io") ||
  dnsDomainIs(host, "tensorflow.org") ||
  dnsDomainIs(host, "mozilla.org") ||
  dnsDomainIs(host, "getpostman.com") ||
  dnsDomainIs(host, "nvidia.com") ||
  dnsDomainIs(host, "bitbucket.org") ||
  dnsDomainIs(host, "evgnet.com") ||
  dnsDomainIs(host, "androidfilehost.com") ||
// scholar
  dnsDomainIs(host, "coursera.org") ||
  dnsDomainIs(host, "archive.org") ||
  dnsDomainIs(host, "wuancake.org") ||
  dnsDomainIs(host, "jmlc.org") ||
  dnsDomainIs(host, "rus.ec") ||
  dnsDomainIs(host, "nih.gov") ||
  dnsDomainIs(host, "pubmed.gov") ||
  dnsDomainIs(host, "bioconductor.org") ||
  dnsDomainIs(host, "dictionary.goo.ne.jp") ||
  dnsDomainIs(host, "bing.com") ||
  dnsDomainIs(host, "sparknotes.com") ||
// debug
  dnsDomainIs(host, "ip138.com") 
) return "PROXY 127.0.0.1:2333";
return "DIRECT";
}