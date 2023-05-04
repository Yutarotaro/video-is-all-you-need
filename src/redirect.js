console.log("Hello!");
document.getElementById("update", () => {
  console.log("Hello!");
  chrome.tabs.create({ url: "https://zenn.dev/eetann" });
});

/*
chrome.tabs.update(function(tabId, changeInfo, tab) {
//chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	console.log("Hello!");
    if (tab.url.includes("https://www.youtube.com/shorts/")) {
		  console.log("Hello!");
	      chrome.tabs.update(tabId, {url: "https://www.youtube.com/"});
	    }
});


//----------------------
$(function () {
    //↓疎通確認コード：タイトルの■が回転するはず
    console.log('Chrome拡張の疎通確認コードが動いています。動作確認ができたら削除してください。');
	location.href('https://www.youtube.com')
    let flag = false;
    setInterval(function () {
        document.title = (flag ? "■" : "◆") + document.title.replace(/^[■◆]/, '');
        flag = !flag;
    }, 1000);
    //↑疎通確認コード
});*/
