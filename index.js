let deferredPrompt;
// 默認不展示按鈕，僅支持 「Add to Home Screen」 功能才展現
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

// 規定必須註冊 serviceWorker 才能使用 Add to Home Screen，
// 且需要監聽 install 和 fetch 事件，可以不處理
if('serviceWorker' in navigator) {
navigator.serviceWorker
.register('./sw2.js')
.then(function() { console.log('Service Worker Registered'); });
}
// 僅瀏覽器支持且未安裝該應用，以下事件才會觸發
window.addEventListener('beforeinstallprompt', (e) => {
// Chrome 67 及之前版本，會自動展現安裝的 prompt
// 為了版本統一及用戶體驗，我們禁止自動展現 prompt
e.preventDefault();
// 存放事件用於後續觸發
deferredPrompt = e;
// 展現按鈕
addBtn.style.display = 'block';
addBtn.addEventListener('click', (e) => {
// hide our user interface that shows our A2HS button
addBtn.style.display = 'none';
// 展現安裝的 prompt
deferredPrompt.prompt();
// 等待用戶對 prompt 進行操作
// 如果用戶從地址欄或其他瀏覽器組件安裝了PWA，則以下代碼將不起作用 
deferredPrompt.userChoice.then((choiceResult) => {
if (choiceResult.outcome === 'accepted') {
console.log('點擊添加');
} else {
console.log('取消添加');
}
deferredPrompt = null;
});
});
});
// 無論以何種方式安裝 PWA 該事件都會觸發
// 因此這裡可以用來做埋點
window.addEventListener('appinstalled', (evt) => {
console.log('應用安裝');
});