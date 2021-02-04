// todo 1. 현재 시간
// todo am pm 버튼
// todo 3. 타이머
// todo 1, 3 토글 버튼

// todo 2. 오늘 날짜
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
let day = today.getDay();

const $todayYear = document.querySelector('.today-year');
const $todayMonth = document.querySelector('.today-month');
const $todayDate = document.querySelector('.today-date');
const $todayDay = document.querySelector('.today-day');

$todayYear.textContent = year;
$todayMonth.textContent = month;
$todayDate.textContent = date;
$todayDay.textContent = day;


