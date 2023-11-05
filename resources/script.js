const startingMinutes = 60; // 60 minutes
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${displaySeconds}`;

    if (time > 0) {
        time--;
    } else {
        clearInterval(timer); // Stop the timer when it reaches 0
    }
}

// Initial call to update the countdown immediately
updateCountdown();

// Start the countdown interval to update the timer every second
const timer = setInterval(updateCountdown, 1000);

