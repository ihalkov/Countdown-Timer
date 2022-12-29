const currDate = new Date();
let currTime = currDate.getTime();


// make the hours minutes and seconds to work with 120 hours

function getCorrectTime(time) {
    return {
        // days
        days: Math.floor(time / 1000 / 60 / 60 / 24),
        // remainder from days
        hours: Math.floor(time / 1000 / 60 / 60 ) % 24,
        // remainder from hours
        minutes: Math.floor(time / 1000 / 60) % 60,
        // remainder from seconds
        seconds: Math.floor(time / 1000) % 60,
        // ms
        milliseconds: Math.floor(time % 1000)
        // minutes: ,
        // seconds: ,
        // milliseconds:
    }
}

// console.log(getCorrectTime(currTime));


// start date / time now
// in ms

// future time from browser make it to ms

const futureTime = 1672630755019;
console.log(getCorrectTime(futureTime));

// when set is pressed then get current time and update from it

console.log(getCorrectTime(futureTime - currTime));


// till goes to zero
let intervalId = setInterval (() => {
    console.log(futureTime - currTime);
    currTime -= 1000;
}, 1000);

// console.log(intervalId);

let fTime = 10;
let cTime = 3;

let interval = setInterval (() => {
    let tLeft = fTime - cTime;
    
    console.log(tLeft);
    if (tLeft <= 0) {
        clearInterval(interval);
        // then ding dong
    }

    cTime += 1;
}, 1000);

// console.log(interval);
// console.log('ahaaa');

// ms to hours minutes seconds
function fromMsToTime(ms) {
    return {
        hours: Math.floor(ms / 1000 / 60 / 60),
        minutes: Math.floor(ms / 1000 / 60) % 60,
        seconds: Math.floor(ms / 1000) % 60,
        milliseconds: ms % 1000
    }
}

const ms = 683458312;

// 189 hours, 50 min, 58 sec, 312 ms
console.log(fromMsToTime(ms)); 

function fromTimeToMs(h, min, sec, ms) {
    let milliseconds = ms;
    milliseconds += sec * 1000;
    milliseconds += min * 60 * 1000;
    milliseconds += h * 60 * 60 * 1000;
    return milliseconds;
}

// 683458312
console.log(fromTimeToMs(189, 50, 58, 312));
console.log(currTime);