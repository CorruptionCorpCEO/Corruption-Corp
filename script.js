$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});

document.getElementById("enote-area").addEventListener("click", function() {
    var enote = document.getElementById("enote");
    enote.currentTime = 0; // Reset the playback position to the beginning
    enote.play();
});

document.getElementById("fnote-area").addEventListener("click", function() {
    var fnote = document.getElementById("fnote");
    fnote.currentTime = 0; // Reset the playback position to the beginning
    fnote.play();
});

document.getElementById("gsnote-area").addEventListener("click", function() {
    var gsnote = document.getElementById("gsnote");
    gsnote.currentTime = 0; // Reset the playback position to the beginning
    gsnote.play();
});

document.getElementById("anote-area").addEventListener("click", function() {
    var anote = document.getElementById("anote");
    anote.currentTime = 0; // Reset the playback position to the beginning
    anote.play();
});

document.getElementById("bnote-area").addEventListener("click", function() {
    var bnote = document.getElementById("bnote");
    bnote.currentTime = 0; // Reset the playback position to the beginning
    bnote.play();
});

document.getElementById("csnote-area").addEventListener("click", function() {
    var csnote = document.getElementById("csnote");
    csnote.currentTime = 0; // Reset the playback position to the beginning
    csnote.play();
});

document.getElementById("dnote-area").addEventListener("click", function() {
    var dnote = document.getElementById("dnote");
    dnote.currentTime = 0; // Reset the playback position to the beginning
    dnote.play();
});


var image = document.getElementById("image");
        var originalSrc = image.src; // Store the original image source

        function changeImage() {
            image.src = "images\___assets\main\speaker highlight.png"; /* New image source on hover */
        }

        function restoreImage() {
            image.src = originalSrc; /* Revert to the original image source on mouseout */
        }



