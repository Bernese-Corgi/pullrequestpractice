// todo 1. 현재 시간
// todo am pm 버튼
// todo 3. 타이머
// todo 1, 3 토글 버튼

// todo 2. 오늘 날짜
// Date 객체 선언 - today
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
let day = today.getDay();

// Date 객체 선언 - clock
let hour = today.getHours();
let minute = today.getMinutes();
// let second = today.getSeconds();

// 돔 선택 - today
const $todayYear = document.querySelector('.today-year');
const $todayMonth = document.querySelector('.today-month');
const $todayDate = document.querySelector('.today-date');
const $todayDay = document.querySelector('.today-day');

// 돔 선택 - clock
const $clockHour = document.querySelector('.clock-hour');
const $clockMinute = document.querySelector('.clock-minute');

$todayYear.textContent = year;
$todayMonth.textContent = month;
$todayDate.textContent = date;
$todayDay.textContent = day;

switch (day) {
  case 1: $todayDay.textContent = 'Mon';
    break;
  case 2: $todayDay.textContent = 'Tue';
    break;
  case 3: $todayDay.textContent = 'Wed';
    break;
  case 4: $todayDay.textContent = 'Thu';
    break;
  case 5: $todayDay.textContent = 'Fri';
    break;
  case 6: $todayDay.textContent = 'Sat';
    break;
  case 7: $todayDay.textContent = 'Sun';
    break;
  default: $todayDay.textContent = 'Invalid day';
}