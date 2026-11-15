// 开幕画面的开始按钮
const startButton = document.getElementById("start-button");
const openingScreen = document.querySelector(".opening-screen");

if (startButton && openingScreen) {
    startButton.addEventListener("click", function () {

        // 记录本次浏览已经看过开场
        sessionStorage.setItem("openingPlayed", "true");

        // 播放淡出效果
        openingScreen.classList.add("fade-out");

        // 动画结束后进入正式首页
        setTimeout(function () {
            window.location.href = "index.html";
        }, 1200);

    });
}