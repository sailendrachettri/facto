// _________________________________COUNTDOWN STARTED_________________________________
let val = 11;
let countDown = document.getElementById('countDown');

function newJokes() {
    val -= 1;
    (val < 10) ? countDown.innerHTML = ('0'+val) : countDown.innerHTML = val;
    (val == 0) ? val = 11 : val = val;
}

setInterval(newJokes, 1000);
// _________________________________COUNTDOWN ENDED_________________________________ 


// _________________________________FOOTER STARTED_________________________________
let date = new Date();
let year = date.getFullYear();
footerYear.innerHTML = year;
// _________________________________FOOTER ENDED_________________________________