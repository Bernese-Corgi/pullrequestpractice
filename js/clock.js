// todo 1. 현재 시간
// todo am pm 버튼
// todo 3. 타이머
// todo 1, 3 토글 버튼

// 현재 시간
const today = new Date();
const date = today.toISOString().slice(0, 10).replaceAll('-', '/');
const day = today.toString().slice(0, 3);
const currentTime = today.toISOString().slice(11, 16);

const $dispDate = document.querySelector('.today-date');
const $dispDay = document.querySelector('.today-day');
const $dispClock = document.querySelector('.today-clock');

// 오늘 날짜
$dispDate.textContent = date;
$dispDay.textContent = day;

// 현재 시간
$dispClock.textContent = currentTime;

// const hour = today.getHours();
// const minute = today.getMinutes();

