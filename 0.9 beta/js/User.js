const PLAY_LIST = [
    {
        Title: "Test Music",
        Artist: "Unknow Artist",
        Path: "./audio/0.mp3",
    },

    {
        Title: "Test Music 1",
        Artist: "Unknow Artist 1",
        Path: "./audio/1.mp3",
    },

    {
        Title: "Test Music 2",
        Artist: "Unknow Artist 2",
        Path: "./audio/2.mp3",
    },

    {
        Title: "Test Music 3",
        Artist: "Unknow Artist 3",
        Path: "./audio/3.mp3",
    },

]



const COLOR_HARMONIES = [

    {
        FirstColor: "#0C7C94",
        SecondColor: "#244C6C",
        ThirdColor: "#04ACCC",
        FourthColor: "#142C54"
    },

    {
        FirstColor: "#545484",
        SecondColor: "#34447C",
        ThirdColor: "#44B4D4",
        FourthColor: "#141C64"
    }
    ,
    {
        FirstColor: "#C404C4",
        SecondColor: "#FCA46C",
        ThirdColor: "#270463",
        FourthColor: "#58588C"
    }

]


function ApplyTheme(index = 2) {

    AnimationTheme(COLOR_HARMONIES[index].FirstColor, COLOR_HARMONIES[index].SecondColor,
        COLOR_HARMONIES[index].ThirdColor, COLOR_HARMONIES[index].FourthColor);

    BackgroundTheme(index);
    ButtonsTheme(index);
    TextTheme(index);
    ProgressTheme(index);
    MenuTheme(index);
}