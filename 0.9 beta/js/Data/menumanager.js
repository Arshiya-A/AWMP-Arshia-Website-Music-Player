const BUTTON_PLAYLIST = document.querySelector("#btnPlayList");
const BUTTON_INFO = document.querySelector("#btnInfo");
const BUTTON_CLOSE = document.querySelectorAll("#btnClose");

const MENU_PLAYLIST = document.querySelector("#menuPlayList");
const MENU_INFO = document.querySelector("#menuInfo");

BUTTON_PLAYLIST.addEventListener("click", function (e) {
    MENU_PLAYLIST.style.display = 'block';
})

BUTTON_INFO.addEventListener("click", function (e) {
    MENU_INFO.style.display = 'block';
})

BUTTON_CLOSE[0].addEventListener("click", function (e) {
    MENU_PLAYLIST.style.display = 'none';
 
})

BUTTON_CLOSE[1].addEventListener("click", function (e) {
    MENU_INFO.style.display = 'none';
 
})