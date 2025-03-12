/*// Get audio element
const audio = new Audio('https://youtu.be/D4VpVRtbx7w?si=_zwIcqGRIBJWynVd'); // Replace with your audio link

// Get buttons
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const stopButton = document.getElementById('stopButton');

// Play audio
playButton.addEventListener('click', function() {
  audio.play();
});

// Pause audio
pauseButton.addEventListener('click', function() {
  audio.pause();
});

// Stop audio (reset to beginning)
stopButton.addEventListener('click', function() {
  audio.pause();
  audio.currentTime = 0; // Reset playback to the beginning
});

//Optional: Audio ended event.
audio.addEventListener('ended', function(){
    console.log("Audio Ended");
    //Optional actions after audio ends.
});

//Optional: Adding volume control.
const volumeSlider = document.getElementById("volumeSlider");

if(volumeSlider){
    volumeSlider.addEventListener("input", function(){
        audio.volume = this.value;
    });
}*/