function clock() {
var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();
    color = "#" + hours + minutes + seconds;

document.body.style.background = color;


document.querySelectorAll('.clock')[0].innerHTML= "#" + jackass(hours) + jackass(minutes) + jackass(seconds);
  
  function jackass(monsters) {
    if (monsters < 10) {
      monsters = '0' + monsters
    }
    return String(monsters);
  }
}
setInterval(clock, 1000);

