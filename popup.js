function openFollowerPage() {
    var myid = chrome.runtime.id;
    chrome.tabs.create({url:"index.html"});
}

document.addEventListener('DOMContentLoaded', function() {
  openFollowerPage();
});
