var helloSpeaker = (function () {

    console.log("Names:")


    var speakWord = "Hello";


    function speak(name) {
        console.log(speakWord + " " + name);
    }
    return speak;

})();