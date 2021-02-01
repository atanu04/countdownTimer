const dayel = document.getElementById('days');
const hourel = document.getElementById('hours');
const minel = document.getElementById('mins');
const secel = document.getElementById('sec');

const newYear = "1 Jan 2022";

function countdown() {

  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totalsec = (newYearDate-currentDate)/1000;
  const days = Math.floor(totalsec/3600/24);
  const hours = Math.floor(totalsec/3600)%24;
  const mins = Math.floor(totalsec/60)%60;
  const secs = Math.floor(totalsec)%60;

  dayel.innerText = days;
  hourel.innerText = hours;
  minel.innerText = mins;
  secel.innerText = secs;

  //console.log(days,hours,mins,secs);
}

countdown();
setInterval(countdown,1000);
