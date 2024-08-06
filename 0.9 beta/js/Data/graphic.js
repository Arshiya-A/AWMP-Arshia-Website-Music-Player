const BODY = document.querySelector('body');
const HTML = document.querySelector('html');

const BUTTON_PREV_GRAPHIC = document.querySelector('.btn-prev');
const BUTTON_NEXT_GRAPHIC = document.querySelector('.btn-next');
const BUTTON_PLAYLIST_GRAPHIC = document.querySelector(".btn-playlist");
const BUTTON_INFO_GRAPHIC = document.querySelector(".btn-info");
const BUTTON_CLOSE_GRAPHIC = document.querySelectorAll("#btnClose");
const BUTTON_PLAY_GRAPHIC = document.querySelector("#btnPlay");


const H1_TITLE = document.querySelector(".music-title");
const H1_PLAYLIST = document.querySelector("#playlistText");
const H2_ARTIST = document.querySelector(".music-artist");

const TD_HEAD = document.querySelectorAll("#tdHead");
const TD_BODY = document.querySelectorAll("#tdBody");

const TABLE_PLAYLIST_FORGEROUND = document.querySelector(".table-playlist");

const PROGRESS_MUSIC = document.querySelector(".music-progress");

const SPAN_CURRENTTIME = document.querySelector(".music-currentTime");
const SPAN_DURATION = document.querySelector(".music-duration");

const MENU_PLAYLIST_GRAPHIC = document.querySelector(".menu");
const MENU_INFO_GRAPHIC = document.querySelector(".menu-info");

const TEXTS_IN_INFO = document.querySelectorAll("#infoText");

const COVER_GRAPHIC = document.querySelectorAll(".music-cover");
let COVER_GRAPHIC_MINI_STYLE = "";
let COVER_GRAPHIC_MINI_SYMBOL_STYLE = "";

const COVER_SYMBOL_GRAPHIC = document.querySelectorAll(".bi-music-note");



function BackgroundTheme(index) {
    BODY.style.backgroundColor = COLOR_HARMONIES[index].FourthColor;
    HTML.style.backgroundColor = COLOR_HARMONIES[index].FourthColor;
}

function ButtonsTheme(index) {
    BUTTON_NEXT_GRAPHIC.style.backgroundColor = COLOR_HARMONIES[index].FirstColor;
    BUTTON_NEXT_GRAPHIC.style.color = COLOR_HARMONIES[index].FourthColor;
    BUTTON_NEXT_GRAPHIC.style.borderColor = COLOR_HARMONIES[index].ThirdColor;
    BUTTON_PREV_GRAPHIC.style.backgroundColor = COLOR_HARMONIES[index].FirstColor;
    BUTTON_PREV_GRAPHIC.style.color = COLOR_HARMONIES[index].FourthColor;
    BUTTON_PREV_GRAPHIC.style.borderColor = COLOR_HARMONIES[index].ThirdColor;
    BUTTON_PLAYLIST_GRAPHIC.style.backgroundColor = COLOR_HARMONIES[index].FirstColor;
    BUTTON_PLAYLIST_GRAPHIC.style.color = COLOR_HARMONIES[index].FourthColor;
    BUTTON_PLAYLIST_GRAPHIC.style.borderColor = COLOR_HARMONIES[index].FourthColor;
    BUTTON_INFO_GRAPHIC.style.backgroundColor = COLOR_HARMONIES[index].FirstColor;
    BUTTON_INFO_GRAPHIC.style.color = COLOR_HARMONIES[index].FourthColor;
    BUTTON_INFO_GRAPHIC.style.borderColor = COLOR_HARMONIES[index].FourthColor;
    BUTTON_CLOSE_GRAPHIC[0].style.backgroundColor = COLOR_HARMONIES[index].FirstColor;
    BUTTON_CLOSE_GRAPHIC[0].style.color = COLOR_HARMONIES[index].FourthColor;
    BUTTON_CLOSE_GRAPHIC[0].style.borderColor = COLOR_HARMONIES[index].FourthColor;
    BUTTON_CLOSE_GRAPHIC[1].style.backgroundColor = COLOR_HARMONIES[index].FirstColor;
    BUTTON_CLOSE_GRAPHIC[1].style.color = COLOR_HARMONIES[index].FourthColor;
    BUTTON_CLOSE_GRAPHIC[1].style.borderColor = COLOR_HARMONIES[index].FourthColor;
    BUTTON_PLAY_GRAPHIC.style.borderColor = COLOR_HARMONIES[index].FirstColor;
}


function TextTheme(index) {

    for (let i = 0; i < COVER_SYMBOL_GRAPHIC.length; i++) {
        COVER_SYMBOL_GRAPHIC[i].style.color = COLOR_HARMONIES[index].FirstColor;
    }
    H1_TITLE.style.color = COLOR_HARMONIES[index].ThirdColor;
    H2_ARTIST.style.color = COLOR_HARMONIES[index].ThirdColor;
    H1_PLAYLIST.style.color = COLOR_HARMONIES[index].ThirdColor;

    TABLE_PLAYLIST_FORGEROUND.style.color = COLOR_HARMONIES[index].ThirdColor;

    SPAN_CURRENTTIME.style.color = COLOR_HARMONIES[index].ThirdColor;
    SPAN_DURATION.style.color = COLOR_HARMONIES[index].ThirdColor;

    for (let i = 0; i < TD_BODY.length; i++) {
        TD_BODY[i].style.borderBottom = COLOR_HARMONIES[index].FirstColor + " " + "solid 1px";
    }

    for (let i = 0; i < TEXTS_IN_INFO.length; i++) {
        TEXTS_IN_INFO[i].style.color = COLOR_HARMONIES[index].ThirdColor;

    }

    for (let i = 0; i < TD_HEAD.length; i++) {
        TD_HEAD[i].style.borderColor = COLOR_HARMONIES[index].FirstColor
    }
}

function ProgressTheme(index) {
    PROGRESS_MUSIC.style.backgroundColor = COLOR_HARMONIES[index].ThirdColor;

    var style = document.querySelector('[data="thump"]');
    var style2 = document.querySelector('[data="thump2"]');
    var isFirefox = typeof InstallTrigger !== 'undefined';
    
    if (isFirefox) {
        style.innerHTML = ".music-progress::-moz-range-thumb {background-color:" + COLOR_HARMONIES[index].FirstColor.toString() + "; }";
        style2.innerHTML = ".music-progress::-moz-range-thumb {border: solid " + COLOR_HARMONIES[index].ThirdColor.toString() + "; }";

    }
    else {
        style.innerHTML = ".music-progress::-webkit-slider-thumb {background-color:" + COLOR_HARMONIES[index].FirstColor.toString() + "; }";
        style2.innerHTML = ".music-progress::-webkit-slider-thumb {border: solid " + COLOR_HARMONIES[index].ThirdColor.toString() + "; }";
    }



}

function MenuTheme(index) {
    MENU_PLAYLIST_GRAPHIC.style.backgroundColor = COLOR_HARMONIES[index].SecondColor;
    MENU_INFO_GRAPHIC.style.backgroundColor = COLOR_HARMONIES[index].SecondColor;
}

function AnimationTheme(color1, color2, color3, color4) {



    BUTTON_PLAY_GRAPHIC.style = `
    background: linear-gradient(324deg, ${color1}, ${color2}, ${color3}, ${color4});
    background-size: 800% 800%;
    color:${color4};

    -webkit-animation: StopMusic 4s ease infinite;
    -moz-animation: StopMusic 4s ease infinite;
    -o-animation: StopMusic 4s ease infinite;
    animation: StopMusic 4s ease infinite;
    `;

    for (let i = 0; i < COVER_GRAPHIC.length; i++) {
        COVER_GRAPHIC[i].style = `
            background: linear-gradient(324deg, ${color1}, ${color2}, ${color3}, ${color4});
            background-size: 800% 800%;
            border-color:${color1};
        
            -webkit-animation: PlayingMusic 2s ease infinite;
            -moz-animation: PlayingMusic 2s ease infinite;
            -o-animation: PlayingMusic 2s ease infinite;
            animation: PlayingMusic 2s ease infinite;
            `;
    }

    //     for (let i = 0; i < COVER_GRAPHIC_MINI.length; i++) {
    //         COVER_GRAPHIC_MINI[i].style = `
    //            background: linear-gradient(324deg, ${color1}, ${color2}, ${color3}, ${color4});
    //            background-size: 800% 800%;
    //            border-color:${color1};

    //            -webkit-animation: PlayingMusic 2s ease infinite;
    //             -moz-animation: PlayingMusic 2s ease infinite;
    //             -o-animation: PlayingMusic 2s ease infinite;
    //             animation: PlayingMusic 5s ease infinite;
    //   `
    //     }
    COVER_GRAPHIC_MINI_STYLE = `
           background: linear-gradient(324deg, ${color1}, ${color2}, ${color3}, ${color4});
           background-size: 800% 800%;
           border-color:${color1};

           -webkit-animation: PlayingMusic 2s ease infinite;
            -moz-animation: PlayingMusic 2s ease infinite;
            -o-animation: PlayingMusic 2s ease infinite;
            animation: PlayingMusic 5s ease infinite;
  `

    COVER_GRAPHIC_MINI_SYMBOL_STYLE = `color:${color1}`
}


window.addEventListener('load', function (e) {
    ApplyTheme();
})


