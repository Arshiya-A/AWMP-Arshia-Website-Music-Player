const AUDIO = document.querySelector("#audioPlayer");
const AUDIO_SOURCE = document.querySelector("#audioPlayerSource");
const AUDIO_PROGRESS = document.querySelector("#musicProgress");

const BUTTON_PLAY = document.querySelector("#btnPlay");
const BUTTON_PREV = document.querySelector("#btnPrev");
const BUTTON_NEXT = document.querySelector("#btnNext");

const MUSIC_STATE = document.querySelector("#musicState");

const SPAN_MUSICTIMER = document.querySelector("#currentTimeSpan");
const SPAN_MUSICLENGTH = document.querySelector("#durationSpan");

const MUSIC_COVER = document.querySelector('.music-cover');
const MUSIC_TITLE = document.querySelector("#musicTitle");
const MUSIC_ARTIST = document.querySelector("#musicArtist");
let MUSIC_COVER_MINI = document.querySelectorAll(".music-cover-mini");
let MUSIC_TRACKS = [];



let music_index = 0;


function Initialize() {

    let playlistBody = document.querySelector("#playlistBody");


    for (let i = 0; i < PLAY_LIST.length; i++) {
        let _tr = document.createElement('tr');
        _tr.setAttribute("id", `musictrack`)

        let __tdCover = document.createElement('td');
        let __tdTitle = document.createElement('td');
        let __tdArtist = document.createElement('td');

        let ___div = document.createElement('div');
        let ____i = document.createElement('i');
        let ____br = document.createElement('br');

        ___div.setAttribute('class', 'music-cover-mini');
        ____i.setAttribute('class', 'bi bi-music-note');
        ____i.setAttribute('id', 'symbolInCoverMini')

        ___div.appendChild(____i);
        ___div.appendChild(____br);

        __tdCover.setAttribute('id', 'tdBody');

        __tdTitle.setAttribute('id', 'tdBody');
        __tdTitle.innerHTML = PLAY_LIST[i].Title;

        __tdArtist.setAttribute('id', 'tdBody');
        __tdArtist.innerHTML = PLAY_LIST[i].Artist;

        __tdCover.appendChild(___div);
        _tr.appendChild(__tdCover);
        _tr.appendChild(__tdTitle);
        _tr.appendChild(__tdArtist);

        MUSIC_TRACKS.push(_tr);
        playlistBody.append(_tr);

    }

    for (let i = 0; i < document.querySelectorAll(".music-cover-mini").length; i++) {
        document.querySelectorAll(".music-cover-mini")[i].style = COVER_GRAPHIC_MINI_STYLE;
        document.querySelectorAll("#symbolInCoverMini")[i].style = COVER_GRAPHIC_MINI_SYMBOL_STYLE;
    }

    Bind();
}

function Bind() {
    MUSIC_COVER.style.animation = 'none';

    AUDIO_SOURCE.src = PLAY_LIST[music_index].Path;
    AUDIO.load();

    MUSIC_TITLE.innerHTML = PLAY_LIST[music_index].Title;
    MUSIC_ARTIST.innerHTML = PLAY_LIST[music_index].Artist;


    AUDIO_PROGRESS.value = 0;
    AUDIO_PROGRESS.max = AUDIO.duration;

}

function PlayOrStop() {

    if (MUSIC_STATE.classList.contains("bi-caret-right")) {


        MUSIC_STATE.classList.remove("bi-caret-right");
        MUSIC_STATE.classList.add("bi-pause");
        MUSIC_COVER.style.animation = 'PlayingMusic 2s ease infinite';

        AUDIO.play();

    }

    else {
        MUSIC_STATE.classList.add("bi-caret-right");
        MUSIC_STATE.classList.remove("bi-pause");
        MUSIC_COVER.style.animation = 'none';

        AUDIO.pause();
    }
}

function PrevMusic() {
    try {
        music_index--;
        if (music_index <= -1) {
            music_index = PLAY_LIST.length;
        }
        Bind();
    } catch {
        music_index = PLAY_LIST.length;
    }
    MUSIC_COVER.style.animation = 'PlayingMusic 2s ease infinite';
    MUSIC_STATE.classList.remove("bi-caret-right");
    MUSIC_STATE.classList.add("bi-pause");

    AUDIO.play();

}

function NextMusic() {
    music_index++;
    if (music_index >= PLAY_LIST.length) {
        music_index = 0;
    }
    Bind();
    MUSIC_COVER.style.animation = 'PlayingMusic 2s ease infinite';
    MUSIC_STATE.classList.remove("bi-caret-right");
    MUSIC_STATE.classList.add("bi-pause");

    AUDIO.play();

}

function UpdateProgress() {
    AUDIO_PROGRESS.value = (AUDIO.currentTime / AUDIO.duration) * 100;
}

function str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
}

function UpdateCurrentTime() {
    let currentTime = Math.floor(AUDIO.currentTime);
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime - minutes * 60;


    const finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
    SPAN_MUSICTIMER.innerHTML = finalTime;

    UpdateDuration();
}


function ChangeProgress(e) {

    const clientX = e.offsetX;

    const width = AUDIO_PROGRESS.clientWidth;
    const duration = AUDIO.duration;

    AUDIO.currentTime = (clientX / width) * duration;
}

function ChangeProgressTouch(e) {
    const rect = e.target.getBoundingClientRect()
    const offsetX = (event.touches[0].clientX - window.pageXOffset - rect.left);

    const width = AUDIO_PROGRESS.clientWidth;

    const duration = AUDIO.duration;

    AUDIO.currentTime = (offsetX / width) * duration;
}

function UpdateDuration() {
    let currentTime = Math.floor(AUDIO.duration);
    const minutes = Math.floor(currentTime / 60);
    const seconds = (currentTime - minutes * 60);
    const finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);


    SPAN_MUSICLENGTH.innerHTML = finalTime;

}



window.addEventListener('load', function (e) {
    Initialize();
});

AUDIO_PROGRESS.addEventListener('click', function (e) {
    ChangeProgress(e);
});

AUDIO_PROGRESS.addEventListener("touchstart", function (e) {
    ChangeProgressTouch(e);
});

AUDIO_PROGRESS.addEventListener("touchmove", function (e) {
    ChangeProgressTouch(e);
})
//touchmove


BUTTON_PLAY.addEventListener('click', function (e) {
    PlayOrStop();
});

BUTTON_NEXT.addEventListener('click', function (e) {
    NextMusic();
});

BUTTON_PREV.addEventListener('click', function (e) {
    PrevMusic();
});


AUDIO.addEventListener('timeupdate', function (e) {
    UpdateCurrentTime();
    UpdateProgress();
});

AUDIO.addEventListener("ended", function (e) {
    NextMusic();
})



