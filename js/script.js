"use strict"

document.addEventListener('click', (event) => {
    if (event.target === document.getElementById("play_video_icon") || event.target === document.getElementById("play_video_icon_svg") || event.target === document.getElementById("play_video_icon_path")) {
        if (!document.getElementById("video_presentation").paused) {
            document.getElementById("video_presentation").pause();
            document.getElementById("mobile_video_presentation").pause();
        } else {
            document.getElementById("video_presentation").play();
            document.getElementById("mobile_video_presentation").play();
        }
    }
})