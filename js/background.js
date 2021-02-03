const $background = document.querySelector('body');

let today = new Date();
let hour = today.getHours();

if (hour >= 5 && hour <= 6) {
  $background.style.background = `url('https://source.unsplash.com/1600x900/?nature, sunrise')`;
} else if (hour >= 7 && hour <= 11) {
  $background.style.background = `url('https://source.unsplash.com/1600x900/?nature, morning')`;
} else if (hour >= 12 && hour <= 16) {
  $background.style.background = `url('https://source.unsplash.com/1600x900/?nature, afternoon')`;
} else if (hour >= 17 && hour <= 18) {
  $background.style.background = `url('https://source.unsplash.com/1600x900/?nature, sunset')`;
} else if (hour >= 19 && hour <= 20) {
  $background.style.background = `url('https://source.unsplash.com/1600x900/?nature, evening')`;
} else {
  $background.style.background = `url('https://source.unsplash.com/1600x900/?nature, night')`;
}
