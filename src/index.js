import { fromEvent, interval } from 'rxjs';
import { map, buffer, debounceTime, filter } from 'rxjs/operators';
import css from './style.css';


const stopWatch = document.getElementById('timer');
const startStopBtn = document.getElementById('startStop');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');


const stopwatch$ = interval(100)

let started = false;
let time = 0;

stopwatch$.subscribe(
  event => {
    if(!started) return;
    time++;
    stopWatch.innerHTML = String(Math.floor(time / 36000)).padStart(2, "0") + ":" + String(Math.floor((time / 600) % 60)).padStart(2, "0") + ":" + String(Math.floor((time / 10) % 60)).padStart(2, "0");
  });

fromEvent(startStopBtn, 'click')
  .subscribe(event => {
    if (started === false) {
      started = true;
    }
    else {      
      started = false;
      time = 0;
      stopWatch.innerHTML = "00:00:00";
    }
  })

const mouth$ = fromEvent(pauseBtn, 'click')

const buff$ = mouth$.pipe(
  debounceTime(299)
)
const click$ = mouth$.pipe(
  buffer(buff$),
  map(list => {
    return list.length;
  }),
  filter(event => event === 2),
)
click$.subscribe(event => {
  started = false;
});

fromEvent(resetBtn, 'click')
  .subscribe(event => {
    started = true;
    time = 0;
    stopWatch.innerHTML = "00:00:00";
  });
