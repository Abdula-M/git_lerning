function timer() {
    const eventDate = new Date("Oct 12, 2024 12:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const time = (days, hours, minutes, seconds) => {
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
    time(days, hours, minutes, seconds)

    if (distance < 0) {
        clearInterval(timerInterval);
        time(0, 0, 0, 0)
        
    }
}

const timerInterval = setInterval(timer, 1000);
